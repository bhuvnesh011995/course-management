const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
  },
  {
    collection: "leave",
  }
);

module.exports = model("leave", schema);
