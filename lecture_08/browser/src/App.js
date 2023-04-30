import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';

function App() {

  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <Toolbar location={location} setLocation={setLocation}/>
      <Router location={location} setLocation={setLocation}/>
    </div>
  );
}

function Router({location, setLocation}){
  switch(location){
    case "/home":
      return <Home setLocation={setLocation}/>
    case "/about":
      return <About setLocation={setLocation}/>
    case "/contact":
      return <Contact setLocation={setLocation}/>
    default:
      return <Home setLocation={setLocation}/>
  }
}

export default App;
