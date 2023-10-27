const trainerManager = require("../managers/trainerManager");

const addNewTrainer = (req, res) => {
  trainerManager
    .addNewTrainer(req)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getTrainers = (req, res) => {
  trainerManager
    .getTrainers()
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const updateTrainer = (req, res) => {
  trainerManager
    .updateTrainer(req)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const deleteTrainer = (req, res) => {
  trainerManager
    .deleteTrainer(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getTrainer = (req, res) => {
  trainerManager
    .getTrainer(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const trainerClassDetails = (req, res) => {
  trainerManager
    .trainerClassDetails(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

module.exports = {
  addNewTrainer,
  getTrainers,
  updateTrainer,
  deleteTrainer,
  getTrainer,
  trainerClassDetails,
};
