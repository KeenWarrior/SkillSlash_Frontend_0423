const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./models/userModel");
const JwtStrategy = require("passport-jwt").Strategy;
var jwt = require("jsonwebtoken");

console.log(process.env.BINGO);

const dotenv = require("dotenv");
const { ExtractJwt } = require("passport-jwt");

if (process.env.NODE_ENV === "PROD") {
  dotenv.config({
    path: "./prod.env",
  });
} else {
  dotenv.config();
}

const port = process.env.PORT;

const app = express();
app.use(passport.initialize());

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const strategy = new JwtStrategy(options, async (payload, done) => {
  if (!payload.username) {
    return done(null, false);
  } else {
    const user = await User.findOne({ username: payload.username });
    if (!user) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  }
});

passport.use(strategy);

app.use(cors());
app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const user = await User.create({ name, username, password });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    } else {
      if (user.verifyPassword(password)) {
        var token = jwt.sign(
          {
            name: user.name,
            username: user.username,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        res.send({
          token,
        });
      } else {
        return res.status(401).json({ error: "Invalid username or password" });
      }
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
