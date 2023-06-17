import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BaseRoutes } from "./BaseRoutes";
import { createStore } from "redux";
import rootReducer from "./store/rootReducer";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BaseRoutes />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
