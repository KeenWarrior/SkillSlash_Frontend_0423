const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

if (!fs.existsSync("./shorts.json")) {
  fs.writeFileSync("./shorts.json", "{}");
}

const shortUrls = JSON.parse(fs.readFileSync("./shorts.json"));

app.use(express.static("static"));

app.post("/api/urls", (req, res) => {
  console.log(req.body);
  const body = req.body;
  shortUrls[body.shortUrl] = body.longUrl;
  fs.writeFileSync("./shorts.json", JSON.stringify(shortUrls));
  res.send("URL added");
});

app.get("/api/urls", (req, res) => {
  res.json(shortUrls);
});

app.get("/:id", (req, res) => {
  if (shortUrls.hasOwnProperty(req.params.id)) {
    res.redirect(shortUrls[req.params.id]);
  } else {
    res.redirect("/");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
