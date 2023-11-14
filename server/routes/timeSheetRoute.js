const routes = require("express").Router();
const timesheetManager = require("../managers/timesheetManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addTimesheet", timesheetManager.addTimesheet);
routes.get("/getTimesheets", userAuth, timesheetManager.getTimesheets);
routes.get("/getTimesheet", timesheetManager.getTimesheet);
routes.post("/updateTimesheet", timesheetManager.updateTimesheet);
routes.delete("/deleteTimesheet", timesheetManager.deleteTimesheet);

module.exports = routes;
