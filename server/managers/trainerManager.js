const TrainerModel = require("../models/trainerModel");
const ClassModel = require("../models/classModel");
const fs = require("fs");
const classModel = require("../models/classModel");
const db = require("../models");
const addNewTrainer = async ({ body, file }) => {
  try {
    const query = JSON.parse(body.trainerData);
    if (file) {
      query["trainerImagePath"] = `images/${file.filename}`;
      query["trainerImageName"] = `images/${file.originalName}`;
    }
    const newTrainer = await db.trainers.create(query);
    const saveTrainer = await newTrainer.save();
    return saveTrainer;
  } catch (err) {
    console.error(err);
  }
};

const getTrainers = async (data) => {
  try {
    const trainers = await db.trainers.find({});
    return trainers;
  } catch (err) {
    console.error(err);
  }
};

const updateTrainer = async ({ body, file }) => {
  try {
    const query = JSON.parse(body?.trainerData);
    if (file) {
      query["trainerImagePath"] = `images/${file.filename}`;
    }
    const updatedTrainer = await db.trainers.updateOne(
      { _id: query._id },
      {
        trainerName: query.trainerName,
        trainerEmail: query.trainerEmail,
        trainerMobile: query.trainerMobile,
        trainerDOB: query.trainerDOB,
        trainerDesignation: query.trainerDesignation,
        trainerImagePath: query.trainerImagePath,
        trainerAddress: query.trainerAddress,
      }
    );
    if (query?.deleteImagePath) {
      fs.unlink(
        `uploads\\images\\${
          query?.deleteImagePath.split("/")[
            [query?.deleteImagePath.split("/").length - 1]
          ]
        }`,
        (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("file Deleted");
          }
        }
      );
    }
    return { message: "Trainer updated Successfully !" };
  } catch (err) {
    console.error(err);
  }
};

const deleteTrainer = async (data) => {
  try {
    const isExistedTrainer = await db.classes.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$trainer" }, data._id],
          },
        },
      },
    ]);

    if (isExistedTrainer.length) {
      return { message: "This Trainer is existed in class", completed: 0 };
    }

    const deleteTrainer = await db.trainers.deleteOne({ _id: data._id });
    return { message: "Trainer deleted successfully !", completed: 1 };
  } catch (err) {
    console.error(err);
  }
};

const getTrainer = async (data) => {
  try {
    const trainerData = await db.trainers.findOne({ _id: data._id });
    return trainerData;
  } catch (err) {
    console.error(err);
  }
};

const trainerClassDetails = async (data) => {
  try {
    const trainerCourses = await db.classes.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$trainer" }, data._id],
          },
        },
      },
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
        $project: {
          _id: 1,
          classCode: 1,
          title: "$classCode",
          course: "$courseDetails.courseName",
          created_at: "$startDate",
          startDate: 1,
          endDate: 1,
          startTime: 1,
          endTime: 1,
          lectureDay: 1,
        },
      },
    ]);
    return trainerCourses;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewTrainer,
  getTrainers,
  updateTrainer,
  deleteTrainer,
  getTrainer,
  trainerClassDetails,
};
