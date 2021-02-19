import {initialSession} from "../state/initialSession";
import {IAppSession} from "../state/IAppSession";

export {sessionReducer};

export type TSessionReducers =
  "SET_SESSION" |
  "SET_LANGUAGE" |
  "SET_SESSION_ERROR" |
  "LOGOUT";

export interface ISetSessionAction {
  type: TSessionReducers;
  value: IAppSession | string | null;
}

const sessionReducer = (state: IAppSession, action: ISetSessionAction): IAppSession => {
  
  switch(action.type) {
    
    case 'SET_SESSION':
      return ({
        ...state,
        ...action.value as IAppSession,
      });
    
    case 'SET_LANGUAGE':
      return ({
        ...state,
        parameters: {
          ...state.parameters,
          language: action.value as "FR" | "EN",
        }
      });
  
    case "LOGOUT":
      return {
        ...state,
        app: {
          mode: 'local',
          appStatus: 'loaded',
          userStatus: 'unidentified',
        },
      };
    
    case "SET_SESSION_ERROR":
      return ({
        ...state,
        app: {
          ...state.app,
          appStatus: "error"
        }
      });
    
    default:
      throw new Error(`Type ${action.type} is not defined in sessionReducer`);
  }
  
}