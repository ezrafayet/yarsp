import "./componentsApp/style/App.scss";
import React, {useEffect, useReducer,} from "react";
import {AppProvider, IAppContext} from "./componentsApp/context/AppContext";
import {BrowserRouter as Router} from "react-router-dom";
import {getSession} from "./componentsApp/fetchers/getSession";
import {sessionReducer, TSessionReducers} from "./componentsApp/reducers/sessionReducer";
import {initialSession} from "./componentsApp/state/initialSession";
import {navigationReducer, TNavigationReducers} from "./componentsApp/reducers/navigationReducer";
import {initialNavigation} from "./componentsApp/state/initialNavigation";
import {panelsReducer, TPanelsReducers} from "./componentsApp/reducers/panelsReducer";
import {initialPanels} from "./componentsApp/state/initialPanels";
import {IAppProps} from "./componentsApp/state/IAppProps";
import {IAppSession} from "./componentsApp/state/IAppSession";
import {IAppNavigation} from "./componentsApp/state/IAppNavigation";
import {IAppPanels} from "./componentsApp/state/IAppPanel";
import {escapeKeyListener} from "../listeners/escapeKeyListener";
import {SwitchAppStatus} from "./componentsApp/SwitchAppStatus";

export {App};

const App = (props: IAppProps) => {
  
  /**
   * ----- App-state related hooks
   */
  const [appSession, dispatchSession]: [IAppSession, (action: { type: TSessionReducers, value: any }) => void,] = useReducer(sessionReducer, initialSession);
  const [appNavigation, dispatchNavigation]: [IAppNavigation, (action: { type: TNavigationReducers, value: any }) => void,] = useReducer(navigationReducer, initialNavigation);
  const [appPanels, dispatchPanels]: [IAppPanels, (action: { type: TPanelsReducers, value: any }) => void,] = useReducer(panelsReducer, initialPanels);
  
  /**
   * ----- Asks the server about current session
   */
  useEffect(() => {
    (async() => {
      // This is a place-holder for the demo, fetch real session-related-data here.
      const session: IAppSession = await getSession();
      dispatchSession({type: "SET_SESSION", value: session});
    })();
  }, []);
  
  /** ----- Add the escape key listener */
  useEffect(escapeKeyListener(() => {dispatchPanels({type: "CLOSE_ALL", value: null});}), []);
  
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
