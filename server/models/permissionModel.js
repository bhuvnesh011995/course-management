const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
  {
    permissionName: { type: String },
    assignTo: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const permissionModel = mongoose.model("permission", permissionSchema);

module.exports = permissionModel;
