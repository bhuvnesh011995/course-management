const jwt = require("jsonwebtoken");
const db = require("../models/index");

const userAuth = async (req, res, next) => {
  try {
    const token = req.headers["x-token-header"];
    if (token) {
      const decode = jwt.decode(token);
      const loginedUser = await db.user.findOne({ email: decode.email });
      if (loginedUser) {
        if (loginedUser.password != decode.password) {
          return res.status(401).send({ message: "Please Login Again" });
        }
      } else {
        return res.status(401).send({ message: "Please Login Again" });
      }
      // console.log(loginedUser, decode);
      next();
    } else {
      return res.status(500).send({ message: "Please Login Again " });
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  userAuth,
};
