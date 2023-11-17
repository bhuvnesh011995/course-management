const TrainerModel = require("../models/trainerModel");
const ClassModel = require("../models/classModel");
const fs = require("fs");
const classModel = require("../models/classModel");
const db = require("../models");
const addNewTrainer = async (req, res, next) => {
  try {
    let { body, file } = req;
    const query = JSON.parse(body.trainerData);
    if (file) {
      query["trainerImagePath"] = `images/${file.filename}`;
      query["trainerImageName"] = `images/${file.originalName}`;
    }
    const newTrainer = await db.trainers.create(query);
    const saveTrainer = await newTrainer.save();
    return res.status(200).send(saveTrainer);
  } catch (err) {
    next(err);
  }
};

const getTrainers = async (req, res, next) => {
  try {
    const trainers = await db.trainers.find({});
    return res.status(200).send(trainers);
  } catch (err) {
    next(err);
  }
};

const updateTrainer = async (req, res, next) => {
  try {
    let { body, file } = req;
    const query = JSON.parse(body?.trainerData);
    if (file) {
      query["trainerImagePath"] = `images/${file.filename}`;
    }
    const updatedTrainer = await db.trainers.updateOne(
      { _id: query._id },
      {
        $set: query,
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
    return res.status(200).send({ message: "Trainer updated Successfully !" });
  } catch (err) {
    next(err);
  }
};

const deleteTrainer = async (req, res, next) => {
  try {
    let data = req.query;
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
      return res
        .status(202)
        .send({ message: "This Trainer is existed in class" });
    }

    const deleteTrainer = await db.trainers.deleteOne({ _id: data._id });
    return res.status(200).send({ message: "Trainer deleted successfully !" });
  } catch (err) {
    next(err);
  }
};

const getTrainer = async (req, res, next) => {
  try {
    let data = req.query;
    const trainerData = await db.trainers.findOne({ _id: data._id });
    return res.status(200).send(trainerData);
  } catch (err) {
    next(err);
  }
};

const trainerClassDetails = async (req, res, next) => {
  try {
    let data = req.query;
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
    return res.status(200).send(trainerCourses);
  } catch (err) {
    next(err);
  }
};

const getDashboardTrainers = async (req, res, next) => {
  // const dashboardTrainers = await db.trainers.aggregate([

  // ])
  console.log("kojhug");
};

module.exports = {
  addNewTrainer,
  getTrainers,
  updateTrainer,
  deleteTrainer,
  getTrainer,
  trainerClassDetails,
  getDashboardTrainers,
};
