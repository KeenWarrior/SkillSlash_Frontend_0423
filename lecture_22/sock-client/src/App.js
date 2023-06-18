import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const sock = io("http://localhost:5000", {
      auth: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDhkM2E5NTNlODE1Mzc2NGQwMWJhZTQiLCJpYXQiOjE2ODcwNjM5NTksImV4cCI6MTY4NzA2NTc1OSwidHlwZSI6ImFjY2VzcyJ9.uqgLsI7KxQPdV3W49cOiKxyPvBnnvFBqBZMGTK002vU",
      },
    });

    sock.on("connect", () => {
      setSocket(sock);
      console.log("connected");
    });

    sock.on("message", (payload) => {
      console.log(payload);
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
