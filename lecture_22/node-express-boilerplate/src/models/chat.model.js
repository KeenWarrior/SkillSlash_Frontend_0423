const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const chatSchema = new Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;