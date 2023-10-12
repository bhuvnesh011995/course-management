const routes = require("express").Router();
const roleController = require("../controllers/roleController");

routes.post("/addNewRole", roleController.addNewRole);
routes.get("/getRoles", roleController.getRoles);
routes.get("/selectedRoleData", roleController.selectedRoleData);
routes.post("/editRole", roleController.editRole);
routes.get("/getUserRoleInfo", roleController.getUserRoleInfo);

module.exports = routes;
