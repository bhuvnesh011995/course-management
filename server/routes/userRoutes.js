const routes = require("express").Router();
const userManager = require("../managers/userManager");
const { userAuth } = require("../middlewares/auth.middleware");
const { upload } = require("../utils/upload.utils");

routes.post("/addNewUser", [userAuth], userManager.addNewUser);
routes.get("/getUsers", [userAuth], userManager.getUsers);
routes.delete("/deleteUser", [userAuth], userManager.deleteUser);
routes.post("/updateUser", [userAuth], userManager.updateUser);

routes.post(
  "/updateUserWithImage",
  [userAuth],
  upload.single("file"),
  userManager.updateUserWithImage
);

routes.post("/signIn", userManager.signIn);

routes.get("/tokenUser", [userAuth], userManager.tokenUser);
routes.post("/selectedTemplate", [userAuth], userManager.selectedTemplate);

module.exports = routes;
