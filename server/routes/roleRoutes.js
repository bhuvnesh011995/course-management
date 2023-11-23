const routes = require("express").Router();
const roleManager = require("../managers/roleManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addNewRole", [userAuth], roleManager.addNewRole);
routes.get("/getRoles", [userAuth], roleManager.getRoles);
routes.get("/selectedRoleData", [userAuth], roleManager.selectedRoleData);
routes.post("/editRole", [userAuth], roleManager.editRole);
routes.get("/getUserRoleInfo", [userAuth], roleManager.getUserRoleInfo);
routes.delete("/deleteRole", [userAuth], roleManager.deleteRole);

module.exports = routes;
