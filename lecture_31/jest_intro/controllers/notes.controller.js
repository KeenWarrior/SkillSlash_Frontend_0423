const Note = require("../models/notes.model");

async function getNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function getNote(req, res) {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function createNote(req, res) {
  const note = req.body;
  const newNote = new Note({
    title: note.title,
    done: note.done,
  });
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

async function updateNote(req, res) {
  const note = req.body;
  const { id } = req.params;
  try {
    const response = await Note.findByIdAndUpdate(id, note, { new: true });
    res.status(200).json(response);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

async function deleteNote(req, res) {
  const { id } = req.params;
  try {
    const response = await Note.findByIdAndDelete(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
