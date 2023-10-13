const routes = require("express").Router();
const roleController = require("../controllers/roleController");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addNewRole", roleController.addNewRole);
routes.get("/getRoles", userAuth, roleController.getRoles);
routes.get("/selectedRoleData", roleController.selectedRoleData);
routes.post("/editRole", roleController.editRole);
routes.get("/getUserRoleInfo", roleController.getUserRoleInfo);

module.exports = routes;
