const e = require("express");
const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const shortenSchema = new mongoose.Schema({
  shortUrl: String,
  longUrl: String,
});

const Shorten = mongoose.model("Shorten", shortenSchema);

const app = express();

app.use(express.json());

app.use(express.static("static"));

app.post("/api/urls", async (req, res) => {
  const data = await Shorten.findOne({ shortUrl: req.body.shortUrl });
  if (!data) {
    const shorten = new Shorten({
      shortUrl: req.body.shortUrl,
      longUrl: req.body.longUrl,
    });
    await shorten.save();
    res.send(shorten);
  } else {
    res.send("Already exists");
  }
});

app.get("/api/urls", async (req, res) => {
  const shortUrls = await Shorten.find();
  res.json(shortUrls);
});

app.get("/:shortUrl", async (req, res) => {
  const data = await Shorten.findOne({ shortUrl: req.params.shortUrl });
  if (!data) {
    res.redirect("/");
  } else {
    res.redirect(data.longUrl);
  }
});

app.delete("/api/urls/:id", async (req, res) => {
  const data = await Shorten.findOneAndDelete(({ shortUrl: req.params.shortUrl }));
  res.send(data);
});

mongoose.connect("mongodb://localhost:27017/shortUrls").then(() => {
  console.log("Connected to DB");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
