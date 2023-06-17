
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./models/userModel");
const JwtStrategy = require("passport-jwt").Strategy;
var jwt = require("jsonwebtoken");
var session = require("express-session");

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

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

app.use(passport.initialize());

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const strategy = new JwtStrategy(options, async (payload, done) => {
  console.log("We are in strategy", payload);
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

passport.serializeUser(function (user, done) {
  done(
    null,
    JSON.stringify({
      name: user.name,
      username: user.username,
    })
  );
});

passport.deserializeUser(async function (user, done) {
  console.log("We are in deserialize user", user);
  const inflatedUser = JSON.parse(user);
  done(null, inflatedUser);
});

app.use(cors());
app.use(express.json());

const authCallback = (err, user, info, status) => {
  if (user) {
    console.log("We are in auth callback", user);
  }
};

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
            avatar_url: "https://avatars.githubusercontent.com/u/25343183?s=400&u=2b38ea87dceebbc2e4959bc603947564ceacb7ef&v=4",
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

app.get("/", passport.authenticate("jwt", { session: true }), (req, res) => {
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
