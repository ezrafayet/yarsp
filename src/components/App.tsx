import "./componentsApp/style/App.scss";
import React, {useEffect, useReducer,} from "react";
import {AppProvider, IAppContext} from "./componentsApp/context/AppContext";
import {BrowserRouter as Router} from "react-router-dom";
import {loadSession} from "./componentsApp/fetchers/loadSession";
import {sessionReducer} from "./componentsApp/reducers/sessionReducer";
import {initialSession} from "./componentsApp/state/initialSession";
import {navigationReducer} from "./componentsApp/reducers/navigationReducer";
import {initialNavigation} from "./componentsApp/state/initialNavigation";
import {panelsReducer} from "./componentsApp/reducers/panelsReducer";
import {initialPanels} from "./componentsApp/state/initialPanels";
import {IAppProps} from "./componentsApp/state/IAppProps";
import {escapeKeyListener} from "../utils/dom/listeners/escapeKeyListener";
import {SwitchAppStatus} from "./componentsApp/SwitchAppStatus";

export {App};

const App = (props: IAppProps) => {
  
  /**
   * ----- App-reducers hooks
   */
  const [appSession, dispatchSession] = useReducer(sessionReducer, initialSession);
  const [appNavigation, dispatchNavigation] = useReducer(navigationReducer, initialNavigation);
  const [appPanels, dispatchPanels] = useReducer(panelsReducer, initialPanels);
  
  /**
   * ----- Asks the server about current session
   */
  useEffect(() => {loadSession({dispatchSession})}, []);
  
  /** ----- Add the escape key listener */
  useEffect(escapeKeyListener(() => {dispatchPanels({type: "CLOSE_ALL", value: null})}), []);
  
  /** ----- Defines the context */
  let contextValue: IAppContext = {
    appSession: appSession,
    appNavigation: appNavigation,
    appPanels: appPanels,
    dispatchSession: dispatchSession,
    dispatchNavigation: dispatchNavigation,
    dispatchPanels: dispatchPanels,
  };
  
  /**
   * Render the App
   */
  return (<AppProvider value={contextValue}>
    <Router>
      <SwitchAppStatus appStatus={appSession.app.appStatus}/>
    </Router>
  </AppProvider>);
  
}
