import React, {useContext} from "react";
import {AppContext, IAppContext} from "../componentsApp/context/AppContext";

export {PrivatePage};


const PrivatePage = (props: any) => {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const clickLogoutHandler = async () => {
    try {
      // Fetch the server to logout here
      appContext.dispatchSession({type: "LOGOUT", value: null});
      return props.history.push('/');
    } catch(error) {
      return appContext.dispatchSession({type: "SET_SESSION_ERROR", value: null});
    }
  }
  
  return(<>
    Yet another private page
    <br/><br/>
    <button onClick={clickLogoutHandler}>
      Logout
    </button>
  </>);
};



