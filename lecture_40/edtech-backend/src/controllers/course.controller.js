const courseService = require('../services/course.service');

async function createCourse(req, res) {
  const body = req.body;
  body.author = req.user.id;
  try {
    const course = await courseService.createCourse(body);
    res.status(201).send(course);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getCourses(req, res) {
  try {
    const courses = await courseService.getCourses();
    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getCourseById(req, res) {
  try {
    const course = await courseService.getCourseById(req.params.id);
    if (!course) {
      return res.status(404).send({ message: 'Course not found' });
    }
    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getCoursesByMentorId(req, res) {
  const mentorId = req.query.mentorId;

  if (!mentorId) return res.status(400).send({ message: 'MentorId is required' });
  try {
    const courses = await courseService.getCoursesByMentorId(mentorId);
    res.send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function createSection(req, res) {
  const courseId = req.params.courseId;
  const course = await courseService.getCourseById(courseId);
  if (!course) {
    return res.status(404).send({ message: 'Course not found' });
  } else if (course.author != req.user.id) {
    return res.status(401).send({ message: 'Unauthorized' });
  } else {
    const update = await courseService.addSection(courseId, req.body);
    res.send(update);
  }
}

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  getCoursesByMentorId,
  createSection,
};
