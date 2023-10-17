const tradeManager = require("../managers/tradeManager");

const saveTradeLevel = (req, res) => {
  tradeManager
    .saveTradeLevel(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getTradeLevels = (req, res) => {
  tradeManager
    .getTradeLevels(req.user)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const updateTradeLevel = (req, res) => {
  tradeManager
    .updateTradeLevel(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const deleteTradeLevel = (req, res) => {
  tradeManager
    .deleteTradeLevel(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const saveTradeType = (req, res) => {
  tradeManager
    .saveTradeType(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getTradeTypes = (req, res) => {
  tradeManager
    .getTradeTypes(req.user)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const updateTradeType = (req, res) => {
  tradeManager
    .updateTradeType(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const deleteTradeType = (req, res) => {
  tradeManager
    .deleteTradeType(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
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
