import {IAppPanels} from "../state/IApp";

export {panelsReducer};

const panelsReducer = (state: IAppPanels, action: {
  type: string,
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
      throw new Error(`Type ${action.type} is not defined in panelsReducer`);
  }
  
}