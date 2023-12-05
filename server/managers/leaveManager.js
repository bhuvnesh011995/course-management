const db = require("../models");

const addLeave = async (req, res, next) => {
  try {
    const newLeave = await db.leaves.create(req.body);
    const newLeaveData = await db.leaves.aggregate([
      {
        $match: {
          $expr: {
            $eq: ["$_id", newLeave._id],
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
        $lookup: {
          from: "leave",
          localField: "leavetype",
          foreignField: "_id",
          as: "leaveDetails",
        },
      },
      { $unwind: "$leaveDetails" },
      {
        $lookup: {
          from: "position",
          let: { positionId: "$employeeDetails.position" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$positionId"],
                },
              },
            },
          ],
          as: "positionDetails",
        },
      },
      { $unwind: "$positionDetails" },
      {
        $lookup: {
          from: "department",
          let: { departmentId: "$employeeDetails.department" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$departmentId"],
                },
              },
            },
          ],
          as: "departmentDetails",
        },
      },
      { $unwind: "$departmentDetails" },
      {
        $project: {
          _id: 1,
          leavetype: 1,
          startDate: 1,
          endDate: 1,
          employee: 1,
          leaveName: "$leaveDetails.name",
          name: "$employeeDetails.name",
          department: "$departmentDetails.name",
          position: "$positionDetails.name",
        },
      },
    ]);
    return res
      .status(200)
      .send({ data: newLeaveData, message: "Leave added successfully" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getLeave = async (req, res, next) => {
  try {
    const selectedLeaveData = await db.leaves.aggregate([
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
        $lookup: {
          from: "leave",
          localField: "leavetype",
          foreignField: "_id",
          as: "leaveDetails",
        },
      },
      { $unwind: "$leaveDetails" },
      {
        $lookup: {
          from: "position",
          let: { positionId: "$employeeDetails.position" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$positionId"],
                },
              },
            },
          ],
          as: "positionDetails",
        },
      },
      { $unwind: "$positionDetails" },
      {
        $lookup: {
          from: "department",
          let: { departmentId: "$employeeDetails.department" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$departmentId"],
                },
              },
            },
          ],
          as: "departmentDetails",
        },
      },
      { $unwind: "$departmentDetails" },
      {
        $project: {
          _id: 1,
          leavetype: 1,
          startDate: 1,
          endDate: 1,
          employee: 1,
          leaveName: "$leaveDetails.name",
          name: "$employeeDetails.name",
          department: "$departmentDetails.name",
          position: "$positionDetails.name",
        },
      },
    ]);
    return res.status(200).send(selectedLeaveData[0]);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updateLeave = async (req, res, next) => {
  try {
    const updatedLeave = await db.leaves.updateOne(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    const leave = await db.leaves.aggregate([
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
        $lookup: {
          from: "leave",
          localField: "leavetype",
          foreignField: "_id",
          as: "leaveDetails",
        },
      },
      { $unwind: "$leaveDetails" },
      {
        $lookup: {
          from: "position",
          let: { positionId: "$employeeDetails.position" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$positionId"],
                },
              },
            },
          ],
          as: "positionDetails",
        },
      },
      { $unwind: "$positionDetails" },
      {
        $lookup: {
          from: "department",
          let: { departmentId: "$employeeDetails.department" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$departmentId"],
                },
              },
            },
          ],
          as: "departmentDetails",
        },
      },
      { $unwind: "$departmentDetails" },
      {
        $project: {
          _id: 1,
          leavetype: 1,
          startDate: 1,
          endDate: 1,
          employee: 1,
          leaveName: "$leaveDetails.name",
          name: "$employeeDetails.name",
          department: "$departmentDetails.name",
          position: "$positionDetails.name",
        },
      },
    ]);
    return res
      .status(200)
      .send({ data: leave, message: "leave updated successfully !" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteLeave = async (req, res, next) => {
  try {
    const deletedLeave = await db.leaves.deleteOne({ _id: req.query._id });
    return res.status(200).send("leave deleted Successfully !");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getLeaves = async (req, res, next) => {
  try {
    const allLeaves = await db.leaves.aggregate([
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
        $lookup: {
          from: "leave",
          localField: "leavetype",
          foreignField: "_id",
          as: "leaveDetails",
        },
      },
      { $unwind: "$leaveDetails" },
      {
        $lookup: {
          from: "position",
          let: { positionId: "$employeeDetails.position" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$positionId"],
                },
              },
            },
          ],
          as: "positionDetails",
        },
      },
      { $unwind: "$positionDetails" },
      {
        $lookup: {
          from: "department",
          let: { departmentId: "$employeeDetails.department" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$departmentId"],
                },
              },
            },
          ],
          as: "departmentDetails",
        },
      },
      { $unwind: "$departmentDetails" },
      {
        $project: {
          _id: 1,
          leavetype: 1,
          startDate: 1,
          endDate: 1,
          employee: 1,
          leaveName: "$leaveDetails.name",
          name: "$employeeDetails.name",
          department: "$departmentDetails.name",
          position: "$positionDetails.name",
        },
      },
    ]);
    return res.status(200).send(allLeaves);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  addLeave,
  getLeaves,
  getLeave,
  updateLeave,
  deleteLeave,
};
