import {IAppPanels} from "../state/IAppPanel";
import {initialPanels} from "../state/initialPanels";

export {panelsReducer};

const panelsReducer = (state: IAppPanels, action: {
  type: string,
  value: any,
}) => {
  
  switch(action.type) {
    
    case 'OPEN_WINDOW':
      return ({
        ...state,
        //todo
      });
    
    case 'CLOSE_WINDOW':
      return ({
        ...state,
        // todo
      });
      
    // a lot todo here
  
    case 'CLOSE_ALL':
      return ({
        ...state,
        ...initialPanels,
      });
  
    default:
      throw new Error(`Type ${action.type} is not defined in panelsReducer`);
  }
  
}