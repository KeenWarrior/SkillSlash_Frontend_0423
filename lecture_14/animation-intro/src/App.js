import logo from "./logo.svg";
import "./App.css";

import { animated, useSpring } from "@react-spring/web";

function App() {
  const spring = useSpring({
    from: { x: 0, y: 0, rot: 0},
    to: { x: 200, y: 200, rot: 90 },
    delay: 1000,
  });

  return (
    <div className="App">
      <animated.div
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...spring,
        }}
      />
    </div>
  );
}

export default App;
