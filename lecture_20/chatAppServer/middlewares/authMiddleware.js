const User = require("../models/usersModel");
const { OAuth2Client } = require("google-auth-library");
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const client = new OAuth2Client(CLIENT_ID);

const checkUserAuth = async (req, res, next) => {
  console.log(req.headers.authorization);
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
  let user = await User.findOne({ username: payload.sub });
  if (!user) {
    user = await User.create({
      username: payload.sub,
      name: payload.name,
      email: payload.email,
      email_verified: payload.email_verified,
      picture: payload.picture,
    });
  } 

  req.user = user;

  next();
};

const checkUserSelf = (req, res, next) => {
  if (req.user.username === req.params.username) {
    next();
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = { checkUserAuth, checkUserSelf };
