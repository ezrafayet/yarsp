import {IAppSession} from "../state/IAppSession";

export {loadSession};

const loadSession = async(args: { dispatchSession: Function }): Promise<IAppSession> => {
  try {
    
    // fetch data here
    
    const session: IAppSession = {
      app: {
        appStatus: 'loaded',
        userStatus: 'unidentified',
        mode: 'local',
      },
      parameters: {
        language: 'FR',
        theme: 'light',
      },
    }
    
    return args.dispatchSession({type: "SET_SESSION", value: session});
    
  } catch(error) {
    
    return args.dispatchSession({type: "SET_SESSION_ERROR", value: null});
  }
  
}
