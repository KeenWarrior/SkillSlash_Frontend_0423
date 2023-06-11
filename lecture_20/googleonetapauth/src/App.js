import "./App.css";
import useLocalStorage from "use-local-storage";
import React from "react";
import HomePage from "./pages/HomePage";
import jwtDecode from "jwt-decode";

const UserContext = React.createContext();
const TokenContext = React.createContext();

function App() {
  const [token, setToken] = useLocalStorage("token", null);
  const [user, setUser] = React.useState(null);

  const updateToken = (updatedToken) => {
    setToken(updatedToken);
    if (!updatedToken) {
      setUser(null);
    } else {
      const decoded = jwtDecode(updatedToken);
      setUser(decoded);
    }
  };

  return (
    <div className="App">
      <TokenContext.Provider value={{ token, updateToken }}>
        <UserContext.Provider value={{ user }}>
          <HomePage />
        </UserContext.Provider>
      </TokenContext.Provider>
    </div>
  );
}

export { App, UserContext, TokenContext };
