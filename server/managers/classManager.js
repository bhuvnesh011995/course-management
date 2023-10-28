const mongoose = require("mongoose");
const classModel = require("../models/classModel");
const EventModel = require("../models/eventModal");

const addClass = async (data) => {
  try {
    const CreateClass = await classModel.create(data);
    const newClass = await CreateClass.save();
    const classDetails = await classModel.aggregate([
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
    // newClass["class"] = newClass._id;
    // await EventModel.create(newClass);
    return classDetails[0];
  } catch (err) {
    console.error(err);
  }
};

const getClasses = async (data, user) => {
  try {
    const aggregateQuery = [];

    if (data?.course?.length) {
      aggregateQuery.push({
        $match: {
          $expr: {
            $eq: [{ $toString: "$course" }, data.course],
          },
        },
      });
    }

    if (data?.trainer?.length) {
      aggregateQuery.push({
        $match: {
          $expr: {
            $eq: [{ $toString: "$trainer" }, data.trainer],
          },
        },
      });
    }

    if (data?.class?.length) {
      aggregateQuery.push({
        $match: {
          $expr: {
            $eq: [{ $toString: "$_id" }, data.class],
          },
        },
      });
    }

    if (data?.startDate?.length) {
      aggregateQuery.push({
        $match: {
          startDate: {
            $gte: new Date(data.startDate),
          },
        },
      });
    }

    if (data?.endDate?.length) {
      aggregateQuery.push({
        $match: {
          endDate: {
            $lte: new Date(data.endDate),
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

    const allClasses = await classModel.aggregate(aggregateQuery);
    return { classes: allClasses, user: user };
  } catch (err) {
    console.error(err);
  }
};

const getClass = async (data) => {
  try {
    const selectedClass = await classModel.find({ _id: data._id });
    return selectedClass;
  } catch (err) {
    console.error(err);
  }
};

const updateClass = async (data) => {
  try {
    const updateClass = await classModel.updateOne(
      { _id: data._id },
      {
        classCode: data.classCode,
        course: data.course,
        classStatus: data.classStatus,
        startTime: data.startTime,
        endTime: data.endTime,
        startDate: data.startDate,
        endDate: data.endDate,
        lectureDay: data.lectureDay,
        trainer: data.trainer,
      }
    );
    const updatedClass = await classModel.aggregate([
      {
        $match: {
          $expr: { $eq: [data._id, { $toString: "$_id" }] },
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
    return updatedClass[0];
  } catch (err) {
    console.error(err);
  }
};

const deleteClass = async (data) => {
  try {
    const deleteClass = await classModel.deleteOne({ _id: data._id });
    return { message: "class deleted successfully !!" };
  } catch (err) {
    console.error(err);
  }
};

const getCourseClasses = async (courseId) => {
  try {
    const getClasses = await classModel.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$course" }, courseId],
          },
        },
      },
    ]);
    return getClasses;
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
};
