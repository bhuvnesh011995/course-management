const db = require("../models");

const saveTradeLevel = async (req, res, next) => {
  try {
    let data = req.body;
    const newTrade = await db.tradeLevel.create(data);
    const tradeLevel = await newTrade.save();
    return res
      .status(200)
      .send({ data: tradeLevel, message: "trade level added successfully" });
  } catch (err) {
    next(err);
  }
};

const getTradeLevels = async (req, res, next) => {
  try {
    let user = req.user;
    const allTradeLevels = await db.tradeLevel.find({});
    return res.status(200).send({ user, allTradeLevels });
  } catch (err) {
    next(err);
  }
};

const updateTradeLevel = async (req, res, next) => {
  try {
    let data = req.body;
    const updateTrade = await db.tradeLevel.updateOne(
      { _id: data._id },
      {
        $set: data,
      }
    );
    return res
      .status(200)
      .send({ message: "Trade Level Updated Successfully !" });
  } catch (err) {
    next(err);
  }
};

const deleteTradeLevel = async (req, res, next) => {
  try {
    let data = req.query;
    const isAssignedInRegistrationType = await db.registrationType.find({
      tradeLevelIds: { $in: data._id },
    });
    if(isAssignedInRegistrationType.length){
      return res.status(202).send({message:'Trade Level is existed in registration type'})
    }
    await db.tradeLevel.deleteOne({ _id: data._id });
    return res
      .status(200)
      .send({ message: "Trade Level Deleted Successfully" });
  } catch (err) {
    next(err);
  }
};

const saveTradeType = async (req, res, next) => {
  try {
    let data = req.body;
    const newTradeType = await db.tradeTypeModel.create(data);
    const tradeType = await newTradeType.save();
    return res
      .status(200)
      .send({ data: tradeType, message: "trade type added successfully" });
  } catch (err) {
    next(err);
  }
};

const getTradeTypes = async (req, res, next) => {
  try {
    let user = req.users;
    const allTradeTypes = await db.tradeTypeModel.find({});
    return res.status(200).send({ user, allTradeTypes });
  } catch (err) {
    next(err);
  }
};

const updateTradeType = async (req, res, next) => {
  try {
    let data = req.body;
    const updateTrade = await db.tradeTypeModel.updateOne(
      { _id: data._id },
      {
        $set: data,
      }
    );
    return res
      .status(200)
      .send({ message: "Trade Type Updated Successfully !" });
  } catch (err) {
    next(err);
  }
};

const deleteTradeType = async (req, res, next) => {
  try {
    let data = req.query;
    await db.tradeTypeModel.deleteOne({ _id: data._id });
    return res.status(200).send({ message: "Trade Type Deleted Successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  saveTradeLevel,
  getTradeLevels,
  updateTradeLevel,
  deleteTradeLevel,
  saveTradeType,
  getTradeTypes,
  updateTradeType,
  deleteTradeType,
};
