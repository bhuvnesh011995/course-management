const employeeManager = require("../managers/employeeManager");

const addEmployee = (req, res) => {
  employeeManager
    .addEmployee(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getEmployees = (req, res) => {
  employeeManager
    .getEmployees(req.query, req.user)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getEmployee = (req, res) => {
  employeeManager
    .getEmployee(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => response.status(500).send(err));
};

const updateEmployee = (req, res) => {
  employeeManager
    .updateEmployee(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => response.status(500).send(err));
};

const deleteEmployee = (req, res) => {
  employeeManager
    .deleteEmployee(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => response.status(500).send(err));
};

module.exports = {
  addEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
