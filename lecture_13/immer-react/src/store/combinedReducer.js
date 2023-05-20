import fruits from "./fruitsReducer";

import { combineReducers } from "redux";

const combinedReducer = combineReducers({ fruits });

export default combinedReducer;
