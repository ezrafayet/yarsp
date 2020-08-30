/**
 * This is the main file that holds the app's React logic
 * It's purpose here is to deliver content according to the rights of the user and the requested url
 */
import "./componentsApp/style/App.scss";
import React, {useContext, useEffect, useReducer,} from "react";
import {AppContext, AppProvider, IAppContext} from "./componentsApp/context/AppContext";
import {BrowserRouter as Router} from "react-router-dom";
import {getSession} from "./componentsApp/fetchers/getSession";
import {AppLevelLoading} from "./sharedComponents/pages/AppLevelLoading";
import {Routing} from "./componentsApp/Routing";
import {AppLevelForbidden403} from "./sharedComponents/pages/AppLevelForbidden403";
import {AppLevelError} from "./sharedComponents/pages/AppLevelError";
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
import debounceScroll from "../utils/debounceScroll";

export {App};

const App = (props: IAppProps) => {
  
  /**
   * App state
   */
  const [appSession, dispatchSession]: [IAppSession, (action: { type: TSessionReducers, value: any }) => void,] = useReducer(sessionReducer, initialSession);
  const [appNavigation, dispatchNavigation]: [IAppNavigation, (action: { type: TNavigationReducers, value: any }) => void,] = useReducer(navigationReducer, initialNavigation);
  const [appPanels, dispatchPanels]: [IAppPanels, (action: { type: TPanelsReducers, value: any }) => void,] = useReducer(panelsReducer, initialPanels);
  
  /**
   * Asks the server about current session
   */
  useEffect(() => {
    (async() => {
      const session: IAppSession = await getSession();
      dispatchSession({type: "SET_SESSION", value: session});
    })();
  }, []);
  
  /** ----- Add the escape key listener */
  useEffect(() => {
    const onPressKeyFunction = (e: any) => {
      if(e.key === 'Escape') {
        dispatchPanels({type: "CLOSE_ALL", value: null});
      }
    };
    document.addEventListener('keydown', onPressKeyFunction);
    return () => {
      document.removeEventListener("keydown", onPressKeyFunction);
    }
  }, []);
  
  /**
   * Defines the context (will be made available in any other component)
   */
  let contextValue: IAppContext = {
    appSession: appSession,
    appNavigation: appNavigation,
    appPanels: appPanels,
    dispatchSession: dispatchSession,
    dispatchNavigation: dispatchNavigation,
    dispatchPanels: dispatchPanels,
  };
  
  return (<AppProvider value={contextValue}>
    <Router>
      <SwitchAppStatus/>
    </Router>
  </AppProvider>);
  
}

/**
 * Displays the App
 *  - <AppProvider/> provides the context to the App
 *  - <Router/> makes client routing available from anywhere
 * Handles app-level scenarios:
 *  - Server is not responding to the session API call ('error')
 *  - User has been IP blocked or banned ('forbidden')
 *  - Session is set (user can be identified or unidentified) ('success')
 */
function SwitchAppStatus(props: any) {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext || {};
  
  switch(appContext.appSession?.app?.appStatus) {
    
    case 'loading':
      return (<AppLevelLoading/>);
    
    case 'loaded':
      return (<Routing/>);
    
    case 'forbidden':
      return (<AppLevelForbidden403/>);
    
    case 'error':
    
    default:
      return (<AppLevelError/>);
  }
}
