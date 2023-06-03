const e = require("express");
const User = require("../models/usersModel");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const updated = await User.findOneAndUpdate(
      {
        username: req.params.username,
      },
      { ...req.body },
      { new: true }
    );
    if (updated === null) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(updated);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

const verifyUser = async (req, res) => {
  try {
    const credentials = req.body;
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      if (user.checkPassword(credentials.password)) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByUsername,
  updateUser,
  verifyUser,
};
