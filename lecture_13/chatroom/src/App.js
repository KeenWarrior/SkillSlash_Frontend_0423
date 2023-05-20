import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [message, setMessage] = useState("");
  const messages = useSelector((state) => state.messages);
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Chatroom</h1>
      <input
        value={name}
        type="text"
        placeholder="Enter your name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        value={email}
        type="text"
        placeholder="Enter your Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "SET_USER",
            payload: { userName: name, email: email },
          });
          const newSocket = io("http://localhost:8000");
          newSocket.on("connect", () => {
            setSocket(newSocket);
          });
          newSocket.on("message", (data) => {
            dispatch({ type: "ADD_MESSAGE", payload: data });
          });
          newSocket.on("disconnect", (data) => {
            setSocket(null);
          });
        }}
      >
        Submit
      </button>
      <div className="messages">
        <h2>Messages</h2>
        {socket && (
          <>
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></input>
            <button
              onClick={() => {
                socket.emit("message", { message, user });
                setMessage("");
              }}
            >
              Send
            </button>
          </>
        )}

        {messages.map((message, index) => {
          return (
            <div key={index}>
              <h3>{message.user.userName}</h3>
              <p>{message.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
