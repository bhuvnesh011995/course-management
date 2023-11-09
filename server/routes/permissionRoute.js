const routes = require("express").Router();
const permissionController = require("../managers/permissionManager");

routes.post("/addNewPermission", permissionController.addNewPermission);
routes.get("/getPermissions", permissionController.getPermissions);
routes.post("/editPermission", permissionController.editPermission);
routes.delete("/deletePermission", permissionController.deletePermission);

module.exports = routes;
