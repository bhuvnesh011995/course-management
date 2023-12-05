const RoleModel = require("../models/roleModel");
const userModel = require("../models/userModel");

const db = require("../models");
const addNewRole = async (req, res, next) => {
  try {
    let data = req.body;
    const roleIn = await db.roles.find({ roleName: data.roleName });
    if (!roleIn.length) {
      const newRole = await db.roles.create(data);
      return res.status(200).send(newRole);
    } else {
      return res.status(203).send({ message: "role already existed" });
    }
  } catch (err) {
    next(err);
  }
};

const getRoles = async (req, res, next) => {
  try {
    let user = req.user;
    const roleData = await RoleModel.find({});
    return res.status(200).send({ roleData, user });
  } catch (err) {
    next(err);
  }
};

const selectedRoleData = async (req, res, next) => {
  try {
    let data = req.query;
    const roleData = await db.roles.find({ _id: data.id });
    return res.status(200).send(roleData);
  } catch (err) {
    console.error(err);
  }
};

const editRole = async (req, res, next) => {
  try {
    let role = req.body;
    const roleData = await db.roles.updateOne(
      { _id: role._id },
      {
        $set: role,
      }
    );
    return res.status(200).send(roleData);
  } catch (err) {
    next(err);
  }
};

const getUserRoleInfo = async (req, res, next) => {
  try {
    const getUsers = await db.user.aggregate([
      // {
      //   $match: {
      //     email: { $ne: "admin@tonga.com" },
      //   },
      // },
      {
        $lookup: {
          from: "roles",
          let: { roleId: "$userRole" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$roleId", "$_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                roleName: 1,
              },
            },
          ],
          as: "roleDetails",
        },
      },
      { $unwind: "$roleDetails" },
      {
        $project: {
          _id: 1,
          userName: 1,
          status: 1,
          roleName: "$roleDetails.roleName",
          roleId: "$roleDetails._id",
          created_at: 1,
        },
      },
    ]);
    return res.status(200).send(getUsers);
  } catch (err) {
    next(err);
  }
};

const deleteRole = async (req, res, next) => {
  try {
    const roleInUser = await db.user.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$userRole" }, req.query._id],
          },
        },
      },
    ]);
    if (roleInUser.length) {
      return res.status(202).send({ message: "This role aquired by User" });
    }
    const deleteUser = await db.roles.deleteOne({ _id: req.query._id });
    return res.status(200).send({ message: "Role deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addNewRole,
  getRoles,
  selectedRoleData,
  editRole,
  getUserRoleInfo,
  deleteRole,
};
