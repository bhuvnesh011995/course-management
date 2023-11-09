const routes = require("express").Router();
const mailManager = require("../managers/mailManager");

routes.get("/sendEmail", mailManager.sendMail);

module.exports = routes;
