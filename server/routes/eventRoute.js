const routes = require("express").Router();
const eventManager = require("../managers/eventManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/AddEvent", eventManager.AddEvent);
routes.get("/getEvents", userAuth, eventManager.getEvents);
routes.get("/getEvent", eventManager.getEvent);
routes.post("/updateEvent", eventManager.updateEvent);
routes.delete("/deleteEvent", eventManager.deleteEvent);

module.exports = routes;
