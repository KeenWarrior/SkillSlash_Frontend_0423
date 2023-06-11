import "./App.css";
import useLocalStorage from "use-local-storage";
import React from "react";
import HomePage from "./pages/HomePage";

const UserContext = React.createContext();

function App() {
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <HomePage />
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext };
