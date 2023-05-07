import "./App.css";
import MainRouter from "./MainRouter";
import firebaseApp from "./util/firebase";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    getAuth(firebaseApp).onAuthStateChanged((user) => {
      dispatch({ type: "SET_USER", payload: user });
    });
  }, [firebaseApp]);

  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export { App };
