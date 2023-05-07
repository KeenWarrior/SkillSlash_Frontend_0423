import user from "./userReducer";
import cart from "./cartReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  user,
  cart
});

export default allReducers;
