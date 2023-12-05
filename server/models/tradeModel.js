const mongoose = require("mongoose");

const tradeLevelSchema = new mongoose.Schema(
  {
    tradeLevel: { type: String, unique: true },
    tradeCode: { type: String, unique: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const tradeLevelModel = mongoose.model("tradeLevel", tradeLevelSchema);

const tradeTypeSchema = new mongoose.Schema(
  {
    tradeType: { type: String, unique: true },
    typeCode: { type: String, unique: true },
    isCet: { type: String },
    seat: Number,
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const tradeTypeModel = mongoose.model("tradeType", tradeTypeSchema);

module.exports = { tradeLevelModel, tradeTypeModel };
