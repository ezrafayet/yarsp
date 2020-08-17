import {AbstractApiCallV2, TCredentials, TMethod} from "./AbstractApiCallV2";

export {apiCall};

const apiCall = async(args: { uri: string, method: TMethod | 'POSTFILE', body?: any, headers?: any, credentials?: TCredentials, }) => {
  try {
  
  const apiCall = new AbstractApiCallV2({uri: args.uri,});
  
  const shouldLogRequest: boolean = process.env.REACT_APP_MODE === "local";
  
  shouldLogRequest && console.log("API call: ", args);
  
  let fetched: any = {};
  
  switch(args.method) {
    
    case 'GET':
      fetched = await apiCall.get({headers: args.headers || {}, credentials: args.credentials || undefined});
      break;
    
    case 'PUT':
      fetched = await apiCall.put({headers: args.headers || {}, body: args.body || {}, credentials: args.credentials || undefined});
      break;
    
    case 'POST':
      fetched = await apiCall.post({headers: args.headers || {}, body: args.body || {}, credentials: args.credentials || undefined});
      break;
    
    case 'DELETE':
      fetched = await apiCall.delete({headers: args.headers || {}, body: args.body || {}, credentials: args.credentials || undefined});
      break;
    
    case 'POSTFILE':
      fetched = await apiCall.postFile();
      break;
    
    default:
      throw new Error("No method set");
  }
  
  shouldLogRequest && console.log(`API call to ${args.uri}: `, fetched);
  
  return fetched;
  
  } catch(error) {
    
    throw error;
  }
}
