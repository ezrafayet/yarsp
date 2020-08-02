
import React, {useContext} from "react";
import {logout, TLogoutStatus} from "./sharedDependencies/logout";
import {IAppContext, IAppState} from "../IApp";
import {AppContext} from "../componentsApp/contextApp/AppContext";

export {PrivatePage};


const PrivatePage = (props: any) => {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const handleLogoutClick = async (e: any) => {
    e.preventDefault();
    const logoutStatus: TLogoutStatus = await logout();
    if(logoutStatus === "success") {
      // This should not exist in production, we should "just" fetch the session
      appContext.setAppState((prevState: IAppState) => ({
        ...prevState,
        userStatus: "unidentified",
      }));
      // Go to landing page
      props.history.push('/');
      // Should provoke a new session-fetch

    }
  }
  
  return(<>
    Yet another private page
    <br/><br/>
    <button onClick={async (e: any) => {
      await handleLogoutClick(e);
    }}>
      Logout
    </button>
  </>);
};



