import avatar1 from "../assets/images/users/avatar-1.jpg";
import avatar2 from "../assets/images/users/avatar-2.jpg";
import avatar3 from "../assets/images/users/avatar-3.jpg";
import avatar4 from "../assets/images/users/avatar-4.jpg";
import avatar5 from "../assets/images/users/avatar-5.jpg";
import avatar6 from "../assets/images/users/avatar-6.jpg";
import avatar7 from "../assets/images/users/avatar-7.jpg";
import avatar8 from "../assets/images/users/avatar-8.jpg";

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
  trainerDesignation: "Designation",
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
