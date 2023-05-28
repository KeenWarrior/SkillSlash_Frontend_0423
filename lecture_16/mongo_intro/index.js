// Using Node.js `require()`
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
  comments: [
    {
      text: String,
      date: Date,
    },
  ],
});

const Note = mongoose.model("Note", noteSchema);

mongoose.connect("mongodb://127.0.0.1:27017/notesdb").then(() => {
  console.log("Connected!");

  Note.findBy
});
