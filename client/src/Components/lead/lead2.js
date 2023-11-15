// <!doctype html>
// <html lang="en">

import { CommonNavbar } from "../../common-components/Navbar";

// <head>

//     <meta charset="utf-8" />
//     <title>Lead Management | Tonga</title>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta content="#" name="description" />
//     <meta content="Themesbrand" name="author" />
//     <!-- App favicon -->
//     <link rel="shortcut icon" href="assets/images/favicon.ico">
//     <!-- dragula css -->
//     <link href="assets/libs/dragula/dragula.min.css" rel="stylesheet" type="text/css" />
//     <link href="assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
//     <!-- Bootstrap Css -->
//     <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
//     <!-- Icons Css -->
//     <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
//     <!-- App Css-->
//     <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
//     <!-- Custom Css-->
//     <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />

//     <style>
//         body{
//             overflow: hidden;
//         }

//         .kanban-board .card-header {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//         }

//         /* .task-list {
//             height: 730px;
//             overflow-y: auto;

//         } */
//         .task-box {
//             margin-bottom: 0.5rem;
//         }

//         .img-20 {
//             width: 20px !important;
//         }

//         .select2-container {
//             width: 100% !important;
//         }

//         .custom-file-input {
//             position: relative;
//             display: inline-block;
//             cursor: pointer;
//             border: 1px solid #ccc;
//             padding: 0.47rem 1.75rem 0.47rem 0.75rem;
//             border-radius: 5px;
//             width: 90%;
//         }

//         /* Styling for the actual file input */
//         .custom-file-input input[type="file"] {
//             display: none;
//         }
//         .kanban-main-content .tabs{
//             overflow: hidden;
//         }
//         .kanban-main-content .tab-content{
//             overflow: auto;
//     height: 330px;
//     width: 100%;
//         }

//         .avatar-md {
//             height: 2rem;
//             width: 2rem;
//         }
//        .tab-content>.active {
//             display: flex !important;
//             align-items: stretch;
//         }
//         .card.bg-soft {
//             margin-bottom: 0;
//         }
//         .new-lead .lead-card-body {
//             height: 320px;
//             overflow: hidden;
//         }
//         #lead-column-1{
//                 height: 320px;
//                 overflow: auto;
//         }
//     </style>
// </head>

// <body data-topbar="dark" data-layout="horizontal" data-layout-size="boxed" data-layout-scrollable="true">

