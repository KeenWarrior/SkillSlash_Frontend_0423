const express = require("express");

const {
  getAllNotes,
  getNoteById,
  createNote,
  addComment,
} = require("../controllers/notesController");

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.post("/:noteId/comments", addComment);


module.exports = router;    
