const routes = require("express").Router();
const timesheetManager = require("../managers/timesheetManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addTimesheet", [userAuth], timesheetManager.addTimesheet);
routes.get("/getTimesheets", [userAuth], timesheetManager.getTimesheets);
routes.get("/getTimesheet", [userAuth], timesheetManager.getTimesheet);
routes.post("/updateTimesheet", [userAuth], timesheetManager.updateTimesheet);
routes.delete("/deleteTimesheet", [userAuth], timesheetManager.deleteTimesheet);

module.exports = routes;
