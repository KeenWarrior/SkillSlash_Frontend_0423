const express = require("express");
const mongoose = require("mongoose");
const shortenRoutor = require("./routers/shortenRoutor");
const { getLongUrl } = require("./controllers/urlController");

const app = express();
app.use(express.json());
app.use(express.static("static"));
app.use("/api/urls", shortenRoutor);
app.get("/:shortUrl", getLongUrl);

mongoose
  .connect(
    "mongodb+srv://anuj:anuj@todo.0vzswco.mongodb.net/notesdb?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  });
