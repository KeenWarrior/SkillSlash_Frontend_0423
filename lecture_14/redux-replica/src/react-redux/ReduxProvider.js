import React from "react";

const ReduxContext = React.createContext(null);

function ReduxProvider({ children, storeInstance }) {
  const [store, setStore] = React.useState(storeInstance);

  return (
    <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
  );
}

export { ReduxContext, ReduxProvider };
