import {initialSession} from "../state/initialSession";
import {IAppSession} from "../state/IAppSession";

export {sessionReducer};

export type TSessionReducers =
  "SET_SESSION" |
  "INITIALIZE_SESSION" |
  "SET_LANGUAGE" |
  "SET_SESSION_ERROR";

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

    case 'INITIALIZE_SESSION':
      return ({
        ...state,
        ...initialSession,
        app: {
          ...state.app,
          ...initialSession.app,
          mode: state.app.mode,
          appStatus: 'loaded',
          userStatus: 'unidentified',
        },
        parameters: {
          ...state.parameters,
          ...initialSession.parameters,
          language: state.parameters.language,
          theme: state.parameters.theme,
        },
      });
  
    case 'SET_LANGUAGE':
      return ({
        ...state,
        parameters: {
          ...state.parameters,
          language: action.value as "FR"|"EN",
        }
      });
  
    case "SET_SESSION_ERROR":
      return state;
  
    default:
      throw new Error(`Type ${action.type} is not defined in sessionReducer`);
  }

}