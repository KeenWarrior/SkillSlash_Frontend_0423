const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  email_verified: {
    type: Boolean,
    required: true,
  },
  picture: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
