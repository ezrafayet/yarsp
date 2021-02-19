import React, {useContext} from "react";
import {AppContext, IAppContext} from "../componentsApp/context/AppContext";
import {initialSession} from "../componentsApp/state/initialSession";

export {LandingPage};

const LandingPage = (props: any) => {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const clickLoginHandler = async() => {
    try {
      // Send a request to your server here
      appContext.dispatchSession({
        type: "SET_SESSION", value: {
          app: {
            mode: 'local',
            appStatus: 'loaded',
            userStatus: 'identified',
          }
        }
      });
      props.history.push('/');
    } catch(error) {
      throw error;
    }
  }
  
  return (<>
    
    Landing Page (endpoints set to: {process.env.REACT_APP_GATEWAY_URL})
    
    <br/><br/>
    
    <button onClick={clickLoginHandler}>Login</button>
  
  </>);
  
};

