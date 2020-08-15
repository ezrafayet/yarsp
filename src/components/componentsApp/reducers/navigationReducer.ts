import {IAppNavigation} from "../state/IApp";

export {navigationReducer};

const navigationReducer = (state: IAppNavigation, action: {
  type: "SET_PAGE" | "SET_SUB_PAGE",
  value: any,
}) => {
  
  switch(action.type) {
    
    case 'SET_PAGE':
      return ({
        ...state,
        page: action.value,
      });
    
    case 'SET_SUB_PAGE':
      return ({
        ...state,
        page: action.value,
      });
      
    default:
      return state;
  }
  
}