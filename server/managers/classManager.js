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
          classCode: 1,
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
          classCode: 1,
          title: "$classCode",
          course: "$courseData.courseName",
          endDate: 1,
          startDate: 1,
          trainer: "$trainerDetails.trainerName",
          startTime: 1,
          endTime: 1,
        },
      }
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
        classCode: body.classCode,
        course: body.course,
        classStatus: body.classStatus,
        startTime: body.startTime,
        endTime: body.endTime,
        startDate: body.startDate,
        endDate: body.endDate,
        lectureDay: body.lectureDay,
        trainer: body.trainer,
      }
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
          classCode: 1,
          title: "$classCode",
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

const deleteClass = async (req, res, next) => {
  try {
    const { query } = req;
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

module.exports = {
  getClasses,
  addClass,
  getClass,
  updateClass,
  deleteClass,
  getCourseClasses,
};
