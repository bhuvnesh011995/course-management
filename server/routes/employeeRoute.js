const routes = require("express").Router();
const employeeManager = require("../managers/employeeManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addEmployee", employeeManager.addEmployee);
routes.get("/getEmployees", userAuth, employeeManager.getEmployees);
routes.get("/getEmployee", employeeManager.getEmployee);
routes.post("/updateEmployee", employeeManager.updateEmployee);

routes.delete("/deleteEmployee", employeeManager.deleteEmployee);
module.exports = routes;
