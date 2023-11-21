const courseModel = require("../models/courseModel");
const db = require("../models");

const addNewCourse = async (req, res, next) => {
  try {
    const { body } = req;
    const newCourse = await db.course.create(body);
    const getNewCourse = await db.course.aggregate([
      { $match: { _id: newCourse._id } },
      {
        $lookup: {
          from: "tradetypes",
          let: { typeId: "$tradeType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$typeId", "$_id"],
                },
              },
            },
          ],
          as: "tradeTypeDetails",
        },
      },
      { $unwind: "$tradeTypeDetails" },
      {
        $lookup: {
          from: "durations",
          let: { durationId: "$duration" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$durationId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "durationDetails",
        },
      },
      { $unwind: "$durationDetails" },
      {
        $lookup: {
          from: "registrationtypes",
          let: { registrationId: "$registrationType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$registrationId", "$_id"],
                },
              },
            },
          ],
          as: "registrationTypeDetails",
        },
      },
      { $unwind: "$registrationTypeDetails" },

      {
        $addFields: {
          shouldLookup: {
            $gt: [{ $size: "$registrationTypeDetails.tradeLevelIds" }, 0],
          },
        },
      },

      {
        $facet: {
          hasTradeLevels: [
            {
              $match: {
                $expr: { $eq: ["$shouldLookup", true] },
              },
            },
            {
              $lookup: {
                from: "tradelevels",
                let: { levelId: "$tradeLevel" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ["$$levelId", { $toString: "$_id" }],
                      },
                    },
                  },
                ],
                as: "tradeLevelDetails",
              },
            },
            { $unwind: "$tradeLevelDetails" },
          ],
          noTradeLevels: [
            {
              $match: {
                $expr: { $eq: ["$shouldLookup", false] },
              },
            },
          ],
        },
      },

      {
        $addFields: {
          bothCombined: {
            $concatArrays: ["$hasTradeLevels", "$noTradeLevels"],
          },
        },
      },
      { $unwind: "$bothCombined" },

      {
        $project: {
          _id: "$bothCombined._id",
          courseName: "$bothCombined.courseName",
          price: "$bothCombined.price",
          duration: "$bothCombined.duration",
          tradeLevel: "$bothCombined.tradeLevelDetails.tradeLevel",
          tradeType: "$bothCombined.tradeTypeDetails.tradeType",
          durationNumber: "$bothCombined.durationDetails.duration",
          durationType: "$bothCombined.durationDetails.type",
          registrationType:
            "$bothCombined.registrationTypeDetails.registrationName",
          created_at: "$bothCombined.created_at",
        },
      },
    ]);
    return res.status(200).send(getNewCourse[0]);
  } catch (err) {
    next(err);
  }
};

const getCourses = async (req, res, next) => {
  try {
    const getAllCourses = await db.course.aggregate([
      {
        $lookup: {
          from: "tradetypes",
          let: { typeId: "$tradeType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$typeId", "$_id"],
                },
              },
            },
          ],
          as: "tradeTypeDetails",
        },
      },
      { $unwind: "$tradeTypeDetails" },
      {
        $lookup: {
          from: "durations",
          let: { durationId: "$duration" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$durationId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "durationDetails",
        },
      },
      { $unwind: "$durationDetails" },
      {
        $lookup: {
          from: "registrationtypes",
          let: { registrationId: "$registrationType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$registrationId", "$_id"],
                },
              },
            },
          ],
          as: "registrationTypeDetails",
        },
      },
      { $unwind: "$registrationTypeDetails" },

      {
        $lookup: {
          from: "leads",
          let: { courseId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: [{ $toString: "$$courseId" }, "$course"],
                },
              },
            },
          ],
          as: "leadCourses",
        },
      },

      {
        $addFields: {
          shouldLookup: {
            $gt: [{ $size: "$registrationTypeDetails.tradeLevelIds" }, 0],
          },
        },
      },

      {
        $facet: {
          hasTradeLevels: [
            {
              $match: {
                $expr: { $eq: ["$shouldLookup", true] },
              },
            },
            {
              $lookup: {
                from: "tradelevels",
                let: { levelId: "$tradeLevel" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ["$$levelId", { $toString: "$_id" }],
                      },
                    },
                  },
                ],
                as: "tradeLevelDetails",
              },
            },
            { $unwind: "$tradeLevelDetails" },
          ],
          noTradeLevels: [
            {
              $match: {
                $expr: { $eq: ["$shouldLookup", false] },
              },
            },
          ],
        },
      },

      {
        $addFields: {
          bothCombined: {
            $concatArrays: ["$hasTradeLevels", "$noTradeLevels"],
          },
        },
      },

      { $unwind: "$bothCombined" },

      {
        $project: {
          _id: "$bothCombined._id",
          courseName: "$bothCombined.courseName",
          price: "$bothCombined.price",
          duration: "$bothCombined.duration",
          tradeLevel: "$bothCombined.tradeLevelDetails.tradeLevel",
          tradeType: "$bothCombined.tradeTypeDetails.tradeType",
          durationNumber: "$bothCombined.durationDetails.duration",
          durationType: "$bothCombined.durationDetails.type",
          registrationType:
            "$bothCombined.registrationTypeDetails.registrationName",
          ActiveCourses: "$bothCombined.leadCourses",
          created_at: "$bothCombined.created_at",
        },
      },
    ]);
    return res.status(200).send({ allCourses: getAllCourses });
  } catch (err) {
    next(err);
  }
};

