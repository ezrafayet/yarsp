import React, {useContext} from "react";
import {IRoute} from "../../../routes/routes";
import {AppContext, IAppContext} from "../context/AppContext";
import {AppLevelForbidden403} from "../../sharedComponents/pages/AppLevelForbidden403";
import {Route} from "react-router-dom";
import {IAppSession} from "../state/IAppSession";

export {AbstractRoute};

interface IAbstractRoute extends IRoute {
  key: number;
  userStatusAuthorised: IAppSession["app"]["userStatus"][];
}

/**
 * Return a single route
 * @userStatusAuthorised is an array and must contain user statuses that are allowed to access the page.
 */
const AbstractRoute = (props: IAbstractRoute) => {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  /**
   * Checks if user is allowed to access the page
   */
  const isRouteAllowedToUser: boolean = props.userStatusAuthorised.includes(appContext.appSession.app.userStatus);
  
  if(!isRouteAllowedToUser) {
    return (<Route exact={props.exact} path={props.path}
                   render={(componentProps) => <AppLevelForbidden403 page={"Forbidden403"}/>}/>);
  }
  
  return (<Route exact={props.exact} path={props.path}
                 render={(componentProps) => <props.component {...componentProps} page={props.page}/>}/>);
}