import counter from "./counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
