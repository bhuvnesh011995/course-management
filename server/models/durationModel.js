const mongoose = require("mongoose");

const DurationSchema = new mongoose.Schema({
  duration: { type: Number },
  type: { type: String },
});

const DurationModel = mongoose.model("durations", DurationSchema);

module.exports = DurationModel;
