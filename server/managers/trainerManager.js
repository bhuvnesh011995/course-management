const TrainerModel = require("../models/trainerModel");
const ClassModel = require("../models/classModel");
const fs = require("fs");
const classModel = require("../models/classModel");
const db = require("../models");
const { deleteSelectedFile } = require("../commonUsableFunctions/deleteFile");
const addNewTrainer = async (req, res, next) => {
  try {
    let { body, file } = req;
    const query = JSON.parse(body.trainerData);
    if (file) {
      query["trainerImagePath"] = `images/${file.filename}`;
      query["trainerImageName"] = `images/${file.originalName}`;
    }
    const newTrainer = await db.trainers.create(query);
    const trainer = await db.trainers.aggregate([
      {
        $match: {
          $expr: {
            $eq: [newTrainer._id, "$_id"],
          },
        },
      },
      {
        $addFields: {
          showDesignation: {
            $gt: [{ $strLenCP: "$trainerDesignation" }, 0],
          },
        },
      },
      {
        $facet: {
          hasDesignation: [
            {
              $match: {
                $expr: {
                  $eq: ["$showDesignation", true],
                },
              },
            },
            {
              $lookup: {
                from: "designation",
                let: { designationId: "$trainerDesignation" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: [{ $toString: "$_id" }, "$$designationId"],
                      },
                    },
                  },
                ],
                as: "designationDetails",
              },
            },
            {
              $unwind: "$designationDetails",
            },
          ],
          hasNoDesignation: [
            {
              $match: {
                $expr: {
                  $eq: ["$showDesignation", false],
                },
              },
            },
          ],
        },
      },
      {
        $addFields: {
          bothCombined: {
            $concatArrays: ["$hasDesignation", "$hasNoDesignation"],
          },
        },
      },
      { $unwind: "$bothCombined" },
      {
        $project: {
          _id: "$bothCombined._id",
          trainerName: "$bothCombined.trainerName",
          trainerEmail: "$bothCombined.trainerEmail",
          trainerMobile: "$bothCombined.trainerMobile",
          trainerDOB: "$bothCombined.trainerDOB",
          trainerDesignation: "$bothCombined.trainerDesignation",
          designation: "$bothCombined.designationDetails.name",
          trainerImagePath: "$bothCombined.trainerImagePath",
          trainerAddress: "$bothCombined.trainerAddress",
          trainerImageName: "$bothCombined.trainerImageName",
        },
      },
    ]);
    return res.status(200).send(trainer[0]);
  } catch (err) {
    next(err);
  }
};

