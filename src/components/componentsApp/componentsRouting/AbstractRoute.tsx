import React, {useContext} from "react";
import {IRoute} from "../../../routes/routes";
import {IAppContext, IAppSession} from "../state/IApp";
import {AppContext} from "../context/AppContext";
import {AppLevelForbidden403} from "../../sharedComponents/pages/AppLevelForbidden403";
import {Route} from "react-router-dom";

export {AbstractRoute};

interface IAbstractRoute extends IRoute {
  key: number;
  userStatusAuthorised: IAppSession["userStatus"][];
}

/**
 * Return a single route
 * @userStatusAuthorised is an array and must contain user statuses that are allowed to access the page.
 */
const AbstractRoute = (props: IAbstractRoute) => {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const Component = props.component;
  
  /**
   * Checks if user is allowed to access the page
   */
  const isRouteAllowedToUser: boolean = props.userStatusAuthorised.includes(appContext.appSession.userStatus);
  
  if(!isRouteAllowedToUser) {
    return (<Route exact={props.exact} path={props.path}
                   render={(componentProps) => <AppLevelForbidden403 page={"Forbidden403"}/>}/>);
  }
  
  return (<Route exact={props.exact} path={props.path}
                 render={(componentProps) => <Component {...componentProps} page={props.page}/>}/>);
}