const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    fileLocations: [
      {
        originalname: { type: String },
        mimetype: { type: String },
        path: { type: String },
      },
    ],
    bcaAcknowledgementNotice: { type: String },
    MOMEploymentDetails: { type: String },
    nricWorkDocument: { type: String },
    paQuotaCopy: { type: String },
    passportCopy: { type: String },
    workersIc: { type: String },
    workersPassport: { type: String },
    skillEvaluationCertificate: { type: String },
    companyAddress: { type: String },
    alternateMobile: { type: Number },
    companyName: { type: String },
    companyUEN: { type: String },
    contactPerson: { type: String },
    contactPersonEmail: { type: String },
    contactPersonMobile: { type: Number },
    myeNo: { type: String },
    officeFax: { type: String },
    officeTelephone: { type: Number },
    paReferenceNo: { type: String },
    participantIcNo: { type: String },
    participantMobile: { type: Number },
    participantNRIC: { type: String },
    postalCode: { type: String },
    registrationType: { type: Number },
    tradeLevel: { type: String },
    tradeType: { type: String },
    participantName: { type: String },
    DOB: { type: Date },
    nationality: { type: String },
    educationalLevel: { type: String },
    coreTradeRegNo: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const leadModel = mongoose.model("lead", leadSchema);

module.exports = leadModel;
