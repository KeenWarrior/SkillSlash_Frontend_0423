const mongoose = require('mongoose');

const chatsSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

const Chat = mongoose.model('chats', chatsSchema);

module.exports = Chat;