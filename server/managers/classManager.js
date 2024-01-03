const mongoose = require("mongoose");
const classModel = require("../models/classModel");
const EventModel = require("../models/eventModal");
const db = require("../models");
const addClass = async (req, res, next) => {
  try {
    const { body } = req;
    const CreateClass = await db.classes.create(body);
    const newClass = await CreateClass.save();
    const classDetails = await db.classes.aggregate([
      {
        $match: {
          $expr: { $eq: [newClass._id, "$_id"] },
        },
      },
      {
        $lookup: {
          from: "courses",
          localField: "course",
          foreignField: "_id",
          as: "courseData",
        },
      },
      { $unwind: "$courseData" },
      {
        $lookup: {
          from: "trainers",
          localField: "trainer",
          foreignField: "_id",
          as: "trainerDetails",
        },
      },
      { $unwind: "$trainerDetails" },
      {
        $project: {
          _id: 1,
          course: "$courseData.courseName",
          classStatus: 1,
          startTime: 1,
          endTime: 1,
          startDate: 1,
          endDate: 1,
          trainer: "$trainerDetails.trainerName",
          lectureDay: 1,
          created_at: 1,
          updated_at: 1,
        },
      },
    ]);
    return res.status(200).send(classDetails[0]);
  } catch (err) {
    next(err);
  }
};

const getClasses = async (req, res, next) => {
  try {
    const { query, user } = req;
    const aggregateQuery = [];

    if (query?.course?.length) {
      aggregateQuery.push({
        $match: {
          $expr: {
            $eq: [{ $toString: "$course" }, query.course],
          },
        },
      });
    }

    if (query?.trainer?.length) {
      aggregateQuery.push({
        $match: {
          $expr: {
            $eq: [{ $toString: "$trainer" }, query.trainer],
          },
        },
      });
    }

    if (query?.class?.length) {
      aggregateQuery.push({
        $match: {
          $expr: {
            $eq: [{ $toString: "$_id" }, query.class],
          },
        },
      });
    }

    if (query?.startDate?.length) {
      aggregateQuery.push({
        $match: {
          startDate: {
            $gte: new Date(query.startDate),
          },
        },
      });
    }

    if (query?.endDate?.length) {
      aggregateQuery.push({
        $match: {
          endDate: {
            $lte: new Date(query.endDate),
          },
        },
      });
    }

    aggregateQuery.push(
      {
        $lookup: {
          from: "courses",
          localField: "course",
          foreignField: "_id",
          as: "courseData",
        },
      },
      { $unwind: "$courseData" },
      {
        $lookup: {
          from: "trainers",
          localField: "trainer",
          foreignField: "_id",
          as: "trainerDetails",
        },
      },
      { $unwind: "$trainerDetails" },
      {
        $project: {
          _id: 1,
          title: "$courseData.courseName",
          course: "$courseData.courseName",
          endDate: 1,
          startDate: 1,
          lectureDay: 1,
          trainer: "$trainerDetails.trainerName",
          startTime: 1,
          endTime: 1,
        },
      },
    );

    const allClasses = await db.classes.aggregate(aggregateQuery);
    return res.status(200).send({ classes: allClasses, user: user });
  } catch (err) {
    next(err);
  }
};

const getClass = async (req, res, next) => {
  try {
    const { query } = req;
    const selectedClass = await db.classes.find({ _id: query._id });
    return res.status(200).send(selectedClass);
  } catch (err) {
    next(err);
  }
};

const updateClass = async (req, res, next) => {
  try {
    const { body } = req;
    const updateClass = await db.classes.updateOne(
      { _id: body._id },
      {
        $set: body,
      },
    );
    const updatedClass = await db.classes.aggregate([
      {
        $match: {
          $expr: { $eq: [body._id, { $toString: "$_id" }] },
        },
      },
      {
        $lookup: {
          from: "courses",
          localField: "course",
          foreignField: "_id",
          as: "courseData",
        },
      },
      { $unwind: "$courseData" },
      {
        $lookup: {
          from: "trainers",
          let: { trainerId: "$trainer" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$trainerId"],
                },
              },
            },
          ],
          as: "trainerDetails",
        },
      },
      { $unwind: "$trainerDetails" },
      {
        $project: {
          _id: 1,
          title: "$courseData.courseName",
          course: "$courseData.courseName",
          classStatus: 1,
          startTime: 1,
          endTime: 1,
          startDate: 1,
          endDate: 1,
          lectureDay: 1,
          trainer: "$trainerDetails.trainerName",
          created_at: 1,
          updated_at: 1,
        },
      },
    ]);
    return res.status(200).send(updatedClass[0]);
  } catch (err) {
    next(err);
  }
};

