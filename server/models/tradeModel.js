const mongoose = require("mongoose");

const tradeLevelSchema = new mongoose.Schema(
  {
    tradeLevel: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const tradeLevelModel = mongoose.model("tradeLevel", tradeLevelSchema);

const tradeTypeSchema = new mongoose.Schema(
  {
    tradeType: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const tradeTypeModel = mongoose.model("tradeType", tradeTypeSchema);

module.exports = { tradeLevelModel, tradeTypeModel };
