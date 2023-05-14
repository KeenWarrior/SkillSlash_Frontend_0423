import logo from "./logo.svg";
import "./App.css";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import { useState } from "react";

function App() {
  const [createOrUpdatetodo, setCreateOrUpdatetodo] = useState("create");
  
  let [formData, setFormData] = useState({
    title: "",
    complet_by: "",
    completed: false,
  });

  return (
    <div className="App">
      <LeftPage
        createOrUpdatetodo={createOrUpdatetodo}
        setCreateOrUpdatetodo={setCreateOrUpdatetodo}
        formData={formData}
        setFormData={setFormData}
      />
      <RightPage
        createOrUpdatetodo={createOrUpdatetodo}
        setCreateOrUpdatetodo={setCreateOrUpdatetodo}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default App;
