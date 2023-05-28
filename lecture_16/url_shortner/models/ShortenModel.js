const mongoose = require("mongoose");

const shortenSchema = new mongoose.Schema({
  shortUrl: String,
  longUrl: String,
});

const Shorten = mongoose.model("Shorten", shortenSchema);

module.exports = Shorten;