const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");
const chatsRouter = require("./routes/chatsRoutes");
const dotenv = require("dotenv");
const socketio = require("socket.io");

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/api/users", usersRouter);
app.use("/api/chats", chatsRouter);

const setup = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URL);
  if (connection) {
    console.log("Connected to database");
    const server = app.listen(PORT, () =>
      console.log(`Server listening on port ${PORT}`)
    );

    const io = socketio(server, {
      cors: {
        origin: "*",
      },
    });

    io.use((socket, next) => {
      const username = socket.handshake.auth.username;
      if (username) {
        socket.join(username);
        next();
      }
    });

    const chatsChangeStream = mongoose.connection.collection("chats").watch();

    chatsChangeStream.on("change", (change) => {
      if (change.operationType === "insert") {
        const chat = change.fullDocument;
        io.to(chat.from).emit("message", chat);
        io.to(chat.to).emit("message", chat);
      }
    });
  }
};

setup();
