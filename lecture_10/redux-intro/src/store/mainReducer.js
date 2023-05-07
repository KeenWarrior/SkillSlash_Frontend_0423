import { counterReducer, counter5Reducer } from "./counterReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
  counter5Reducer,
});

export default allReducers;
