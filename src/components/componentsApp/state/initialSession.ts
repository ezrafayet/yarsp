import {IAppSession} from "./IAppSession";

export {initialSession};

const initialSession: IAppSession = {
  
  app: {
    
    mode: 'unknown',
    appStatus: 'loading',
    userStatus: 'unknown',
  },
  
  parameters: {
    
    language: 'EN',
    theme: 'light',
  },
}