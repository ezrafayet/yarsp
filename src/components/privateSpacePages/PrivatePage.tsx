
import React, {useContext} from "react";
import {logout, TLogoutStatus} from "../../utils/logout";
import {IAppContext} from "../componentsApp/state/IApp";
import {AppContext} from "../componentsApp/context/AppContext";

export {PrivatePage};


const PrivatePage = (props: any) => {
  
  const appContext: IAppContext = useContext(AppContext) as IAppContext;
  
  const clickLogoutHandler = async (e: any) => {
    
    e.preventDefault();
    
    const logoutStatus: TLogoutStatus = await logout();
    
    if(logoutStatus === "success") {
      appContext.dispatchSession({type: "INITIALIZE_SESSION", value: null});
      props.history.push('/');
    }
  }
  
  return(<>
    Yet another private page
    <br/><br/>
    <button onClick={async (e: any) => {
      await clickLogoutHandler(e);
    }}>
      Logout
    </button>
  </>);
};



