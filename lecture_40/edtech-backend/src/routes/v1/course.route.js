const express = require('express');

const router = express.Router();

const courseController = require('../../controllers/course.controller');
const auth = require('../../middlewares/auth');
const { route } = require('./auth.route');

router.get('/', courseController.getCourses);
router.post('/', auth(), courseController.createCourse);
router.get('/:id', courseController.getCourseById);
router.get('/search', courseController.getCoursesByMentorId);

router.post('/:courseId/sections', auth(), courseController.createSection);

module.exports = router;