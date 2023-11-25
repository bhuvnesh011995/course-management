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
          from: "duration",
          let: { durationId: "$duration" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$durationId", "$_id"],
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
          tradeLevel: "$bothCombined.tradeLevelDetails.tradeLevel",
          tradeType: "$bothCombined.tradeTypeDetails.tradeType",
          duration: "$bothCombined.durationDetails.name",
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
          from: "duration",
          let: { durationId: "$duration" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$durationId", "$_id"],
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
          tradeLevel: "$bothCombined.tradeLevelDetails.tradeLevel",
          tradeType: "$bothCombined.tradeTypeDetails.tradeType",
          duration: "$bothCombined.durationDetails.name",
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
          from: "duration",
          let: { durationId: "$duration" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$durationId", "$_id"],
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
          tradeLevel: "$bothCombined.tradeLevelDetails.tradeLevel",
          tradeType: "$bothCombined.tradeTypeDetails.tradeType",
          duration: "$bothCombined.durationDetails.name",
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

const allDashboardCourses = async (req, res, next) => {
  try {
    const allCourses = await db.course.aggregate([
      {
        $lookup: {
          from: "registrationtypes",
          let: { registrationId: "$registrationType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$registrationId"],
                },
              },
            },
          ],
          as: "registrationDetails",
        },
      },
      { $unwind: "$registrationDetails" },
      {
        $lookup: {
          from: "classes",
          localField: "_id",
          foreignField: "course",
          as: "classDetails",
        },
      },
      {
        $lookup: {
          from: "leads",
          let: { courseId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$course", { $toString: "$$courseId" }],
                },
              },
            },
          ],
          as: "leadDetails",
        },
      },
      {
        $addFields: {
          totalClasses: { $size: "$classDetails" },
          totalCustomers: { $size: "$leadDetails" },
        },
      },
      {
        $project: {
          _id: 1,
          courseName: 1,
          courseType: "$registrationDetails.registrationName",
          totalClasses: 1,
          totalCustomers: 1,
          updated_at: 1,
        },
      },
    ]);
    return res.status(200).send(allCourses);
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
  allDashboardCourses,
};
