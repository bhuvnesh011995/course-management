const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId },
    class: { type: mongoose.Schema.Types.ObjectId },
    startTime: { type: String },
    endTime: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const EventModel = mongoose.model("events", EventSchema);

module.exports = EventModel;
