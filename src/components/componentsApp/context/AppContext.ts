import React from "react";
import {IAppNavigation, IAppPanels, IAppSession} from "../state/IApp";

export {AppProvider, AppContext, AppConsumer};

export type {IAppContext};

interface IAppContext {
  
  appSession: IAppSession,
  appNavigation: IAppNavigation,
  appPanels: IAppPanels,
  dispatchSession: Function,
  dispatchNavigation: Function,
  dispatchPanels: Function,
}

const AppContext = React.createContext({});

const AppProvider = AppContext.Provider;

const AppConsumer = AppContext.Consumer;
