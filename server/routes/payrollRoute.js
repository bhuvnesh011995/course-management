const routes = require("express").Router();
const payrollManager = require("../managers/payrollManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addPayroll", [userAuth], payrollManager.addPayroll);
routes.get("/getPayrolls", [userAuth], payrollManager.getPayrolls);
routes.get("/getPayroll", [userAuth], payrollManager.getPayroll);
routes.post("/updatePayroll", [userAuth], payrollManager.updatePayroll);
routes.delete("/deletePayroll", [userAuth], payrollManager.deletePayroll);

module.exports = routes;
