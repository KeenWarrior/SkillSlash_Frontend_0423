const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notesController');

router.get('/', notesController.getNotes);
router.post('/', notesController.createNote);
router.get('/search', notesController.getNotesByTag);
router.get('/:id', notesController.getNoteById);
router.put('/:id', notesController.updateNoteById);
router.delete('/:id', notesController.deleteNoteById);

module.exports = router;