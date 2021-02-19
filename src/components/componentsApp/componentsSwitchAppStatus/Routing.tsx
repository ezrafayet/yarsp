import React, {Fragment, useContext} from "react";
import {Switch, Route} from "react-router-dom";
import {AppLevelNoRoute404} from "../../sharedComponents/pages/AppLevelNoRoute404";
import {IRoute, routes} from "../../../routes/routes";
import {AppContext, IAppContext} from "../context/AppContext";
import {AbstractRoute} from "./componentsRouting/AbstractRoute";

export {Routing};

/**
 * Generates routes from routes.ts
 *  - <Switch /> helps handling 404 response, it should exist in any route that has "exact={false}"
 *  - <AbstractRoute /> generates a route and checks if user has rights to access the route (it MUST be checked server-side as well)
 * NB: Regarding your strategy you will need to edit this file, what will the user see when she/he is logged in and she/he arrives on / ? Some prefer showing their private space right away, some prefer showing the regular landing page with the private navbar
 */
const Routing = (props: any) => {

  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const userStatus = appContext.appSession.app.userStatus;
  
  return (<Fragment>

    {/*----------- display the window with conditional rendering */}
    {/*----------- display the navbar */}

    <Switch>

      {/*------------------------------ Display the correct landing page */}
      {
        ["unidentified", "unknown"].includes(userStatus)  && <AbstractRoute key={0}
          {...routes.public.find((item: any) => item.path === "/")!} userStatusAuthorised={["unidentified", "unknown"]} />
      }
      {
        userStatus === "identified" && <AbstractRoute key={0}
          {...routes.private.find((item: any) => item.path === "/")!} userStatusAuthorised={["identified"]} />
      }

      {/*------------------------------ all the public routes should be generated here, if the current space is public */}
      {routes.public.filter((item: IRoute) => item.path !== "/")?.map((item: IRoute, key: number) => (
        <AbstractRoute {...item} key={key} userStatusAuthorised={["unidentified", "unknown"]} />))}

      {/*------------------------------ all the private routes are generated here, if the current space is private */}
      {routes.private.filter((item: IRoute) => item.path !== "/")?.map((item: IRoute, key: number) => (
        <AbstractRoute {...item} key={key} userStatusAuthorised={["identified"]} />))}

      {/*------------------------------ all the shared routes are be generated here, with no condition */}
      {routes.shared.map((item: IRoute, key: number) => (
        <AbstractRoute {...item} key={key} userStatusAuthorised={["unidentified", "unknown", "identified"]} />))}
        
      {/* 404 Fallthrough ------------------------------------------------- */}
      <Route render={(componentProps) => <AppLevelNoRoute404 {...componentProps} page="AppLevelNoRoute404"/>}/>

    </Switch>

  </Fragment>);
};