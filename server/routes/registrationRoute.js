const routes = require("express").Router();
const registrationManager = require("../managers/registrationManager");

routes.post("/addRegistrationType", registrationManager.addRegistrationType);
routes.get("/getRegistrationTypes", registrationManager.getRegistrationTypes);

routes.get("/getRegistrationType", registrationManager.getRegistrationType);
routes.post("/updateRegistration", registrationManager.updateRegistration);
routes.delete("/deleteRegistration", registrationManager.deleteRegistration);

routes.get(
  "/allDashboardClassTypes",
  registrationManager.allDashboardClassTypes
);

module.exports = routes;
