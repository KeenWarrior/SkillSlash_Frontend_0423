const e = require("express");
const Note = require("../models/notesModel");

const getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.send(notes);
};

const getNoteById = async (req, res) => {
  const id = req.params.id;
  const note = await Note.findById(id);
  if (note) {
    res.send(note);
  } else {
    res.status(404).send("Not found");
  }
};

const createNote = async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    description: req.body.description,
  });

  const savedNote = await newNote.save();
  res.send(savedNote);
};

const addComment = async (req, res) => {
  const id = req.params.noteId;
  const note = await Note.findById(id);
  if (note) {
    note.comments.push({
      text: req.body.text,
    });
    const savedNote = await note.save();
    res.send(savedNote);
  } else {
    res.status(404).send("Not found");
  }
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  addComment
};
