const express = require("express");
const cors = require("cors");
const landingRoute = require("./routes/landing.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/landing", landingRoute);

module.exports = app;
