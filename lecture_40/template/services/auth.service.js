const userService = require("./user.service");
const User = require("../models/user.model");

async function register(user) {
  const newUser = await userService.createUser(user);
  return newUser;
}

async function login(email, password) {
  const user = await userService.getUserByEmail(email);
  if (!user) {
    return null;
  } else {
    const verified = await user.verifyPassword(password);
    if (verified) {
      return user;
    } else {
      return null;
    }
  }
}

module.exports = {
  register,
  login,
};
