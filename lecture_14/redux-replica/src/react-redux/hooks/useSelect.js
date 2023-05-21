import React from "react";
import { ReduxContext } from "../ReduxProvider";

export default function useSelect() {
  const store = React.useContext(ReduxContext);
  const [state, setState] = React.useState(store.getState());

  React.useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, [store]);
  return state;
}
