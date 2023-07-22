const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notes.controller');

router.get('/', notesController.getNotes);
router.post('/', notesController.createNote);
router.get('/:id', notesController.getNote);
router.patch('/:id', notesController.updateNote);
router.delete('/:id', notesController.deleteNote);

module.exports = router;