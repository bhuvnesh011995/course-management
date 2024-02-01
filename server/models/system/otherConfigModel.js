const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    attendanceLogo: {
      type: String,
      default: "",
    },
    paymentPdfLogo: {
      type: String,
      default: "",
    },
    loginLogo: {
      type: String,
      default: "",
    },
    defaultLanguage: {
      type: Schema.Types.ObjectId,
      ref: "languages",
      default: null,
    },
    certificateNumberStart: { type: Number },
  },
  { collection: "otherConfig" },
);

module.exports = model("otherConfig", schema);
