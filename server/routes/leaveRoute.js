const routes = require("express").Router();
const leaveManager = require("../managers/leaveManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addLeave", [userAuth], leaveManager.addLeave);
routes.get("/getLeaves", [userAuth], leaveManager.getLeaves);
routes.get("/getLeave", [userAuth], leaveManager.getLeave);
routes.post("/updateLeave", [userAuth], leaveManager.updateLeave);
routes.delete("/deleteLeave", [userAuth], leaveManager.deleteLeave);

module.exports = routes;
