const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
    template: String,
    subject: String,
    emailType: String,
  },
  {
    collection: "emailtemplates",
  }
);

module.exports = model("emailtemplate", schema);
