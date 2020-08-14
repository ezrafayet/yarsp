import {IAppState} from "./IApp";

export {appInitialState};

const appInitialState: IAppState = {
  mode: 'unknown',
  appStatus: 'loading',
  userStatus: 'unknown',
  language: 'EN',
  theme: 'light',
  page: '',
  subPage: '',
  session: {

  },
  window: {

  },
  menu: {

  },
};