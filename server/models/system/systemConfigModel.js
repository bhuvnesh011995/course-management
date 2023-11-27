const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String, default: "" },
    systemLogo: { type: String },
    systemFavicon: { type: String },
    footer: { type: String, default: "" },
  },
  { collection: "systemConfig" }
);

module.exports = model("systemConfig", schema);
