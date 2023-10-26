const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    classCode: { type: String },
    course: { type: mongoose.Schema.Types.ObjectId },
    classStatus: { type: String },
    startTiming: { type: String },
    endTiming: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    lectureDay: [],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const classModel = mongoose.model("classes", classSchema);

module.exports = classModel;
