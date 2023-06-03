const express = require("express");

const usersController = require("../controllers/usersController");
const {
  checkUserAuth,
  checkUserSelf,
} = require("../middlewares/authMiddleware");

const usersRouter = express.Router();

usersRouter.post("/", usersController.createUser);
usersRouter.get("/", usersController.getAllUsers);
usersRouter.get("/:username", usersController.getUserByUsername);
usersRouter.patch(
  "/:username",
  checkUserAuth,
  checkUserSelf,
  usersController.updateUser
);
usersRouter.post("/verify", usersController.verifyUser);

module.exports = usersRouter;
