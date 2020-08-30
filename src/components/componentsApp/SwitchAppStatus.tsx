import React from "react";
import {AppLevelLoading} from "../sharedComponents/pages/AppLevelLoading";
import {Routing} from "./componentsSwitchAppStatus/Routing";
import {AppLevelForbidden403} from "../sharedComponents/pages/AppLevelForbidden403";
import {AppLevelError} from "../sharedComponents/pages/AppLevelError";
import {TAppStatuses} from "./state/IAppSession";

export {SwitchAppStatus};

/**
 * Displays the App
 *  - <AppProvider/> provides the context to the App
 *  - <Router/> makes client routing available from anywhere
 * Handles app-level scenarios:
 *  - Server is not responding to the session API call ('error')
 *  - User has been IP blocked or banned ('forbidden')
 *  - Session is set (user can be identified or unidentified) ('success')
 */
const SwitchAppStatus = (props: {appStatus: TAppStatuses}) => {
  
  switch(props.appStatus) {
    
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
