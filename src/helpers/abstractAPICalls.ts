/**
 * This module normalizes API calls
 * Want to use axios, or unfetch or another library ? It should only be put here so you keep your code simple elsewhere so can switch it easily
 */

export {abstractGetCall};
export {abstractPutCall};
export {abstractPostCall};
export {abstractPostFileCall};

const abstractGetCall: (uri: string, headers: any) => object = async(uri: string, headers: any): Promise<any> => {
  
  const shouldLogRequest: boolean = process.env.MODE === "local";
  
  try {
    
    const url: string = generateFullUrl(uri);
    
    shouldLogRequest && console.log(`Requested a GET fetch to ${url} with headers ${headers}`);
    
    headers['Content-Type'] = 'application/json';
    
    const fetched: any = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers(headers),
    });
  
    /**
     * TODO: handle a better strategy here
     */
    if(fetched.status < 200 || fetched.status >= 300) {
      throw new Error("Error fetching data");
    }
    
    const fetchedJson: any = await fetched.json();
    
    fetchedJson["status"] = fetched.status;
  
    shouldLogRequest && console.log(`Data received from ${url}: ${fetchedJson}`);
    
    return fetchedJson;
    
  } catch (error) {
    
    shouldLogRequest && console.log(error);
    throw new Error('Impossible to get data');
  }
}

const abstractPutCall = async() => {

}

const abstractPostCall = async() => {

}

const abstractPostFileCall = async() => {

}

/**
 * Adds the correct prefix from environment vars to url
 */
function generateFullUrl(uri: string,): string {
  try {
    return `${process.env.REACT_APP_API_URL}${uri}`
  } catch (error) {
    throw error;
  }
}