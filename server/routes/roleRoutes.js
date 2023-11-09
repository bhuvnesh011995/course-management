const routes = require("express").Router();
const roleManager = require("../managers/roleManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addNewRole", roleManager.addNewRole);
routes.get("/getRoles", userAuth, roleManager.getRoles);
routes.get("/selectedRoleData", roleManager.selectedRoleData);
routes.post("/editRole", roleManager.editRole);
routes.get("/getUserRoleInfo", roleManager.getUserRoleInfo);

module.exports = routes;
