import {IAppSession} from "../components/componentsApp/state/IApp";

export {getSession};

const getSession = async(): Promise<IAppSession> => {
  
  // fetch data here
  
  return({
    appStatus: 'loaded',
    userStatus: 'unidentified',
    mode: 'local',
    language: 'FR',
    theme: 'light',
  });
  
}
