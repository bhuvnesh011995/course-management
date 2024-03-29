const mongoose = require("mongoose");
const moment = require("moment");

const classSchema = new mongoose.Schema(
  {
    calendarEventId: { type: String },
    course: { type: mongoose.Schema.Types.ObjectId },
    classStatus: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    lectureDay: [],
    classRemarks: { type: String },
    trainer: { type: mongoose.Schema.Types.ObjectId },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);

const classModel = mongoose.model("classes", classSchema);

module.exports = classModel;
