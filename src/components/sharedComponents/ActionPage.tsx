
import React from "react";

export {ActionPage};

const ActionPage = (props: any) => {
  
  const {type, token} = props.match.params || "";

  return(<>Action of type {type} with token {token}</>);
};

