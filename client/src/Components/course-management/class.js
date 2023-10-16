// <!doctype html>
// <html lang="en">

import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { onMenuClicked } from "../../common-components/useCommonUsableFunctions";

// <head>

//     <meta charset="utf-8" />
//     <title>Class Management | Tonga</title>
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
//     <link href="assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">

//     <link href="assets/libs/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css">

//     <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
//     <!-- Icons Css -->
//     <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
//     <!-- App Css-->
//     <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
//     <!-- Custom Css-->
//     <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />

//     <style>
//         .select2-container {
//             width: 100% !important;
//         }
//     </style>
// </head>

// <body data-sidebar="dark">

// <!-- Start layout-wrapper -->
export const Class = () => {
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
                  <h4 className="mb-sm-0 font-size-18">Class Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Class Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="row w-50">
                        <div className="col-xl-5">
                          <select className="form-select">
                            <option value="CA">Newest</option>
                            <option value="NV">Oldest</option>
                            <option value="OR">Recent</option>
                          </select>
                        </div>
                        <div className="col-xl-7">
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
                        className="btn btn-primary me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#addClassModal"
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Class
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Role cards */}
            <div className="row g-4">
              <div className="col-md-12">
                {/* Role Table */}
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Class List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th scope="col">Class Code</th>
                            <th>Trainer</th>
                            <th>Course</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Class Timing</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>CS101</td>
                            <td>John Doe</td>
                            <td>Computer Science</td>
                            <td>01 Jan,2023</td>
                            <td>01 June, 2023</td>
                            <td>10:00 AM - 12:00 PM</td>
                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#viewClassModal"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editClassModal"
                              >
                                <i className="mdi mdi-pencil" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-danger rounded-pill"
                              >
                                <i className="mdi mdi-trash-can" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/*/ Role Table */}
              </div>
            </div>
            {/*/ Role cards */}
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        {/* Add Class Modal */}
        <div
          className="modal fade"
          id="addClassModal"
          tabIndex={-1}
          aria-labelledby="addClassModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addClassModalLabel">
                  Add New Class
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="addClassForm">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="classCode" className="form-label">
                        Class Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="classCode"
                        placeholder="Enter class code"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="course" className="form-label">
                        Course
                      </label>
                      <select className="form-select" id="class-add" required>
                        <option value={0}>Select courses</option>
                        <option value="class-1">class-1</option>
                        <option value="class-2">class-2</option>
                        <option value="class-3">class-3</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="Customerstatus"
                        className="col-form-label"
                      >
                        Status<span className="text-danger">*</span>
                      </label>
                      <div className="col-lg-12">
                        <select
                          className="form-select validate"
                          id="Customerstatus"
                          required
                        >
                          <option value selected>
                            Choose Status..
                          </option>
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="classTiming" className="form-label">
                        Class Starting Timing
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="classTiming"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="classTiming" className="form-label">
                        Class Ending Timing
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="classTiming"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="startDate" className="form-label">
                        Start Date
                      </label>
                      <div className="input-group" id="datepicker2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="dd M, yyyy"
                          data-date-format="dd M, yyyy"
                          data-date-container="#datepicker2"
                          data-provide="datepicker"
                          data-date-autoclose="true"
                        />
                        <span className="input-group-text">
                          <i className="mdi mdi-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="endDate" className="form-label">
                        End Date
                      </label>
                      <div className="input-group" id="datepicker3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="dd M, yyyy"
                          data-date-format="dd M, yyyy"
                          data-date-container="#datepicker3"
                          data-provide="datepicker"
                          data-date-autoclose="true"
                        />
                        <span className="input-group-text">
                          <i className="mdi mdi-calendar" />
                        </span>
                      </div>
                    </div>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n                                        .custom-select {\n                                            position: relative;\n                                            width: 100%;\n                                            cursor: pointer;\n                                        }\n\n                                        .option label {\n                                            margin-bottom: 0;\n                                        }\n\n                                        .select-box {\n                                            display: flex;\n                                            justify-content: space-between;\n                                            align-items: center;\n                                            padding: 10px;\n                                            border: 1px solid #ccc;\n                                            border-radius: 4px;\n                                        }\n\n                                        .custom-select-view .select-box {\n                                            background-color: #eff2f7;\n                                            opacity: 1;\n                                        }\n\n                                        .placeholder {\n                                            background-color: transparent;\n                                            opacity: 1;\n                                            flex-grow: 1;\n                                            margin-right: 10px;\n                                            cursor: pointer;\n                                        }\n\n                                        .options {\n                                            position: absolute;\n                                            top: 100%;\n                                            left: 0;\n                                            width: 100%;\n                                            background-color: #fff;\n                                            border: 1px solid #ccc;\n                                            border-top: none;\n                                            border-radius: 0 0 4px 4px;\n                                            display: none;\n                                        }\n\n                                        .option {\n                                            display: flex;\n                                            align-items: center;\n                                            padding: 5px;\n                                        }\n\n                                        input[type="checkbox"] {\n                                            margin-right: 5px;\n                                        }\n                                    ',
                      }}
                    />
                    <div className="col-md-6 mb-3">
                      <div className="custom-select">
                        <label htmlFor>Lec In Week</label>
                        <div className="select-box">
                          <span className="placeholder">Select Items</span>
                          <i className="fas fa-chevron-down" />
                        </div>
                        <div className="options">
                          <div className="option">
                            <input type="checkbox" id="item1" />
                            <label htmlFor="item1">Monday</label>
                          </div>
                          <div className="option">
                            <input type="checkbox" id="item2" />
                            <label htmlFor="item2">Tuesday</label>
                          </div>
                          <div className="option">
                            <input type="checkbox" id="item2" />
                            <label htmlFor="item2">Wednesday</label>
                          </div>
                          <div className="option">
                            <input type="checkbox" id="item2" />
                            <label htmlFor="item2">Thursday</label>
                          </div>
                          <div className="option">
                            <input type="checkbox" id="item2" />
                            <label htmlFor="item2">Friday</label>
                          </div>
                          <div className="option">
                            <input type="checkbox" id="item2" />
                            <label htmlFor="item2">Saturday</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="addClassSubmit"
                >
                  Add Class
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Class Modal */}
        <div
          className="modal fade"
          id="editClassModal"
          tabIndex={-1}
          aria-labelledby="editClassModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editClassModalLabel">
                  Edit Class
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="editClassForm">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="classCode" className="form-label">
                        Class Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="editClassCode"
                        required
                        defaultValue="C123"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="course" className="form-label">
                        Course
                      </label>
                      <select className="form-select" id="class-add" required>
                        <option value={0}>Select courses</option>
                        <option value="class-1" selected>
                          class-1
                        </option>
                        <option value="class-2">class-2</option>
                        <option value="class-3">class-3</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="Customerstatus"
                        className="col-form-label"
                      >
                        Status<span className="text-danger">*</span>
                      </label>
                      <div className="col-lg-12">
                        <select
                          className="form-select validate"
                          id="editCustomerStatus"
                          required
                        >
                          <option value disabled>
                            Choose Status..
                          </option>
                          <option value="Active" selected>
                            Active
                          </option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="editClassStartTiming"
                        className="form-label"
                      >
                        Class Starting Timing
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="editClassStartTiming"
                        required
                        defaultValue="09:00"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="editClassEndTiming"
                        className="form-label"
                      >
                        Class Ending Timing
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="editClassEndTiming"
                        required
                        defaultValue="11:00"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="startDate" className="form-label">
                        Start Date
                      </label>
                      <div className="input-group" id="editDatepickerStart">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="dd M, yyyy"
                          data-date-format="dd M, yyyy"
                          data-date-container="#editDatepickerStart"
                          data-provide="datepicker"
                          data-date-autoclose="true"
                          id="editStartDate"
                          defaultValue="15 Aug, 2023"
                        />
                        <span className="input-group-text">
                          <i className="mdi mdi-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="endDate" className="form-label">
                        End Date
                      </label>
                      <div className="input-group" id="editDatepickerEnd">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="dd M, yyyy"
                          data-date-format="dd M, yyyy"
                          data-date-container="#editDatepickerEnd"
                          data-provide="datepicker"
                          data-date-autoclose="true"
                          id="editEndDate"
                          defaultValue="15 Dec, 2023"
                        />
                        <span className="input-group-text">
                          <i className="mdi mdi-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="custom-select-edit">
                        <label htmlFor>Lec In Week</label>
                        <div className="select-box">
                          <span className="placeholder">Select Items</span>
                          <i className="fas fa-chevron-down" />
                        </div>
                        <div className="options">
                          <div className="option">
                            <input type="checkbox" id="item1" />
                            <label htmlFor="item1">Monday</label>
                          </div>
                          <div className="option">
                            <input type="checkbox" id="item2" />
                            <label htmlFor="item2">Tuesday</label>
                          </div>
                          <div className="option">
                            <input type="checkbox" id="item2" />
                            <label htmlFor="item2">Wednesday</label>
                          </div>
                          <div className="option">
                            <input type="checkbox" id="item2" />
                            <label htmlFor="item2">Thursday</label>
                          </div>
                          <div className="option">
                            <input type="checkbox" id="item2" />
                            <label htmlFor="item2">Friday</label>
                          </div>
                          <div className="option">
                            <input type="checkbox" id="item2" />
                            <label htmlFor="item2">Saturday</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="editClassSubmit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* View Class Modal */}
        <div
          className="modal fade"
          id="viewClassModal"
          tabIndex={-1}
          aria-labelledby="viewClassModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewClassModalLabel">
                  View Class
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="viewClassForm">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="classCode" className="form-label">
                        Class Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="viewClassCode"
                        required
                        defaultValue="C123"
                        disabled
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="course" className="form-label">
                        Course
                      </label>
                      <select
                        className="form-select"
                        id="class-add"
                        required
                        disabled
                      >
                        <option value={0}>Select courses</option>
                        <option value="class-1" disabled>
                          class-1
                        </option>
                        <option value="class-2">class-2</option>
                        <option value="class-3">class-3</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="Customerstatus"
                        className="col-form-label"
                      >
                        Status<span className="text-danger">*</span>
                      </label>
                      <div className="col-lg-12">
                        <select
                          className="form-select validate"
                          id="viewCustomerStatus"
                          required
                          disabled
                        >
                          <option value disabled>
                            Choose Status..
                          </option>
                          <option value="Active" selected>
                            Active
                          </option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="viewClassStartTiming"
                        className="form-label"
                      >
                        Class Starting Timing
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="viewClassStartTiming"
                        required
                        defaultValue="09:00"
                        disabled
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="viewClassEndTiming"
                        className="form-label"
                      >
                        Class Ending Timing
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="viewClassEndTiming"
                        required
                        defaultValue="11:00"
                        disabled
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="startDate" className="form-label">
                        Start Date
                      </label>
                      <div className="input-group" id="viewDatepickerStart">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="dd M, yyyy"
                          data-date-format="dd M, yyyy"
                          data-date-container="#viewDatepickerStart"
                          data-provide="datepicker"
                          data-date-autoclose="true"
                          id="viewStartDate"
                          defaultValue="15 Aug, 2023"
                          disabled
                        />
                        <span className="input-group-text">
                          <i className="mdi mdi-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="endDate" className="form-label">
                        End Date
                      </label>
                      <div className="input-group" id="viewDatepickerEnd">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="dd M, yyyy"
                          data-date-format="dd M, yyyy"
                          data-date-container="#viewDatepickerEnd"
                          data-provide="datepicker"
                          data-date-autoclose="true"
                          id="viewEndDate"
                          defaultValue="15 Dec, 2023"
                          disabled
                        />
                        <span className="input-group-text">
                          <i className="mdi mdi-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="custom-select-view">
                        <label htmlFor>Lec In Week</label>
                        <div className="select-box" disab>
                          <span className="placeholder">Monday , Tuesday</span>
                          <i className="fas fa-chevron-down" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
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
  /* <!-- END layout-wrapper --> */
}

