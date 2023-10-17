const routes = require("express").Router();
const registrationController = require("../controllers/registrationController");

routes.post("/addRegistrationType", registrationController.addRegistrationType);
routes.get(
  "/getRegistrationTypes",
  registrationController.getRegistrationTypes
);

routes.get("/getRegistrationType", registrationController.getRegistrationType);

module.exports = routes;
