
/**
 * This is the main file that holds the app's React logic
 * It's purpose here is to deliver content according to the rights of the user and the requested url
 */
import "./App.scss";
import React, {useContext, useEffect, useReducer,} from "react";
import {IAppContext, IAppProps, IAppSession} from "./componentsApp/state/IApp";
import {AppContext, AppProvider} from "./componentsApp/context/AppContext";
import {BrowserRouter as Router} from "react-router-dom";
import {getSession} from "../utils/getSession";
import {AppLevelLoading} from "./sharedComponents/pages/AppLevelLoading";
import {Routing} from "./componentsApp/Routing";
import {AppLevelForbidden403} from "./sharedComponents/pages/AppLevelForbidden403";
import {AppLevelError} from "./sharedComponents/pages/AppLevelError";
import {sessionReducer} from "./componentsApp/reducers/sessionReducer";
import {initialSession} from "./componentsApp/state/initialSession";
import {navigationReducer} from "./componentsApp/reducers/navigationReducer";
import {initialNavigation} from "./componentsApp/state/initialNavigation";
import {panelsReducer} from "./componentsApp/reducers/panelsReducer";
import {initialPanels} from "./componentsApp/state/initialPanels";


export {App};

const App = (props: IAppProps) => {
  
  /**
   * App state
   */
  const [appSession, dispatchSession] = useReducer(sessionReducer, initialSession);
  const [appNavigation, dispatchNavigation] = useReducer(navigationReducer, initialNavigation);
  const [appPanels, dispatchPanels] = useReducer(panelsReducer, initialPanels);
  
  /**
   * Asks the server about current session
   */
  useEffect(() => {
    (async() => {
      const session: IAppSession = await getSession();
      dispatchSession({type: "SET_SESSION", value: session});
    })();
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
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  switch(appContext.appSession.appStatus) {
    
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
