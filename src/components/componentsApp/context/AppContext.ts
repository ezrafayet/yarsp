import React from "react";

export {AppProvider, AppContext, AppConsumer};

const AppContext = React.createContext({});

const AppProvider = AppContext.Provider;

const AppConsumer = AppContext.Consumer;
