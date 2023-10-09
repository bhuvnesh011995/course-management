const RoleModel = require("../models/roleModel");

const addNewRole = async (data) => {
  try {
    const newRole = await RoleModel.create(data.role);
    const role = newRole.save();
    return role;
  } catch (err) {
    console.error(err);
  }
};

const getRoles = async () => {
  try {
    const roleData = await RoleModel.find({});
    return roleData;
  } catch (err) {
    console.error(err);
  }
};

const selectedRoleData = async (data) => {
  try {
    const roleData = await RoleModel.find({ _id: data.id });
    return roleData;
  } catch (err) {
    console.error(err);
  }
};

const editRole = async ({ role }) => {
  try {
    const roleData = await RoleModel.updateOne(
      { _id: role._id },
      {
        roleName: role.roleName,
        totalUsers: role.totalUsers,
        contentManagement: role.contentManagement,
        finManagement: role.finManagement,
        payRoll: role.payRoll,
        reporting: role.reporting,
        userManagement: role.userManagement,
      }
    );
    return roleData;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewRole,
  getRoles,
  selectedRoleData,
  editRole,
};
