const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { mentorService } = require('../services');

const createMentor = catchAsync(async (req, res) => {
  console.log(req.user);
  req.body._id = req.user.id;
  const mentor = await mentorService.createMentor(req.body);
  res.status(httpStatus.CREATED).send(mentor);
});

const getMentors = catchAsync(async (req, res) => {
  //   const filter = pick(req.query, ['name', 'role']);
  //   const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await mentorService.getMentors();
  res.send(result);
});

const getMentorById = catchAsync(async (req, res) => {
  const mentor = await mentorService.getMentorById(req.params.id);
  if (!mentor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Mentor not found');
  }
  res.send(mentor);
});

// const updateUser = catchAsync(async (req, res) => {
//   const user = await userService.updateUserById(req.params.userId, req.body);
//   res.send(user);
// });

// const deleteUser = catchAsync(async (req, res) => {
//   await userService.deleteUserById(req.params.userId);
//   res.status(httpStatus.NO_CONTENT).send();
// });

module.exports = {
  createMentor,
  getMentors,
  getMentorById,
};
