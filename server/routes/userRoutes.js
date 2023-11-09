const routes = require("express").Router();
const userController = require("../controllers/userController");
const { addNewUser } = require("../managers/userManager");
const { userAuth } = require("../middlewares/auth.middleware");
const { upload } = require("../utils/upload.utils");

routes.post("/addNewUser", addNewUser);
routes.get("/getUsers", userAuth, userController.getUsers);
routes.delete("/deleteUser", userController.deleteUser);
routes.post("/updateUser", userController.updateUser);

routes.post(
  "/updateUserWithImage",
  upload.single("file"),
  userController.updateUserWithImage
);

routes.post("/signIn", userController.signIn);

module.exports = routes;
