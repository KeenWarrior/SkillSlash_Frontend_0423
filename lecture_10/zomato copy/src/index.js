import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

import allReducers from "./store/mainReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

let store = createStore(allReducers);

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
