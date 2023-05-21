import logo from "./logo.svg";
import "./App.css";
import useSelect from "./react-redux/hooks/useSelect";
import useDispatch from "./react-redux/hooks/useDispatch";

function App() {
  const state = useSelect();
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default App;
