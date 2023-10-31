const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema(
  {
    certificateFilePath: { type: String },
    certificateNo: { type: String },
    completionDate: { type: String },
    courseDuration: { type: String },
    courseId: { type: String },
    grade: { type: String },
    participantName: { type: String },
    certificateAttchment: { type: String },
    remarks: { type: String },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const CertificateModel = mongoose.model("certificates", CertificateSchema);

module.exports = CertificateModel;
