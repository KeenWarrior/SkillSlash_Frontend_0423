const User = require("../models/usersModel");

const checkUserAuth = async (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) {
      res.status(401).json({ message: "Unauthorized" });
    } else {
      const userpass = auth.split(" ")[1];
  
      const userpassDecoded = Buffer.from(userpass, "base64").toString();
      const [username, password] = userpassDecoded.split(":");
      try {
        const user = await User.findOne({ username });
        if (!user) {
          res.status(401).json({ message: "Incorrect username or password" });
        } else {
          if (user.checkPassword(password)) {
              req.user = user;
            next();
          } else {
            res.status(401).json({ message: "Incorrect username or password" });
          }
        }
      } catch (err) {
          console.log(err);
        res.status(400).json(err);
      }
    }
  };

  const checkUserSelf = (req, res, next) => {
    if (req.user.username === req.params.username) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };

  module.exports = {checkUserAuth, checkUserSelf};