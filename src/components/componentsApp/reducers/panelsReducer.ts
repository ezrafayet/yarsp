import {IAppPanels} from "../state/IApp";

export {panelsReducer};

const panelsReducer = (state: IAppPanels, action: {
  type: "OPEN_WINDOW" | "CLOSE_WINDOW" | "SET_SESSION" | "DELETE_SESSION",
  value: any,
}) => {
  
  switch(action.type) {
    
    case 'OPEN_WINDOW':
      return ({
        ...state,
      });
    
    case 'CLOSE_WINDOW':
      return ({
        ...state,
      });
    
    default:
      return state;
  }
  
}