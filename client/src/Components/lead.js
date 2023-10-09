// <!doctype html>
// <html lang="en">

// <head>
//     <meta charset="utf-8" />
//     <title>Lead Management | Tonga</title>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta content="#" name="description" />
//     <meta content="Themesbrand" name="author" />
//     <!-- App favicon -->
//     <link rel="shortcut icon" href="assets/images/favicon.ico">

//     <!-- DataTables -->
//     <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
//     <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
//         type="text/css" />

//     <!-- Responsive datatable examples -->
//     <link href="assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css" rel="stylesheet"
//         type="text/css" />

//     <!-- Bootstrap Css -->
//     <link href="assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
//     <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
//     <!-- Icons Css -->
//     <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
//     <!-- App Css-->
//     <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
//     <!-- Custom Css-->
//     <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />
//     <style>
//         .card-title {
//             font-size: 0.8rem !important;
//         }

//         .btn {
//             font-size: 0.7rem;
//         }

//         .card select,
//         .card input {
//             height: 25px !important;
//             padding: 0 1.75rem 0 0.75rem !important;
//             font-size: 0.7rem !important;
//         }

//         .btn-light {
//             height: 25px;
//             padding: 0 0.75rem;
//             font-size: 0.7rem !important;
//         }

//         .myDiv {
//             display: none;
//         }

//         .select2-container {
//             width: 100% !important;
//         }

//         .btn-default {
//             color: #333;
//             background-color: #fff;
//             border-color: #ccc;
//         }

//         .btn-xs {
//             padding: 1px 5px;
//             font-size: 12px;
//             line-height: 1.5;
//             border-radius: 3px;
//         }

//         .btn-xs:focus {
//             box-shadow: none !important;
//         }

//         .table-wrapper {
//             max-height: 200px;
//             overflow-y: auto;
//         }

//         .category-container {
//             max-height: 200px;
//             overflow-y: auto;
//             margin-bottom: 1rem;
//         }

//         table {
//             border-collapse: collapse;
//             width: 100%;
//             table-layout: fixed;
//             font-size: 0.7rem;
//         }

//         th,
//         td {
//             border: 1px solid #ccc;
//             padding: 8px;
//             text-align: left;
//         }

//         thead {
//             position: sticky;
//             top: 0;
//             background-color: white;
//         }

//         .btn-sm {
//             font-size: 0.5rem;
//         }

//         .extra-row {
//             display: none;
//         }

//         .topnav {
//             background-color: #111c43 !important;
//             margin: 0 !important;
//         }

//         .topnav .navbar-nav .nav-link {
//             color: #fff !important;
//         }
//         .input-container {
//       position: relative;
//     }

//     .input-container input {
//       width: 100%;
//       padding-right: 50px; /* Make space for icons */
//     }

//     .input-icons {
//       position: absolute;
//       top: 70%;
//       right: 30px;
//       transform: translateY(-50%);
//     }

//     .input-icons i {
//       cursor: pointer;
//       margin-left: 10px;
//     }
//     </style>

// </head>

// <body data-topbar="dark" data-layout="horizontal" data-layout-size="boxed" data-layout-scrollable="true">

