export {devLog};

const devLog = (...input: any) => {
  
  if(process.env.REACT_APP_MODE !== "production") {
    console.log(...input);
  }
}