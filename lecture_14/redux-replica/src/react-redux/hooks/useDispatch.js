import React from "react";
import { ReduxContext } from "../ReduxProvider";

export default function useDispatch() {
    const store = React.useContext(ReduxContext);
    const dispatch = function (action) {
        store.dispatch(action);
    }
    return dispatch;
}