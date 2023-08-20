const userService = require("../services/user.service");

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    if (!user) {
      return res.status(400).json({ message: "Bad request" });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

const profile = async (req, res) => {
    res.status(200).json(req.user);
}


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    profile
}