const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true
    },

});

usersSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    return user;
}

usersSchema.methods.checkPassword = function (password) {
    return password === this.password;
}

const User = mongoose.model('users', usersSchema);

module.exports = User;