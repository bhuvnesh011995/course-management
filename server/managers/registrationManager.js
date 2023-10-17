const { default: mongoose } = require("mongoose");
const registrationModal = require("../models/registrationModel");

const addRegistrationType = async (data) => {
  try {
    const newRegistrationType = await registrationModal.create(data);
    const registrationType = newRegistrationType.save();
    return registrationType;
  } catch (err) {
    console.error(err);
  }
};

const getRegistrationTypes = async (data) => {
  try {
    const registrationData = await registrationModal
      .find({})
      .populate({ path: "tradeLevelIds", model: "tradeLevel" })
      .populate("tradeLevelIds", "tradeLevel");

    return registrationData;
  } catch (err) {
    console.error(err);
  }
};

const getRegistrationType = async (data) => {
  try {
    const registrationData = await registrationModal.find({ _id: data._id });
    return registrationData;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addRegistrationType,
  getRegistrationTypes,
  getRegistrationType,
};
