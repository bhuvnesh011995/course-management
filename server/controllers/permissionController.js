const permissionManager = require("../managers/permissionManager");

const addNewPermission = (req, res) => {
  permissionManager
    .addNewPermission(req.body)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

const getPermissions = (req, res) => {
  permissionManager
    .getPermissions()
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

const editPermission = (req, res) => {
  permissionManager
    .editPermission(req.body)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

const deletePermission = (req, res) => {
  permissionManager
    .deletePermission(req.query)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

module.exports = {
  addNewPermission,
  getPermissions,
  editPermission,
  deletePermission,
};