const getTrainers = async (req, res, next) => {
  try {
    const trainers = await db.trainers.aggregate([
      {
        $addFields: {
          showDesignation: {
            $gt: [{ $strLenCP: "$trainerDesignation" }, 0],
          },
        },
      },
      {
        $facet: {
          hasDesignation: [
            {
              $match: {
                $expr: {
                  $eq: ["$showDesignation", true],
                },
              },
            },
            {
              $lookup: {
                from: "designation",
                let: { designationId: "$trainerDesignation" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: [{ $toString: "$_id" }, "$$designationId"],
                      },
                    },
                  },
                ],
                as: "designationDetails",
              },
            },
            {
              $unwind: "$designationDetails",
            },
          ],
          hasNoDesignation: [
            {
              $match: {
                $expr: {
                  $eq: ["$showDesignation", false],
                },
              },
            },
          ],
        },
      },
      {
        $addFields: {
          bothCombined: {
            $concatArrays: ["$hasDesignation", "$hasNoDesignation"],
          },
        },
      },
      {
        $unwind: "$bothCombined",
      },
      {
        $project: {
          _id: "$bothCombined._id",
          trainerName: "$bothCombined.trainerName",
          trainerEmail: "$bothCombined.trainerEmail",
          trainerMobile: "$bothCombined.trainerMobile",
          trainerDOB: "$bothCombined.trainerDOB",
          trainerDesignation: "$bothCombined.trainerDesignation",
          designation: "$bothCombined.designationDetails.name",
          trainerImagePath: "$bothCombined.trainerImagePath",
          trainerAddress: "$bothCombined.trainerAddress",
          trainerImageName: "$bothCombined.trainerImageName",
        },
      },
    ]);
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
      },
    );
    if (query?.deleteImagePath) {
      // fs.unlink(
      //   `uploads\\images\\${
      //     query?.deleteImagePath.split("/")[
      //       [query?.deleteImagePath.split("/").length - 1]
      //     ]
      //   }`,
      //   (err) => {
      //     if (err) {
      //       console.error(err);
      //     }
      //   }
      // );
      deleteSelectedFile(
        query?.deleteImagePath.split("/")[
          [query?.deleteImagePath.split("/").length - 1]
        ],
      );
    }
    const trainer = await db.trainers.aggregate([
      {
        $match: {
          $expr: {
            $eq: [query._id, { $toString: "$_id" }],
          },
        },
      },
      {
        $addFields: {
          showDesignation: {
            $gt: [{ $strLenCP: "trainerDesignation" }, 0],
          },
        },
      },
      {
        $facet: {
          hasDesignation: [
            {
              $match: {
                $expr: {
                  $eq: ["$showDesignation", true],
                },
              },
            },
            {
              $lookup: {
                from: "designation",
                let: { designationId: "$trainerDesignation" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: [{ $toString: "$_id" }, "$$designationId"],
                      },
                    },
                  },
                ],
                as: "designationDetails",
              },
            },
            {
              $unwind: "$designationDetails",
            },
          ],
          hasNoDesignation: [
            {
              $match: {
                $expr: {
                  $eq: ["$showDesignation", false],
                },
              },
            },
          ],
        },
      },
      {
        $addFields: {
          bothCombined: {
            $concatArrays: ["$hasDesignation", "$hasNoDesignation"],
          },
        },
      },
      {
        $unwind: "$bothCombined",
      },
      {
        $project: {
          _id: "$bothCombined._id",
          trainerName: "$bothCombined.trainerName",
          trainerEmail: "$bothCombined.trainerEmail",
          trainerMobile: "$bothCombined.trainerMobile",
          trainerDOB: "$bothCombined.trainerDOB",
          trainerDesignation: "$bothCombined.trainerDesignation",
          designation: "$bothCombined.designationDetails.name",
          trainerImagePath: "$bothCombined.trainerImagePath",
          trainerAddress: "$bothCombined.trainerAddress",
          trainerImageName: "$bothCombined.trainerImageName",
        },
      },
    ]);
    return res
      .status(200)
      .send({ data: trainer[0], message: "Trainer updated Successfully !" });
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
          title: "$courseDetails.courseName",
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
  try {
    const dashboardTrainers = await db.trainers.aggregate([
      {
        $lookup: {
          from: "classes",
          let: { trainerId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$trainerId", "$trainer"],
                },
              },
            },
          ],
          as: "classDetails",
        },
      },
      {
        $addFields: {
          showDesignation: {
            $gt: [{ $strLenCP: "$trainerDesignation" }, 0],
          },
        },
      },
      {
        $facet: {
          hasDesignation: [
            {
              $match: {
                $expr: {
                  $eq: ["$showDesignation", true],
                },
              },
            },
            {
              $lookup: {
                from: "designation",
                let: { designationId: "$trainerDesignation" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: [{ $toString: "$_id" }, "$$designationId"],
                      },
                    },
                  },
                ],
                as: "designationDetails",
              },
            },
            {
              $unwind: "$designationDetails",
            },
          ],
          hasNoDesignation: [
            {
              $match: {
                $expr: {
                  $eq: ["$showDesignation", false],
                },
              },
            },
          ],
        },
      },

      {
        $addFields: {
          bothCombined: {
            $concatArrays: ["$hasDesignation", "$hasNoDesignation"],
          },
        },
      },
      { $unwind: "$bothCombined" },

      {
        $group: {
          _id: {
            trainerEmail: "$bothCombined.trainerEmail",
            trainerName: "$bothCombined.trainerName",
            designation: "$bothCombined.designationDetails.name",
            trainerImagePath: "$bothCombined.trainerImagePath",
            startTime: "$bothCombined.startTime",
            endTime: "$bothCombined.endTime",
            startDate: "$bothCombined.startDate",
            endDate: "$bothCombined.endDate",
          },
          classCount: {
            $sum: {
              $size: "$bothCombined.classDetails",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          trainerName: "$_id.trainerName",
          classCount: 1,
          designation: "$_id.designation",
          trainerImagePath: "$_id.trainerImagePath",
        },
      },
    ]);
    return res.status(200).send(dashboardTrainers);
  } catch (err) {
    next(err);
  }
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
