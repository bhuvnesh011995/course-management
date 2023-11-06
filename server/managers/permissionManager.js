const permissionModel = require("../models/permissionModel");
const db = require("../models")
const addNewPermission = async (data) => {
  try {
    const createPermission = await db.permission.create(data.permission);
    const permission = createPermission.save();
    return permission;
  } catch (err) {
    console.error(err);
  }
};

const getPermissions = async (data) => {
  try {
    const foundData = await db.permission.find({});
    return foundData;
  } catch (err) {
    console.error(err);
  }
};

const editPermission = async (data) => {
  try {
    const foundData = await db.permission.updateOne(
      { _id: data.permission._id },
      {
        permissionName: data.permission.permissionName,
        assignTo: data.permission.assignTo,
      }
    );
    return foundData;
  } catch (err) {
    console.error(err);
  }
};

const deletePermission = async (data) => {
  try {
    await db.permission.deleteOne({ _id: data._id });
    return { message: "Permission Deleted" };
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewPermission,
  getPermissions,
  editPermission,
  deletePermission,
};
