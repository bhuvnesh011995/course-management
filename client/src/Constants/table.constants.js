export const courseData = [
  {
    courseName: "Ray Optics & Optical Fibre Master Class",
    Category: "Science",
    Classes: 20,
    LastUpdated: "29-05-2023 ",
    Trainer: "Shin Opran ",
    Customers: 25,
  },
  {
    courseName: "Master Linear Alzebra Medium Level",
    Category: "Mathematics",
    Classes: 90,
    LastUpdated: "29-05-2023 ",
    Trainer: "Ayaa Neo",
    Customers: 773,
  },
  {
    courseName: "Master Linear Alzebra Medium Level",
    Category: "Mathematics",
    Classes: 90,
    LastUpdated: "29-05-2023 ",
    Trainer: "Ayaa Neo",
    Customers: 773,
  },
];

export const tableHeaders = {
  courseName: "Course",
  Category: "Category",
  Classes: "Classes",
  LastUpdated: "Last Updated",
  Trainer: "Trainer",
  Customers: "Customers",
};

export const permissionTableHeaders = {
  permissionName: "Name",
  assignTo: "Assigned To",
  created_at: "Created At",
};
export const rolesTableHeaders = {
  userName: "User",
  roleName: "Role",
  created_at: "Created At",
  status: "Status",
};

export const userTableHeaders = {
  _id: "User Id",
  name: "Name",
  userName: "User Name",
  phoneNo: "Mobile",
  email: "Email",
  roleName: "User Right",
  created_at: "Created At",
};

export const leadTableHeaders = {
  coreTradeRegNo: "CoreTrade Registration No",
  companyName: "Company Name",
  contactPerson: "Contact Person",
  participantName: "Name of Participant",
  participantMobile: "Participant's Mobile",
  tradeType: "Trade Type",
};

export const tradeLevelHeaders = {
  tradeLevel: "Trade Level",
  tradeCode: "Trade Level Code",
};

export const tradeTypeHeaders = {
  tradeType: "Trade Type Name",
  typeCode: "Trade Type Code",
};

export const registrationTypeHeaders = {
  registrationName: "Registration Name",
  registrationCode: "Registration Code",
  tradeLevels: "Trade Level",
};

export const customersHeaders = {
  participantName: "Name of Participant",
  companyName: "Company Name",
  contactPerson: "Contact Person",
  participantMobile: "Participant's Mobile",
};

export const courseHeaders = {
  courseName: "Course Name",
  tradeType: "Trade Type",
  registrationType: "Registration Type",
  tradeLevel: "Trade Level",
  price: "Price ($)",
  duration: "Duration",
};

export const classHeaders = {
  classCode: "Class Name",
  trainer: "Trainer",
  course: "Course",
  startDate: "Start Date",
  endDate: "End Date",
  classTiming: "Class Timing",
};

export const accountHistoryHeaders = {
  course: "Course",
  class: "Class",
  price: "Amount",
  created_at: "Purchase Date",
  // paymentStatus: "Payment Status",
};

export const trainerHeaders = {
  _id: "Trainer ID",
  trainerName: "Name",
  trainerEmail: "Email ID",
  trainerMobile: "Mobile No.",
  trainerDOB: "DOB",
  designation: "Designation",
};

export const viewTrainerHeaders = {
  course: "Course",
  classCode: "Class",
  startDate: "Date",
  classTiming: "Time",
  lectureDay: "Lec In Week",
};

export const dayColors = [
  "badge badge-soft-primary",
  "badge badge-soft-secondary",
  "badge badge-soft-success",
  "badge badge-soft-danger",
  "badge badge-soft-warning",
  "badge badge-soft-info",
  "badge badge-soft-dark",
];

export const certificateHeaders = {
  certificateNo: "Certificate Number",
  participantName: "Participant's Name",
  courseName: "Course Name",
  courseDuration: "Duration",
  grade: "Grade",
  completionDate: "Date Of Completion",
  certificateAttchment: "Attachment",
  remarks: "Remarks",
};

export const employeeHeaders = {
  _id: "Employee ID",
  employeeName: "Name",
  employeePosition: "Position",
  employeeEmail: "Email",
  employeePhone: "Phone",
  employeeDepartment: "Department",
  employeeJoinDate: "Join Date",
  status: "Status",
};

export const attendanceHeaders = {
  coreTradeRegNo: "CoreTrade Registration No",
  participantName: "Name of Participant",
  course: "Course",
  classCode: "Class",
  startDate: "Date",
};

export const generateAttendanceHeaders = {
  participantName: "Name Of Trainee",
  participantNric: "NRIC/ FIN No.",
  coreTradeRegNo:
    "Registration No. / Submission No. (CoreTrade / Multi-Skilling / Direct R1)",
};

export const excelAttendanceHeaders = {
  participantName: "Name Of Trainee",
  participantNric: "NRIC/ FIN No.",
  coreTradeRegNo:
    "Registration No. / Submission No. (CoreTrade / Multi-Skilling / Direct R1)",
  traineeAttendance: "Trainee's Attendance (Signature)",
  traineeResults: "Results (P/f) *",
};

export const quotationPreviewHeaders = {
  courseName: "Course Name",
  unitPrice: " Unit Price",
  unit: "Quantity",
  grossAmt: "Gross Amount($)",
  discount: "Discount(%)",
};

export const quoatationListHeaders = {
  _id: "Quotation No.",
  contactPerson: "Customer Name",
  contactPersonEmail: "Email",
  contactPersonMobile: "Mobile",
  created_at: "Created on",
};

export const salesQuoatationListHeaders = {
  _id: "Sales Quotation No.",
  contactPerson: "Customer Name",
  contactPersonEmail: "Email",
  contactPersonMobile: "Mobile",
  created_at: "Created on",
};

export const invoiceQuoatationListHeaders = {
  _id: "Invoice Quotation No.",
  contactPerson: "Customer Name",
  contactPersonEmail: "Email",
  contactPersonMobile: "Mobile",
  created_at: "Created on",
};

export const payrollHeaders = {
  employeeName: "Employee Name",
  employeeDepartment: "Department",
  employeePosition: "Position",
  salary: "Basic Salary",
  allowances: "Allowances",
  deductions: "Deductions",
  netSalary: "Net Salary",
};

export const timesheetHeaders = {
  date: "Date",
  employeeName: "Employee Name",
  addHoursWorked: "Hours Worked",
  addOvertimeHours: "Overtime Hours",
  shiftTiming: "Shift",
};

export const leaveHeaders = {
  employeeName: "Employee Name",
  employeeDepartment: "Department",
  employeePosition: "Position",
  leavetype: "Leave Type",
  startDate: "Start Date",
  endDate: "End Date",
};

export const dashboardCourseHeaders = {
  courseName: "Course Title",
  status: "Status",
  duration: "Duration",
  trainerName: "Trainer",
};

export const dashboardCustomerHeaders = {
  contactPerson: "Name",
  contactPersonEmail: "Email",
  courseCount: "Courses",
  completedCount: "Completed",
};
