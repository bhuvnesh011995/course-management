const mongoose = require("mongoose");
const roleCommon = require("./common/roleCommon");

const roleSchema = new mongoose.Schema(
  {
    roleName: { type: String },
    lead: roleCommon,
    payRoll: roleCommon,
    leaveManagement: roleCommon,
    userManagement: roleCommon,
    employeeManagement: roleCommon,
    finManagement: roleCommon,
    role: roleCommon,

    timesheet: roleCommon,
    customer: roleCommon,
    trainer: roleCommon,
    holiday: roleCommon,
    registrationType: roleCommon,
    tradeLevel: roleCommon,
    tradeType: roleCommon,
    courses: roleCommon,
    class: roleCommon,
    certificateGeneration: roleCommon,
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const roleModel = mongoose.model("roles", roleSchema);

module.exports = roleModel;
