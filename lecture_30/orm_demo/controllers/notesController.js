const Note = require("../models/notesModel");
const sequelize = require("../db");

async function createNote(req, res) {

  const { title, description, tag } = req.body;

  console.log(req.body);
  const response = await Note.create({
    title,
    description,
    tag,
  });

  res.json(response);
}

async function getNotes(req, res) {
  const notes = await Note.findAll();
  res.json(notes);
}

async function getNoteById(req, res) {
  const note = await Note.findByPk(req.params.id);
  res.json(note);
}

async function getNotesByTag(req, res) {
  console.log(req.query.tag);
  const notes = await Note.findAll({ where: { tag: req.query.tag } });
  res.json(notes);
}

async function updateNoteById(req, res) {
  console.log(req.body);
  console.log(req.params.id);
  const updated = await Note.update(req.body, { where: { id: req.params.id } });
  res.json(updated);
}

async function deleteNoteById(req, res) {
  const deleted = await Note.destroy({ where: { id: req.params.id } });
  res.json(deleted);
}

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNoteById,
  deleteNoteById,
  getNotesByTag,
};
