const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const getAllUsers = async () => {
    const users = await User.find({});
    return users;
};

const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

const getUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
};

const createUser = async (user) => {
    user.password = bcrypt.hashSync(user.password, 10);
    const newUser = await User.create(user);
    return newUser;
};

const updateUser = async (id, user) => {
    const updated = User.findByIdAndUpdate(id, user, { new: true });
    return updated;
}

const deleteUser = async (id) => {
    const deleted = await User.findByIdAndDelete(id);
    return deleted;
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
}