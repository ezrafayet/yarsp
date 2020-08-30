import React from "react";
import {IAppSession} from "../state/IAppSession";
import {IAppNavigation} from "../state/IAppNavigation";
import {IAppPanels} from "../state/IAppPanel";
import {TSessionReducers} from "../reducers/sessionReducer";
import {TNavigationReducers} from "../reducers/navigationReducer";
import {TPanelsReducers} from "../reducers/panelsReducer";

export {AppProvider, AppContext, AppConsumer};

export type {IAppContext};

interface IAppContext {
  
  appSession: IAppSession,
  appNavigation: IAppNavigation,
  appPanels: IAppPanels,
  dispatchSession: (action: { type: TSessionReducers, value: any }) => void,
  dispatchNavigation: (action: { type: TNavigationReducers, value: any }) => void,
  dispatchPanels: (action: { type: TPanelsReducers, value: any }) => void,
}

const AppContext = React.createContext({});

const AppProvider = AppContext.Provider;

const AppConsumer = AppContext.Consumer;
