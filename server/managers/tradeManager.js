const { tradeLevelModel, tradeTypeModel } = require("../models/tradeModel");

const saveTradeLevel = async (data) => {
  try {
    const newTrade = await tradeLevelModel.create(data);
    const tradeLevel = await newTrade.save();
    return tradeLevel;
  } catch (err) {
    console.error(err);
  }
};

const getTradeLevels = async (user) => {
  try {
    const allTradeLevels = await tradeLevelModel.find({});
    return { user, allTradeLevels };
  } catch (err) {
    console.error(err);
  }
};

const updateTradeLevel = async (data) => {
  try {
    const updateTrade = await tradeLevelModel.updateOne(
      { _id: data._id },
      {
        tradeLevel: data.tradeLevel,
      }
    );
    return { message: "Trade Level Updated Successfully !" };
  } catch (err) {
    console.error(err);
  }
};

const deleteTradeLevel = async (data) => {
  try {
    await tradeLevelModel.deleteOne({ _id: data._id });
    return { message: "Trade Level Deleted Successfully" };
  } catch (err) {
    console.error(err);
  }
};

const saveTradeType = async (data) => {
  try {
    const newTradeType = await tradeTypeModel.create(data);
    const tradeType = await newTradeType.save();
    return tradeType;
  } catch (err) {
    console.error(err);
  }
};

const getTradeTypes = async (user) => {
  try {
    const allTradeTypes = await tradeTypeModel.find({});
    return { user, allTradeTypes };
  } catch (err) {
    console.error(err);
  }
};

const updateTradeType = async (data) => {
  try {
    const updateTrade = await tradeTypeModel.updateOne(
      { _id: data._id },
      {
        tradeType: data.tradeType,
      }
    );
    return { message: "Trade Type Updated Successfully !" };
  } catch (err) {
    console.error(err);
  }
};

const deleteTradeType = async (data) => {
  try {
    await tradeTypeModel.deleteOne({ _id: data._id });
    return { message: "Trade Type Deleted Successfully" };
  } catch (err) {
    console.error(err);
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
