/**
 * This is the module version of the api call
 * @todo choose between the module vs class implementation
 */
export {apiCallGet};
export {apiCallPut};
export {apiCallPost};
export {apiCallDelete};
export {apiCalPostFile};

export type TMethod = 'GET' | 'PUT' | 'POST' | 'DELETE';
export type TCredentials = 'include' | 'omit' | 'same-origin' | undefined;

interface IRequest {
  
  method?: TMethod;
  credentials?: TCredentials;
  headers?: any;
  body?: any;
}

interface IApiCall extends IRequest {
  
  uri: string;
}

const checkIfActionCanBePerformed = (args: {uri: string,}) => {
  try {
  
    if(!args.uri) {
      throw new Error("A uri must be provided");
    }
  
    if(args.uri[0] !== "/") {
      throw new Error("A uri must start with '/'");
    }
  
    const urlPrefix: string | undefined = process.env.REACT_APP_GATEWAY_URL;
  
    if(!urlPrefix) {
      throw new Error("REACT_APP_GATEWAY_URL must be set in .env");
    }
  
    if(urlPrefix[urlPrefix.length - 1] === "/") {
      throw new Error("REACT_APP_GATEWAY_URL must not finish with '/'");
    }
    
  } catch(error) {
    
    throw error;
  }
}

/**
 * This function handles all API calls of the application.
 * If you use axios, unfectch or other this should be the only function to modify.
 */
const apiCallV2 = async(args: IApiCall) => {
  try {
  
    checkIfActionCanBePerformed({uri: args.uri});
    
    const url: string = `${process.env.REACT_APP_GATEWAY_URL}${args.uri}`;
    
    const apiRequest: IRequest = {};
  
    apiRequest.method = args.method;
    apiRequest.body = args.body || {};
    apiRequest.headers = new Headers({...(args.headers || {}), "Content-Type": 'application/json',});
    apiRequest.credentials = args.credentials || 'include';
  
    const fetched: any = await fetch(url, apiRequest);
  
    if(fetched.status < 200 || fetched.status >= 300) {
      return({
        status: "error",
        data: fetched,
      });
    }
    
    return await fetched.json();
    
  } catch(error) {
    
    throw error;
  }
};

const apiCallGet = async(args: { uri: string, headers?: any, credentials?: TCredentials, }) => {
  try {
    return await apiCallV2({
      uri: args.uri,
      method: 'GET',
      credentials: args.credentials || undefined,
      headers: args.headers || {},
    });
  } catch(error) {
    
    throw error;
  }
}

const apiCallPut = async(args: { uri: string, body?: any, headers?: any, credentials?: TCredentials, }) => {
  try {
    return await apiCallV2({
      uri: args.uri,
      method: 'PUT',
      credentials: args.credentials || undefined,
      headers: args.headers || {},
      body: args.body || {},
    });
  } catch(error) {
    
    throw error;
  }
}

const apiCallDelete = async(args: { uri: string, body?: any, headers?: any, credentials?: TCredentials, }) => {
  try {
    return await apiCallV2({
      uri: args.uri,
      method: 'DELETE',
      credentials: args.credentials || undefined,
      headers: args.headers || {},
      body: args.body || {},
    });
  } catch(error) {
    
    throw error;
  }
}

const apiCallPost = async(args: { uri: string, body?: any, headers?: any, credentials?: TCredentials, }) => {
  try {
    return await apiCallV2({
      uri: args.uri,
      method: 'POST',
      credentials: args.credentials || undefined,
      headers: args.headers || {},
      body: args.body || {},
    });
  } catch(error) {
    
    throw error;
  }
}

const apiCalPostFile = async(additionalInfo: any) => {
  try {
  
    // isModuleReady({uri: args.uri});
  
    // todo
    
  } catch(error) {
    
    throw error;
  }
}