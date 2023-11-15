const permissionModel = require("../models/permissionModel");
const db = require("../models");
const addNewPermission = async (req, res, next) => {
  try {
    let data = req.body;
    const createPermission = await db.permission.create(data.permission);
    const permission = createPermission.save();
    return res.status(200).send(permission);
  } catch (err) {
    next(err);
  }
};

const getPermissions = async (req, res, next) => {
  try {
    const foundData = await db.permission.find({});
    return res.status(200).send(foundData);
  } catch (err) {
    next(err);
  }
};

const editPermission = async () => {
  try {
    let data = req.body;
    const foundData = await db.permission.updateOne(
      { _id: data.permission._id },
      {
        $set: data.permission,
      }
    );
    return res.status(200).send(foundData);
  } catch (err) {
    next(err);
  }
};

const deletePermission = async (req, res, next) => {
  try {
    let data = req.query;
    await db.permission.deleteOne({ _id: data._id });
    return res.status(200).send({ message: "Permission Deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addNewPermission,
  getPermissions,
  editPermission,
  deletePermission,
};
