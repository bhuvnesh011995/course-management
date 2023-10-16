// <!doctype html>
// <html lang="en">

import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { onMenuClicked } from "../../common-components/useCommonUsableFunctions";
import { Link } from "react-router-dom";

// <head>

//     <meta charset="utf-8" />
//     <title>Course Management | Tonga</title>
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
//     <link rel="stylesheet" href="assets/libs/smart-wizaed/smart-wizaed.css">
//     <link href="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.0/main.css" rel="stylesheet">

//     <style>
//         .select2-container {
//             width: 100% !important;
//         }
//     </style>
// </head>

// <body data-sidebar="dark">

// <!-- Start layout-wrapper -->
export const Course = () => {
  return (
    <div>
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
                    <h4 className="mb-sm-0 font-size-18">Course Management</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="index.html">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">
                          Course Management
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
                          data-bs-target="#addCourseModal"
                        >
                          <i className="bx bx-plus me-1 fw-semibold align-middle" />
                          Add New Course
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Role cards */}
              <div className="row">
                <div className="col-lg-3">
                  <div className="card mini-stats-wid">
                    <div className="card-body">
                      <div className="d-flex flex-wrap">
                        <div className="me-3">
                          <p className="text-muted mb-2">Active Course</p>
                          <h5 className="mb-0">12</h5>
                        </div>
                        <div className="avatar-sm ms-auto">
                          <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                            <i className="mdi mdi-book" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card blog-stats-wid">
                    <div className="card-body">
                      <div className="d-flex flex-wrap">
                        <div className="me-3">
                          <p className="text-muted mb-2">Pending Course</p>
                          <h5 className="mb-0">6</h5>
                        </div>
                        <div className="avatar-sm ms-auto">
                          <div className="avatar-title bg-danger bg-soft rounded-circle text-primary font-size-20">
                            <i className="mdi mdi-clock-alert text-danger" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card blog-stats-wid">
                    <div className="card-body">
                      <div className="d-flex flex-wrap">
                        <div className="me-3">
                          <p className="text-muted mb-2">Free Courses</p>
                          <h5 className="mb-0">35</h5>
                        </div>
                        <div className="avatar-sm ms-auto">
                          <div className="avatar-title bg-success bg-soft rounded-circle text-success font-size-20">
                            <i className="mdi mdi-note" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card blog-stats-wid">
                    <div className="card-body">
                      <div className="d-flex flex-wrap">
                        <div className="me-3">
                          <p className="text-muted mb-2">Paid Courses</p>
                          <h5 className="mb-0">15</h5>
                        </div>
                        <div className="avatar-sm ms-auto">
                          <div className="avatar-title bg-warning bg-soft rounded-circle text-warning font-size-20">
                            <i className="bx bx-dollar" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-md-12">
                  {/* Role Table */}
                  <div className="card ">
                    <div className="card-header justify-content-between">
                      <div className="card-title">Course List </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="datatable-buttons"
                          className="table table-bordered dt-responsive nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>Trade Type</th>
                              <th>Registration Type</th>
                              <th>Trade Level</th>
                              <th>Price</th>
                              <th>Duration</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tiling</td>
                              <td>CoreTrade</td>
                              <td>Tradesman(FC+AC)</td>
                              <td>$ 99</td>
                              <td>6 weeks</td>
                              <td>
                                <a
                                  aria-label="anchor"
                                  href="javascript:void(0);"
                                  className="btn btn-icon btn-sm btn-warning rounded-pill"
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewCourseModal"
                                >
                                  <i className="mdi mdi-eye" />
                                </a>
                                <a
                                  aria-label="anchor"
                                  href="javascript:void(0);"
                                  className="btn btn-icon btn-sm btn-primary rounded-pill"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editCourseModal"
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
          {/* Add Course Modal */}
          <div
            className="modal fade"
            id="addCourseModal"
            tabIndex={-1}
            aria-labelledby="addCourseModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addCourseModalLabel">
                    Add New Course
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form id="addCourseForm" className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="tradeType" className="form-label">
                        Trade Type:
                      </label>
                      <select className="form-select" id="tradeType" required>
                        <option value>-- Select Trade Type --</option>
                        <option value="Trade Type 1">
                          Aluminium Formwork (Enhanced)
                        </option>
                        <option value="Trade Type 2">
                          Electrical Wiring Installation
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="registrationType" className="form-label">
                        Registration Type:
                      </label>
                      <select
                        className="form-select"
                        id="registrationType"
                        required
                      >
                        <option value>-- Select Registration Type --</option>
                        <option value="Registration Type 1">CoreTrade</option>
                        <option value="Registration Type 2">
                          Multi-skilling
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="registrationLevel" className="form-label">
                        Trade Level:
                      </label>
                      <select
                        className="form-select"
                        id="registrationLevel"
                        required
                      >
                        <option value>-- Select Registration Level --</option>
                        <option value="Registration Level 1">
                          Tradesman (FC+SA)
                        </option>
                        <option value="Registration Level 2">
                          Tradesman (Re-Test)
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="price" className="form-label">
                        Price:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        placeholder="Enter price"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="duration" className="form-label">
                        Duration:
                      </label>
                      <select
                        className="form-select"
                        id="registrationLevel"
                        required
                      >
                        <option value>-- Select Duration --</option>
                        <option value={1}>3 Week</option>
                        <option value={2}>6 Week</option>
                      </select>
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
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Edit Course Modal */}
          <div
            className="modal fade"
            id="editCourseModal"
            tabIndex={-1}
            aria-labelledby="editCourseModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="editCourseModalLabel">
                    Edit Course
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form id="editCourseForm" className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editTradeType" className="form-label">
                        Trade Type:
                      </label>
                      <select
                        className="form-select"
                        id="editTradeType"
                        required
                      >
                        <option value>-- Select Trade Type --</option>
                        <option value="Trade Type 1" selected>
                          Aluminium Formwork (Enhanced)
                        </option>
                        <option value="Trade Type 2">
                          Electrical Wiring Installation
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="editRegistrationType"
                        className="form-label"
                      >
                        Registration Type:
                      </label>
                      <select
                        className="form-select"
                        id="editRegistrationType"
                        required
                      >
                        <option value>-- Select Registration Type --</option>
                        <option value="Registration Type 1" selected>
                          CoreTrade
                        </option>
                        <option value="Registration Type 2">
                          Multi-skilling
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="editRegistrationLevel"
                        className="form-label"
                      >
                        Trade Level:
                      </label>
                      <select
                        className="form-select"
                        id="editRegistrationLevel"
                        required
                      >
                        <option value>-- Select Registration Level --</option>
                        <option value="Registration Level 1" selected>
                          Tradesman (FC+SA)
                        </option>
                        <option value="Registration Level 2">
                          Tradesman (Re-Test)
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editPrice" className="form-label">
                        Price:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="editPrice"
                        defaultValue="$ 99"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editDuration" className="form-label">
                        Duration:
                      </label>
                      <select
                        className="form-select"
                        id="editDuration"
                        required
                      >
                        <option value selected>
                          -- Select Duration --
                        </option>
                        <option value={1}>3 Week</option>
                        <option value={2} selected>
                          6 Week
                        </option>
                      </select>
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
                    id="saveChangesBtn"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* View Course Modal */}
          <div
            className="modal fade"
            id="viewCourseModal"
            tabIndex={-1}
            aria-labelledby="viewCourseModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="viewCourseModalLabel">
                    View Course Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form id="viewCourseForm" className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="viewTradeType" className="form-label">
                        Trade Type:
                      </label>
                      <select
                        className="form-select"
                        id="viewTradeType"
                        disabled
                      >
                        <option value>-- Select Trade Type --</option>
                        <option value="Trade Type 1" selected>
                          Aluminium Formwork (Enhanced)
                        </option>
                        <option value="Trade Type 2">
                          Electrical Wiring Installation
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="viewRegistrationType"
                        className="form-label"
                      >
                        Registration Type:
                      </label>
                      <select
                        className="form-select"
                        id="viewRegistrationType"
                        disabled
                      >
                        <option value>-- Select Registration Type --</option>
                        <option value="Registration Type 1">CoreTrade</option>
                        <option value="Registration Type 2" selected>
                          Multi-skilling
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="viewRegistrationLevel"
                        className="form-label"
                      >
                        Trade Level:
                      </label>
                      <select
                        className="form-select"
                        id="viewRegistrationLevel"
                        disabled
                      >
                        <option value>-- Select Registration Level --</option>
                        <option value="Registration Level 1">
                          Tradesman (FC+SA)
                        </option>
                        <option value="Registration Level 2" selected>
                          Tradesman (Re-Test)
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="viewPrice" className="form-label">
                        Price:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="viewPrice"
                        defaultValue="$ 99"
                        disabled
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="viewDuration" className="form-label">
                        Duration:
                      </label>
                      <select
                        className="form-select"
                        id="viewDuration"
                        disabled
                      >
                        <option value>-- Select Duration --</option>
                        <option value={1}>3 Week</option>
                        <option value={2} selected>
                          6 Week
                        </option>
                      </select>
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
    <script src="assets/libs/select2/js/select2.min.js"></script>
    <script src="assets/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
    <script src="assets/libs/bootstrap-timepicker/js/bootstrap-timepicker.min.js"></script>
    <script src="assets/libs/smart-wizaed/smart-wizaed.js"></script>

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



    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.0/main.js"></script>
    <script>
        $('#smartwizard').smartWizard({
            transition: {
                animation: 'slideHorizontal', // Effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
            }
        });
    </script>
    <script>
        $(document).ready(function () {
            $('#viewCourseModal').on('shown.bs.modal', function () {
                var calendarEl = document.getElementById('calendar');
                var calendar = new FullCalendar.Calendar(calendarEl, {
                    initialView: 'dayGridMonth',
                    events: [
                        {
                            title: 'Aluminium Formwork (Enhanced)',
                            start: '2023-09-15',
                            end: '2023-09-16'
                        },
                        {
                            title: 'Plumbing & Pipefitting',
                            start: '2023-09-18',
                            end: '2023-09-20'
                        }
                    ]
                });
                calendar.render();
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
