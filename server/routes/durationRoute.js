const routes = require("express").Router();
const durationManager = require("../managers/durationManager");

routes.post("/addDuration", durationManager.addDuration);

routes.get("/getDurations", durationManager.getDurations);

routes.post("/updateDuration", durationManager.updateDuration);
routes.delete("/deleteDuration", durationManager.deleteDuration);

module.exports = routes;
