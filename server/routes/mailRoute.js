const routes = require("express").Router();
const mailManager = require("../managers/mailManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.get("/sendEmail", [userAuth], mailManager.sendMail);

module.exports = routes;
