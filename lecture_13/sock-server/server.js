const { Server } = require("socket.io");
const io = new Server(8000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (message) => {

    // Broadcast the message to all the clients
    io.emit("message", message);
    console.log(message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
