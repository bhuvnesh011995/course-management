const registrationModal = require("../models/registrationModel");
const db = require("../models");
const addRegistrationType = async (req, res, next) => {
  try {
    let data = req.body;
    const newRegistrationType = await db.registrationType.create(data);
    const registrationType = newRegistrationType.save();
    return res.status(200).send(registrationType);
  } catch (err) {
    next(err);
  }
};

const getRegistrationTypes = async (req, res, next) => {
  try {
    let data = req.user;
    const registrationData = await db.registrationType
      // find({})
      // .populate({ path: "tradeLevelIds", model: "tradeLevel" })
      // .populate("tradeLevelIds", "tradeLevel");
      .aggregate([
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
        // {
        //   $project: {
        //     _id: 1,
        //     registrationName: 1,
        //     registrationCode: 1,
        //     created_at: 1,
        //     updated_at: 1,
        //     tradeLevels: {
        //       $map: {
        //         input: "$tradeLevels",
        //         as: "level",
        //         in: {
        //           tradeLevels: "$$level.tradeLevel",
        //           _id: "$$level._id",
        //         },
        //       },
        //     },
        //   },
        // },
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
    return res
      .status(200)
      .send({ message: "Registration Type Updated Successfully" });
  } catch (err) {
    next(err);
  }
};

const deleteRegistration = async () => {
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

module.exports = {
  addRegistrationType,
  getRegistrationTypes,
  getRegistrationType,
  updateRegistration,
  deleteRegistration,
};
