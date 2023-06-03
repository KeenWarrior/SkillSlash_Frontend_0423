const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);

const setup = async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://anuj:anuj@todo.0vzswco.mongodb.net/chatsapp?retryWrites=true&w=majority"
  );
  if (connection) {
    console.log("Connected to database");
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  }
};

setup();
