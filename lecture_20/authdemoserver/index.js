const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const { OAuth2Client } = require("google-auth-library");

const dotenv = require("dotenv");
dotenv.config();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const client = new OAuth2Client(CLIENT_ID);

const port = process.env.PORT;

const app = express();

const auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Auth Error" });
  }
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  if (!ticket) {
    return res.status(401).json({ message: "Auth Error" });
  }
  const payload = ticket.getPayload();
  console.log(payload);
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    User.create({
      name: payload.name,
      email: payload.email,
      email_verified: payload.email_verified,
      picture: payload.picture,
    });
  } else {
    User.findOneAndUpdate(
      { email: payload.email },
      {
        name: payload.name,
        email: payload.email,
        email_verified: payload.email_verified,
        picture: payload.picture,
      }
    );
  }
  User.findOneAndUpdate(
    {
      email: payload.email,
    },
    {
      name: payload.name,
      email: payload.email,
      email_verified: payload.email_verified,
      picture: payload.picture,
    },
    {
      upsert: true,
    }
  );

  req.user = payload;

  next();
};

app.use(cors());
app.use(express.json());

app.get("/verify", auth, (req, res) => {
  res.json(req.user);
});

app.get("/me", (req, res) => {
  res.send("Works fine");
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
