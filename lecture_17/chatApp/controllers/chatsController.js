const Chat = require("../models/chatsModel");

const createChat = async (req, res) => {
  try {
    const chatMessage = {
      from: req.user.username,
      to: req.body.to,
      message: req.body.message,
    };
    const chat = await Chat.create(chatMessage);
    res.status(201).json(chat);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const getChats = async (req, res) => {
  try {
    const chatsQuesry = Chat.find({
      $or: [{ from: req.user.username }, { to: req.user.username }],
    });

    const chats = await chatsQuesry.sort({ createdAt: 1 });
    res.status(200).json(chats);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getChatsWith = async (req, res) => {
    console.log(req.user.username, req.params.username);
  try {
    const chatsQuesry = Chat.find({
      to: req.user.username,
      from: req.params.username,
    });

    const chats = await chatsQuesry.sort({ createdAt: 1 });
    res.status(200).json(chats);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { createChat, getChats, getChatsWith };
