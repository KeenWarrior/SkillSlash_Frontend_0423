import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import useIsOnline from "./hooks/useIsOnline";
import useLocalStorage from "./hooks/useLocalStorage";
import CustomComp from "./CustomComp";

function App() {
  const isOnline = useIsOnline();

  const [count, setCount] = useLocalStorage("count", { value: 0 });

  return (
    <div className="App">
      <CustomComp />
      <h1>Network Status</h1>
      <p>
        You are <strong>{isOnline ? "online" : "offline"}</strong>
      </p>

      <h1>Counter</h1>
      <p> {count.value} </p>
      <button onClick={() => setCount({ value: count.value + 1 })}>+1</button>
    </div>
  );
}

export default App;
