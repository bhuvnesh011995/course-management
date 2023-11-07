const employeeModel = require("../models/employeeModel");
const EmployeeModel = require("../models/employeeModel");
const db = require("../models")
const addEmployee = async (data) => {
  try {
    data["employeeName"] =
      data["employeeFirstName"] + " " + data["employeeLastName"];
    const createEmployee = await db.employees.create(data);
    const saveEmployee = await createEmployee.save();

    return saveEmployee;
  } catch (err) {
    console.error(err);
  }
};

const getEmployee = async (data) => {
  try {
    const selectedEmployee = await db.employees.findOne({ _id: data._id });
    return selectedEmployee;
  } catch (err) {
    console.error(err);
  }
};

const getEmployees = async (data) => {
  try {
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
    return allEmployees;
  } catch (err) {
    console.error(err);
  }
};

const updateEmployee = async (data) => {
  try {
    data["employeeName"] =
      data["employeeFirstName"] + " " + data["employeeLastName"];
    const updateEmployee = await db.employees.updateOne(
      { _id: data._id },
      {
        employeeFirstName: data?.employeeFirstName,
        employeeLastName: data?.employeeLastName,
        employeeName: data?.employeeName,
        employeeEmail: data?.employeeEmail,
        employeePhone: data?.employeePhone,
        employeePosition: data?.employeePosition,
        employeeDepartment: data?.employeeDepartment,
        employeeJoinDate: data?.employeeJoinDate,
        employeeSalary: data?.employeeSalary,
        employeeGender: data?.employeeGender,
        employeeRole: data?.employeeRole,
        status: data?.status,
        employeeAddress: data?.employeeAddress,
      }
    );
    return { message: "employee details updated successfully !" };
  } catch (err) {
    console.error(err);
  }
};

const deleteEmployee = async (data) => {
  try {
    const deleteEmployee = await db.employees.deleteOne({ _id: data._id });
    return { message: "Employee Deleted Successfully !" };
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
