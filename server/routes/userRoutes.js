const routes = require("express").Router();
const userController = require("../controllers/userController");

routes.post("/addNewUser", userController.addNewUser);
routes.get("/getUsers", userController.getUsers);
routes.delete("/deleteUser", userController.deleteUser);
routes.post("/updateUser", userController.updateUser);

module.exports = routes;
