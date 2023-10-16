// <!doctype html>
// <html lang="en">

import { MenuBar } from "../../common-components/MenuBar";
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
//     <!-- DataTables -->
//     <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
//     <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
//         type="text/css" />

//     <!-- Responsive datatable examples -->
//     <link href="assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css" rel="stylesheet"
//         type="text/css" />
//     <style>
//         .kanban-board .card-header {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//         }

//         .task-list {
//             height: 730px;
//             overflow-y: auto;

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

//         .avatar-md {
//             height: 2rem;
//             width: 2rem;
//         }
//         .myDiv{
// 	display:none;
// }
//     </style>
// </head>

// <body data-sidebar="dark">

export const LeadGrid = () => {
  return (
    <div id="layout-wrapper">
      <CommonNavbar />
      {/* ========== Left Sidebar Start ========== */}
      <MenuBar />
      {/* Left Sidebar End */}
      {/* ============================================================== */}
      {/* Start right Content here */}
      {/* ============================================================== */}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Lead Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Lead Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="row w-100">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="kanban-board">
              <div className="kanban-tasks-type new-lead">
                <div className="card bg-soft bg-success">
                  <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                    <div className="card-title">New</div>
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
                  <div className="card-body h-800">
                    <div id="new-lead">
                      <div id="lead-column-1" className="pb-2 pe-2 task-list">
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
                                    href="javascript:void(0);"
                                    className="btn btn-icon btn-sm btn-light"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    {" "}
                                    <i className="mdi mdi-dots-vertical" />{" "}
                                  </a>
                                  <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    style={{}}
                                  >
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      02
                                    </span>{" "}
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      03
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  Pending enrollment for Data Science Course.
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border-top border-block-start-dashed">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      01
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                      <div className="text-center d-grid">
                        <a
                          href="javascript: void(0);"
                          className="btn btn-success waves-effect waves-light addtask-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#add-new"
                        >
                          <i className="mdi mdi-plus me-1" /> Add New
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
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
                      <div id="lead-column-2" className="pb-2 pe-2 task-list">
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  Inactive enrollment for Graphic Design Course.
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border-top border-block-start-dashed">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      00
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      01
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  Pending enrollment for Music Production
                                  Course.
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border-top border-block-start-dashed">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      00
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                      <div className="text-center d-grid">
                        <a
                          href="javascript: void(0);"
                          className="btn btn-primary waves-effect waves-light addtask-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#add-new"
                          data-id="#inprogress-task"
                        >
                          <i className="mdi mdi-plus me-1" /> Add New
                        </a>
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
                      <div id="lead-column-3" className="pb-2 pe-2 task-list">
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  Paid in Digital Marketing Course.
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border-top border-block-start-dashed">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      02
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      03
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      01
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                      <div className="text-center d-grid">
                        <a
                          href="javascript: void(0);"
                          className="btn btn-warning waves-effect waves-light addtask-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#add-new"
                          data-id="#complete-task"
                        >
                          <i className="mdi mdi-plus me-1" /> Add New
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="kanban-tasks-type course-3">
                <div className="card bg-info bg-soft text-white">
                  <div className="card-header bg-info">
                    <div className="card-title">Plumbing &amp; Pipefitting</div>
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
                      <div id="lead-column-4" className="pb-2 pe-2 task-list">
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      01
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  Pending enrollment for Mobile App Development
                                  Course.
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border-top border-block-start-dashed">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      00
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      02
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                      <div className="text-center d-grid">
                        <a
                          href="javascript: void(0);"
                          className="btn btn-info waves-effect waves-light addtask-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#add-new"
                          data-id="#complete-task"
                        >
                          <i className="mdi mdi-plus me-1" /> Add New
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="kanban-tasks-type course-3">
                <div className="card bg-success bg-soft text-white">
                  <div className="card-header bg-info">
                    <div className="card-title">Steel Reinforcement Work</div>
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
                      <div id="lead-column-4" className="pb-2 pe-2 task-list">
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      01
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  Pending enrollment for Mobile App Development
                                  Course.
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border-top border-block-start-dashed">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      00
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      02
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                      <div className="text-center d-grid">
                        <a
                          href="javascript: void(0);"
                          className="btn btn-success waves-effect waves-light addtask-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#add-new"
                          data-id="#complete-task"
                        >
                          <i className="mdi mdi-plus me-1" /> Add New
                        </a>
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
                      <div id="lead-column-4" className="pb-2 pe-2 task-list">
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      01
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  Pending enrollment for Mobile App Development
                                  Course.
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border-top border-block-start-dashed">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      00
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      02
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                      <div className="text-center d-grid">
                        <a
                          href="javascript: void(0);"
                          className="btn btn-primary waves-effect waves-light addtask-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#add-new"
                          data-id="#complete-task"
                        >
                          <i className="mdi mdi-plus me-1" /> Add New
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="kanban-tasks-type course-3">
                <div className="card bg-warning bg-soft text-white">
                  <div className="card-header bg-info">
                    <div className="card-title">Waterproofing</div>
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
                      <div id="lead-column-4" className="pb-2 pe-2 task-list">
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      01
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  Pending enrollment for Mobile App Development
                                  Course.
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border-top border-block-start-dashed">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      00
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                                    href="javascript:void(0);"
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
                                        href="javascript:void(0);"
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
                                        href="javascript:void(0);"
                                        data-bs-target="#edit"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                        Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                        Payment
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                        Confirm
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
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
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
                                    <span className="me-1">
                                      <i className="bx bx-paperclip align-middle fw-normal" />
                                    </span>
                                    <span className="fw-semibold fs-12">
                                      02
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0);"
                                    className="me-2 text-primary"
                                  >
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
                      <div className="text-center d-grid">
                        <a
                          href="javascript: void(0);"
                          className="btn btn-warning waves-effect waves-light addtask-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#add-new"
                          data-id="#complete-task"
                        >
                          <i className="mdi mdi-plus me-1" /> Add New
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
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
          <div className="modal-dialog modal-lg">
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
                        Category <span className="text-danger">*</span>
                      </label>
                      <select className="form-select" id="myselection" required>
                        <option value selected>
                          Select Category
                        </option>
                        <option value={1}>Core Trade</option>
                        <option value={2}>Multi-skilling</option>
                        <option value={3}>SEC(k)</option>
                        <option value={4}>CET(Renewal)</option>
                        <option value={5}>ALP for Malaysian &amp; NAS</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
                        <div className="col-md-6 mb-3">
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
          <div className="modal-dialog modal-lg">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="nricWorkDocument" className="form-label">
                        Valid copy of NRIC / Work document
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="nricWorkDocument"
                        readOnly
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-lg-12 text-end">
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
          id="edit"
          className="modal fade bs-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
                      <label htmlFor="alternateMobile" className="form-label">
                        Alternate Mobile Number (if any)
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="alternateMobile"
                        defaultValue
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="tradeType" className="form-label">
                        Trade Type
                      </label>
                      <select className="form-select" id="tradeType">
                        <option value="TradeType-1">TradeType-1</option>
                        <option value="TradeType-2">TradeType-2</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
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
                    <div className="col-md-6 mb-3">
                      <label htmlFor="nricWorkDocument" className="form-label">
                        Valid copy of NRIC / Work document
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="nricWorkDocument"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
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
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© Tonga.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by{" "}
                  <a href="https://braincavesoft.com" target="_blank">
                    Braincave Software Pvt.Ltd.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* end main content*/}
    </div>
  );
};
{
  /* 
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
    <!-- dragula plugins -->
    <script src="assets/libs/dragula/dragula.min.js"></script>
    <!-- <script src="assets/js/pages/task-kanban.init.js"></script> -->
    <script src="assets/js/pages/task-form.init.js"></script>
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
</body>

</html> */
}
