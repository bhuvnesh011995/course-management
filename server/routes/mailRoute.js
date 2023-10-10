const routes = require("express").Router();
const mailController = require("../controllers/mailController");

routes.get("/sendEmail", mailController.sendMail);

module.exports = routes;