//     <!-- Begin page -->
export const Lead2 = () => {
  return (
    <div>
      <div id="layout-wrapper">
        <div className="topnav">
          <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
              <div
                className="collapse navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
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
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
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
                        className="dropdown-item "
                        href="sceduling.html"
                        id="topnav-form"
                        role="button"
                      >
                        <span key="t-forms">Calendar</span>
                      </a>
                      <a
                        className="dropdown-item "
                        href="trainer.html"
                        id="topnav-form"
                        role="button"
                      >
                        <span key="t-forms">Trainers</span>
                      </a>
                      <a
                        className="dropdown-item "
                        href="date-range.html"
                        id="topnav-form"
                        role="button"
                      >
                        <span key="t-forms">Date Range</span>
                      </a>
                      <a
                        className="dropdown-item "
                        href="monitor-venue-availability.html"
                        id="topnav-form"
                        role="button"
                      >
                        <span key="t-forms">Monitor Venue Availability</span>
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
                        href="sceduling.html"
                        id="topnav-form"
                        role="button"
                      >
                        <span key="t-forms">Calendar</span>
                      </a>
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
                        className="dropdown-item "
                        href="course.html"
                        id="topnav-form"
                        role="button"
                      >
                        <span key="t-forms">Dashboard</span>
                      </a>
                      <a
                        className="dropdown-item "
                        href="class.html"
                        id="topnav-form"
                        role="button"
                      >
                        <span key="t-forms">Class Managment</span>
                      </a>
                      <a
                        className="dropdown-item "
                        href="certificate.html"
                        id="topnav-form"
                        role="button"
                      >
                        <span key="t-forms">Certificate Generation</span>
                      </a>
                      <a
                        className="dropdown-item "
                        href="task.html"
                        id="topnav-form"
                        role="button"
                      >
                        <span key="t-forms">Task Management</span>
                      </a>
                      <a
                        className="dropdown-item "
                        href="attendance.html"
                        id="topnav-form"
                        role="button"
                      >
                        <span key="t-forms">Attendance Management</span>
                      </a>
                      <a
                        className="dropdown-item "
                        href="feedback.html"
                        id="topnav-form"
                        role="button"
                      >
                        <span key="t-forms">Feedback Managment</span>
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
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-xl-4">
                          <select className="form-control select2-templating">
                            <optgroup label="New Lead">
                              <option value="AK">Sort By</option>
                              <option value="HI">Jhone Doe</option>
                            </optgroup>
                            <optgroup label="Course-1">
                              <option value="CA">Emily Brown</option>
                              <option value="NV">Michael Johnson</option>
                              <option value="OR">Sophia Davis</option>
                            </optgroup>
                          </select>
                        </div>
                        <div className="col-xl-4">
                          <select className="form-select">
                            <option value={0}>Select Company</option>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="kanban-main-content d-flex gap-3 w-100">
                    <div className="kanban-board overflow-hidden">
                      <div className="kanban-tasks-type new-lead">
                        <div className="card lead-card bg-soft bg-success">
                          <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                            <div className="card-title">Lead</div>
                            <div className="dropdown float-end">
                              <a
                                href="#"
                                className="dropdown-toggle arrow-none"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical m-0 text-white h5" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add-new"
                                >
                                  <i className="mdi mdi-eye me-2 text-success" />
                                  Add
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="mdi mdi-pencil me-2 text-primary" />
                                  Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="mdi mdi-trash-can me-2 text-danger" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card-body lead-card-body h-800">
                            <div id="new-lead">
                              <div
                                id="lead-column-1"
                                className="pb-2 pe-2 task-list"
                              >
                                <div className="card task-box">
                                  <div className="card-body p-0">
                                    <div className="p-3 kanban-board-head">
                                      <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                        <div>
                                          <i className="bx bx-time me-1 align-middle" />
                                          Created - 28 May
                                        </div>
                                        <div>2 days left</div>
                                      </div>
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="task-badges">
                                          <span className="font-size-12 badge bg-primary bg-success">
                                            Active
                                          </span>
                                          <span className="font-size-12 badge bg-light text-default">
                                            Paid
                                          </span>
                                        </div>
                                        <div className="dropdown">
                                          <a
                                            aria-label="anchor"
                                            className="btn btn-icon btn-sm btn-light"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                          >
                                            {" "}
                                            <i className="mdi mdi-dots-vertical" />
                                          </a>
                                          <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            style={{}}
                                          >
                                            <li>
                                              <a
                                                className="dropdown-item"
                                                data-bs-target="#view"
                                                data-bs-toggle="modal"
                                              >
                                                <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                View
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="dropdown-item"
                                                data-bs-target="#edit"
                                                data-bs-toggle="modal"
                                              >
                                                <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                Edit
                                              </a>
                                            </li>
                                            <li>
                                              <a className="dropdown-item">
                                                <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                Payment
                                              </a>
                                            </li>
                                            <li>
                                              <a className="dropdown-item">
                                                <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                Confirm
                                              </a>
                                            </li>
                                            <li>
                                              <a className="dropdown-item">
                                                <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                Delete
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="kanban-content mt-2">
                                        <div className="d-flex align-items-center">
                                          <img
                                            className="img-20 me-1 rounded-circle"
                                            src="../assets/images/faces/12.jpg"
                                            alt=""
                                          />
                                          <div className="flex-grow-1">
                                            <h6 className="fw-semibold mb-0 fs-15">
                                              Jhone Doe
                                            </h6>
                                          </div>
                                        </div>
                                        <div className="kanban-task-description text-dark mt-2">
                                          Paid in Full-stack Development Course.
                                        </div>
                                      </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                      <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                          <a className="me-2 text-primary">
                                            <span className="me-1">
                                              <i className="bx bx-paperclip align-middle fw-normal" />
                                            </span>
                                            <span className="fw-semibold fs-12">
                                              02
                                            </span>
                                          </a>
                                        </div>
                                        <div>
                                          <a className="me-2 text-primary">
                                            <span className="me-1">
                                              <i className="bx bx-phone align-middle fw-normal" />
                                            </span>
                                            <span className="fw-semibold fs-12">
                                              +91-9876543210
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end task card */}
                                <div className="card task-box">
                                  <div className="card-body p-0">
                                    <div className="p-3 kanban-board-head">
                                      <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                        <div>
                                          <i className="bx bx-time me-1 align-middle" />
                                          Created - 15 August
                                        </div>
                                        <div>3 days left</div>
                                      </div>
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="task-badges">
                                          <span className="font-size-12 badge bg-primary bg-success">
                                            Active
                                          </span>
                                          <span className="font-size-12 badge bg-light text-default">
                                            Paid
                                          </span>
                                        </div>
                                        <div className="dropdown">
                                          <a
                                            aria-label="anchor"
                                            className="btn btn-icon btn-sm btn-light"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                          >
                                            <i className="mdi mdi-dots-vertical" />
                                          </a>
                                          <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            style={{}}
                                          >
                                            <li>
                                              <a
                                                className="dropdown-item"
                                                data-bs-target="#view"
                                                data-bs-toggle="modal"
                                              >
                                                <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                View
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="dropdown-item"
                                                data-bs-target="#edit"
                                                data-bs-toggle="modal"
                                              >
                                                <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                Edit
                                              </a>
                                            </li>
                                            <li>
                                              <a className="dropdown-item">
                                                <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                Payment
                                              </a>
                                            </li>
                                            <li>
                                              <a className="dropdown-item">
                                                <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                Confirm
                                              </a>
                                            </li>
                                            <li>
                                              <a className="dropdown-item">
                                                <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                Delete
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="kanban-content mt-2">
                                        <div className="d-flex align-items-center">
                                          <img
                                            className="img-20 me-1 rounded-circle"
                                            src="../assets/images/faces/12.jpg"
                                            alt=""
                                          />
                                          <div className="flex-grow-1">
                                            <h6 className="fw-semibold mb-0 fs-15">
                                              Jane Smith
                                            </h6>
                                          </div>
                                        </div>
                                        <div className="kanban-task-description text-dark mt-2">
                                          Paid in Web Development Course.
                                        </div>
                                      </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                      <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                          <a className="me-2 text-primary">
                                            <span className="me-1">
                                              <i className="bx bx-paperclip align-middle fw-normal" />
                                            </span>
                                            <span className="fw-semibold fs-12">
                                              03
                                            </span>
                                          </a>
                                        </div>
                                        <div>
                                          <a className="me-2 text-primary">
                                            <span className="me-1">
                                              <i className="bx bx-phone align-middle fw-normal" />
                                            </span>
                                            <span className="fw-semibold fs-12">
                                              +91-9876543211
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end task card */}
                                <div className="card task-box">
                                  <div className="card-body p-0">
                                    <div className="p-3 kanban-board-head">
                                      <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                        <div>
                                          <i className="bx bx-time me-1 align-middle" />
                                          Created - 10 August
                                        </div>
                                        <div>1 day left</div>
                                      </div>
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="task-badges">
                                          <span className="font-size-12 badge bg-primary bg-warning">
                                            Pending
                                          </span>
                                          <span className="font-size-12 badge bg-light text-default">
                                            Paid
                                          </span>
                                        </div>
                                        <div className="dropdown">
                                          <a
                                            aria-label="anchor"
                                            className="btn btn-icon btn-sm btn-light"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                          >
                                            <i className="mdi mdi-dots-vertical" />
                                          </a>
                                          <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            style={{}}
                                          >
                                            <li>
                                              <a
                                                className="dropdown-item"
                                                data-bs-target="#view"
                                                data-bs-toggle="modal"
                                              >
                                                <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                View
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="dropdown-item"
                                                data-bs-target="#edit"
                                                data-bs-toggle="modal"
                                              >
                                                <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                Edit
                                              </a>
                                            </li>
                                            <li>
                                              <a className="dropdown-item">
                                                <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                Payment
                                              </a>
                                            </li>
                                            <li>
                                              <a className="dropdown-item">
                                                <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                Confirm
                                              </a>
                                            </li>
                                            <li>
                                              <a className="dropdown-item">
                                                <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                Delete
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="kanban-content mt-2">
                                        <div className="d-flex align-items-center">
                                          <img
                                            className="img-20 me-1 rounded-circle"
                                            src="../assets/images/faces/12.jpg"
                                            alt=""
                                          />
                                          <div className="flex-grow-1">
                                            <h6 className="fw-semibold mb-0 fs-15">
                                              Alex Johnson
                                            </h6>
                                          </div>
                                        </div>
                                        <div className="kanban-task-description text-dark mt-2">
                                          Pending enrollment for Data Science
                                          Course.
                                        </div>
                                      </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                      <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                          <a className="me-2 text-primary">
                                            <span className="me-1">
                                              <i className="bx bx-paperclip align-middle fw-normal" />
                                            </span>
                                            <span className="fw-semibold fs-12">
                                              01
                                            </span>
                                          </a>
                                        </div>
                                        <div>
                                          <a className="me-2 text-primary">
                                            <span className="me-1">
                                              <i className="bx bx-phone align-middle fw-normal" />
                                            </span>
                                            <span className="fw-semibold fs-12">
                                              +91-9876543222
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end task card */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end page title */}
                      {/* end col */}
                      <div className="tabs w-100">
                        <ul
                          className="nav nav-tabs nav-justified nav-tabs-custom"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link active"
                              data-bs-toggle="tab"
                              href="#home1"
                              role="tab"
                              tabIndex={-1}
                            >
                              <span className="d-block d-sm-none">
                                <i className="fas fa-home" />
                              </span>
                              <span className="d-none d-sm-block">CET</span>
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link "
                              data-bs-toggle="tab"
                              href="#profile1"
                              role="tab"
                            >
                              <span className="d-block d-sm-none">
                                <i className="far fa-user" />
                              </span>
                              <span className="d-none d-sm-block">
                                Coretrade
                              </span>
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content p-3 text-muted">
                          <div
                            className="tab-pane active show"
                            id="home1"
                            role="tabpanel"
                          >
                            <div className="kanban-tasks-type course-1">
                              <div className="card bg-primary bg-soft">
                                <div className="card-header bg-primary text-white">
                                  <div className="card-title">
                                    Aluminium Formwork (Enhanced)
                                  </div>
                                  <div className="dropdown float-end">
                                    <a
                                      href="#"
                                      className="dropdown-toggle arrow-none"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="mdi mdi-dots-vertical m-0 text-white h5" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-new"
                                      >
                                        <i className="mdi mdi-eye me-2 text-success" />
                                        Add
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-pencil me-2 text-primary" />
                                        Edit
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-trash-can me-2 text-danger" />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  {/* end dropdown */}
                                </div>
                                <div className="card-body h-800">
                                  <div id="course-1">
                                    <div
                                      id="lead-column-2"
                                      className="pb-2 pe-2 task-list"
                                    >
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 5 August
                                              </div>
                                              <div>5 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-danger">
                                                  Inactive
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Emily Brown
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Inactive enrollment for Graphic
                                                Design Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    00
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543233
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 20 August
                                              </div>
                                              <div>7 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Michael Johnson
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Photography Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    01
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543244
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 1 August
                                              </div>
                                              <div>10 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-danger">
                                                  Inactive
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Pending
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Sophia Davis
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Pending enrollment for Music
                                                Production Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    00
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543255
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* end col */}
                            <div className="kanban-tasks-type course-2">
                              <div className="card bg-warning bg-soft text-white">
                                <div className="card-header bg-warning">
                                  <div className="card-title">
                                    Electrical Wiring Installation
                                  </div>
                                  <div className="dropdown float-end">
                                    <a
                                      href="#"
                                      className="dropdown-toggle arrow-none"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="mdi mdi-dots-vertical m-0 text-white h5" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-new"
                                      >
                                        <i className="mdi mdi-eye me-2 text-success" />
                                        Add
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-pencil me-2 text-primary" />
                                        Edit
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-trash-can me-2 text-danger" />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  {/* end dropdown */}
                                </div>
                                <div className="card-body h-800">
                                  <div id="course-2">
                                    <div
                                      id="lead-column-3"
                                      className="pb-2 pe-2 task-list"
                                    >
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 8 August
                                              </div>
                                              <div>4 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Oliver Johnson
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Digital Marketing
                                                Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    02
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543266
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 18 August
                                              </div>
                                              <div>6 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Sophia Johnson
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Fashion Design Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    03
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543277
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 25 August
                                              </div>
                                              <div>8 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Ethan Davis
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Culinary Arts Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    01
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543288
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* end col */}
                            <div className="kanban-tasks-type course-3">
                              <div className="card bg-info bg-soft text-white">
                                <div className="card-header bg-info">
                                  <div className="card-title">
                                    Plumbing &amp; Pipefitting
                                  </div>
                                  <div className="dropdown float-end">
                                    <a
                                      href="#"
                                      className="dropdown-toggle arrow-none"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="mdi mdi-dots-vertical m-0 text-muted h5" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-new"
                                      >
                                        <i className="mdi mdi-eye me-2 text-success" />
                                        Add
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-pencil me-2 text-primary" />
                                        Edit
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-trash-can me-2 text-danger" />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  {/* end dropdown */}
                                </div>
                                <div className="card-body h-800">
                                  <div id="course-3">
                                    <div
                                      id="lead-column-4"
                                      className="pb-2 pe-2 task-list"
                                    >
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 15 August
                                              </div>
                                              <div>3 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Ava Johnson
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Web Development Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    01
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543299
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 12 August
                                              </div>
                                              <div>5 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-danger">
                                                  Inactive
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Pending
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Liam Johnson
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Pending enrollment for Mobile
                                                App Development Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    00
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543300
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 22 August
                                              </div>
                                              <div>9 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Mia Davis
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Graphic Design Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    02
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543311
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* end col */}
                          </div>
                          <div
                            className="tab-pane"
                            id="profile1"
                            role="tabpanel"
                          >
                            <div className="kanban-tasks-type course-3">
                              <div className="card bg-success bg-soft text-white">
                                <div className="card-header bg-info">
                                  <div className="card-title">
                                    Steel Reinforcement Work
                                  </div>
                                  <div className="dropdown float-end">
                                    <a
                                      href="#"
                                      className="dropdown-toggle arrow-none"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="mdi mdi-dots-vertical m-0 text-muted h5" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-new"
                                      >
                                        <i className="mdi mdi-eye me-2 text-success" />
                                        Add
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-pencil me-2 text-primary" />
                                        Edit
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-trash-can me-2 text-danger" />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  {/* end dropdown */}
                                </div>
                                <div className="card-body h-800">
                                  <div id="course-3">
                                    <div
                                      id="lead-column-4"
                                      className="pb-2 pe-2 task-list"
                                    >
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 15 August
                                              </div>
                                              <div>3 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Ava Johnson
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Web Development Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    01
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543299
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 12 August
                                              </div>
                                              <div>5 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-danger">
                                                  Inactive
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Pending
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Liam Johnson
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Pending enrollment for Mobile
                                                App Development Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    00
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543300
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 22 August
                                              </div>
                                              <div>9 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Mia Davis
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Graphic Design Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    02
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543311
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* end col */}
                            <div className="kanban-tasks-type course-3">
                              <div className="card bg-primary bg-soft text-white">
                                <div className="card-header bg-info">
                                  <div className="card-title">Tiling</div>
                                  <div className="dropdown float-end">
                                    <a
                                      href="#"
                                      className="dropdown-toggle arrow-none"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="mdi mdi-dots-vertical m-0 text-muted h5" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-new"
                                      >
                                        <i className="mdi mdi-eye me-2 text-success" />
                                        Add
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-pencil me-2 text-primary" />
                                        Edit
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-trash-can me-2 text-danger" />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  {/* end dropdown */}
                                </div>
                                <div className="card-body h-800">
                                  <div id="course-3">
                                    <div
                                      id="lead-column-4"
                                      className="pb-2 pe-2 task-list"
                                    >
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 15 August
                                              </div>
                                              <div>3 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Ava Johnson
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Web Development Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    01
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543299
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 12 August
                                              </div>
                                              <div>5 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-danger">
                                                  Inactive
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Pending
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Liam Johnson
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Pending enrollment for Mobile
                                                App Development Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    00
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543300
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 22 August
                                              </div>
                                              <div>9 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Mia Davis
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Graphic Design Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    02
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543311
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* end col */}
                            <div className="kanban-tasks-type course-3">
                              <div className="card bg-warning bg-soft text-white">
                                <div className="card-header bg-info">
                                  <div className="card-title">
                                    Waterproofing
                                  </div>
                                  <div className="dropdown float-end">
                                    <a
                                      href="#"
                                      className="dropdown-toggle arrow-none"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="mdi mdi-dots-vertical m-0 text-muted h5" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-new"
                                      >
                                        <i className="mdi mdi-eye me-2 text-success" />
                                        Add
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-pencil me-2 text-primary" />
                                        Edit
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-trash-can me-2 text-danger" />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  {/* end dropdown */}
                                </div>
                                <div className="card-body h-800">
                                  <div id="course-3">
                                    <div
                                      id="lead-column-4"
                                      className="pb-2 pe-2 task-list"
                                    >
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 15 August
                                              </div>
                                              <div>3 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Ava Johnson
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Web Development Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    01
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543299
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 12 August
                                              </div>
                                              <div>5 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-danger">
                                                  Inactive
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Pending
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Liam Johnson
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Pending enrollment for Mobile
                                                App Development Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    00
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543300
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                      <div className="card task-box">
                                        <div className="card-body p-0">
                                          <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-2 fs-12 fw-semibold">
                                              <div>
                                                <i className="bx bx-time me-1 align-middle" />
                                                Created - 22 August
                                              </div>
                                              <div>9 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                              <div className="task-badges">
                                                <span className="font-size-12 badge bg-primary bg-success">
                                                  Active
                                                </span>
                                                <span className="font-size-12 badge bg-light text-default">
                                                  Paid
                                                </span>
                                              </div>
                                              <div className="dropdown">
                                                <a
                                                  aria-label="anchor"
                                                  className="btn btn-icon btn-sm btn-light"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i className="mdi mdi-dots-vertical" />
                                                </a>
                                                <ul
                                                  className="dropdown-menu dropdown-menu-end"
                                                  style={{}}
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#view"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                                      View
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      data-bs-target="#edit"
                                                      data-bs-toggle="modal"
                                                    >
                                                      <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                                      Edit
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                                      Payment
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                                      Confirm
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a className="dropdown-item">
                                                      <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                                      Delete
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="kanban-content mt-2">
                                              <div className="d-flex align-items-center">
                                                <img
                                                  className="img-20 me-1 rounded-circle"
                                                  src="../assets/images/faces/12.jpg"
                                                  alt=""
                                                />
                                                <div className="flex-grow-1">
                                                  <h6 className="fw-semibold mb-0 fs-15">
                                                    Mia Davis
                                                  </h6>
                                                </div>
                                              </div>
                                              <div className="kanban-task-description text-dark mt-2">
                                                Paid in Graphic Design Course.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-paperclip align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    02
                                                  </span>
                                                </a>
                                              </div>
                                              <div>
                                                <a className="me-2 text-primary">
                                                  <span className="me-1">
                                                    <i className="bx bx-phone align-middle fw-normal" />
                                                  </span>
                                                  <span className="fw-semibold fs-12">
                                                    +91-9876543311
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* end task card */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* end col */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end row */}
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">© Skote.</div>
                <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                    Design &amp; Develop by Themesbrand
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* end main content*/}
      </div>
      <div className="right-bar">
        <div data-simplebar className="h-100">
          <div className="rightbar-title d-flex align-items-center px-3 py-4">
            <h5 className="m-0 me-2">Settings</h5>
            <a className="right-bar-toggle ms-auto">
              <i className="mdi mdi-close noti-icon" />
            </a>
          </div>
          {/* Settings */}
          <hr className="mt-0" />
          <h6 className="text-center mb-0">Choose Layouts</h6>
          <div className="p-4">
            <div className="mb-2">
              <img
                src="assets/images/layouts/layout-1.jpg"
                className="img-thumbnail"
                alt="layout images"
              />
            </div>
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input theme-choice"
                type="checkbox"
                id="light-mode-switch"
                defaultChecked
              />
              <label className="form-check-label">Light Mode</label>
            </div>
            <div className="mb-2">
              <img
                src="assets/images/layouts/layout-2.jpg"
                className="img-thumbnail"
                alt="layout images"
              />
            </div>
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input theme-choice"
                type="checkbox"
                id="dark-mode-switch"
              />
              <label className="form-check-label">Dark Mode</label>
            </div>
            <div className="mb-2">
              <img
                src="assets/images/layouts/layout-3.jpg"
                className="img-thumbnail"
                alt="layout images"
              />
            </div>
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input theme-choice"
                type="checkbox"
                id="rtl-mode-switch"
              />
              <label className="form-check-label">RTL Mode</label>
            </div>
            <div className="mb-2">
              <img
                src="assets/images/layouts/layout-4.jpg"
                className="img-thumbnail"
                alt="layout images"
              />
            </div>
            <div className="form-check form-switch mb-5">
              <input
                className="form-check-input theme-choice"
                type="checkbox"
                id="dark-rtl-mode-switch"
              />
              <label className="form-check-label">Dark RTL Mode</label>
            </div>
          </div>
        </div>{" "}
        {/* end slimscroll-menu*/}
      </div>
      <div className="rightbar-overlay" />
    </div>
  );
};
