
import React, {useContext} from "react";
import {login, TLoginStatus} from "./dependenciesLandingPage/login";
import {IAppContext, IAppState} from "../componentsApp/IApp";
import {AppContext} from "../componentsApp/contextApp/AppContext";

export {LandingPage};

function LandingPage (props: any) {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const clickLoginHandler = async (e: any) => {
    
    e.preventDefault();
    const loginStatus: TLoginStatus = await login("id", "1234");
    switch(loginStatus) {
      case "success":
        // This should not exist in production, we should "just" fetch the session
        appContext.setAppState((prevState: IAppState) => ({
          ...prevState,
          userStatus: "identified",
        }));
        // Go to landing page
        props.history.push('/');
        // Provoke a new session-fetch
        break;
      case "wrongId":
        break;
      case "wrongPassword":
        break;
      default:
    }
  }
  
  return(<>
    Landing Page (mode: {process.env.REACT_APP_MODE})
    <br/><br/>
    <button onClick={clickLoginHandler}>Login</button>
  </>);
};

