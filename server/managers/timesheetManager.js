const db = require("../models");

const addTimesheet = async (req, res, next) => {
  try {
    const newTimesheet = await db.timesheets.create(req.body);
    const addedTimesheet = await db.timesheets.aggregate([
      {
        $match: {
          $expr: {
            $eq: ["$_id", newTimesheet._id],
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "employee",
          foreignField: "_id",
          as: "employeeDetails",
        },
      },
      { $unwind: "$employeeDetails" },
      {
        $project: {
          _id: 1,
          date: 1,
          employee: 1,
          addHoursWorked: 1,
          addOvertimeHours: 1,
          shiftTiming: 1,
          name: "$employeeDetails.name",
        },
      },
    ]);
    return res.status(200).send({
      data: addedTimesheet,
      message: "timesheet added successfully !",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getTimesheets = async (req, res, next) => {
  try {
    const allTimesheets = await db.timesheets.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "employee",
          foreignField: "_id",
          as: "employeeDetails",
        },
      },
      { $unwind: "$employeeDetails" },
      {
        $project: {
          _id: 1,
          date: 1,
          employee: 1,
          addHoursWorked: 1,
          addOvertimeHours: 1,
          shiftTiming: 1,
          name: "$employeeDetails.name",
        },
      },
    ]);
    return res.status(200).send(allTimesheets);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getTimesheet = async (req, res, next) => {
  try {
    const selectedTimeSheet = await db.timesheets.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$_id" }, req.query._id],
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "employee",
          foreignField: "_id",
          as: "employeeDetails",
        },
      },
      { $unwind: "$employeeDetails" },
      {
        $project: {
          _id: 1,
          date: 1,
          employee: 1,
          addHoursWorked: 1,
          addOvertimeHours: 1,
          shiftTiming: 1,
          name: "$employeeDetails.name",
        },
      },
    ]);
    return res.status(200).send(selectedTimeSheet);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updateTimesheet = async (req, res, next) => {
  try {
    const updatedTimesheet = await db.timesheets.updateOne(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    const timesheet = await db.timesheets.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$_id" }, req.body._id],
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "employee",
          foreignField: "_id",
          as: "employeeDetails",
        },
      },
      { $unwind: "$employeeDetails" },
      {
        $project: {
          _id: 1,
          date: 1,
          employee: 1,
          addHoursWorked: 1,
          addOvertimeHours: 1,
          shiftTiming: 1,
          name: "$employeeDetails.name",
        },
      },
    ]);
    return res
      .status(200)
      .send({ data: timesheet, message: "timesheet updated successfully" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteTimesheet = async (req, res, next) => {
  try {
    const deletedTimesheet = await db.timesheets.deleteOne({
      _id: req.query._id,
    });
    return res.status(200).send("timesheet deleted successfully");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  addTimesheet,
  getTimesheets,
  getTimesheet,
  updateTimesheet,
  deleteTimesheet,
};
