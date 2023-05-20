import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function App() {
  const fruits = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  const [fruit, setFruit] = useState("");

  return (
    <div className="App">
      <input
        value={fruit}
        onChange={(event) => {
          setFruit(event.target.value);
        }}
        type="text"
        placeholder="Enter fruit name"
      />
      <button
        onClick={() => {
          if (fruit != "") {
            dispatch({
              type: "ADD_FRUIT",
              payload: {
                id: uuidv4(),
                fruitName: fruit,
              },
            });
            // setFruits((draft) => {
            //   draft.push(fruit);
            // });
            setFruit("");
          }
        }}
      >
        Add
      </button>

      <ul>
        {fruits.map((fruit, index) => {
          return (
            <div key={fruit.id}>
              {fruit.fruitName}
              <button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FRUIT",
                    payload: fruit.id,
                  });
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
