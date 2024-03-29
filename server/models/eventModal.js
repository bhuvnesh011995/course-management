const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: { type: String },
    type: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const EventModel = mongoose.model("events", EventSchema);

module.exports = EventModel;