const getCourseClass = async (req, res, next) => {
  try {
    const getCourseClass = await db.classes.find({
      _id: req.query.classId,
    });
    if (getCourseClass.length) return res.status(200).send(getCourseClass);
    else
      return res
        .status(202)
        .send({ message: "customer course not assigned in any class" });
  } catch (err) {
    next(err);
    console.error(err);
  }
};

const deleteClass = async (req, res, next) => {
  try {
    const { query } = req;
    const classInLead = await db.lead.find({ class: query._id });
    if (classInLead) {
      return res.status(202).send({ message: "class Existed in lead !!" });
    }
    const deleteClass = await db.classes.deleteOne({ _id: query._id });
    return res.status(200).send({ message: "class deleted successfully !!" });
  } catch (err) {
    next(err);
  }
};

const getCourseClasses = async (req, res, next) => {
  try {
    const { query } = req;
    const getClasses = await db.classes.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$course" }, query.id],
          },
        },
      },
    ]);
    return res.status(200).send(getClasses);
  } catch (err) {
    next(err);
  }
};

const getDashboardClasses = async (req, res, next) => {
  try {
    const dashboardCourses = await db.classes.aggregate([
      {
        $lookup: {
          from: "courses",
          let: { courseId: "$course" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$courseId", "$_id"],
                },
              },
            },
          ],
          as: "courseDetails",
        },
      },
      { $unwind: "$courseDetails" },
      {
        $lookup: {
          from: "trainers",
          let: { trainerId: "$trainer" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$trainerId", "$_id"],
                },
              },
            },
          ],
          as: "trainerDetails",
        },
      },
      { $unwind: "$trainerDetails" },
      {
        $project: {
          _id: 1,
          trainerName: "$trainerDetails.trainerName",
          trainerImagePath: "$trainerDetails.trainerImagePath",
          courseName: "$courseDetails.courseName",
          startDate: 1,
          endDate: 1,
        },
      },
    ]);
    return res.status(200).send(dashboardCourses);
  } catch (err) {
    next(err);
  }
};

const getFilteredClasses = async (req, res, next) => {
  try {
    const filterClassQuery = [];
    filterClassQuery.push(
      {
        $lookup: {
          from: "courses",
          localField: "course",
          foreignField: "_id",
          as: "courseDetails",
        },
      },
      { $unwind: "$courseDetails" },
      {
        $match: {
          $expr: {
            $eq: [
              { $toString: "$courseDetails.tradeType" },
              req.query.tradeType,
            ],
          },
        },
      },
      {
        $match: {
          $expr: {
            $eq: [
              { $toString: "$courseDetails.registrationType" },
              req.query.registrationType,
            ],
          },
        },
      },
    );
    if (req.query.tradeLevel.length) {
      filterClassQuery.push({
        $match: {
          $expr: {
            $eq: ["$courseDetails.tradeLevel", req.query.tradeLevel],
          },
        },
      });
    }
    filterClassQuery.push({
      $project: {
        _id: 1,
        courseName: "$courseDetails.courseName",
      },
    });
    const filteredClasses = await db.classes.aggregate(filterClassQuery);

    return res.status(200).send(filteredClasses);
  } catch (err) {
    next(err);
  }
};

const getCETClasses = async (req, res, next) => {
  try {
    const allCetClasses = await db.classes.aggregate([
      {
        $lookup: {
          from: "courses",
          let: { courseId: "$course" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$courseId", "$_id"],
                },
              },
            },
          ],
          as: "courseDetails",
        },
      },
      { $unwind: "$courseDetails" },
      {
        $lookup: {
          from: "registrationtypes",
          let: { registrationId: "$courseDetails.registrationType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$registrationId", "$_id"],
                },
              },
            },
            {
              $match: {
                $expr: {
                  $eq: ["$registrationCode", "CRW"],
                },
              },
            },
          ],
          as: "registrationDetails",
        },
      },
      { $unwind: "$registrationDetails" },
      {
        $project: {
          _id: 1,
          course: "$courseDetails.courseName",
        },
      },
    ]);
    return res.status(200).send({ classes: allCetClasses });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getClasses,
  addClass,
  getClass,
  updateClass,
  deleteClass,
  getCourseClasses,
  getCourseClass,
  getDashboardClasses,
  getFilteredClasses,
  getCETClasses,
};
