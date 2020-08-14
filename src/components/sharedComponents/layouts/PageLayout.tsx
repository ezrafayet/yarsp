
import React from "react";

export {PageLayout};

interface IPageLayout {
  pageStatus: 'loading' | 'error' | 'forbidden' | 'loaded',
  children: any,
}

/**
 * Handles page status
 * Loading can be handled deeper for a better user experience
 */
const PageLayout = (props: IPageLayout) => {
  
  return(<div className={"page-layout"}>
    <SwitchPageStatus {...props} />
  </div>);
};

function SwitchPageStatus(props: IPageLayout) {
  
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