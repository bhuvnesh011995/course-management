const routes = require("express").Router();
const registrationManager = require("../managers/registrationManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post(
  "/addRegistrationType",
  [userAuth],
  registrationManager.addRegistrationType
);
routes.get(
  "/getRegistrationTypes",
  [userAuth],
  registrationManager.getRegistrationTypes
);

routes.get(
  "/getRegistrationType",
  [userAuth],
  registrationManager.getRegistrationType
);
routes.post(
  "/updateRegistration",
  [userAuth],
  registrationManager.updateRegistration
);
routes.delete(
  "/deleteRegistration",
  [userAuth],
  registrationManager.deleteRegistration
);

routes.get(
  "/allDashboardClassTypes",
  [userAuth],
  registrationManager.allDashboardClassTypes
);

module.exports = routes;
