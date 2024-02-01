const db = require("../../models");

exports.addTradeTypeCode = async (req, res, next) => {
  try {
    let tradeTypeCode = await db.constants.tradeTypeCode.create(req.body);

    res.status(200).json(tradeTypeCode);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getAllTradeTypeCode = async (req, res, next) => {
  try {
    let tradeTypeCodes = await db.constants.tradeTypeCode.find();

    res.status(200).json(tradeTypeCodes);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getTradeTypeCodeById = async (req, res, next) => {
  try {
    let tradeTypeCode = await db.constants.tradeTypeCode.findById(
      req.params.id,
    );

    res.status(200).json(tradeTypeCode);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.updateTradeTypeCode = async (req, res, next) => {
  try {
    let tradeTypeCode = await db.constants.tradeTypeCode.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true },
    );

    res.status(200).json(tradeTypeCode);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.deleteTradeTypeCode = async (req, res, next) => {
  try {
    await db.constants.tradeTypeCode.deleteOne({ _id: req.params.id });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
};
