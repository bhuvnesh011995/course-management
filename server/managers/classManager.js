const classModel = require("../models/classModel");

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
        $project: {
          _id: 1,
          classCode: 1,
          course: "$courseData.courseName",
          classStatus: 1,
          startTiming: 1,
          endTiming: 1,
          startDate: 1,
          endDate: 1,
          lectureDay: 1,
          created_at: 1,
          updated_at: 1,
        },
      },
    ]);
    return classDetails[0];
  } catch (err) {
    console.error(err);
  }
};

const getClasses = async (user) => {
  try {
    const allClasses = await classModel.aggregate([
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
        $project: {
          _id: 1,
          classCode: 1,
          course: "$courseData.courseName",
          endDate: 1,
          startDate: 1,
          startTiming: 1,
          endTiming: 1,
        },
      },
    ]);
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
        startTiming: data.startTiming,
        endTiming: data.endTiming,
        startDate: data.startDate,
        endDate: data.endDate,
        lectureDay: data.lectureDay,
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
        $project: {
          _id: 1,
          classCode: 1,
          course: "$courseData.courseName",
          classStatus: 1,
          startTiming: 1,
          endTiming: 1,
          startDate: 1,
          endDate: 1,
          lectureDay: 1,
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

module.exports = {
  getClasses,
  addClass,
  getClass,
  updateClass,
  deleteClass,
};
