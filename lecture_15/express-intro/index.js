const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const notesStr = fs.readFileSync("./notes.json", "utf8");
const notes = JSON.parse(notesStr);

console.log(notes);

const app = express();

app.use(express.json());

app.get("/notes/", (req, res) => {
  res.send(notes);
});

app.get("/notes/:id", (req, res) => {
  res.send(notes[req.params.id]);
});

app.post("/notes/", (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  notes[newNote.id] = newNote;
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  res.send(newNote);
});

app.put("/notes/:id", (req, res) => {
  const updatedNote = req.body;
  notes[req.params.id] = updatedNote;
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  res.send(updatedNote);
});

app.delete("/notes/:id", (req, res) => {
  delete notes[req.params.id];
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  res.send("deleted");
});

// CRUD
// Create, Read, Update, Delete
// GET -> Read
// POST -> Create
// PUT -> Update
// PATCH -> Partial Update
// DELETE -> Delete

// /getNotes
// /getNoteById
// /createNote
// /updateNote
// /deleteNote

// GET /notes
// GET /notes/:id
// POST /notes
// PUT /notes/:id
// PATCH /notes/:id
// DELETE /notes/:id
// GET /notes/:id/comments
// POST /notes/:id/comments
// GET /notes/:id/comments/:commentId
// PUT /notes/:id/comments/:commentId
// PATCH /notes/:id/comments/:commentId
// DELETE /notes/:id/comments/:commentId

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
