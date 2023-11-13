const RoleModel = require("../models/roleModel");
const userModel = require("../models/userModel");

const db = require("../models");
const addNewRole = async (req,res,next) => {
  try {
    let data = req.body
    const newRole = await db.roles.create(data);
    const role = newRole.save();
    return res.status(200).send(role);
  } catch (err) {
    next(err);
  }
};

const getRoles = async (req,res,next) => {
  try {
    let user = req.user
    const roleData = await RoleModel.find({});
    return res.status(200).send({ roleData, user });
  } catch (err) {
    next(err);
  }
};

const selectedRoleData = async (req,res,next) => {
  try {
    let data = req.query
    const roleData = await db.roles.find({ _id: data.id });
    return res.status(200).send(roleData);
  } catch (err) {
    console.error(err);
  }
};

const editRole = async (req,res,next) => {
  try {
    let role = req.body
    const roleData = await db.roles.updateOne(
      { _id: role._id },
      {
        roleName: role.roleName,
        totalUsers: role.totalUsers,
        contentManagement: role.contentManagement,
        finManagement: role.finManagement,
        payRoll: role.payRoll,
        reporting: role.reporting,
        userManagement: role.userManagement,
        role: role.role,
      }
    );
    return res.status(200).send(roleData);
  } catch (err) {
    next(err);
  }
};

const getUserRoleInfo = async (req,res,next) => {
  try {
    const getUsers = await db.user.aggregate([
      {
        $lookup: {
          from: "roles",
          let: { roleId: "$userRole" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$roleId", { $toString: "$_id" }],
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

      /* 
      roleDetails = [{},{}]
      roleDetails = {
      
      }
      
      */
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

module.exports = {
  addNewRole,
  getRoles,
  selectedRoleData,
  editRole,
  getUserRoleInfo,
};
