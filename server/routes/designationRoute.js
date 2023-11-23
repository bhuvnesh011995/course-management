const routes = require("express").Router();
const designationManager = require("../managers/designationManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addDesignation", [userAuth], designationManager.addDesignation);

routes.get("/getDesignations", [userAuth], designationManager.getDesignations);

routes.post(
  "/updateDesignation",
  [userAuth],
  designationManager.updateDesignation
);
routes.delete(
  "/deleteDesignation",
  [userAuth],
  designationManager.deleteDesignation
);

module.exports = routes;
