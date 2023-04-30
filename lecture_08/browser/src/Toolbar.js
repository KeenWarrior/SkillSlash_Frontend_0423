import "./App.css"



export default function Toolbar({location, setLocation}) {

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