const getCourse = async (req, res, next) => {
  try {
    const { query } = req;
    const getSelectedCourse = await db.course.find({ _id: query._id });
    return res.status(200).send(getSelectedCourse);
  } catch (err) {
    next(err);
  }
};

const updateCourse = async (req, res, next) => {
  try {
    const { body } = req;
    const getSelectedCourse = await db.course.updateOne(
      { _id: body._id },
      {
        $set: body,
      }
    );
    const getUpdatedCourse = await db.course.aggregate([
      {
        $match: {
          $expr: {
            $eq: [body._id, { $toString: "$_id" }],
          },
        },
      },
      {
        $lookup: {
          from: "tradetypes",
          let: { typeId: "$tradeType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$typeId", "$_id"],
                },
              },
            },
          ],
          as: "tradeTypeDetails",
        },
      },
      { $unwind: "$tradeTypeDetails" },
      {
        $lookup: {
          from: "durations",
          let: { durationId: "$duration" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$durationId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "durationDetails",
        },
      },
      { $unwind: "$durationDetails" },
      {
        $lookup: {
          from: "registrationtypes",
          let: { registrationId: "$registrationType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$registrationId", "$_id"],
                },
              },
            },
          ],
          as: "registrationTypeDetails",
        },
      },
      { $unwind: "$registrationTypeDetails" },

      {
        $addFields: {
          shouldLookup: {
            $gt: [{ $size: "$registrationTypeDetails.tradeLevelIds" }, 0],
          },
        },
      },

      {
        $facet: {
          hasTradeLevels: [
            {
              $match: {
                $expr: { $eq: ["$shouldLookup", true] },
              },
            },
            {
              $lookup: {
                from: "tradelevels",
                let: { levelId: "$tradeLevel" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ["$$levelId", { $toString: "$_id" }],
                      },
                    },
                  },
                ],
                as: "tradeLevelDetails",
              },
            },
          ],
          noTradeLevels: [
            {
              $match: {
                $expr: {
                  $eq: ["$shouldLookup", false],
                },
              },
            },
          ],
        },
      },

      {
        $addFields: {
          bothCombined: {
            $concatArrays: ["$hasTradeLevels", "$noTradeLevels"],
          },
        },
      },

      { $unwind: "$bothCombined" },

      {
        $project: {
          _id: "$bothCombined._id",
          courseName: "$bothCombined.courseName",
          price: "$bothCombined.price",
          duration: "$bothCombined.duration",
          tradeLevel: "$bothCombined.tradeLevelDetails.tradeLevel",
          durationNumber: "$bothCombined.durationDetails.duration",
          durationType: "$bothCombined.durationDetails.type",
          tradeType: "$bothCombined.tradeTypeDetails.tradeType",
          registrationType:
            "$bothCombined.registrationTypeDetails.registrationName",
          created_at: "$bothCombined.created_at",
        },
      },
    ]);
    return res.status(200).send({
      updatedCourse: getUpdatedCourse[0],
      message: "course updated successfully !",
    });
  } catch (err) {
    next(err);
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const { query } = req;
    const courseIsAssignedInLead = await db.lead.find({ course: query._id });

    if (courseIsAssignedInLead.length) {
      return res.status(202).send({
        message: `course is existed in lead `,
      });
    }

    const courseIsAssignedInClass = await db.classes.find({
      course: query._id,
    });
    if (courseIsAssignedInClass.length) {
      return res.status(202).send({
        message: `course is existed in class `,
      });
    }
    const deleteCourse = await db.course.deleteOne({ _id: query._id });
    return res.status(200).send({ message: "course deleted successfully !" });
  } catch (err) {
    next(err);
  }
};

const getFilteredCourses = async (req, res, next) => {
  try {
    const { query } = req;
    const filteredCourses = await db.course.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$tradeType" }, query.tradeType],
          },
        },
      },
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$tradeLevel" }, query.tradeLevel],
          },
        },
      },
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$registrationType" }, query.registrationType],
          },
        },
      },
    ]);
    return res.status(200).send(filteredCourses);
  } catch (err) {
    next(err);
  }
};

const getDashboardCourses = async (req, res, next) => {
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
          from: "durations",
          let: { durationId: "$courseDetails.duration" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$durationId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "durationDetails",
        },
      },
      { $unwind: "$durationDetails" },
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
          duration: "$courseDetails.duration",
          durationNumber: "$durationDetails.duration",
          durationType: "$durationDetails.type",
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

module.exports = {
  addNewCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
  getFilteredCourses,
  getDashboardCourses,
};
