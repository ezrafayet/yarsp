import {IAppSession} from "../state/IApp";
import {initialSession} from "../state/initialSession";

export {sessionReducer};

export type {ISetSessionAction}

interface ISetSessionAction {
  type: string;
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
        mode: state.mode,
        appStatus: 'loaded',
        userStatus: 'unidentified',
        language: state.language,
        theme: state.theme,
      });
  
    case 'SET_LANGUAGE':
      return ({
        ...state,
        language: action.value as "FR"|"EN",
      });
  
    default:
      throw new Error(`Type ${action.type} is not defined in sessionReducer`);
  }

}