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

module.exports = {
  addNewTrainer,
  getTrainers,
};
