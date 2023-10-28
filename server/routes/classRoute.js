const routes = require("express").Router();
const classController = require("../controllers/classController");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addClass", classController.addClass);
routes.get("/getClasses", userAuth, classController.getClasses);
routes.get("/getClass", classController.getClass);
routes.post("/updateClass", classController.updateClass);

routes.delete("/deleteClass", classController.deleteClass);

routes.get("/getCourseClasses", classController.getCourseClasses);

module.exports = routes;
