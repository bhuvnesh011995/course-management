const routes = require("express").Router();
const employeeController = require("../controllers/employeeController");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addEmployee", employeeController.addEmployee);
routes.get("/getEmployees", userAuth, employeeController.getEmployees);
routes.get("/getEmployee", employeeController.getEmployee);
routes.post("/updateEmployee", employeeController.updateEmployee);

routes.delete("/deleteEmployee", employeeController.deleteEmployee);
module.exports = routes;
