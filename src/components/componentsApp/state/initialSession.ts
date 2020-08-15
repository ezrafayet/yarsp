import {IAppSession} from "./IApp";

export {initialSession};

const initialSession: IAppSession = {
  mode: 'unknown',
  appStatus: 'loading',
  userStatus: 'unknown',
  language: 'EN',
  theme: 'light',
}