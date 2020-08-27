
import React, {useContext} from "react";
import {ILoginAnswer, login} from "../../utils/login";
import {AppContext, IAppContext} from "../componentsApp/context/AppContext";

export {LandingPage};

const LandingPage = (props: any) => {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const clickLoginHandler = async (e: any) => {
    
    e.preventDefault();
    
    const loginAnswer: ILoginAnswer = await login("id", "1234");
    
    switch(loginAnswer.status) {
      
      case "success":
        appContext.dispatchSession({type: "SET_SESSION", value: loginAnswer.data?.session});
        props.history.push('/');
        break;
        
      case "wrongId":
        break;
        
      case "wrongPassword":
        break;
        
      default:
    }
  }
  
  return(<>
    
    Landing Page (endpoints set to: {process.env.REACT_APP_GATEWAY_URL})
    
    <br/><br/>
    
    <button onClick={clickLoginHandler}>Login</button>
    
  </>);
  
};

