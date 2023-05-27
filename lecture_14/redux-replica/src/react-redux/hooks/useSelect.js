import React from "react";
import { ReduxContext } from "../ReduxProvider";

export default function useSelect(selector) {
  const store = React.useContext(ReduxContext);
  const [state, setState] = React.useState(selector(store.getState()));

  React.useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(selector(store.getState()));
    });

    return () => {
      unsubscribe();
    };
  }, [store, selector]);
  return state;
}
