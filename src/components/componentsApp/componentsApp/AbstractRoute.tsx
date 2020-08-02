import React, {useContext} from "react";
import {IRoute} from "../../../routes/routes";
import {IAppContext, IAppState} from "../IApp";
import {AppContext} from "../contextApp/AppContext";
import {Forbidden403} from "../../sharedComponents/pages/Forbidden403";
import {Route} from "react-router-dom";

export {AbstractRoute};

interface IAbstractRoute extends IRoute {
  key: number;
  userStatusAuthorised: IAppState["userStatus"][];
}

/**
 * Return a single route
 * @userStatusAuthorised is an array and must contain user statuses that are allowed to access the page.
 * @todo: add an "all" to allow all users rather than enumerate all statuses
 */
const AbstractRoute = (props: IAbstractRoute) => {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const Component = props.component;
  
  /**
   * Checks if user is allowed to access the page
   */
  const isRouteAllowedToUser: boolean = props.userStatusAuthorised.includes(appContext.appState.userStatus);
  
  if(!isRouteAllowedToUser) {
    return (<Route exact={props.exact} path={props.path}
                   render={(componentProps) => <Forbidden403 page={"Forbidden403"}/>}/>);
  }
  
  return (<Route exact={props.exact} path={props.path}
                 render={(componentProps) => <Component {...componentProps} page={props.page}/>}/>);
}