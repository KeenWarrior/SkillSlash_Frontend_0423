import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import mainReducer from "./store/mainReducer";
import { Provider } from "react-redux";
import Homepage from "./Homepage";

function App() {
  const store = createStore(mainReducer);

  return <Provider store={store}>
    <Homepage />
  </Provider>;
}

export default App;
