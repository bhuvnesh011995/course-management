const employeeModel = require("../models/employeeModel");
const EmployeeModel = require("../models/employeeModel");
const db = require("../models");
const addEmployee = async (req, res, next) => {
  try {
    const { body } = req;
    body["employeeName"] =
      body["employeeFirstName"] + " " + body["employeeLastName"];
    const createEmployee = await db.employees.create(body);
    const saveEmployee = await createEmployee.save();

    return res.status(200).send(saveEmployee);
  } catch (err) {
    next(err);
  }
};

const getEmployee = async (req, res, next) => {
  try {
    const { query } = req;
    const selectedEmployee = await db.employees.findOne({ _id: query._id });
    return res.status(200).send(selectedEmployee);
  } catch (err) {
    next(err);
  }
};

const getEmployees = async (req, res, next) => {
  try {
    const { query, user } = req;
    const allEmployees = await db.employees.find({});
    // aggregate([
    //   {
    //     $lookup: {
    //       from: "roles",
    //       let: { roleId: "$employeeRole" },
    //       pipeline: [
    //         {
    //           $match: {
    //             $expr: {
    //               $eq: ["$_id", "$$roleId"],
    //             },
    //           },
    //         },
    //       ],
    //       as: "roleDetails",
    //     },
    //   },
    //   { $unwind: "$roleDetails" },
    //   {
    //     $project: {
    //       _id: 1,
    //       employeeFirstName: 1,
    //       employeeLastName: 1,
    // employeeName:1,
    //       employeeEmail: 1,
    //       employeePhone: 1,
    //       employeePosition: 1,
    //       employeeDepartment: 1,
    //       employeeJoinDate: 1,
    //       employeeSalary: 1,
    //       employeeGender: 1,
    //       employeeRole: "$roleDetails.roleName",
    //       status: 1,
    //       employeeAddress: 1,
    //     },
    //   },
    // ]);
    return res.status(200).send(allEmployees);
  } catch (err) {
    next(err);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const { body } = req;
    body["employeeName"] =
      body["employeeFirstName"] + " " + body["employeeLastName"];
    const updateEmployee = await db.employees.updateOne(
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
    const deleteEmployee = await db.employees.deleteOne({ _id: query._id });
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
