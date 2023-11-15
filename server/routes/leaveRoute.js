const routes = require("express").Router();
const leaveManager = require("../managers/leaveManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addLeave", leaveManager.addLeave);
routes.get("/getLeaves", userAuth, leaveManager.getLeaves);
routes.get("/getLeave", leaveManager.getLeave);
routes.post("/updateLeave", leaveManager.updateLeave);
routes.delete("/deleteLeave", leaveManager.deleteLeave);

module.exports = routes;
