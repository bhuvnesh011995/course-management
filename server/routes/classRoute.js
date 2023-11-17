const routes = require("express").Router();
const classManager = require("../managers/classManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addClass", classManager.addClass);
routes.get("/getClasses", userAuth, classManager.getClasses);
routes.get("/getClass", classManager.getClass);
routes.post("/updateClass", classManager.updateClass);

routes.get("/getCourseClass", classManager.getCourseClass);

routes.delete("/deleteClass", classManager.deleteClass);

routes.get("/getCourseClasses", classManager.getCourseClasses);

module.exports = routes;
