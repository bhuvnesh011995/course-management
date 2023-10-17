const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    registrationName: { type: String },
    registrationCode: { type: String },
    tradeLevelIds: [
      { type: mongoose.Schema.Types.ObjectId, ref: "tradeLevel" },
    ],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const registrationModel = mongoose.model(
  "registrationType",
  registrationSchema
);

module.exports = registrationModel;
