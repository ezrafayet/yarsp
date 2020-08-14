
import React from "react";

export {WindowLayout};

interface IWindowLayout {
  pageStatus: 'loading' | 'error' | 'forbidden' | 'loaded',
  children: any,
}

/**
 * Handles window status
 * Loading can be handled deeper for a better user experience
 */
const WindowLayout = (props: IWindowLayout) => {
  
  return(<div className={"window-layout"}>
    <SwitchWindowStatus {...props} />
  </div>);
};

function SwitchWindowStatus(props: IWindowLayout) {
  
  switch(props.pageStatus) {
    
    case 'loading':
      return(<>Loading...</>);
      
    case 'forbidden':
      return(<>Forbidden</>);
      
    case 'loaded':
      return props.children;
      
    default:
    case 'error':
      return(<>Error</>);
  }
}