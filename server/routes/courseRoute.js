const routes = require("express").Router();
const courseController = require("../controllers/courseController");

routes.post("/addNewCourse", courseController.addNewCourse);

routes.get("/getCourses", courseController.getCourses);

routes.get("/getCourse", courseController.getCourse);

routes.post("/updateCourse", courseController.updateCourse);
routes.delete("/deleteCourse", courseController.deleteCourse);

routes.get("/getFilteredCourses", courseController.getFilteredCourses);

module.exports = routes;
