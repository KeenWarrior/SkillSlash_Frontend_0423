const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }, 
    type: {
        type: String,
        enum: ["access", "refresh", "resetPassword", "verifyEmail"],
        required: true,
    },
    expires: {
        type: Date,
        required: true,
    },
    blacklisted: {
        type: Boolean,
        default: false,
    }
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;