const routes = require("express").Router();
const eventController = require("../controllers/eventController");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/AddEvent", eventController.AddEvent);
routes.get("/getEvents", userAuth, eventController.getEvents);
routes.get("/getEvent", eventController.getEvent);
routes.post("/updateEvent", eventController.updateEvent);
routes.delete("/deleteEvent", eventController.deleteEvent);

module.exports = routes;
