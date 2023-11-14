const courseModel = require("../models/courseModel");
const db = require("../models");

const addNewCourse = async (req, res, next) => {
  try {
    const { body } = req;
    const newCourse = await db.course.create(body);
    const course = await newCourse.save();
    const getNewCourse = await db.course.aggregate([
      { $match: { _id: course._id } },
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
          registrationType:
            "$bothCombined.registrationTypeDetails.registrationName",
          ActiveCourses: "$bothCombined.leadCourses",
          created_at: "$bothCombined.created_at",
        },
      },
    ]);
    console.log(getAllCourses);
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
        courseName: body.courseName,
        tradeType: body.tradeType,
        registrationType: body.registrationType,
        tradeLevel: body.tradeLevel,
        price: body.price,
        duration: body.duration,
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
    const deleteCourse = await db.course.deleteOne({ _id: query._id });
    return res.status(200).send({ message: "course deleted successfully !" });
  } catch (err) {
    next(err);
  }
};

const getFilteredCourses = async (req, res, next) => {
  try {
    const { query } = req;
    const filteredCourses = await db.course.find({
      tradeType: query.tradeType,
      registrationType: query.registrationType,
      tradeLevel: query.tradeLevel,
    });
    return res.status(200).send(filteredCourses);
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
};
