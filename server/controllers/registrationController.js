const registrationManager = require("../managers/registrationManager");

const addRegistrationType = (req, res) => {
  registrationManager
    .addRegistrationType(req.body, req.user)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getRegistrationTypes = (req, res) => {
  registrationManager
    .getRegistrationTypes(req.user)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getRegistrationType = (req, res) => {
  registrationManager
    .getRegistrationType(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

module.exports = {
  addRegistrationType,
  getRegistrationTypes,
  getRegistrationType,
};
