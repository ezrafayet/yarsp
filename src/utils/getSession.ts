/**
 * This function sets the session of the App
 * It should fetch to some /session/whoami endpoint for authentification
 */
import {IAppState} from "../components/componentsApp/state/IApp";

export {getSession};

const getSession = async(setAppState: Function) => {

  setTimeout(()=>{
    setAppState((prevState: IAppState) => ({
      ...prevState,
      appStatus: 'loaded',
      userStatus: 'unidentified',
    }));
  }, 2000);

}

