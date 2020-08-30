import {IAppNavigation} from "../state/IAppNavigation";

export {navigationReducer};

export type TNavigationReducers =
  "SET_PAGE" |
  "SET_SUB_PAGE";

const navigationReducer = (state: IAppNavigation, action: {
  type: TNavigationReducers,
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
  
    default:
      throw new Error(`Type ${action.type} is not defined in navigationReducer`);
  }
  
}