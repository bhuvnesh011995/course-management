const routes = require("express").Router();
const permissionController = require("../managers/permissionManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post(
  "/addNewPermission",
  [userAuth],
  permissionController.addNewPermission
);
routes.get("/getPermissions", [userAuth], permissionController.getPermissions);
routes.post("/editPermission", [userAuth], permissionController.editPermission);
routes.delete(
  "/deletePermission",
  [userAuth],
  permissionController.deletePermission
);

module.exports = routes;
