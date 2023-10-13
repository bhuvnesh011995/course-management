const roleManager = require("../managers/roleManager");

const addNewRole = (req, res) => {
  roleManager
    .addNewRole(req.body)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

const getRoles = (req, res) => {
  roleManager
    .getRoles(req.user)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

const selectedRoleData = (req, res) => {
  roleManager
    .selectedRoleData(req.query)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

const editRole = (req, res) => {
  roleManager
    .editRole(req.body)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

const getUserRoleInfo = (req, res) => {
  roleManager
    .getUserRoleInfo()
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

module.exports = {
  addNewRole,
  getRoles,
  selectedRoleData,
  editRole,
  getUserRoleInfo,
};
