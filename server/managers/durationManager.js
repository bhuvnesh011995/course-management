const db = require("../models");
const addDuration = async (req, res, next) => {
  try {
    const newDuration = await db.duration.create(req.body);
    return res
      .status(200)
      .send({ data: newDuration, message: "duration created" });
  } catch (err) {
    next(err);
  }
};

const getDurations = async (req, res, next) => {
  try {
    const allDurations = await db.duration.find({});
    return res.status(200).send(allDurations);
  } catch (err) {
    next(err);
  }
};

const updateDuration = async (req, res, next) => {
  try {
    const updatedDurations = await db.duration.updateOne(
      {
        _id: req.body._id,
      },
      {
        $set: req.body,
      }
    );
    return res.status(200).send({ message: "duration updated successfully " });
  } catch (err) {
    next(err);
  }
};

const deleteDuration = async (req, res, next) => {
  try {
    const deletedDuration = await db.duration.deleteOne({
      _id: req.query._id,
    });
    return res.status(200).send({ message: "duration deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getDurations,
  addDuration,
  updateDuration,
  deleteDuration,
};
