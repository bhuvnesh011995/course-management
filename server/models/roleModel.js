const mongoose = require("mongoose");
const roleCommon = require("./common/roleCommon");

const roleSchema = new mongoose.Schema(
  {
    roleName: { type: String },
    totalUsers: { type: Number },
    contentManagement: roleCommon,

    finManagement: roleCommon,

    payRoll: roleCommon,

    reporting: roleCommon,

    userManagement: roleCommon,
    role: roleCommon,
    customer: roleCommon,
    lead: roleCommon,
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
