
const db = require("../models")

const saveTradeLevel = async (data) => {
  try {
    const newTrade = await db.tradeLevel.create(data);
    const tradeLevel = await newTrade.save();
    return tradeLevel;
  } catch (err) {
    console.error(err);
  }
};

const getTradeLevels = async (user) => {
  try {
    const allTradeLevels = await db.tradeLevel.find({});
    return { user, allTradeLevels };
  } catch (err) {
    console.error(err);
  }
};

const updateTradeLevel = async (data) => {
  try {
    const updateTrade = await db.tradeLevel.updateOne(
      { _id: data._id },
      {
        tradeLevel: data.tradeLevel,
        tradeCode: data.tradeCode,
      }
    );
    return { message: "Trade Level Updated Successfully !" };
  } catch (err) {
    console.error(err);
  }
};

const deleteTradeLevel = async (data) => {
  try {
    await db.tradeLevel.deleteOne({ _id: data._id });
    return { message: "Trade Level Deleted Successfully" };
  } catch (err) {
    console.error(err);
  }
};

const saveTradeType = async (data) => {
  try {
    const newTradeType = await db.tradeTypeModel.create(data);
    const tradeType = await newTradeType.save();
    return tradeType;
  } catch (err) {
    console.error(err);
  }
};

const getTradeTypes = async (user) => {
  try {
    const allTradeTypes = await db.tradeTypeModel.find({});
    return { user, allTradeTypes };
  } catch (err) {
    console.error(err);
  }
};

const updateTradeType = async (data) => {
  try {
    const updateTrade = await db.tradeTypeModel.updateOne(
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
    await db.tradeTypeModel.deleteOne({ _id: data._id });
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
