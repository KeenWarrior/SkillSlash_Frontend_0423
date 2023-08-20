const config = require("./config/config");
const app = require("./app");
const mongoose = require("mongoose");

const port = config.port;

mongoose.connect(config.mongo.url).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log("Server is running on port " + port);
  });
});
