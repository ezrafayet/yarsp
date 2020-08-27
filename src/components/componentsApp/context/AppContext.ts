import React from "react";
import {IAppSession} from "../state/IAppSession";
import {IAppNavigation} from "../state/IAppNavigation";
import {IAppPanels} from "../state/IAppPanel";

export {AppProvider, AppContext, AppConsumer};

export type {IAppContext};

interface IAppContext {
  
  appSession: IAppSession,
  appNavigation: IAppNavigation,
  appPanels: IAppPanels,
  dispatchSession: (action: { type: string, value: any }) => void,
  dispatchNavigation: (action: { type: string, value: any }) => void,
  dispatchPanels: (action: { type: string, value: any }) => void,
}

const AppContext = React.createContext({});

const AppProvider = AppContext.Provider;

const AppConsumer = AppContext.Consumer;