export const Lead = () => {
  return (
    <div id="layout-wrapper">
      <div className="topnav">
        <div className="container-fluid">
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
            <div className="collapse navbar-collapse" id="topnav-menu-content">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <h4
                    className="text-white m-0"
                    style={{ padding: "1rem 1.3rem" }}
                  >
                    Tonga
                  </h4>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="index.html"
                    id="topnav-dashboard"
                    role="button"
                  >
                    <i className="bx bx-home-circle" />
                    <span className="badge rounded-pill bg-info float-end ms-2">
                      02
                    </span>
                    <span key="t-dashboards">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-pages"
                    role="button"
                  >
                    <i className="bx bx-user" />
                    <span key="t-admin">Admin</span>
                    <div className="arrow-down" />
                  </a>
                  <div className="dropdown-menu" aria-labelledby="topnav-pages">
                    <a
                      href="user-managment.html"
                      className="dropdown-item"
                      key="t-chat"
                    >
                      User Management
                    </a>
                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-email"
                        role="button"
                      >
                        <span key="t-calendar">Roles and Permission</span>
                        <div className="arrow-down" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-email"
                      >
                        <a
                          href="roles.html"
                          className="dropdown-item"
                          key="t-tui-calendar"
                        >
                          Roles
                        </a>
                        <a
                          href="permission.html"
                          className="dropdown-item"
                          key="t-full-calender"
                        >
                          Permissions
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="customer-maagment.html"
                    id="topnav-dashboard"
                    role="button"
                  >
                    <i className="bx bxs-graduation" />
                    <span key="t-Customer">Customer</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="lead.html"
                    className="nav-link"
                    aria-expanded="false"
                  >
                    <i className="bx bx-task" />
                    <span key="t-lead">Lead</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-components"
                    role="button"
                  >
                    <i className="bx bx-calendar" />
                    <span key="t-scedule">Scedule</span>
                    <div className="arrow-down" />
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="topnav-components"
                  >
                    <a
                      href="sceduling.html"
                      className="dropdown-item"
                      key="calendar"
                    >
                      Calendar
                    </a>
                    <a
                      href="trainer.html"
                      className="dropdown-item"
                      key="trainer"
                    >
                      Trainers
                    </a>
                    <a
                      href="date-range.html"
                      className="dropdown-item"
                      key="date-range"
                    >
                      Holidays
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-components"
                    role="button"
                  >
                    <i className="bx bx-dollar" />
                    <span key="t-scedule">Finance</span>
                    <div className="arrow-down" />
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="topnav-components"
                  >
                    <a
                      className="dropdown-item"
                      href="quotation.html"
                      key="quotation"
                    >
                      Quotation Management
                    </a>
                    <a
                      className="dropdown-item"
                      href="sales-quotation.html"
                      key="sales"
                    >
                      Sales Quotation
                    </a>
                    <a
                      className="dropdown-item"
                      href="invoice.html"
                      key="invoice"
                    >
                      Invoice Management
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-components"
                    role="button"
                  >
                    <i className="bx bx-food-menu" />
                    <span key="t-course">Course Managment</span>
                    <div className="arrow-down" />
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="topnav-components"
                  >
                    <a
                      href="registration-type.html"
                      className="dropdown-item"
                      key="t-course-dashboard"
                    >
                      Registration Type
                    </a>
                    <a
                      href="trade-level.html"
                      className="dropdown-item"
                      key="t-course-categoery"
                    >
                      Trade Level
                    </a>
                    <a
                      href="trade-type.html"
                      className="dropdown-item"
                      key="t-course-subcategoery"
                    >
                      Trade Types
                    </a>
                    <a
                      href="course.html"
                      className="dropdown-item"
                      key="t-course-subcategoery"
                    >
                      Courses
                    </a>
                    <a
                      href="class.html"
                      className="dropdown-item"
                      key="t-class-managment"
                    >
                      Class
                    </a>
                    <a
                      href="certificate.html"
                      className="dropdown-item"
                      key="t-certificate"
                    >
                      Certificate Generation
                    </a>
                    <a href="task.html" className="dropdown-item" key="t-task">
                      Task{" "}
                    </a>
                    <a
                      href="attendance.html"
                      className="dropdown-item"
                      key="t-client-portal"
                    >
                      Attendance
                    </a>
                    <a
                      href="feedback.html"
                      className="dropdown-item"
                      key="t-feedback"
                    >
                      Feedback
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-components"
                    role="button"
                  >
                    <i className="bx bx-customize" />
                    <span key="t-hrms">HRMS</span>
                    <div className="arrow-down" />
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="topnav-components"
                  >
                    <a
                      className="dropdown-item "
                      href="employee.html"
                      id="topnav-form"
                      role="button"
                    >
                      <span key="t-forms">Employee Management</span>
                    </a>
                    <a
                      className="dropdown-item "
                      href="payroll.html"
                      id="topnav-form"
                      role="button"
                    >
                      <span key="t-forms">Payroll Maagment</span>
                    </a>
                    <a
                      className="dropdown-item "
                      href="leave.html"
                      id="topnav-form"
                      role="button"
                    >
                      <span key="t-forms">Leave Management</span>
                    </a>
                    <a
                      className="dropdown-item "
                      href="timesheet.html"
                      id="topnav-form"
                      role="button"
                    >
                      <span key="t-forms">Timesheet Tracking</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* ============================================================== */}
      {/* Start right Content here */}
      {/* ============================================================== */}
      <div className="main-content">
        <div className="page-content p-0">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title">Lead List </div>
                    <div className="row w-75">
                      <div className="col-xl-4">
                        <select className="form-select">
                          <option value={0} selected>
                            Sort By
                          </option>
                          <option value={1}>New Lead</option>
                          <option value={2}>Payment-Pending</option>
                          <option value={3}>Course-Assign</option>
                        </select>
                      </div>
                      <div className="col-xl-4">
                        <select className="form-select">
                          <option value={0} selected>
                            Select Company
                          </option>
                          <option value="CA">Company-1</option>
                          <option value="NV">Company-2</option>
                          <option value="OR">Company-3</option>
                        </select>
                      </div>
                      <div className="col-xl-4">
                        <div className="d-flex" role="search">
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />{" "}
                          <button className="btn btn-light" type="submit">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#add-new"
                      style={{ height: "20px", padding: "0 0.5rem" }}
                    >
                      <i className="bx bx-plus fw-semibold align-middle" /> Add
                      New
                    </button>
                  </div>
                  <div className="card-body">
                    {/* Category: New */}
                    <div className="category-container mb-0 ">
                      <table className="display">
                        <thead>
                          <tr>
                            <th className="border-bottom-0">
                              CoreTrade Registration No
                            </th>
                            <th className="border-bottom-0">Company Name</th>
                            <th className="border-bottom-0">Contact Person</th>
                            <th className="border-bottom-0">
                              Name of Participant
                            </th>
                            <th className="border-bottom-0">
                              Participant's Mobile
                            </th>
                            <th className="border-bottom-0">Trade Type</th>
                            <th className="border-bottom-0">Actions</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div
                      className="category-container mb-0 "
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div
                        style={{
                          fontSize: "0.6rem",
                          position: "absolute",
                          left: "0.4rem",
                          top: "7rem",
                        }}
                      >
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          N
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          E
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          W
                        </span>
                      </div>
                      <table>
                        {/* Initially display 2 rows */}
                        <tbody>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                        {/* Additional rows initially hidden */}
                        <tbody>
                          <tr className="extra-row" data-category="New">
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr className="extra-row" data-category="New">
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr className="extra-row" data-category="New">
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={7}
                              className="border-bottom-0 text-center"
                            >
                              <a
                                href="javascript:void(0);"
                                className="show-more-less-btn"
                                data-category="New"
                              >
                                Show More
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Category: Payment-Pending */}
                    <div className="category-container mb-0 ">
                      <div
                        style={{
                          position: "absolute",
                          left: "0.4rem",
                          top: "14rem",
                          fontSize: "0.6rem",
                        }}
                      >
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          P
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          E
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          N
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          D
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          I
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          N
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          G
                        </span>
                      </div>
                      <table>
                        {/* Initially display 2 rows */}
                        <tbody>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                        {/* Additional rows initially hidden */}
                        <tbody>
                          <tr
                            className="extra-row"
                            data-category="Payment-pending"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr
                            className="extra-row"
                            data-category="Payment-pending"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr
                            className="extra-row"
                            data-category="Payment-pending"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={7}
                              className="border-bottom-0 text-center"
                            >
                              <a
                                href="javascript:void(0);"
                                className="show-more-less-btn"
                                data-category="Payment-pending"
                              >
                                Show More{" "}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Category: Course-assign */}
                    <div className="category-container">
                      <div
                        style={{
                          position: "absolute",
                          left: "0.4rem",
                          top: "22rem",
                          fontSize: "0.6rem",
                        }}
                      >
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          A
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          S
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          S
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          I
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          G
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          N
                        </span>
                      </div>
                      <table>
                        {/* Initially display 2 rows */}
                        <tbody>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                        {/* Additional rows initially hidden */}
                        <tbody>
                          <tr
                            className="extra-row"
                            data-category="Course-assign"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr
                            className="extra-row"
                            data-category="Course-assign"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr
                            className="extra-row"
                            data-category="Course-assign"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={7} className="text-center">
                              <a
                                href="javascript:void(0);"
                                className="show-more-less-btn"
                                data-category="Course-assign"
                              >
                                Show More
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title">Completed</div>
                    <div className="row w-75">
                      <div className="col-xl-4">
                        <select className="form-select">
                          <option value={0} selected>
                            Select Registration Type
                          </option>
                          <option value="CT">CoreTrade</option>
                        </select>
                      </div>
                      <div className="col-xl-4">
                        <select className="form-select">
                          <option value={0} selected>
                            Select Trade Level
                          </option>
                          <option value="CAFC">Tradesman(FC+AC)</option>
                        </select>
                      </div>
                      <div className="col-xl-4">
                        <div className="d-flex" role="search">
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />{" "}
                          <button className="btn btn-light" type="submit">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <table
                      id="datatable-buttons"
                      className="table table-bordered dt-responsive nowrap w-100"
                    >
                      <thead>
                        <tr>
                          <th>CoreTrade Registration No</th>
                          <th>Company Name</th>
                          <th>Contact Person</th>
                          <th>Name of Participant</th>
                          <th>Participant's Mobile</th>
                          <th>Trade Type</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            style={{ cursor: "pointer" }}
                          >
                            CTF-ELW-524-0817-G
                          </td>
                          <td>ABC Corporation</td>
                          <td>John Smith</td>
                          <td>Alice Johnson</td>
                          <td>9876543210</td>
                          <td>Tiling</td>
                          <td>
                            <i
                              className="mdi mdi-pencil align-middle me-1 text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#edit"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-trash-can align-middle me-1 text-danger"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="bx bx-money align-middle me-1 text-info"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-check-circle align-middle text-success"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            style={{ cursor: "pointer" }}
                          >
                            CTF-ELW-524-0817-G
                          </td>
                          <td>ABC Corporation</td>
                          <td>John Smith</td>
                          <td>Alice Johnson</td>
                          <td>9876543210</td>
                          <td>Tiling</td>
                          <td>
                            <i
                              className="mdi mdi-pencil align-middle me-1 text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#edit"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-trash-can align-middle me-1 text-danger"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="bx bx-money align-middle me-1 text-info"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-check-circle align-middle text-success"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            style={{ cursor: "pointer" }}
                          >
                            CTF-ELW-524-0817-G
                          </td>
                          <td>ABC Corporation</td>
                          <td>John Smith</td>
                          <td>Alice Johnson</td>
                          <td>9876543210</td>
                          <td>Tiling</td>
                          <td>
                            <i
                              className="mdi mdi-pencil align-middle me-1 text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#edit"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-trash-can align-middle me-1 text-danger"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="bx bx-money align-middle me-1 text-info"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-check-circle align-middle text-success"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <div
          id="add-new"
          className="modal fade bs-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" style={{ maxWidth: "1200px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title add-Customer-title">Add New Lead</h5>
                <h5
                  className="modal-title update-Customer-title"
                  style={{ display: "none" }}
                >
                  Update Customer
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <label htmlFor="category" className="form-label">
                        Registration Type <span className="text-danger">*</span>
                      </label>
                      <select className="form-select" id="myselection" required>
                        <option value selected>
                          Select Registration Type
                        </option>
                        <option value={1}>Core Trade</option>
                        <option value={2}>Multi-skilling</option>
                        <option value={3}>SEC(k)</option>
                        <option value={4}>CET(Renewal)</option>
                        <option value={5}>ALP for Malaysian &amp; NAS</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyName" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        placeholder="Enter Company Name"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyUEN" className="form-label">
                        Company UEN No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyUEN"
                        placeholder="Enter Company UEN No."
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyAddress" className="form-label">
                        Company Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyAddress"
                        placeholder="Enter Company Address"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="postalCode" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        placeholder="Enter Postal Code"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="contactPerson" className="form-label">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactPerson"
                        placeholder="Enter Contact Person"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label
                        htmlFor="contactPersonMobile"
                        className="form-label"
                      >
                        Contact Person's Mobile
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="contactPersonMobile"
                        placeholder="Enter Contact Person's Mobile"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label
                        htmlFor="contactPersonEmail"
                        className="form-label"
                      >
                        Contact Person's Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="contactPersonEmail"
                        placeholder="Enter Contact Person's Email Address"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="officeTelephone" className="form-label">
                        Office Telephone No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="officeTelephone"
                        placeholder="Enter Office Telephone No."
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="officeFax" className="form-label">
                        Office Fax No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="officeFax"
                        placeholder="Enter Office Fax No."
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantName" className="form-label">
                        Name of Participant
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="participantName"
                        placeholder="Enter Name of Participant"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantNRIC" className="form-label">
                        Participant's NRIC / FIN No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="participantNRIC"
                        placeholder="Enter Participant's NRIC / FIN No."
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantMobile" className="form-label">
                        Participant's Mobile
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="participantMobile"
                        placeholder="Enter Participant's Mobile"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="alternateMobile" className="form-label">
                        Alternate Mobile Number (if any)
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="alternateMobile"
                        placeholder="Enter Alternate Mobile Number (if any)"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="tradeType" className="form-label">
                        Trade Type
                      </label>
                      <select className="form-select" id="tradeType" required>
                        <option value disabled selected>
                          Select Trade Type
                        </option>
                        <option value="TradeType-1">TradeType-1</option>
                        <option value="TradeType-2">TradeType-2</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="coreTradeRegNo" className="form-label">
                        CoreTrade / Multi-skilling/Direct R1 Registration No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="coreTradeRegNo"
                        placeholder="Enter CoreTrade / Multi-skilling/Direct R1 Registration No"
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <hr />
                      <h4>
                        Upload Documents <span className="text-danger">*</span>
                      </h4>
                    </div>
                    <div className="col-md-12">
                      <div className="row myDiv" id="show1">
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Valid BCA Acknowledgement Notice
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid copy of NRIC / Work document
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div className="row myDiv" id="show2">
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            1st Skill Evaluation Certificate / BCA Skills
                            Qualification Statement
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid BCA Acknowledgement Notice
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Pass
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div className="row myDiv" id="show3">
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Pass
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div className="row myDiv" id="show4">
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Valid BCA Acknowledgement Notice
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Passt
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div className="row myDiv" id="show5">
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Copy Of PA Quota（PA复印件）
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Copy Of Worker's IC 员工的身份证复印件
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Copy Of Worker's Passport (if available)
                            员工的护照复印件 - 如有请提供
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-lg-12 text-end">
                    <button type="button" className="btn btn-primary">
                      Add New
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Discard
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div
          id="view"
          className="modal fade bs-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" style={{ maxWidth: "1200px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title add-Customer-title">View Lead</h5>
                <h5
                  className="modal-title update-Customer-title"
                  style={{ display: "none" }}
                >
                  Update Customer
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyName" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        defaultValue="ABC Corporation"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyUEN" className="form-label">
                        Company UEN No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyUEN"
                        defaultValue="UEN1234567"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyAddress" className="form-label">
                        Company Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyAddress"
                        defaultValue="123 Main Street"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="postalCode" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        defaultValue={12345}
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="contactPerson" className="form-label">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactPerson"
                        defaultValue="John Smith"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label
                        htmlFor="contactPersonMobile"
                        className="form-label"
                      >
                        Contact Person's Mobile
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="contactPersonMobile"
                        defaultValue={9876543210}
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label
                        htmlFor="contactPersonEmail"
                        className="form-label"
                      >
                        Contact Person's Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="contactPersonEmail"
                        defaultValue="john@example.com"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="officeTelephone" className="form-label">
                        Office Telephone No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="officeTelephone"
                        defaultValue="555-123-4567"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="officeFax" className="form-label">
                        Office Fax No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="officeFax"
                        defaultValue="555-987-6543"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantName" className="form-label">
                        Name of Participant
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="participantName"
                        defaultValue="Alice Johnson"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantNRIC" className="form-label">
                        Participant's NRIC / FIN No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="participantNRIC"
                        defaultValue="S1234567A"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantMobile" className="form-label">
                        Participant's Mobile
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="participantMobile"
                        defaultValue={9876543210}
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="alternateMobile" className="form-label">
                        Alternate Mobile Number (if any)
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="alternateMobile"
                        defaultValue
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="tradeType" className="form-label">
                        Trade Type
                      </label>
                      <select className="form-select" id="tradeType" disabled>
                        <option value="TradeType-1" selected>
                          TradeType-1
                        </option>
                        <option value="TradeType-2">TradeType-2</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="coreTradeRegNo" className="form-label">
                        CoreTrade / Multi-skilling/Direct R1 Registration No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="coreTradeRegNo"
                        defaultValue="CT1234567"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="course" className="form-label">
                        Course
                      </label>
                      <select
                        className="form-select"
                        id="class-add"
                        required
                        disabled
                      >
                        <option value={0}>Select course</option>
                        <option value="class-1" selected>
                          Course-1
                        </option>
                        <option value="class-2">Course-2</option>
                        <option value="class-3">Course-3</option>
                      </select>
                    </div>
                    <div className="col-md-12 mb-3">
                      <hr />
                      <h4>
                        Upload Documents <span className="text-danger">*</span>
                      </h4>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label
                        htmlFor="acknowledgementNotice"
                        className="form-label"
                      >
                        Valid BCA Acknowledgement Notice
                      </label>
                      <br />
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="abc.pdf"
                        readOnly
                      />
                      <div className="input-icons">
                        <i
                          className="fas fa-eye text-primary"
                          style={{ cursor: "pointer" }}
                        />
                        <i
                          className="fas fa-download text-success"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="nricWorkDocument" className="form-label">
                        Valid copy of NRIC / Work document
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="xyz.pdf"
                        readOnly
                      />
                      <div className="input-icons">
                        <i
                          className="fas fa-eye text-primary"
                          style={{ cursor: "pointer" }}
                        />
                        <i
                          className="fas fa-download text-success"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-lg-12 text-end">
                    <button type="button" className="btn btn-primary">
                      Get Payment
                    </button>
                    <button type="button" className="btn btn-success">
                      Confirm
                    </button>
                    <button type="button" className="btn btn-danger">
                      Reject
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div
          id="edit"
          className="modal fade bs-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" style={{ maxWidth: "1200px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title add-Customer-title">Edit Lead</h5>
                <h5
                  className="modal-title update-Customer-title"
                  style={{ display: "none" }}
                >
                  Update Customer
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyName" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        defaultValue="ABC Corporation"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyUEN" className="form-label">
                        Company UEN No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyUEN"
                        defaultValue="UEN1234567"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyAddress" className="form-label">
                        Company Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyAddress"
                        defaultValue="123 Main Street"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="postalCode" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        defaultValue={12345}
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="contactPerson" className="form-label">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactPerson"
                        defaultValue="John Smith"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label
                        htmlFor="contactPersonMobile"
                        className="form-label"
                      >
                        Contact Person's Mobile
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="contactPersonMobile"
                        defaultValue={9876543210}
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label
                        htmlFor="contactPersonEmail"
                        className="form-label"
                      >
                        Contact Person's Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="contactPersonEmail"
                        defaultValue="john@example.com"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="officeTelephone" className="form-label">
                        Office Telephone No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="officeTelephone"
                        defaultValue="555-123-4567"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="officeFax" className="form-label">
                        Office Fax No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="officeFax"
                        defaultValue="555-987-6543"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantName" className="form-label">
                        Name of Participant
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="participantName"
                        defaultValue="Alice Johnson"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantNRIC" className="form-label">
                        Participant's NRIC / FIN No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="participantNRIC"
                        defaultValue="S1234567A"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantMobile" className="form-label">
                        Participant's Mobile
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="participantMobile"
                        defaultValue={9876543210}
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="alternateMobile" className="form-label">
                        Alternate Mobile Number (if any)
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="alternateMobile"
                        defaultValue="+91-1234123456"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="tradeType" className="form-label">
                        Trade Type
                      </label>
                      <select className="form-select" id="tradeType">
                        <option value="TradeType-1">TradeType-1</option>
                        <option value="TradeType-2">TradeType-2</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="coreTradeRegNo" className="form-label">
                        CoreTrade / Multi-skilling/Direct R1 Registration No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="coreTradeRegNo"
                        defaultValue="CT1234567"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="course" className="form-label">
                        Course
                      </label>
                      <select className="form-select" id="class-add" required>
                        <option value={0}>Select course</option>
                        <option value="class-1">Course-1</option>
                        <option value="class-2">Course-2</option>
                        <option value="class-3">Course-3</option>
                      </select>
                    </div>
                    <div className="col-md-12 mb-3">
                      <hr />
                      <h4>
                        Upload Documents <span className="text-danger">*</span>
                      </h4>
                    </div>
                    <div className="col-md-12">
                      <div
                        className="row myDiv"
                        id="show1"
                        style={{ display: "flex" }}
                      >
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Valid BCA Acknowledgement Notice
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid copy of NRIC / Work document
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div
                        className="row myDiv"
                        id="show2"
                        style={{ display: "none" }}
                      >
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            1st Skill Evaluation Certificate / BCA Skills
                            Qualification Statement
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid BCA Acknowledgement Notice
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Pass
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div
                        className="row myDiv"
                        id="show3"
                        style={{ display: "none" }}
                      >
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Pass
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div
                        className="row myDiv"
                        id="show4"
                        style={{ display: "none" }}
                      >
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Valid BCA Acknowledgement Notice
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Passt
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div
                        className="row myDiv"
                        id="show5"
                        style={{ display: "none" }}
                      >
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Copy Of PA Quota（PA复印件）
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Copy Of Worker's IC 员工的身份证复印件
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Copy Of Worker's Passport (if available)
                            员工的护照复印件 - 如有请提供
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-lg-12 text-end">
                    <button type="button" className="btn btn-primary">
                      Update
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Discard
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
      </div>
      {/* end main content*/}
    </div>
  );
};
{
  /* <!-- END layout-wrapper -->



    <!-- JAVASCRIPT -->
    <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>
    <script src="assets/libs/select2/js/select2.min.js"></script>

    <!-- Required datatable js -->
    <script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
    <!-- Buttons examples -->
    <script src="assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
    <script src="assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
    <script src="assets/libs/jszip/jszip.min.js"></script>
    <script src="assets/libs/pdfmake/build/pdfmake.min.js"></script>
    <script src="assets/libs/pdfmake/build/vfs_fonts.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>

    <!-- Responsive examples -->
    <script src="assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
    <script src="assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>

    <!-- Datatable init js -->
    <script src="assets/js/pages/datatables.init.js"></script>


    <script src="assets/js/app.js"></script>
    <!-- form advanced init -->
    <script src="assets/js/pages/form-advanced.init.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script>
        $(document).ready(function () {
            $('#myselection').on('change', function () {
                var demovalue = $(this).val();
                $("div.myDiv").css("display", "none"); // Hide all rows
                $("#show" + demovalue).css("display", "flex"); // Show the selected row
            });
        });
    </script>

    <script>

        $(document).ready(function () {

            $("#userCourse-add").select2({

                dropdownParent: $("#add-new")

            });

        });

    </script>
    <script>

        $(document).ready(function () {

            $("#userCourse-view").select2({

                dropdownParent: $("#add-new")

            });

        });

    </script>

    <script>
        $(document).ready(function () {
            $('.accordion-toggle').click(function () {
                $(this).next('.hiddenRow').toggle();
            });
        });
    </script>
    <script>
        const showMoreLessBtns = document.querySelectorAll('.show-more-less-btn');
        const extraRows = document.querySelectorAll('.extra-row');

        showMoreLessBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');
                const rowsToToggle = document.querySelectorAll(`.extra-row[data-category="${category}"]`);

                rowsToToggle.forEach(row => {
                    if (row.style.display === 'none' || row.style.display === '') {
                        row.style.display = 'table-row';
                    } else {
                        row.style.display = 'none';
                    }
                });

                btn.textContent = (btn.textContent === 'Show More') ? 'Show Less' : 'Show More';

            });
        });
    </script>
    <script>
        $(document).ready(function () {
            $('table.display').DataTable();
        });
    </script>
</body>

</html> */
}
