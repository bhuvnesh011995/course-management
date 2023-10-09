const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    roleName: { type: String },
    totalUsers: { type: Number },
    contentManagement: {
      create: { type: Boolean, default: false },
      read: { type: Boolean, default: false },
      write: { type: Boolean, default: false },
    },

    finManagement: {
      create: { type: Boolean, default: false },
      read: { type: Boolean, default: false },
      write: { type: Boolean, default: false },
    },

    payRoll: {
      create: { type: Boolean, default: false },
      read: { type: Boolean, default: false },
      write: { type: Boolean, default: false },
    },

    reporting: {
      create: { type: Boolean, default: false },
      read: { type: Boolean, default: false },
      write: { type: Boolean, default: false },
    },
    userManagement: {
      create: { type: Boolean, default: false },
      read: { type: Boolean, default: false },
      write: { type: Boolean, default: false },
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const roleModel = mongoose.model("roles", roleSchema);

module.exports = roleModel;
