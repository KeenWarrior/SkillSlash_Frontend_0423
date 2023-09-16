const Course = require('../models/course.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

async function createCourse(couse) {
  return await Course.create(couse);
}

async function getCourses() {
  return await Course.find();
}

async function getCourseById(id) {
  return await Course.findById(id);
}

async function getCoursesByMentorId(mentorId) {
  return await Course.find({
    author: mentorId,
  });
}

async function addSection(courseId, section) {
  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  course.sections.push(section);
  await course.save();
  return course;
}

async function addVideo(courseId, sectionId, video) {
  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  const section = course.sections.id(sectionId);
  if (!section) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Section not found');
  }
  section.videos.push(video);
  await course.save();
  return course;
}

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  getCoursesByMentorId,
  addSection,
  addVideo
};
