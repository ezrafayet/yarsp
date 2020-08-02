/**
 * This is the main file that holds the app's React logic
 * It's purpose here is to deliver content according to the rights of the user and the requested url
 */
import React, {useEffect, useState} from "react";
import {IAppContext, IAppProps, IAppState} from "./componentsApp/IApp";
import {initialState} from "./componentsApp/initialStateApp/initialState";
import {AppProvider} from "./componentsApp/contextApp/AppContext";
import {BrowserRouter as Router} from "react-router-dom";
import {getSession} from "./componentsApp/effectsApp/getSession";
import {SwitchAppStatus} from "./componentsApp/componentsApp/SwitchAppStatus";


export {App};

const App = (props: IAppProps) => {
  
  const [appState, setAppState]: [IAppState, Function] = useState(initialState);
  
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
  
  /**
   * Displays the App
   *  - <AppProvider/> provides the context to the App
   *  - <Router/> makes client routing available from anywhere
   */
  return (<AppProvider value={contextValue}>
    <Router>
      <SwitchAppStatus {...props} />
    </Router>
  </AppProvider>);
  
}
