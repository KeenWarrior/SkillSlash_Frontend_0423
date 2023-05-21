import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import useIsOnline from "./hooks/useIsOnline";

function App() {
  const isOnline = useIsOnline();

  return (
    <div className="App">
      <h1>Network Status</h1>
      <p>
        You are <strong>{isOnline ? "online" : "offline"}</strong>
      </p>
    </div>
  );
}

export default App;
