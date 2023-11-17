const routes = require("express").Router();
const courseManager = require("../managers/courseManager");

routes.post("/addNewCourse", courseManager.addNewCourse);

routes.get("/getCourses", courseManager.getCourses);

routes.get("/getCourse", courseManager.getCourse);

routes.post("/updateCourse", courseManager.updateCourse);
routes.delete("/deleteCourse", courseManager.deleteCourse);

routes.get("/getDashboardCourses", courseManager.getDashboardCourses);

routes.get("/getFilteredCourses", courseManager.getFilteredCourses);

module.exports = routes;
