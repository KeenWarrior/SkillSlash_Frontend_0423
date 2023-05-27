import logo from "./logo.svg";
import "./App.css";
import useSelect from "./react-redux/hooks/useSelect";
import useDispatch from "./react-redux/hooks/useDispatch";

function App() {
  const counter = useSelect((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default App;
