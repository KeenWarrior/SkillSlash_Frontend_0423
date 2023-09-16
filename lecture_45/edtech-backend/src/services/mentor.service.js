const Mentor = require('../models/mentor.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const courseService = require('./course.service');

async function createMentor(mentor) {
  return await Mentor.create(mentor);
}

async function getMentors() {
  return await Mentor.find();
}

async function getMentorById(id) {
  const mentor = await Mentor.findById(id);
  if (mentor) {
    const bingo = await courseService.getCoursesByMentorId(id);
    console.log('bingo', bingo);
    mentor.bingo = bingo;
  }
  return mentor;
}

async function updateMentorById(id, updateBody) {
  const mentor = await updateMentorById(id, updateBody, {
    new: true,
  });
  return mentor;
}

async function deleteMentorById(id) {
  const mentor = await getMentorById(id);
  if (!mentor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Mentor not found');
  }
  await mentor.remove();
  return mentor;
}

module.exports = {
  createMentor,
  getMentors,
  updateMentorById,
  getMentorById,
  deleteMentorById,
};
