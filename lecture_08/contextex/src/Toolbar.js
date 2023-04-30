import { useContext } from "react";
import "./App.css"
import { LocationContext } from "./App";

export default function Toolbar() {

    const {location, setLocation} = useContext(LocationContext);

    const handleChange = (event) => {
        setLocation(event.target.value);
    }

    return (
        <div className="toolbar">
            <button>Back</button>
            <button>Forward</button>
            <input value={location} name="path" onChange={handleChange}></input>
            <button>Go</button>
        </div>
    )
}