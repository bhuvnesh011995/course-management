const db = require("../models");

const addPayroll = async (req, res, next) => {
  try {
    const newPayroll = await db.payRolls.create(req.body);
    const newPayrollData = await db.payRolls.aggregate([
      {
        $match: {
          $expr: {
            $eq: ["$_id", newPayroll._id],
          },
        },
      },
      {
        $lookup: {
          from: "employees",
          localField: "employee",
          foreignField: "_id",
          as: "employeeDetails",
        },
      },
      { $unwind: "$employeeDetails" },
      {
        $project: {
          _id: 1,
          allowances: 1,
          deductions: 1,
          netSalary: 1,
          salary: 1,
          employeeName: "$employeeDetails.employeeName",
          employeeDepartment: "$employeeDetails.employeeDepartment",
          employeePosition: "$employeeDetails.employeePosition",
        },
      },
    ]);
    return res.status(200).send(newPayrollData);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPayroll = async (req, res, next) => {
  try {
    const selectedPayrollData = await db.payRolls.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$_id" }, req.query._id],
          },
        },
      },
      {
        $lookup: {
          from: "employees",
          localField: "employee",
          foreignField: "_id",
          as: "employeeDetails",
        },
      },
      { $unwind: "$employeeDetails" },
      {
        $project: {
          _id: 1,
          allowances: 1,
          deductions: 1,
          netSalary: 1,
          salary: 1,
          employee: 1,
          employeeName: "$employeeDetails.employeeName",
          employeeDepartment: "$employeeDetails.employeeDepartment",
          employeePosition: "$employeeDetails.employeePosition",
        },
      },
    ]);
    return res.status(200).send(selectedPayrollData[0]);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updatePayroll = async (req, res, next) => {
  try {
    const updatedPayroll = await db.payRolls.updateOne(
      { _id: req.body._id },
      {
        allowances: req.body.allowances,
        deductions: req.body.deductions,
        employee: req.body.employee,
        netSalary: req.body.netSalary,
        salary: req.body.salary,
      }
    );
    return res.status(200).send("Payroll updated successfully !");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deletePayroll = async (req, res, next) => {
  try {
    const deletedPayroll = await db.payRolls.deleteOne({ _id: req.query._id });
    return res.status(200).send("Payroll deleted Successfully !");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPayrolls = async (req, res, next) => {
  try {
    const allPayrolls = await db.payRolls.aggregate([
      {
        $lookup: {
          from: "employees",
          localField: "employee",
          foreignField: "_id",
          as: "employeeDetails",
        },
      },
      { $unwind: "$employeeDetails" },
      {
        $project: {
          _id: 1,
          allowances: 1,
          deductions: 1,
          netSalary: 1,
          salary: 1,
          employeeName: "$employeeDetails.employeeName",
          employeeDepartment: "$employeeDetails.employeeDepartment",
          employeePosition: "$employeeDetails.employeePosition",
        },
      },
    ]);
    return res.status(200).send(allPayrolls);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  addPayroll,
  getPayroll,
  updatePayroll,
  deletePayroll,
  getPayrolls,
};
