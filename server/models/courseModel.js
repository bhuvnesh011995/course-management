const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: { type: String },
    tradeType: { type: mongoose.Schema.Types.ObjectId },
    registrationType: {
      type: mongoose.Schema.Types.ObjectId,
    },
    tradeLevel: { type: String },
    price: { type: Number },
    duration: { type: mongoose.Schema.Types.ObjectId },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);

const courseModel = mongoose.model("course", courseSchema);

module.exports = courseModel;
