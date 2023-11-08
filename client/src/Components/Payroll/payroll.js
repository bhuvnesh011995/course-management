// <!doctype html>
// <html lang="en">

import { useState } from "react";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import AddPayrollModal from "./AddPayrollModal";
import ViewPayrollModal from "./ViewPayrollModal";

// <head>

//     <meta charset="utf-8" />
//     <title>Payroll Management | Tonga</title>
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
export const PayRoll = () => {
  let [isAddPayrollModalOpen,setAddPayrollModal] = useState(false)
  let [isViewPayrollModalOpen,setViewPayrollModal] = useState(false)
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
                  <h4 className="mb-sm-0 font-size-18">Payroll Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Payroll Management
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
                        onClick={()=>setAddPayrollModal(true)}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Payroll
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
                    <div className="card-title">Payroll List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Employee Name</th>
                            <th>Department</th>
                            <th>Position</th>
                            <th>Basic Salary</th>
                            <th>Allowances</th>
                            <th>Deductions</th>
                            <th>Net Salary</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Jane Doe</td>
                            <td>HR</td>
                            <td>HR Manager</td>
                            <td>$5,000</td>
                            <td>$1,000</td>
                            <td>$500</td>
                            <td>$5,500</td>
                            <td>
                              <a
                              onClick={()=>setViewPayrollModal(true)}
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                onClick={()=>setAddPayrollModal(true)}
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
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <AddPayrollModal show={isAddPayrollModalOpen} setShow={setAddPayrollModal} />
        <ViewPayrollModal show={isViewPayrollModalOpen} setShow={setViewPayrollModal}/>
        <div
          className="modal fade"
          id="addPayrollModal"
          tabIndex={-1}
          aria-labelledby="addPayrollModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addPayrollModalLabel">
                  Add Payroll
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
                      <label htmlFor="employeeName" className="form-label">
                        Employee Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="employeeName"
                        placeholder="Enter Employee Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="department" className="form-label">
                        Department
                      </label>
                      <select className="form-select" id="department" required>
                        <option value selected disabled>
                          Select Department
                        </option>
                        <option value="hr">HR</option>
                        <option value="finance">Finance</option>
                        <option value="it">IT</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="position" className="form-label">
                        Position
                      </label>
                      <select className="form-select" id="position" required>
                        <option value selected disabled>
                          Select Position
                        </option>
                        <option value="manager">Manager</option>
                        <option value="assistant">Assistant</option>
                        <option value="analyst">Analyst</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="salary" className="form-label">
                        Salary
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="salary"
                        placeholder="Enter Salary"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="allowances" className="form-label">
                        Allowances
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="allowances"
                        placeholder="Enter Allowances"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="deductions" className="form-label">
                        Deductions
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="deductions"
                        placeholder="Enter Deductions"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="netSalary" className="form-label">
                        Net Salary
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="netSalary"
                        placeholder="Enter Net Salary"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="date" className="form-label">
                        Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        required
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
                  Add Payroll
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="viewPayrollModal"
          tabIndex={-1}
          aria-labelledby="viewPayrollModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewPayrollModalLabel">
                  View Payroll
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
                      <label htmlFor="employeeName" className="form-label">
                        Employee Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="employeeName"
                        defaultValue="Jane Doe"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="department" className="form-label">
                        Department
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="department"
                        defaultValue="HR"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="position" className="form-label">
                        Position
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="position"
                        defaultValue="Manager"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="salary" className="form-label">
                        Salary
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="salary"
                        defaultValue="$5,000"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="allowances" className="form-label">
                        Allowances
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="allowances"
                        defaultValue="$1,000"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="deductions" className="form-label">
                        Deductions
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="deductions"
                        defaultValue="$500"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="netSalary" className="form-label">
                        Net Salary
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="netSalary"
                        defaultValue="$5,500"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="date" className="form-label">
                        Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        defaultValue="2023-08-30"
                        readOnly
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
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="editPayrollModal"
          tabIndex={-1}
          aria-labelledby="editPayrollModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editPayrollModalLabel">
                  Edit Payroll
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
                      <label htmlFor="employeeName" className="form-label">
                        Employee Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="employeeName"
                        defaultValue="Jane Doe"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="department" className="form-label">
                        Department
                      </label>
                      <select className="form-select" id="department">
                        <option value="hr" selected>
                          HR
                        </option>
                        <option value="finance">Finance</option>
                        <option value="it">IT</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="position" className="form-label">
                        Position
                      </label>
                      <select className="form-select" id="position">
                        <option value="manager" selected>
                          Manager
                        </option>
                        <option value="assistant">Assistant</option>
                        <option value="analyst">Analyst</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="salary" className="form-label">
                        Salary
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="salary"
                        defaultValue="$5,000"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="allowances" className="form-label">
                        Allowances
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="allowances"
                        defaultValue="$1,000"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="deductions" className="form-label">
                        Deductions
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="deductions"
                        defaultValue="$500"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="netSalary" className="form-label">
                        Net Salary
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="netSalary"
                        defaultValue="$5,500"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="date" className="form-label">
                        Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        defaultValue="2023-08-30"
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
