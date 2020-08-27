import {IAppSession} from "../components/componentsApp/state/IApp";

export {getSession};

const getSession = async(): Promise<IAppSession> => {
  
  // fetch data here
  
  return ({
    app: {
      appStatus: 'loaded',
      userStatus: 'unidentified',
      mode: 'local',
    },
    parameters: {
      language: 'FR',
      theme: 'light',
    },
  });
  
}
