const mongoose = require("mongoose");

const TrainerSchema = new mongoose.Schema(
  {
    trainerName: { type: String },
    trainerEmail: { type: String, unique: true, match: /.+\@.+\..+/ },
    trainerMobile: { type: Number },
    trainerDOB: { type: Date },
    trainerDesignation: { type: String },
    trainerImagePath: { type: String },
    trainerAddress: { type: String },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const TrainerModel = mongoose.model("trainers", TrainerSchema);

module.exports = TrainerModel;
