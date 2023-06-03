const express = require("express");

const chatsController = require("../controllers/chatsController");
const { checkUserAuth } = require("../middlewares/authMiddleware");

const chatsRouter = express.Router();

chatsRouter.post("/", checkUserAuth, chatsController.createChat);
chatsRouter.get("/", checkUserAuth, chatsController.getChats);
chatsRouter.get("/:username", checkUserAuth, chatsController.getChatsWith);

module.exports = chatsRouter;
