const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema(
  {
    employee: { type: mongoose.Schema.Types.ObjectId },
    leavetype: { type: mongoose.Schema.Types.ObjectId },
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const LeaveModel = mongoose.model("leaves", leaveSchema);

module.exports = LeaveModel;
