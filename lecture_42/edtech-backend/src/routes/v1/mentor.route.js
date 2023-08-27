const express = require('express');

const router = express.Router();

const mentorController = require('../../controllers/mentor.controller');
const auth = require('../../middlewares/auth');

router.get('/', mentorController.getMentors);
router.post('/', auth(), mentorController.createMentor);
router.get('/:id', mentorController.getMentorById);

module.exports = router;