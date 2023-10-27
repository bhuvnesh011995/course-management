const routes = require("express").Router();
const eventController = require("../controllers/eventController");

routes.post("/AddEvent", eventController.AddEvent);
routes.get("/getEvents", eventController.getEvent);
routes.get("/getEvent", eventController.getEvents);
routes.post("/updateEvent", eventController.updateEvent);
routes.delete("/deleteEvent", eventController.deleteEvent);

module.exports = routes;
