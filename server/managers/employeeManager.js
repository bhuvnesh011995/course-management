const employeeModel = require("../models/employeeModel");
const EmployeeModel = require("../models/employeeModel");
const db = require("../models");
const addEmployee = async (req, res, next) => {
  try {
    const { body } = req;
    body["name"] = body["firstName"] + " " + body["lastName"];
    const createEmployee = await db.user.create(body);
    const saveEmployee = await createEmployee.save();

    return res.status(200).send(saveEmployee);
  } catch (err) {
    next(err);
  }
};

const getEmployee = async (req, res, next) => {
  try {
    const { query } = req;
    const selectedEmployee = await db.user.findOne({ _id: query._id });
    return res.status(200).send(selectedEmployee);
  } catch (err) {
    next(err);
  }
};

const getEmployees = async (req, res, next) => {
  try {
    const { query, user } = req;
    const allEmployees = await db.user.find({});
    return res.status(200).send(allEmployees);
  } catch (err) {
    next(err);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const { body } = req;
    body["name"] = body["firstName"] + " " + body["lastName"];
    const updateEmployee = await db.user.updateOne(
      { _id: body._id },
      {
        $set: body,
      }
    );
    return res
      .status(200)
      .send({ message: "employee details updated successfully !" });
  } catch (err) {
    next(err);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const { query } = req;
    const deleteEmployee = await db.user.deleteOne({ _id: query._id });
    return res.status(200).send({ message: "Employee Deleted Successfully !" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
