import React, {useContext} from "react";
import {AppContext, IAppContext} from "../componentsApp/context/AppContext";

export {PrivatePage};


const PrivatePage = (props: any) => {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const clickLogoutHandler = async (e: any) => {
    
    e.preventDefault();

    const logout = () => {
      try {
        // Fetch logout
        return "success";
      } catch(error) {
        throw error;
      }
    }
    
    const logoutStatus: any = await logout();
    
    if(logoutStatus === "success") {
      appContext.dispatchSession({type: "INITIALIZE_SESSION", value: null});
      props.history.push('/');
    }
  }
  
  return(<>
    Yet another private page
    <br/><br/>
    <button onClick={(e: any) => clickLogoutHandler(e)}>
      Logout
    </button>
  </>);
};



