const courseModel = require("../models/courseModel");
const db = require("../models")

const addNewCourse = async (data) => {
  try {
    const newCourse = await db.course.create(data);
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
    return getNewCourse[0];
  } catch (err) {
    console.error(err);
  }
};

const getCourses = async () => {
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
    return { allCourses: getAllCourses };
  } catch (err) {
    console.error(err);
  }
};

const getCourse = async (data) => {
  try {
    const getSelectedCourse = await db.course.find({ _id: data._id });
    return getSelectedCourse;
  } catch (err) {
    console.error(err);
  }
};

const updateCourse = async (data) => {
  try {
    const getSelectedCourse = await db.course.updateOne(
      { _id: data._id },
      {
        courseName: data.courseName,
        tradeType: data.tradeType,
        registrationType: data.registrationType,
        tradeLevel: data.tradeLevel,
        price: data.price,
        duration: data.duration,
      }
    );
    const getUpdatedCourse = await db.course.aggregate([
      {
        $match: {
          $expr: {
            $eq: [data._id, { $toString: "$_id" }],
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
    return {
      updatedCourse: getUpdatedCourse[0],
      message: "course updated successfully !",
    };
  } catch (err) {
    console.error(err);
  }
};

const deleteCourse = async (data) => {
  try {
    const deleteCourse = await db.course.deleteOne({ _id: data._id });
    return { message: "course deleted successfully !" };
  } catch (err) {
    console.error(err);
  }
};

const getFilteredCourses = async (data) => {
  try {
    const filteredCourses = await db.course.find({
      tradeType: data.tradeType,
      registrationType: data.registrationType,
      tradeLevel: data.tradeLevel,
    });
    return filteredCourses;
  } catch (err) {
    console.error(err);
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
