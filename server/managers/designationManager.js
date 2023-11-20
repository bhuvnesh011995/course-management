const db = require("../models");
const addDesignation = async (req, res, next) => {
  try {
    const newDesignation = await db.designation.create(req.body);
    return res
      .status(200)
      .send({ data: newDesignation, message: "designation created" });
  } catch (err) {
    next(err);
  }
};

const getDesignations = async (req, res, next) => {
  try {
    const allDesignations = await db.designation.find({});
    return res.status(200).send(allDesignations);
  } catch (err) {
    next(err);
  }
};

const updateDesignation = async (req, res, next) => {
  try {
    const updatedDesignation = await db.designation.updateOne(
      {
        _id: req.body._id,
      },
      {
        $set: req.body,
      }
    );
    return res
      .status(200)
      .send({ message: "designation updated successfully " });
  } catch (err) {
    next(err);
  }
};

const deleteDesignation = async (req, res, next) => {
  try {
    const deletedDesignation = await db.designation.deleteOne({
      _id: req.query._id,
    });
    return res
      .status(200)
      .send({ message: "designation deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getDesignations,
  addDesignation,
  updateDesignation,
  deleteDesignation,
};
