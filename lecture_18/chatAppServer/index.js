const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");
const chatsRouter = require("./routes/chatsRoutes");

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
  const connection = await mongoose.connect(
    "mongodb+srv://anuj:anuj@todo.0vzswco.mongodb.net/chatsapp?retryWrites=true&w=majority"
  );
  if (connection) {

    const chatsChangeStream = mongoose.connection.collection("chats").watch();

    chatsChangeStream.on("change", (change) => {
        console.log(change);
    });

    console.log("Connected to database");
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  }
};

setup();
