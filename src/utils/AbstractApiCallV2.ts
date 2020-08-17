/**
 * This is the class version of the api call
 * @todo choose between the module vs class implementation
 */
export {AbstractApiCallV2};

type TMethod = 'GET' | 'PUT' | 'POST' | 'DELETE';
type TCredentials = 'include' | 'omit' | 'same-origin' | undefined;

interface IRequest {
  
  method?: TMethod;
  credentials?: TCredentials;
  headers?: any;
  body?: any;
}

class AbstractApiCallV2 {
  
  private readonly uri: string;
  private readonly url: string;
  
  constructor(args: { uri: string }) {
    
    this.uri = args.uri;
    this.integrityCheck();
    this.url = `${process.env.REACT_APP_GATEWAY_URL}${args.uri}`;
  }
  
  private integrityCheck() {
    
    if(!this.uri) {
      throw new Error("A uri must be provided");
    }
    
    if(this.uri[0] !== "/") {
      throw new Error("A uri must start with '/'");
    }
    
    const urlPrefix: string | undefined = process.env.REACT_APP_GATEWAY_URL;
    
    if(!urlPrefix) {
      throw new Error("REACT_APP_GATEWAY_URL must be set in .env");
    }
    
    if(urlPrefix[urlPrefix.length - 1] === "/") {
      throw new Error("REACT_APP_GATEWAY_URL must not finish with '/'");
    }
    
  }
  
  private async fetchApi(args: IRequest) {
    
    const apiRequest: IRequest = {};
    
    apiRequest.method = args.method;
    apiRequest.body = args.body || {};
    apiRequest.headers = new Headers({...(args.headers || {}), "Content-Type": 'application/json',});
    apiRequest.credentials = args.credentials || 'include';
    
    const fetched: any = await fetch(this.url, apiRequest);
    
    if(fetched.status < 200 || fetched.status >= 300) {
      throw new Error("Error fetching data");
    }
    
    return await fetched.json();
  }
  
  public async get(args: { headers?: any, credentials?: TCredentials }) {
    try {
      return await this.fetchApi({
        method: 'GET',
        credentials: args.credentials || undefined,
        headers: args.headers || {},
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  
  public async put(args: { body?: any, headers?: any, credentials?: TCredentials }) {
    try {
      return await this.fetchApi({
        method: 'PUT',
        credentials: args.credentials || undefined,
        headers: args.headers || {},
        body: args.body || {},
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  
  public async post(args: { body?: any, headers?: any, credentials?: TCredentials }) {
    try {
      return await this.fetchApi({
        method: 'POST',
        credentials: args.credentials || undefined,
        headers: args.headers || {},
        body: args.body || {},
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  
  public async delete(args: { body?: any, headers?: any, credentials?: TCredentials }) {
    try {
      return await this.fetchApi({
        method: 'DELETE',
        credentials: args.credentials || undefined,
        headers: args.headers || {},
        body: args.body || {},
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  
  public async postFile() {
    try {
    
    } catch (error) {
      throw new Error(error);
    }
  }
  
}