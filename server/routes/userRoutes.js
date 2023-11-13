const routes = require("express").Router();
const userManager = require("../managers/userManager");
const { userAuth } = require("../middlewares/auth.middleware");
const { upload } = require("../utils/upload.utils");

routes.post("/addNewUser", userManager.addNewUser);
routes.get("/getUsers", userAuth, userManager.getUsers);
routes.delete("/deleteUser", userManager.deleteUser);
routes.post("/updateUser", userManager.updateUser);

routes.post(
  "/updateUserWithImage",
  upload.single("file"),
  userManager.updateUserWithImage
);

routes.post("/signIn", userManager.signIn);

module.exports = routes;
