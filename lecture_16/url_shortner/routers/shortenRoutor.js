const {
  generateShortUrl,
  getShortUrlsList,
  deleteShortUrl,
} = require("../controllers/urlController");

const express = require("express");

const shortenRoutor = express.Router();

shortenRoutor.post("/", generateShortUrl);
shortenRoutor.get("/", getShortUrlsList);
shortenRoutor.delete("/:id", deleteShortUrl);

module.exports = shortenRoutor;
