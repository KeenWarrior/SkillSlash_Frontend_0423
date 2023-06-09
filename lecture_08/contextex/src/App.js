import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import Toolbar from "./Toolbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const LocationContext = createContext();

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <Sample>
        <h1>This is my heading</h1>
      </Sample>
      <LocationContext.Provider value={{ location, setLocation }}>
        <div>
          <Toolbar />
          <Router location={location}/>
        </div>
      </LocationContext.Provider>
    </div>
  );
}


function Sample({children}) {
  return children;
}

function Router({ location }) {
  switch (location) {
    case "/home":
      return <Home />;
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    default:
      return <Home />;
  }
}

export { App, LocationContext };
