const express = require("express");
const userController = require("../controllers/user.controller");
const passport = require("passport");

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  userController.profile
);
router.get("/:id", userController.getUserById);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
