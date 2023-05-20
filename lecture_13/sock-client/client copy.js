const { io } = require("socket.io-client");
const usename = "Avinash";

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Connected to server");

  setInterval(() => {
    socket.emit("alive", {usename, data: "I am alive"});
  }, 1000);
});

socket.on("bingo", (message) => {
  console.log(message);
});
