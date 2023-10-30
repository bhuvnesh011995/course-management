const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema(
  {
    title: { type: String },
    type: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const CertificateModel = mongoose.model("certificates", CertificateSchema);

module.exports = CertificateModel;
