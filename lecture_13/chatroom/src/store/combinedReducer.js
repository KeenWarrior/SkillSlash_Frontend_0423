import user from "./userReducer";
import messages from "./messagesReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user,
  messages,
});

export default rootReducer;
