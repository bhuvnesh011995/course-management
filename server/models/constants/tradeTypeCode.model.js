const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
  },
  {
    collection: "tradeTypeCode",
  },
);

module.exports = model("tradeTypeCode", schema);
