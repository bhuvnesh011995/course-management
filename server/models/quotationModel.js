const mongoose = require("mongoose");

const quoatationSchema = new mongoose.Schema(
  {
    courseName: { type: String },
    discount: { type: Number },
    grossAmt: { type: Number },
    tax: { type: Number },
    unit: { type: Number },
    unitPrice: { type: Number },
    leadId: { type: mongoose.Schema.Types.ObjectId },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const quoatationModel = mongoose.model("quotations", quoatationSchema);

module.exports = quoatationModel;
