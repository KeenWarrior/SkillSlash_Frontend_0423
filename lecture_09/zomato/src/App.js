import logo from "./logo.svg";
import "./App.css";
import MainRouter from "./MainRouter";
import firebaseApp from "./util/firebase";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

let UserContext = createContext();

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    getAuth(firebaseApp).onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
  }, [firebaseApp]);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <MainRouter />
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext };
