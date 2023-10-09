// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";

// <head>

//     <meta charset="utf-8" />
//     <title>Trainer Management | Tonga</title>
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
//         #calendar {
//     width: 100%;
//     height: 100%;
// }
//         .select2-container {
//             width: 100% !important;
//         }

//         /* Styling for the custom file input container */
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
//         .sw>.tab-content {
//             height: 100% !important;
//         }
//     </style>
// </head>

// <body data-sidebar="dark">

//     <!-- Start layout-wrapper -->
export const Trainer = () => {
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
                  <h4 className="mb-sm-0 font-size-18">Trainer Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Trainer Management
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
                        data-bs-target="#addTrainerModal"
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Trainer
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
                    <div className="card-title">Trainer's List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Trainer ID</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Mobile No.</th>
                            <th>DOB</th>
                            <th>Designation</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>101</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td>123-456-7890</td>
                            <td>1990-01-01</td>
                            <td>Trainer</td>
                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#viewTrainerModal"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editTrainerModal"
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
        {/* Add Trainer Modal */}
        <div
          className="modal fade"
          id="addTrainerModal"
          tabIndex={-1}
          aria-labelledby="addTrainerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addTrainerModalLabel">
                  Add Trainer
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
                      <label htmlFor="trainerName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="trainerName"
                        placeholder="Enter trainer's name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="trainerEmail" className="form-label">
                        Email ID
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="trainerEmail"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="trainerMobile" className="form-label">
                        Mobile No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="trainerMobile"
                        placeholder="Enter mobile number"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="trainerDOB" className="form-label">
                        DOB (Date of Birth)
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="trainerDOB"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="trainerDesignation"
                        className="form-label"
                      >
                        Designation
                      </label>
                      <select
                        className="form-select"
                        id="trainerDesignation"
                        required
                      >
                        <option value disabled selected>
                          Select Designation
                        </option>
                        <option value="Trainer">Trainer</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Coach">Coach</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor>Upload Photo</label> <br />
                      <div className="d-flex gap-2">
                        <label className="custom-file-input form-control">
                          <span id="trainerFileName">Upload Photo</span>
                          <input
                            type="file"
                            id="viewTrainerPhoto"
                            accept="image/*"
                          />
                        </label>
                        <span className="avatar avatar-rounded avatar-md">
                          {" "}
                          <img src="../assets/images/faces/1.jpg" alt="" />{" "}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="trainerAddress" className="form-label">
                        Address
                      </label>
                      <textarea
                        className="form-control"
                        id="trainerAddress"
                        rows={3}
                        placeholder="Enter Address"
                        required
                        defaultValue={""}
                      />
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
                <button type="button" className="btn btn-primary">
                  Add Trainer
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* View Trainer Modal */}
        <div
          className="modal fade"
          id="viewTrainerModal"
          tabIndex={-1}
          aria-labelledby="viewTrainerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewTrainerModalLabel">
                  View Trainer
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div
                  id="smartwizard"
                  style={{ border: "none", height: "auto" }}
                >
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#step-11">
                        <div className="num">1</div>
                        Trainer's Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#step-22">
                        <span className="num">2</span>
                        Course Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#step-33">
                        <span className="num">3</span>
                        Scedule
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mt-3" style={{ border: "none" }}>
                    <div
                      id="step-11"
                      className="tab-pane"
                      role="tabpanel"
                      aria-labelledby="step-11"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div
                            className="d-flex"
                            style={{
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <h5 className="modal-title">Trainer's Details</h5>
                          </div>
                          <div className="card border border-primary mt-3">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-3">
                                  <label className="mb-0" htmlFor>
                                    {" "}
                                    <b>Name</b>
                                  </label>
                                  <p className="m-0">John Doe</p>
                                </div>
                                <div className="col-md-3">
                                  <label className="mb-0" htmlFor>
                                    {" "}
                                    <b>Email ID</b>
                                  </label>
                                  <p className="m-0">johndoe@example.com</p>
                                </div>
                                <div className="col-md-3">
                                  <label className="mb-0" htmlFor>
                                    <b>Mobile No.</b>
                                  </label>
                                  <p className="m-0">123-456-7890</p>
                                </div>
                                <div className="col-md-3">
                                  <label className="mb-0" htmlFor>
                                    {" "}
                                    <b>DOB (Date of Birth)</b>
                                  </label>
                                  <p className="m-0">01-01-90</p>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-md-3">
                                  <label className="mb-0" htmlFor>
                                    {" "}
                                    <b>Designation</b>
                                  </label>
                                  <p className="m-0">John Doe</p>
                                </div>
                                <div className="col-md-3">
                                  <label className="mb-0" htmlFor>
                                    {" "}
                                    <b>Designation</b>
                                  </label>
                                  <p className="m-0">Trainer</p>
                                </div>
                                <div className="col-md-6">
                                  <label className="mb-0" htmlFor>
                                    {" "}
                                    <b>Address</b>
                                  </label>
                                  <p className="m-0">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quia, veritatis?
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="step-22"
                      className="tab-pane"
                      role="tabpanel"
                      aria-labelledby="step-22"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card">
                            <div className="card-header justify-content-between">
                              <div className="card-title">Course</div>
                            </div>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table
                                  id="datatable-buttons"
                                  className="table display table-bordered dt-responsive nowrap w-100"
                                >
                                  <thead>
                                    <tr>
                                      <th>Course</th>
                                      <th>class</th>
                                      <th>Date</th>
                                      <th>Time</th>
                                      <th>Lec In Week</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Course 1</td>
                                      <td>Class A</td>
                                      <td>22 may 2022</td>
                                      <td>4:00pm To 6:pm</td>
                                      <td>
                                        <span className="badge badge-soft-primary">
                                          Monday
                                        </span>
                                        <span className="badge badge-soft-success">
                                          wednasday
                                        </span>
                                        <span className="badge badge-soft-warning">
                                          saturday
                                        </span>
                                      </td>
                                      <td>
                                        <a
                                          aria-label="anchor"
                                          href="javascript:void(0);"
                                          className="btn btn-icon btn-sm btn-primary rounded-pill"
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
                        </div>
                      </div>
                    </div>
                    <div
                      id="step-33"
                      className="tab-pane"
                      role="tabpanel"
                      aria-labelledby="step-33"
                    >
                      <div id="calendar" />
                    </div>
                  </div>
                  {/* Include optional progressbar HTML */}
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              {/* <div class="modal-footer">
                                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      </div> */}
            </div>
          </div>
        </div>
        {/* Edit Trainer Modal */}
        <div
          className="modal fade"
          id="editTrainerModal"
          tabIndex={-1}
          aria-labelledby="editTrainerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editTrainerModalLabel">
                  Edit Trainer
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
                      <label htmlFor="editTrainerName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="editTrainerName"
                        defaultValue="John Doe"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editTrainerEmail" className="form-label">
                        Email ID
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="editTrainerEmail"
                        defaultValue="johndoe@example.com"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editTrainerMobile" className="form-label">
                        Mobile No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="editTrainerMobile"
                        defaultValue="123-456-7890"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editTrainerDOB" className="form-label">
                        DOB (Date of Birth)
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="editTrainerDOB"
                        defaultValue="1990-01-01"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="editTrainerDesignation"
                        className="form-label"
                      >
                        Designation
                      </label>
                      <select
                        className="form-select"
                        id="editTrainerDesignation"
                      >
                        <option value disabled>
                          Select Designation
                        </option>
                        <option value="Trainer" selected>
                          Trainer
                        </option>
                        <option value="Instructor">Instructor</option>
                        <option value="Coach">Coach</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editTrainerPhoto" className="form-label">
                        Photo
                      </label>{" "}
                      <br />
                      <label className="custom-file-input form-control">
                        <span id="editFileName">Upload Photo</span>
                        <input
                          type="file"
                          id="editTrainerPhoto"
                          accept="image/*"
                        />
                      </label>
                      <span className="avatar avatar-rounded avatar-md">
                        {" "}
                        <img src="../assets/images/faces/1.jpg" alt="" />{" "}
                      </span>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label
                        htmlFor="editTrainerAddress"
                        className="form-label"
                      >
                        Address
                      </label>
                      <textarea
                        className="form-control"
                        id="editTrainerAddress"
                        rows={3}
                        defaultValue={
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vel ex non bibendum."
                        }
                      />
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
                <button type="button" className="btn btn-primary">
                  Save Changes
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
  /* <!-- END layout-wrapper -->



    <!-- JAVASCRIPT -->
    <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>
    <script src="assets/libs/select2/js/select2.min.js"></script>
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
    <script
        src="https://cdn.tiny.cloud/1/qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc/tinymce/5.10.7-133/tinymce.min.js"></script>
    <script src="assets/js/pages/email-editor.js"></script>
    
   

<script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.0/main.js"></script>
<script>
    $('#smartwizard').smartWizard({
        transition: {
            animation: 'slideHorizontal', // Effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
        }
    });
</script>
<script>
   $('#viewTrainerModal').on('shown.bs.modal', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Class 1',
                start: '2023-09-15',
                end: '2023-09-16'
            },
            {
                title: 'Class 2',
                start: '2023-09-18',
                end: '2023-09-20'
            }
        ]
    });
    calendar.render();
});

</script>
    <script>

        $(document).ready(function () {

            $(".select2").select2({

                dropdownParent: $("#addUserModal")

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
