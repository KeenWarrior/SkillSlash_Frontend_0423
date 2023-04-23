import React from "react";

function App() {
  let [count, setCount] = React.useState(0);

  let increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={increaseCount}> +1 </button>
    </div>
  );
}

export default App;
