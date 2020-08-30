import {IAppPanels} from "../state/IAppPanel";
import {initialPanels} from "../state/initialPanels";

export {panelsReducer};

export type TPanelsReducers =
  "OPEN_WINDOW" |
  "CLOSE_WINDOW" |
  "CLOSE_ALL";

const panelsReducer = (state: IAppPanels, action: {
  type: TPanelsReducers,
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