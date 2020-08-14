
export type {IAppState};
export type {IAppProps};
export type {IAppContext};

interface IAppState {
  mode: 'local' | 'production' | 'unknown';
  appStatus: 'loading' | 'error' | 'forbidden' | 'loaded';
  userStatus: 'unidentified' | 'identified' | 'unknown';
  language: 'FR' | 'EN';
  theme: 'light' | 'dark';
  page: string;
  subPage: string;
  session: any;
  window: any;
  menu: any;
}

interface IAppContext {
  appState: IAppState,
  setAppState: Function,
  // setPage: Function,
  // logout: Function,
}

interface IAppProps {

}