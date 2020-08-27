import {IAppSession} from "../state/IAppSession";

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
