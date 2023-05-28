const express = require("express");
const mongoose = require("mongoose");
const notesRoute = require("./routes/notesRoute");

const app = express();

app.use(express.json());

app.use("/api/notes", notesRoute);

mongoose.connect("mongodb://localhost:27017/notes").then(() => {
  console.log("Connected to MongoDB");
  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
});


