const TrainerModel = require("../models/trainerModel");

const addNewTrainer = async ({ query, file }) => {
  try {
    query["trainerImagePath"] = `images/${file.filename}`;
    const newTrainer = await TrainerModel.create(query);
    const saveTrainer = await newTrainer.save();
    return saveTrainer;
  } catch (err) {
    console.error(err);
  }
};

const getTrainers = async (data) => {
  try {
    const trainers = await TrainerModel.find({});
    return trainers;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewTrainer,
  getTrainers,
};
