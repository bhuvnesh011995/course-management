// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";
import { onMenuClicked } from "../common-components/useCommonUsableFunctions";

// <head>

//     <meta charset="utf-8" />
//     <title>customer Management | Tonga</title>
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
//     <style>
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
//     </style>
// </head>

// <body data-sidebar="dark">

// <!-- Start layout-wrapper -->
export const CustomerManagement = () => {
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
                  <h4 className="mb-sm-0 font-size-18">customer Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        customer Management
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
                      <div className="row w-100">
                        <div className="col-xl-4">
                          <select className="form-select">
                            <option value={0} selected>
                              Sort By
                            </option>
                            <option value="CA">Newest</option>
                            <option value="NV">Oldest</option>
                            <option value="OR">Recent</option>
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
            {/* Role cards */}
            <div className="row g-4">
              <div className="col-md-12">
                {/* Role Table */}
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">customer List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Name of Participant</th>
                            <th>Company Name</th>
                            <th>Contact Person</th>
                            <th>Participant's Mobile</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Alice Smith</td>
                            <td>Company ABC</td>
                            <td>John Doe</td>
                            <td>789-123-4567</td>
                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
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
        {/* /.modal */}
        <div
          id="view"
          className="modal fade bs-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title add-customer-title">
                  View customer
                </h5>
                <h5
                  className="modal-title update-customer-title"
                  style={{ display: "none" }}
                >
                  Update customer
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="row text-left">
                  <div
                    id="smartwizard"
                    style={{ border: "none", height: "auto" }}
                  >
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#step-11">
                          <div className="num">1</div>
                          customer Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#step-22">
                          <span className="num">2</span>
                          Account History
                        </a>
                      </li>
                    </ul>
                    <div
                      className="tab-content mt-3"
                      style={{ border: "none" }}
                    >
                      <div
                        id="step-11"
                        className="tab-pane"
                        role="tabpanel"
                        aria-labelledby="step-1"
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
                              <h5 className="modal-title">customer Details</h5>
                            </div>
                            <div className="card border border-primary mt-3">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Company Name</b>
                                    </label>
                                    <p className="m-0">Company ABC</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Company UEN No.</b>
                                    </label>
                                    <p className="m-0">123456789Ae</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Company Address</b>
                                    </label>
                                    <p className="m-0">123 Main St</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Postal Code</b>
                                    </label>
                                    <p className="m-0">12345</p>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Contact Person</b>
                                    </label>
                                    <p className="m-0">John Doe</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Contact Person's Mobile</b>
                                    </label>
                                    <p className="m-0">123-456-7890</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Contact Person's Email</b>
                                    </label>
                                    <p className="m-0">johndoe@example.com</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Office Telephone No.</b>
                                    </label>
                                    <p className="m-0">987-654-321</p>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Office Fax No.</b>
                                    </label>
                                    <p className="m-0">123-987-6543</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Name of Participant</b>{" "}
                                    </label>
                                    <p className="m-0">Alice Smitht</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Participant's NRIC / FIN No.</b>
                                    </label>
                                    <p className="m-0">S1234567A</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Participant's Mobile</b>
                                    </label>
                                    <p className="m-0">789-123-4567</p>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Alternate Mobile Number</b>{" "}
                                    </label>
                                    <p className="m-0">987-789-6543</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Trade Type</b>
                                    </label>
                                    <p className="m-0">TradeType-1</p>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="mb-0" htmlFor>
                                      <b>
                                        CoreTrade / Multi-skilling/Direct R1
                                        Registration No
                                      </b>
                                    </label>
                                    <p className="m-0">CT123456</p>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Valid BCA Acknowledgement Notice</b>{" "}
                                    </label>
                                    <p className="m-0 mt-2">
                                      <a
                                        className="btn btn-outline-primary"
                                        href="#"
                                      >
                                        <i className="mdi mdi-eye" />
                                      </a>
                                      <a
                                        className="btn btn-outline-success"
                                        href="#"
                                      >
                                        <i className="mdi mdi-download" />
                                      </a>
                                    </p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Valid copy of NRIC / Work document</b>{" "}
                                    </label>
                                    <p className="m-0 mt-2">
                                      <a
                                        className="btn btn-outline-primary"
                                        href="#"
                                      >
                                        <i className="mdi mdi-eye" />
                                      </a>
                                      <a
                                        className="btn btn-outline-success"
                                        href="#"
                                      >
                                        <i className="mdi mdi-download" />
                                      </a>
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
                        aria-labelledby="step-2"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card">
                              <div className="card-header justify-content-between">
                                <div className="card-title">
                                  Account History List
                                </div>
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
                                        <th>Amount</th>
                                        <th>Purchase Date</th>
                                        <th>Payment Status</th>
                                        <th>Invoices</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Course 1</td>
                                        <td>Class A</td>
                                        <td>$ 99</td>
                                        <td>22 may 2022</td>
                                        <td>
                                          <span className="badge badge-soft-danger">
                                            Unpaid
                                          </span>
                                        </td>
                                        <td>
                                          <a
                                            aria-label="anchor"
                                            href="javascript:void(0);"
                                            className="btn btn-icon btn-sm btn-warning rounded-pill"
                                          >
                                            <i className="mdi mdi-eye" />
                                          </a>
                                          <a
                                            aria-label="anchor"
                                            href="javascript:void(0);"
                                            className="btn btn-icon btn-sm btn-success rounded-pill"
                                          >
                                            <i className="mdi mdi-download" />
                                          </a>
                                        </td>
                                        <td>
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
                </form>
              </div>
              {/* <div class="modal-footer">
                          <div class="row">
                              <div class="col-lg-12 text-end">
                                  <button type="button" class="btn btn-secondary">Discard</button>
                              </div>
                          </div>
                      </div> */}
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
                <h5 className="modal-title add-customer-title">
                  Edit customer
                </h5>
                <h5
                  className="modal-title update-customer-title"
                  style={{ display: "none" }}
                >
                  Update customer
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
                        accept="image/*"
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
                        accept="image/*"
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
    <script src="assets/libs/smart-wizaed/smart-wizaed.js"></script>
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
        $(document).ready(function() {
  $('table.display').DataTable();
} );
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
    <script>
        $('#smartwizard').smartWizard({
            transition: {
                animation: 'slideHorizontal', // Effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
            }
        });
    </script>
    <script>
        // Function to open the second modal from the first modal
        function openSecondModal() {
            $('#viewQuotationHistoryModal').modal('show');
        }

        // Function to open the third modal from the first modal
        function openThirdModal() {
            $('#viewPastInvoiceModal').modal('show');
        }

        // Function to open the fourth modal from the first modal
        function openFourthModal() {
            $('#viewActivitiesModal').modal('show');
        }

    </script>
</body>

</html> */
}
