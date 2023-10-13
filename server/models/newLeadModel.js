const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  fileLocations: [
    { MOMEploymentDetails: { type: String } },
    { bcaAcknowledgementNotice: { type: String } },
    { nricWorkDocument: { type: String } },
    { paQuotaCopy: { type: String } },
    { passportCopy: { type: String } },
    { skillEvaluationCertificate: { type: String } },
    { workersIc: { type: String } },
    { workersPassport: { type: String } },
  ],
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
  tradeLevel: { type: Number },
  tradeType: { type: Number },
  participantName: { type: String },
  DOB: { type: Date },
  nationality: { type: Number },
  educationalLevel: { type: Number },
  coreTradeRegNo: { type: String },
});

const leadModel = mongoose.model("lead", leadSchema);

module.exports = leadModel;
