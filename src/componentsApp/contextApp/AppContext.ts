
import React from "react";

export {AppProvider};
export {AppContext};
export {AppConsumer};

const AppContext = React.createContext({});

const AppProvider = AppContext.Provider;

const AppConsumer = AppContext.Consumer;
