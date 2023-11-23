const routes = require("express").Router();
const eventManager = require("../managers/eventManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/AddEvent", [userAuth], eventManager.AddEvent);
routes.get("/getEvents", [userAuth], eventManager.getEvents);
routes.get("/getEvent", [userAuth], eventManager.getEvent);
routes.post("/updateEvent", [userAuth], eventManager.updateEvent);
routes.delete("/deleteEvent", [userAuth], eventManager.deleteEvent);

module.exports = routes;
