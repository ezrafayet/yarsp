/**
 * All the routes here are generated in the Routing component
 * public are the routes that don't need authentication to access
 * private are routes that needs authentication to access
 * shared are routes that should always be available to anyone (example: a callback sent by email should point here)
 * Public and private routes MUST have a route pointing to the path "/", but right now the landing pages are not taken from here, should be refactored
 */

import {LandingPage} from "../components/publicSpace/LandingPage"
import {ActionPage} from "../components/sharedPages/ActionPage";
import {PrivateSpaceLanding} from "../components/privateSpace/PrivateSpaceLanding";
import {SharedPage} from "../components/sharedPages/SharedPage";
import {FunctionComponent} from "react";
import {PrivatePage} from "../components/privateSpace/PrivatePage";

export {routes};

export interface IRoute {
  path: string;
  page: string;
  component: FunctionComponent<any>;
  exact: boolean;
}

interface IRoutes {
  public: IRoute[];
  shared: IRoute[];
  private: IRoute[];
}

const routes: IRoutes = {
  public: [],
  shared: [],
  private: [],
};

// --------------------------- Public routes
routes.public.push({exact: true, path: '/', page: 'LandingPage', component: LandingPage});

// --------------------------- Private routes
routes.public.push({exact: true, path: '/', page: 'PrivateSpaceLanding', component: PrivateSpaceLanding});
routes.private.push({exact: true, path: '/private', page: 'PrivateSpaceLanding', component: PrivatePage});

// --------------------------- Shared routes
routes.shared.push({exact: true, path: '/shared', page: 'SharedPage', component: SharedPage});
routes.shared.push({exact: true, path: '/action/:type/:token', page: 'ActionPage', component: ActionPage});
