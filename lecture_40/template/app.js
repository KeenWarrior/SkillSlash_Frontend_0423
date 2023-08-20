const express = require("express");
const cors = require("cors");
const passport = require("passport");
const jwtStrategy = require("./config/passport");

const apiRoutes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

passport.use("jwt", jwtStrategy);

app.use("/api", apiRoutes);

module.exports = app;
