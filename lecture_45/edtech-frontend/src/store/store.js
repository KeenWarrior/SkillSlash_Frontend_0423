import { createWrapper } from "next-redux-wrapper";

const rootReducer = require("./rootReducer");

const makeStore = (context) => createStore(rootReducer);

export const wrapper = createWrapper(makeStore);