{
  /* <!-- JAVASCRIPT -->
    <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>
    <script src="assets/js/pages/task-form.init.js"></script>
    <script src="assets/libs/select2/js/select2.min.js"></script>
    <script src="assets/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
    <script src="assets/libs/bootstrap-timepicker/js/bootstrap-timepicker.min.js"></script>

    <!-- form advanced init -->

    <script src="assets/js/pages/form-advanced.init.js"></script>
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
    <script>
        $(document).ready(function () {
            $('.custom-select .select-box').click(function (e) {
                e.stopPropagation();
                $('.custom-select .options').toggle();
            });

            $('.custom-select .option input[type="checkbox"]').change(function () {
                const selectedItems = $('.custom-select .option input:checked')
                    .map(function () {
                        return $(this).next('label').text();
                    })
                    .get();

                if (selectedItems.length > 0) {
                    $('.custom-select .placeholder').text(selectedItems.join(', '));
                } else {
                    $('.custom-select .placeholder').text('Select Items');
                }
            });

            // Close the options when clicking outside
            $(document).click(function () {
                $('.custom-select .options').hide();
            });
        });

    </script>
     <script>
        $(document).ready(function () {
            $('.custom-select-edit .select-box').click(function (e) {
                e.stopPropagation();
                $('.custom-select-edit .options').toggle();
            });

            $('.custom-select-edit .option input[type="checkbox"]').change(function () {
                const selectedItems = $('.custom-select-edit .option input:checked')
                    .map(function () {
                        return $(this).next('label').text();
                    })
                    .get();

                if (selectedItems.length > 0) {
                    $('.custom-select-edit .placeholder').text(selectedItems.join(', '));
                } else {
                    $('.custom-select-edit .placeholder').text('Select Items');
                }
            });

            // Close the options when clicking outside
            $(document).click(function () {
                $('.custom-select-edit .options').hide();
            });
        });

    </script>
    <script>

        $(document).ready(function () {

            $(".select2").select2({

                dropdownParent: $("#addClassModal")

            });

        });

    </script>
    <script>

        $(document).ready(function () {

            $(".select2").select2({

                dropdownParent: $("#editUserModal")

            });

        });

    </script>

</body>

</html> */
}
