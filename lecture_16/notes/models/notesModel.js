const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  comments: [
    {
      text: String,
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
