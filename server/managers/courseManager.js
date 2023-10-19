const courseModel = require("../models/courseModel");

const addNewCourse = async (data) => {
  try {
    const newCourse = await courseModel.create(data);
    const course = await newCourse.save();

    const getNewCourse = await courseModel.aggregate([
      { $match: { _id: course._id } },
      {
        $lookup: {
          from: "tradelevels",
          let: { levelId: "$tradeLevel" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$levelId", "$_id"],
                },
              },
            },
          ],
          as: "tradeLevelDetails",
        },
      },
      { $unwind: "$tradeLevelDetails" },
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
        $project: {
          _id: 1,
          courseName: 1,
          price: 1,
          duration: 1,
          tradeLevel: "$tradeLevelDetails.tradeLevel",
          tradeType: "$tradeTypeDetails.tradeType",
          registrationType: "$registrationTypeDetails.registrationName",
          created_at: 1,
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
    const getAllCourses = await courseModel.aggregate([
      {
        $lookup: {
          from: "tradelevels",
          let: { levelId: "$tradeLevel" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$levelId", "$_id"],
                },
              },
            },
          ],
          as: "tradeLevelDetails",
        },
      },
      { $unwind: "$tradeLevelDetails" },
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
        $project: {
          _id: 1,
          courseName: 1,
          price: 1,
          duration: 1,
          tradeLevel: "$tradeLevelDetails.tradeLevel",
          tradeType: "$tradeTypeDetails.tradeType",
          registrationType: "$registrationTypeDetails.registrationName",
          created_at: 1,
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
    const getSelectedCourse = await courseModel.find({ _id: data._id });
    return getSelectedCourse;
  } catch (err) {
    console.error(err);
  }
};

const updateCourse = async (data) => {
  try {
    const getSelectedCourse = await courseModel.updateOne(
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
    const getUpdatedCourse = await courseModel.aggregate([
      {
        $match: {
          $expr: {
            $eq: [data._id, { $toString: "$_id" }],
          },
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
                  $eq: ["$$levelId", "$_id"],
                },
              },
            },
          ],
          as: "tradeLevelDetails",
        },
      },
      { $unwind: "$tradeLevelDetails" },
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
        $project: {
          _id: 1,
          courseName: 1,
          price: 1,
          duration: 1,
          tradeLevel: "$tradeLevelDetails.tradeLevel",
          tradeType: "$tradeTypeDetails.tradeType",
          registrationType: "$registrationTypeDetails.registrationName",
          created_at: 1,
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
    const deleteCourse = await courseModel.deleteOne({ _id: data._id });
    return { message: "course deleted successfully !" };
  } catch (err) {
    console.error(err);
  }
};

const getFilteredCourses = async (data) => {
  try {
    const filteredCourses = await courseModel.find({
      tradeType: data.tradeType,
      registrationType: data.registrationType,
      tradeLevel: data.tradeLevel,
    });
    console.log(filteredCourses);
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
