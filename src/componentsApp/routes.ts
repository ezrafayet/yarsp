/**
 * All the routes here are generated in the Routing component
 * public are the routes that don't need authentication to access
 * private are routes that needs authentication to access
 * shared are routes that should always be available to anyone (example: a callback sent by email should point here)
 */

import React from "react";
import {LandingPage} from "../publicSpace/LandingPage"
import {ActionPage} from "../sharedPages/ActionPage";
import {PrivateSpaceLanding} from "../privateSpace/PrivateSpaceLanding";
import {SharedPage} from "../sharedPages/SharedPage";

export {routes};

export interface IRoute {
  path: string;
  page: string;
  component: any;
  exact: boolean;
}

interface IRoutes {
  public: IRoute[];
  private: IRoute[];
  shared: IRoute[];
}

const routes: IRoutes = {
  public: [],
  private: [],
  shared: [],
};

// --------------------------- Public routes
routes.public.push({exact: true, path: '/', page: 'LandingPage', component: LandingPage});

// --------------------------- Private routes
routes.public.push({exact: true, path: '/', page: 'PrivateSpaceLanding', component: PrivateSpaceLanding});
routes.private.push({exact: true, path: '/private', page: 'PrivateSpaceLanding', component: PrivateSpaceLanding});

// --------------------------- Shared routes
routes.shared.push({exact: true, path: '/shared', page: 'SharedPage', component: SharedPage});
routes.shared.push({exact: true, path: '/action/:type/:token', page: 'ActionPage', component: ActionPage});
