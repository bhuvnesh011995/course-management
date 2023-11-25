const jwt = require("jsonwebtoken");
const db = require("../models/index");

const userAuth = async (req, res, next) => {
  try {
    const token = req.headers["x-token-header"];
    const ACCESSTOKENSECRET = process.env.ACCESSTOKENSECRET;
    console.log(ACCESSTOKENSECRET)
    if (token) {
      const decode = jwt.verify(token, ACCESSTOKENSECRET);
      const loginedUser = await db.user.findOne({ email: decode.email });
      if (loginedUser) {
        req.user = decode;
        next();
      } else {
        return res.status(401).send({ message: "Please Login Again" });
      }
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
