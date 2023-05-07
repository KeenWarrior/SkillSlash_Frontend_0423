import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Homepage() {
  const counter = useSelector((state) => state.counterReducer);
  const counter5 = useSelector((state) => state.counter5Reducer);

  const [custom, setCustom] = useState("0");

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Homepage</h1>
      <p>Counter: {counter}</p>
      <p>Counter: {counter5}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <input
        value={custom}
        onChange={(event) => {
          setCustom(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "CINCREMENT", payload: parseInt(custom) });
        }}
      >
        Custom Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
