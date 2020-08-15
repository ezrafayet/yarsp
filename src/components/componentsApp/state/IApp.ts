export type {IAppProps, IAppContext, IAppSession, IAppNavigation, IAppPanels,};

interface IAppSession {
  
  mode: 'local' | 'production' | 'unknown';
  appStatus: 'loading' | 'error' | 'forbidden' | 'loaded';
  userStatus: 'unidentified' | 'identified' | 'unknown';
  language: 'FR' | 'EN';
  theme: 'light' | 'dark';
}

interface IAppNavigation {
  
  page: string;
  subPage: string;
}

interface IAppPanels {
  
  window: any;
  menu: any;
}

interface IAppContext {
  
  appSession: IAppSession,
  appNavigation: IAppNavigation,
  appPanels: IAppPanels,
  dispatchSession: Function,
  dispatchNavigation: Function,
  dispatchPanels: Function,
}

interface IAppProps {
}