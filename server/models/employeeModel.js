const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    employeeFirstName: { type: String },
    employeeLastName: { type: String },
    employeeName: { type: String },
    employeeEmail: { type: String, unique: true, match: /.+\@.+\..+/ },
    employeePhone: { type: Number },
    employeePosition: { type: String },
    employeeDepartment: { type: String },
    employeeJoinDate: { type: Date },
    employeeSalary: { type: Number },
    employeeGender: { type: String },
    employeeRole: { type: mongoose.Schema.Types.ObjectId },
    status: { type: String },
    employeeAddress: { type: String },
  },

  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const employeeModel = mongoose.model("employees", employeeSchema);

module.exports = employeeModel;
