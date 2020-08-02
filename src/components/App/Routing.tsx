/**
 * All the routes here are generated from routes.tsx
 * NB: Regarding your strategy you will need to edit this file, what will the user see when she/he is logged in and she/he arrives on / ? Some prefer showing their private space right away, some prefer showing the regular landing page with the private navbar
 */

import React, {Fragment, useContext} from "react";
import {Switch, Route} from "react-router-dom";
import {NoRoute404} from "../sharedPages/NoRoute404";
import {IRoute, routes} from "../../routes/routes";
import {IAppContext} from "./IApp";
import {AppContext} from "./contextApp/AppContext";
import {AbstractRoute} from "./AbstractRoute";
import {LandingPage} from "../publicSpace/LandingPage";
import {PrivateSpaceLanding} from "../privateSpace/PrivateSpaceLanding";

export {Routing};

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
      {routes.public.map((item: IRoute, key: number) => (
        <AbstractRoute {...item} key={key} userStatusAuthorised={["unidentified", "unknown"]} />))}

      {/*------------------------------ all the private routes should be generated here, if the current space is private */}
      {routes.private.map((item: IRoute, key: number) => (
        <AbstractRoute {...item} key={key} userStatusAuthorised={["identified"]} />))}

      {/*------------------------------ all the shared routes should be generated here, with no condition */}
      {routes.shared.map((item: IRoute, key: number) => (
        <AbstractRoute {...item} key={key} userStatusAuthorised={["unidentified", "unknown", "identified"]} />))}

      {/*-------- Strategy for 403: grant authorisation per route */}

      {/* 404 Fallthrough ------------------------------------------------- */}
      <Route render={(componentProps) => <NoRoute404 {...componentProps} page="NoRoute404"/>}/>

    </Switch>

  </Fragment>);
};