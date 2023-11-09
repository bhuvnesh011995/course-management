// <!doctype html>
// <html lang="en">

import { useState } from "react";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import AddTimesheetModal from "./AddTimesheetModal";
import ViewTimesheetModal from "./ViewTimesheetModal";

// <head>

//     <meta charset="utf-8" />
//     <title>TimeSheet Tracking | Tonga</title>
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
//         .select2-container {
//             width: 100% !important;
//         }
//     </style>

// </head>

// <body data-sidebar="dark">

//     <!-- Start layout-wrapper -->
export const TimeSheet = () => {
  const [isAddModalOpen,setAddModal] = useState(false)
  const [isViewModalOpen,setViewModal] = useState(false)
  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">TimeSheet Tracking</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Timesheet Tracking
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
                        onClick={()=>setAddModal(true)}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New
                      </button>
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
                    <div className="card-title">Tracking List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Employee Name</th>
                            <th>Hours Worked</th>
                            <th>Overtime Hours</th>
                            <th>Shift</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2023-09-01</td>
                            <td>Jane Doe</td>
                            <td>8</td>
                            <td>2</td>
                            <td>Day Shift</td>
                            <td>
                              <a
                              onClick={()=>setViewModal(true)}
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                onClick={()=>setAddModal(true)}
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
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/*/ Role Table */}
              </div>
            </div>
          </div>{" "}
          <AddTimesheetModal show={isAddModalOpen} setShow={setAddModal} />
          <ViewTimesheetModal show={isViewModalOpen} setShow={setViewModal} />
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        {/* Add Work Hours Modal */}
        {/* Add Work Hours Modal */}
        <div
          className="modal fade"
          id="addWorkHoursModal"
          tabIndex={-1}
          aria-labelledby="addWorkHoursModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addWorkHoursModalLabel">
                  Add Work Hours
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
                  <div className="mb-3">
                    <label htmlFor="addDate" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="addDate"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="addEmployee" className="form-label">
                      Employee Name
                    </label>
                    <select className="form-select" id="addEmployee" required>
                      <option value selected>
                        Select an employee
                      </option>
                      <option value="employee1">Employee 1</option>
                      <option value="employee2">Employee 2</option>
                      {/* Add more options for other employees */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="addHoursWorked" className="form-label">
                      Hours Worked
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="addHoursWorked"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="addOvertimeHours" className="form-label">
                      Overtime Hours
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="addOvertimeHours"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="addShift" className="form-label">
                      Shift
                    </label>
                    <select className="form-select" id="addShift" required>
                      <option value="Day Shift">Day Shift</option>
                      <option value="Night Shift">Night Shift</option>
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
                <button type="button" className="btn btn-primary">
                  Add Work Hours
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* View Work Hours Modal */}
        <div
          className="modal fade"
          id="viewWorkHoursModal"
          tabIndex={-1}
          aria-labelledby="viewWorkHoursModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewWorkHoursModalLabel">
                  View Work Hours
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
                  <div className="mb-3">
                    <label htmlFor="viewDate" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="viewDate"
                      defaultValue="2023-09-01"
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="viewEmployee" className="form-label">
                      Employee Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewEmployee"
                      defaultValue="Jane Doe"
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="viewHoursWorked" className="form-label">
                      Hours Worked
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="viewHoursWorked"
                      defaultValue={8}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="viewOvertimeHours" className="form-label">
                      Overtime Hours
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="viewOvertimeHours"
                      defaultValue={2}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="viewShift" className="form-label">
                      Shift
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewShift"
                      defaultValue="Day Shift"
                      readOnly
                    />
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
        {/* Edit Work Hours Modal */}
        <div
          className="modal fade"
          id="editWorkHoursModal"
          tabIndex={-1}
          aria-labelledby="editWorkHoursModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editWorkHoursModalLabel">
                  Edit Work Hours
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
                  <div className="mb-3">
                    <label htmlFor="editDate" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="editDate"
                      defaultValue="2023-09-01"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editEmployee" className="form-label">
                      Employee Name
                    </label>
                    <select className="form-select" id="editEmployee">
                      <option value="employee1">Employee 1</option>
                      <option value="employee2">Employee 2</option>
                      {/* Add more options for other employees */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editHoursWorked" className="form-label">
                      Hours Worked
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="editHoursWorked"
                      defaultValue={8}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editOvertimeHours" className="form-label">
                      Overtime Hours
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="editOvertimeHours"
                      defaultValue={2}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editShift" className="form-label">
                      Shift
                    </label>
                    <select className="form-select" id="editShift">
                      <option value="Day Shift">Day Shift</option>
                      <option value="Night Shift">Night Shift</option>
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

            $(".select2").select2({

                dropdownParent: $("#addEmployeeModal")

            });

        });

    </script>
</body>

</html> */
}
