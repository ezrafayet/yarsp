import React, {useContext} from "react";
import {IAppContext, IAppProps} from "../IApp";
import {AppContext} from "../contextApp/AppContext";
import {AppLoading} from "../../sharedComponents/pages/AppLoading";
import {Routing} from "./Routing";
import {Forbidden403} from "../../sharedComponents/pages/Forbidden403";
import {AppError} from "../../sharedComponents/pages/AppError";

export {SwitchAppStatus};

/**
 * Handles app-level scenarios:
 *  - Server is not responding to the session API call ('error')
 *  - User has been IP blocked or banned ('forbidden')
 *  - Session is set (user can be identified or unidentified) ('success')
 */
const SwitchAppStatus = (props: IAppProps) => {
  
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