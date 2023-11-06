
const registrationModal = require("../models/registrationModel");
const db = require("../models")
const addRegistrationType = async (data) => {
  try {
    const newRegistrationType = await db.registrationType.create(data);
    const registrationType = newRegistrationType.save();
    return registrationType;
  } catch (err) {
    console.error(err);
  }
};

const getRegistrationTypes = async (data) => {
  try {
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
    return registrationData;
  } catch (err) {
    console.error(err);
  }
};

const getRegistrationType = async (data) => {
  try {
    const registrationData = await db.registrationType.find({
      _id: data.registrationData._id,
    });
    return registrationData;
  } catch (err) {
    console.error(err);
  }
};

const updateRegistration = async (data) => {
  try {
    const registrationData = await db.registrationType.updateOne(
      {
        _id: data._id,
      },
      {
        registrationName: data.registrationName,
        tradeLevelIds: data.tradeLevelIds,
      }
    );
    return { message: "Registration Type Updated Successfully" };
  } catch (err) {
    console.error(err);
  }
};

const deleteRegistration = async (data) => {
  try {
    const deleteReg = await db.registrationType.deleteOne({ _id: data._id });
    return { message: "RegistrationType Deleted Successfully !" };
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addRegistrationType,
  getRegistrationTypes,
  getRegistrationType,
  updateRegistration,
  deleteRegistration,
};
