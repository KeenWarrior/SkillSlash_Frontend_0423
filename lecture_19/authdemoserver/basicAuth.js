const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./models/userModel");

var session = require("express-session");

console.log(process.env.BINGO);

const dotenv = require("dotenv");
const { BasicStrategy } = require("passport-http");

if (process.env.NODE_ENV === "PROD") {
  dotenv.config({
    path: "./prod.env",
  });
} else {
  dotenv.config();
}

const port = process.env.PORT;

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

app.use(passport.initialize());

const strategy = new BasicStrategy(async (username, password, done) => {

  console.log("username", username);
  
  const user = await User.findOne({ username });
  if (!user) {
    return done(null, false);
  }

  console.log("user", user);

  if (user.verifyPassword(password)) {
    done(null, user);
  } else {
    done(null, false);
  }
});

passport.use(strategy);

passport.serializeUser(function (user, done) {
  done(null, user.username);
});

passport.deserializeUser(async function (username, done) {
  const user = User.find({ username });
  if (user) {
    done(null, user);
  } else {
    done(null, false);
  }
});

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
        res.send("You are logged in");
      } else {
        return res.status(401).json({ error: "Invalidsername or password" });
      }
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get("/", passport.authenticate("basic", { session: true }), (req, res) => {
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
