const Shorten = require("../models/ShortenModel");

const generateShortUrl = async (req, res) => {
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
};

const getShortUrlsList = async (req, res) => {
  const shortUrls = await Shorten.find();
  res.json(shortUrls);
};

const getLongUrl = async (req, res) => {
  const data = await Shorten.findOne({ shortUrl: req.params.shortUrl });
  if (!data) {
    res.redirect("/");
  } else {
    res.redirect(data.longUrl);
  }
};

const deleteShortUrl = async (req, res) => {
  const data = await Shorten.findOneAndDelete({
    shortUrl: req.params.shortUrl,
  });
  res.send(data);
};

module.exports = {
  generateShortUrl,
  getShortUrlsList,
  getLongUrl,
  deleteShortUrl,
};
