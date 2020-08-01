import React, {useContext} from "react";
import {IRoute} from "./routes";
import {IAppContext, IAppState} from "../IApp";
import {AppContext} from "./context/AppContext";
import {Forbidden403} from "../sharedPages/Forbidden403";
import {Route} from "react-router-dom";


export {AbstractRoute};

interface IAbstractRoute extends IRoute {
  rank: number;
  userStatusAuthorised: IAppState["userStatus"][];
}

const AbstractRoute = (props: IAbstractRoute) => {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const isRouteAllowedToUser: boolean = props.userStatusAuthorised.includes(appContext.appState.userStatus);
  
  if(!isRouteAllowedToUser) {
    return (<Forbidden403/>);
  }
  
  return (
    <Route exact={props.exact}
           path={props.path}
           render={(componentProps) =>
             (isRouteAllowedToUser ? <props.component {...componentProps} page={props.page}/> :
               <Forbidden403 page={"Forbidden403"}/>)}
    />);
}