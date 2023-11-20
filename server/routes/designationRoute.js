const routes = require("express").Router();
const designationManager = require("../managers/designationManager");

routes.post("/addDesignation", designationManager.addDesignation);

routes.get("/getDesignations", designationManager.getDesignations);

routes.post("/updateDesignation", designationManager.updateDesignation);
routes.delete("/deleteDesignation", designationManager.deleteDesignation);

module.exports = routes;
