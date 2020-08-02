import {IAppState} from "../../IApp";

export {initialState};

const initialState: IAppState = {
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