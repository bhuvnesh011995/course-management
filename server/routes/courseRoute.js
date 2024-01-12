const routes = require("express").Router();
const courseManager = require("../managers/courseManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addNewCourse", [userAuth], courseManager.addNewCourse);

routes.get("/getCourses", [userAuth], courseManager.getCourses);

routes.get("/getCourse", [userAuth], courseManager.getCourse);

routes.post("/updateCourse", [userAuth], courseManager.updateCourse);
routes.delete("/deleteCourse", [userAuth], courseManager.deleteCourse);

routes.get("/getFilteredCourses", [userAuth], courseManager.getFilteredCourses);

routes.get(
  "/allDashboardCourses",
  [userAuth],
  courseManager.allDashboardCourses,
);

routes.get("/getLeadTypeCourses", [userAuth], courseManager.getLeadTypeCourses);

module.exports = routes;
