import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./AppRouter";
import { AppBar } from "@mui/material";
import MainAppBar from "./MainAppBar";

function App() {
  return (
    <div className="App">
      <MainAppBar />
      <AppRouter />
    </div>
  );
}

export default App;
