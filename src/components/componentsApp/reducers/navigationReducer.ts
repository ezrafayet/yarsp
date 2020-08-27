import {IAppNavigation} from "../state/IAppNavigation";

export {navigationReducer};

const navigationReducer = (state: IAppNavigation, action: {
  type: string,
  value: any,
}) => {
  
  switch(action.type) {
    
    case 'SET_PAGE':
      if(action.value !== state.page) {
        return ({
          ...state,
          page: action.value,
        });
      }
      return (state);
    
    case 'SET_SUB_PAGE':
      if(action.value !== state.subPage) {
        return ({
          ...state,
          subPage: action.value,
        });
      }
      return (state);
  
    case 'SET_SCROLL':
      return ({
        ...state,
        scrolled: action.value,
      });
  
    default:
      throw new Error(`Type ${action.type} is not defined in navigationReducer`);
  }
  
}