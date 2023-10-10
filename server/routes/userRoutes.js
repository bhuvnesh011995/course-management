const routes = require("express").Router();
const userController = require("../controllers/userController");
const { upload } = require("../utils/upload.utils");

routes.post("/addNewUser", userController.addNewUser);
routes.get("/getUsers", userController.getUsers);
routes.delete("/deleteUser", userController.deleteUser);
routes.post("/updateUser", userController.updateUser);

routes.post(
  "/registerUser",
  upload.single("userImage"),
  userController.registerUser
);

module.exports = routes;
