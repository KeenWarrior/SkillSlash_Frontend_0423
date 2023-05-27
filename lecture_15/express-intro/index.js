const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const notesStr = fs.readFileSync("./notes.json", "utf8");
const notes = JSON.parse(notesStr);

console.log(notes);

const app = express();

app.use(express.json());

app.get("/notes/", (req, res) => {
  res.send(Object.values(notes));
});

app.get("/notes/:id", (req, res) => {
  if (notes.hasOwnProperty(req.params.id)) {
    res.send(notes[req.params.id]);
  } else {
    res.status(404).send("Not found");
  }
});

app.post("/notes/", (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  notes[newNote.id] = newNote;
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  res.send(newNote);
});

app.put("/notes/:id", (req, res) => {
  if (!notes.hasOwnProperty(req.params.id)) {
    res.status(404).send("Not found");
    return;
  }
  const updatedNote = req.body;
  notes[req.params.id] = updatedNote;
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  res.send(updatedNote);
});

app.delete("/notes/:id", (req, res) => {
  if (!notes.hasOwnProperty(req.params.id)) {
    res.status(404).send("Not found");
    return;
  }
  delete notes[req.params.id];
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  res.send("deleted");
});

// -------
// Comments
app.get("/notes/:id/comments", (req, res) => {
  const comments = notes[req.params.id].comments;
  res.send(comments || []);
});

app.post("/notes/:id/comments", (req, res) => {
  const newComment = req.body;
  newComment.id = uuidv4();
  if (!notes[req.params.id].comments) {
    notes[req.params.id].comments = [];
  }

  notes[req.params.id].comments.push(newComment);

  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  res.send(newComment);
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
