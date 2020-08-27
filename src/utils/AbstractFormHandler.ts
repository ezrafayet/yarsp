export {AbstractFormHandler};

/**
 * This form handler is meant to work with useReducer only
 */
class AbstractFormHandler {
  
  private readonly uri: string;
  private readonly initialState: any;
  
  constructor(args: { uri: string, initialState: any, }) {
    
    this.uri = args.uri;
    this.initialState = args.initialState;
  }
  
  get getInitialState() {
    return this.initialState;
  }
  
  get getCurentState() {
    // Does not hold the form current state
    return;
  }
  
  reducer(state: any, action: { key: string, value: any, }) {
    
    const splitKey = action.key.split('.');
    
    const getNestedValuesByPath = (obj: any, path: string[]) => {
      let nestedValues = obj;
      for(let p of path) {
        if(!nestedValues[p]) {
          return null;
        }
        nestedValues = nestedValues[p];
      }
      return nestedValues;
    }
    
    // Initialize the deepest value
    let recursiveObjectBackward = {
      [splitKey[splitKey.length - 1]]: action.value,
    };
    
    // Add recursively values from the end
    for(let i = splitKey.length - 2; i >= 0; i--) {
      const nestedValues = getNestedValuesByPath(state, splitKey.slice(0, i));
      recursiveObjectBackward = {
        ...nestedValues,
        [splitKey[i]]: recursiveObjectBackward,
      }
    }
    
    return ({
      ...state,
      ...recursiveObjectBackward,
    });
    
  }
  
  update(e: { target: { name: any, type: any, value: any } }, updateForm: Function,) {
    switch(e.target.type) {
      case 'text':
      case 'textarea':
      case 'number':
      case 'date':
        console.log(e);
        updateForm({key: e.target.name, value: e.target.value});
        break;
      case 'checkbox':
        console.log(e);
        // Check value
        break;
      case 'radio':
        console.log(e);
        break;
      default:
        throw new Error("Unknown type");
    }
  }
  
  reset(updateForm: Function,) {
    // todo
  }
  
  send() {
    // todo
  }
  
  getDefault(updateForm: Function,) {
    // todo
  }
  
}