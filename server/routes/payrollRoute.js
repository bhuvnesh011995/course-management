const routes = require("express").Router();
const payrollManager = require("../managers/payrollManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addPayroll", payrollManager.addPayroll);
routes.get("/getPayrolls", userAuth, payrollManager.getPayrolls);
routes.get("/getPayroll", payrollManager.getPayroll);
routes.post("/updatePayroll", payrollManager.updatePayroll);
routes.delete("/deletePayroll", payrollManager.deletePayroll);

module.exports = routes;
