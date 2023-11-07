const RoleModel = require("../models/roleModel");
const userModel = require("../models/userModel");

const db = require("../models");
const addNewRole = async (data) => {
  try {
    const newRole = await db.roles.create(data);
    const role = newRole.save();
    return role;
  } catch (err) {
    console.error(err);
  }
};

const getRoles = async (user) => {
  try {
    const roleData = await RoleModel.find({});
    return { roleData, user };
  } catch (err) {
    console.error(err);
  }
};

const selectedRoleData = async (data) => {
  try {
    const roleData = await db.roles.find({ _id: data.id });
    return roleData;
  } catch (err) {
    console.error(err);
  }
};

const editRole = async (role) => {
  try {
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
    return roleData;
  } catch (err) {
    console.error(err);
  }
};

const getUserRoleInfo = async () => {
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
    return getUsers;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewRole,
  getRoles,
  selectedRoleData,
  editRole,
  getUserRoleInfo,
};
