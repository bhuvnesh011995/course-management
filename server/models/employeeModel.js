const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    name: { type: String },
    email: { type: String, unique: true, match: /.+\@.+\..+/ },
    phoneNo: { type: Number },
    position: { type: String },
    department: { type: String },
    joinDate: { type: Date },
    salary: { type: Number },
    gender: { type: String },
    userRole: { type: mongoose.Schema.Types.ObjectId },
    status: { type: String },
    address: { type: String },
  },

  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const employeeModel = mongoose.model("employees", employeeSchema);

module.exports = employeeModel;
