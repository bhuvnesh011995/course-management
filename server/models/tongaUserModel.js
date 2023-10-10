const mongoose = require("mongoose");

const tongaUserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    name: { type: String },
    email: { type: String, unique: true, match: /.+\@.+\..+/ },
    phoneNo: { type: Number },
    course: { type: String },
    discription: { type: String },
    userName: { type: String },
    password: { type: String },
    userImagePath: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const tongaUserModel = mongoose.model("tongaUsers", tongaUserSchema);

module.exports = tongaUserModel;
