import React, {Fragment, useContext} from "react";
import {Switch, Route} from "react-router-dom";
import {AppLevelNoRoute404} from "../sharedComponents/pages/AppLevelNoRoute404";
import {IRoute, routes} from "../../routes/routes";
import {IAppContext} from "./state/IApp";
import {AppContext} from "./context/AppContext";
import {AbstractRoute} from "./componentsRouting/AbstractRoute";
import {LandingPage} from "../publicSpacePages/LandingPage";
import {PrivateSpaceLanding} from "../privateSpacePages/PrivateSpaceLanding";

export {Routing};

/**
 * Generates routes from routes.ts
 *  - <Switch /> helps handling 404 response, it should exist in any route that has "exact={false}"
 *  - <AbstractRoute /> generates a route and checks if user has rights to access the route (it MUST be checked server-side as well)
 * NB: Regarding your strategy you will need to edit this file, what will the user see when she/he is logged in and she/he arrives on / ? Some prefer showing their private space right away, some prefer showing the regular landing page with the private navbar
 */
const Routing = (props: any) => {

  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const userStatus = appContext.appState.userStatus || "unidentified";

  return (<Fragment>

    {/*-------- display navbar*/}
    {/*----------- display window with conditionnal rendering*/}
    {/*----------- display menu with conditionnal rendering*/}

    <Switch>

      {/*------------------------------ Display the correct landing page */}
      {
        userStatus === "unidentified" && <AbstractRoute exact={true} path={"/"} page={"LandingPage"}
                                                        userStatusAuthorised={["unidentified", "unknown"]} component={LandingPage} key={0} />
      }
      {
        userStatus === "identified" && <AbstractRoute exact={true} path={"/"} page={"PrivateSpaceLanding"}
                                                        userStatusAuthorised={["identified"]} component={PrivateSpaceLanding} key={0} />
      }

      {/*------------------------------ all the public routes should be generated here, if the current space is public */}
      {/*----- Remove the filter if the path "/" defined above does not suite you */}
      {routes.public.filter((item: IRoute) => item.path !== "/")?.map((item: IRoute, key: number) => (
        <AbstractRoute {...item} key={key} userStatusAuthorised={["unidentified", "unknown"]} />))}

      {/*------------------------------ all the private routes should be generated here, if the current space is private */}
      {/*----- Remove the filter if the path "/" defined above does not suite you */}
      {routes.private.filter((item: IRoute) => item.path !== "/")?.map((item: IRoute, key: number) => (
        <AbstractRoute {...item} key={key} userStatusAuthorised={["identified"]} />))}

      {/*------------------------------ all the shared routes should be generated here, with no condition */}
      {routes.shared.map((item: IRoute, key: number) => (
        <AbstractRoute {...item} key={key} userStatusAuthorised={["unidentified", "unknown", "identified"]} />))}

      {/*-------- Strategy for 403: grant authorisation per route */}

      {/* 404 Fallthrough ------------------------------------------------- */}
      <Route render={(componentProps) => <AppLevelNoRoute404 {...componentProps} page="AppLevelNoRoute404"/>}/>

    </Switch>

  </Fragment>);
};