/**
 * This is the main file that holds the app's React logic
 * It's purpose here is to deliver content according to the rights of the user and the requested url
 */
import React, {useContext, useEffect, useState} from "react";
import {IAppContext, IAppProps, IAppState} from "./IApp";
import {initialState} from "./componentsApp/initialStateApp/initialState";
import {AppContext, AppProvider} from "./componentsApp/contextApp/AppContext";
import {BrowserRouter as Router} from "react-router-dom";
import {getSession} from "./componentsApp/effectsApp/getSession";
import {AppLoading} from "./sharedPages/AppLoading";
import {Routing} from "./componentsApp/Routing";
import {Forbidden403} from "./sharedPages/Forbidden403";
import {AppError} from "./sharedPages/AppError";

export {App};

const App = (props: IAppProps) => {

  const [appState, setAppState]: [IAppState, Function] = useState(initialState);

  useEffect(() => {
    (async()=>{
      await getSession(setAppState);
    })();
  }, []);

  let contextValue: IAppContext = {
    appState: appState,
  };

  return (<AppProvider value={contextValue}>
    <Router>
      <SwitchAppStatus {...props} />
    </Router>
  </AppProvider>);

}

function SwitchAppStatus (props: IAppProps) {

  const appContext: IAppContext = useContext(AppContext) as IAppContext;

  switch(appContext.appState.appStatus) {
    case 'loading':
      return (<AppLoading />);
    case 'loaded':
      return (<Routing />);
    case 'forbidden':
      return (<Forbidden403 />);
    case 'error':
    default:
      return(<AppError />);
  }
}