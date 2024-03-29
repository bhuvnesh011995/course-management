const routes = require("express").Router();
const classManager = require("../managers/classManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addClass", [userAuth], classManager.addClass);
routes.get("/getClasses", [userAuth], classManager.getClasses);
routes.get("/getClass", [userAuth], classManager.getClass);
routes.post("/updateClass", [userAuth], classManager.updateClass);

routes.post(
  "/updateCalendarEvent",
  [userAuth],
  classManager.updateCalendarEvent,
);
routes.get("/getCourseClass", [userAuth], classManager.getCourseClass);

routes.delete("/deleteClass", [userAuth], classManager.deleteClass);

routes.get("/getCourseClasses", [userAuth], classManager.getCourseClasses);

routes.get("/getFilteredClasses", [userAuth], classManager.getFilteredClasses);

routes.get(
  "/getDashboardClasses",
  [userAuth],
  classManager.getDashboardClasses,
);

routes.get("/getCETClasses", [userAuth], classManager.getCETClasses);

routes.get(
  "/classCourseDetails/:classId",
  [userAuth],
  classManager.classCourseDetails,
);

module.exports = routes;
