const mongoose = require("mongoose");

const TimeSheetSchema = new mongoose.Schema(
  {
    addDate: { type: Date },
    addEmployee: { type: mongoose.Schema.Types.ObjectId },
    addHoursWorked: { type: Number },
    addOvertimeHours: { type: Number },
    shiftTiming: { type: String },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const TimesheetModel = mongoose.model("timesheets", TimeSheetSchema);

module.exports = TimesheetModel;
