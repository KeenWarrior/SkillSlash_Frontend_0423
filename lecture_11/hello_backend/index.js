const express = require("express");
const app = express();

const port = 5000;

function handleHome(req, res) {
  res.send("Hello from home");
}

app.get("/", handleHome);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
