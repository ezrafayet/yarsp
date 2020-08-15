/**
 * This is the main file that holds the app's React logic
 * It's purpose here is to deliver content according to the rights of the user and the requested url
 */
import React, {useContext, useEffect, useState} from "react";
import "./componentsApp/style/App.scss";
import {IAppContext, IAppProps, IAppState} from "./componentsApp/state/IApp";
import {appInitialState} from "./componentsApp/state/appInitialState";
import {AppContext, AppProvider} from "./componentsApp/context/AppContext";
import {BrowserRouter as Router} from "react-router-dom";
import {getSession} from "../utils/getSession";
import {AppLevelLoading} from "./sharedComponents/pages/AppLevelLoading";
import {Routing} from "./componentsApp/Routing";
import {AppLevelForbidden403} from "./sharedComponents/pages/AppLevelForbidden403";
import {AppLevelError} from "./sharedComponents/pages/AppLevelError";


export {App};

const App = (props: IAppProps) => {
  
  const [appState, setAppState]: [IAppState, Function] = useState(appInitialState);
  
  /**
   * Asks the server about current session
   */
  useEffect(() => {
    (async() => {
      await getSession(setAppState);
    })();
  }, []);
  
  /**
   * Defines the context (will be made available in any other component)
   */
  let contextValue: IAppContext = {
    appState: appState,
    setAppState: setAppState,
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
  
  switch(appContext.appState.appStatus) {
    
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