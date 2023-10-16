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
};

export const tradeTypeHeaders = {
  tradeType: "Trade Type Name",
};

export const registrationTypeHeaders = {
  registrationName: "Registration Name",
  tradeLevelIds: "Trade Level",
};
