const registrationModal = require("../models/registrationModel");
const db = require("../models");
const addRegistrationType = async (req, res, next) => {
  try {
    let data = req.body;
    if (!data.tradeLevelIds) {
      data.tradeLevelIds = [];
    }
    const newRegistrationType = await db.registrationType.create(data);
    const registrationData = await db.registrationType.aggregate([
      {
        $match: {
          $expr: {
            $eq: ["$_id", newRegistrationType._id],
          },
        },
      },
      {
        $lookup: {
          from: "tradelevels",
          let: { levelIds: "$tradeLevelIds" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$_id", "$$levelIds"],
                },
              },
            },
          ],
          as: "tradeLevels",
        },
      },
    ]);
    return res.status(200).send({
      data: registrationData,
      message: "registration type added successfully ",
    });
  } catch (err) {
    next(err);
  }
};

const getRegistrationTypes = async (req, res, next) => {
  try {
    let data = req.user;
    const registrationData = await db.registrationType.aggregate([
      {
        $lookup: {
          from: "tradelevels",
          let: { levelIds: "$tradeLevelIds" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$_id", "$$levelIds"],
                },
              },
            },
          ],
          as: "tradeLevels",
        },
      },
    ]);
    return res.status(200).send(registrationData);
  } catch (err) {
    next(err);
  }
};

const getRegistrationType = async (req, res, next) => {
  try {
    let data = req.query;
    const registrationData = await db.registrationType.find({
      _id: data.registrationData._id,
    });
    return res.status(200).send(registrationData);
  } catch (err) {
    next(err);
  }
};

const updateRegistration = async (req, res, next) => {
  try {
    let data = req.body;
    const registrationData = await db.registrationType.updateOne(
      {
        _id: data._id,
      },
      {
        $set: data,
      }
    );
    const updatedRegistrationData = await db.registrationType.aggregate([
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
          let: { levelIds: "$tradeLevelIds" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$_id", "$$levelIds"],
                },
              },
            },
          ],
          as: "tradeLevels",
        },
      },
    ]);
    return res.status(200).send({
      data: updatedRegistrationData[0],
      message: "Registration Type Updated Successfully",
    });
  } catch (err) {
    next(err);
  }
};

const deleteRegistration = async (req, res, next) => {
  try {
    let data = req.query;
    const deleteReg = await db.registrationType.deleteOne({ _id: data._id });
    return res
      .status(200)
      .send({ message: "RegistrationType Deleted Successfully !" });
  } catch (err) {
    next(err);
  }
};

const allDashboardClassTypes = async (req, res, next) => {
  try {
    const allClassTypes = await db.registrationType.aggregate([
      {
        $lookup: {
          from: "courses",
          let: { registrationId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$registrationId", "$registrationType"],
                },
              },
            },
          ],
          as: "courseDetails",
        },
      },
      {
        $addFields: {
          totalRegistrations: { $size: "$courseDetails" },
        },
      },
      {
        $project: {
          _id: 1,
          totalRegistrations: 1,
          registrationName: 1,
        },
      },
    ]);
    return res.status(200).send(allClassTypes);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addRegistrationType,
  getRegistrationTypes,
  getRegistrationType,
  updateRegistration,
  deleteRegistration,
  allDashboardClassTypes,
};
