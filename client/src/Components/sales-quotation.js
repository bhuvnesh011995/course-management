// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";

// <head>

//     <meta charset="utf-8" />
//     <title>Sales Quotation | Tonga</title>
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
//           width: 100% !important;
//         }

//         .input-icon {
//           position: relative;
//         }

//         .input-icon input {
//           padding-right: 2.5rem;
//         }

//         .input-icon-addon {
//           position: absolute;
//           top: 0;
//           bottom: 0;
//           right: 0;
//           left: auto;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-width: 2.5rem;
//           color: #6c7a91;
//           pointer-events: none;
//           font-size: 1.2em;
//         }

//         label .radio-card {
//           cursor: pointer;
//         }

//         label.radio-card .card-content-wrapper {
//           background: #fff;
//           border-radius: 5px;
//           max-width: 280px;
//           padding: 15px;
//           display: grid;
//           box-shadow: 0 2px 4px 0 rgba(219, 215, 215, 0.04);
//           transition: 200ms linear;
//         }

//         .card-content {
//           margin-top: 1rem;
//         }

//         .card-content .form-check {
//           margin-top: 1rem;
//         }

//         label.radio-card .check-icon {
//           width: 20px;
//           height: 20px;
//           display: inline-block;
//           border: solid 2px #e3e3e3;
//           border-radius: 50%;
//           transition: 200ms linear;
//           position: relative;
//         }

//         label.radio-card .check-icon:before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.93552 4.58423C0.890286 4.53718 0.854262 4.48209 0.829309 4.42179C0.779553 4.28741 0.779553 4.13965 0.829309 4.00527C0.853759 3.94471 0.889842 3.88952 0.93552 3.84283L1.68941 3.12018C1.73378 3.06821 1.7893 3.02692 1.85185 2.99939C1.91206 2.97215 1.97736 2.95796 2.04345 2.95774C2.11507 2.95635 2.18613 2.97056 2.2517 2.99939C2.31652 3.02822 2.3752 3.06922 2.42456 3.12018L4.69872 5.39851L9.58026 0.516971C9.62828 0.466328 9.68554 0.42533 9.74895 0.396182C9.81468 0.367844 9.88563 0.353653 9.95721 0.354531C10.0244 0.354903 10.0907 0.369582 10.1517 0.397592C10.2128 0.425602 10.2672 0.466298 10.3112 0.516971L11.0651 1.25003C11.1108 1.29672 11.1469 1.35191 11.1713 1.41247C11.2211 1.54686 11.2211 1.69461 11.1713 1.82899C11.1464 1.88929 11.1104 1.94439 11.0651 1.99143L5.06525 7.96007C5.02054 8.0122 4.96514 8.0541 4.90281 8.08294C4.76944 8.13802 4.61967 8.13802 4.4863 8.08294C4.42397 8.0541 4.36857 8.0122 4.32386 7.96007L0.93552 4.58423Z' fill='white'/%3E%3C/svg%3E%0A");
//           background-repeat: no-repeat;
//           background-size: 12px;
//           background-position: center center;
//           transform: scale(1.6);
//           transition: 200ms linear;
//           opacity: 0;
//         }

//         label.radio-card input[name='radio-card'] {
//           appearance: none;
//           -webkit-appearance: none;
//           -moz-appearance: none;
//         }

//         label.radio-card input[type='radio']:checked+.card-content-wrapper {
//           box-shadow: 0 2px 4px 0 rgba(219, 215, 215, 0.5), 0 0 0 2px #3057d5;
//         }

//         label.radio-card input[type='radio']:checked+.card-content-wrapper .check-icon {
//           background: #3057d5;
//           border-color: #3057d5;
//           transform: scale(1.2);
//         }

//         label.radio-card input[type='radio']:checked+.card-content-wrapper .check-icon:before {
//           transform: scale(1);
//           opacity: 1;
//         }

//         label.radio-card input[type='radio']:focus+.card-content-wrapper .check-icon {
//           box-shadow: 0 0 0 4px rgba(48, 86, 213, 0.2);
//           border-color: #3056d5;
//         }

//         label.radio-card .card-content img {
//           margin-bottom: 10px;
//         }

//         label.radio-card .card-content h4 {
//           font-size: 16px;
//           letter-spacing: -0.24px;
//           color: #1f2949;
//           margin-bottom: 10px;
//         }

//         label.radio-card .card-content h5 {
//           font-size: 14px;
//           line-height: 1.4;
//           color: #686d73;
//         }
//       </style>
// </head>

// <body data-sidebar="dark">

//     <!-- Start layout-wrapper -->
export const SalesQuotation = () => {
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
                  <h4 className="mb-sm-0 font-size-18">Sales Quotation</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Sales Quotation
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
                    <div className="card-title">Sales Quotation List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Sr No</th>
                            <th>Sales Quotation No</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Created On</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>SQV12345</td>
                            <td>John Doe</td>
                            <td>jhone@gmail.com</td>
                            <td>+1-124567895</td>
                            <td>2023-09-01</td>
                            <td>
                              <span className="badge badge-soft-danger">
                                Pending
                              </span>
                            </td>
                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#view-sales-quotation"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-sales-quotation"
                              >
                                <i className="mdi mdi-pencil" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-success rounded-pill"
                              >
                                <i className="mdi mdi-share" />
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
        <div
          className="modal fade"
          id="view-sales-quotation"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-xl modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">View Sales Quotation</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="row text-left">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="card border border-primary">
                        <div className="card-body">
                          <h3
                            className="card-title mb-1"
                            style={{ color: "#1F3BB3" }}
                          >
                            <b>Address</b>
                          </h3>
                          <p className="m-0">
                            BLK 3017 BEDOK NORTH STREET 5 #01-22 GOURMET EAST
                            KITCHEN SINGAPORE 486121
                          </p>
                          <hr className="my-3" />
                          <h3
                            className="card-title mb-1"
                            style={{ color: "#1F3BB3" }}
                          >
                            <b>Course Details</b>
                          </h3>
                          <p className="m-0 card-p">Cyber Security</p>
                          <p className="m-0">Duration : 12 Weeks</p>
                          <p className="m-0">Starting Date: 25/04/2023</p>
                          <p className="m-0">Starting Time: 05:47 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="card">
                            <div className="card-body p-0">
                              <div className="table-responsive">
                                <table className="table card-table table-vcenter text-center text-nowrap datatable">
                                  <thead>
                                    <tr>
                                      <th>SL NO</th>
                                      <th>Course Name</th>
                                      <th>Unit Price</th>
                                      <th>Quantity</th>
                                      <th>Gross Amount ($)</th>
                                      <th>Discount (%)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>Html</td>
                                      <td>$308.00</td>
                                      <td>2</td>
                                      <td>$308.00</td>
                                      <td>8%</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card border border-primary">
                            <div className="card-body">
                              <h3
                                className="card-title mb-1"
                                style={{ color: "#1F3BB3" }}
                              >
                                <b className="me-2">Customer Details</b>
                              </h3>
                              <p className="m-0">
                                <i
                                  className="bx bx-user me-2 pt-1"
                                  style={{ fontSize: "14px" }}
                                />
                                Jhone Doe
                              </p>
                              <p className="m-0">
                                <i
                                  className="bx bx-phone me-2 pt-1"
                                  style={{ fontSize: "14px" }}
                                />
                                +91-9737155901
                              </p>
                              <hr className="my-3" />
                              <h3
                                className="card-title mb-1"
                                style={{ color: "#1F3BB3" }}
                              >
                                <b className="me-2">Amount Details</b>
                              </h3>
                              <div className="row">
                                <div className="col-md-7">
                                  <p className="m-0">
                                    Total <small>(before tax):</small>
                                  </p>
                                  <p className="m-0">Total Tax:</p>
                                  <p className="m-0">Total Discount:</p>
                                  <h6>Grand Total:</h6>
                                </div>
                                <div className="col-md-5">
                                  <p className="m-0">$200.00</p>
                                  <p className="m-0">$0.00</p>
                                  <p className="m-0">$0.00</p>
                                  <h6>$200.00</h6>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="btn btn-info w-100 mt-3"
                                data-dismiss="modal"
                              >
                                Confirm
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="edit-sales-quotation"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-xl modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Sales Quotation</h5>
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
                    id="smartwizard-edit"
                    style={{ border: "none", height: "auto" }}
                  >
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#step-1">
                          <div className="num">1</div>
                          Customer
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#step-2">
                          <span className="num">2</span>
                          Course
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#step-3">
                          <span className="num">3</span>
                          Address
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#step-4">
                          <span className="num">4</span>
                          Preview
                        </a>
                      </li>
                    </ul>
                    <div
                      className="tab-content mt-3"
                      style={{ border: "none" }}
                    >
                      <div
                        id="step-1"
                        className="tab-pane"
                        role="tabpanel"
                        aria-labelledby="step-1"
                      >
                        <div className="row">
                          <div className="col-md-3">
                            <div className="mb-3">
                              <label className="form-label">Search By</label>
                              <div className="input-icon mb-3">
                                <input
                                  type="text"
                                  defaultValue
                                  className="form-control"
                                  placeholder="Search…"
                                />
                                <span className="input-icon-addon">
                                  {/* Download SVG icon from http://tabler-icons.io/i/search */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="mb-3">
                              <div
                                className="card border border-primary"
                                style={{ cursor: "pointer" }}
                              >
                                <div className="card-body">
                                  <div className="my-auto">
                                    <label
                                      className="mb-0 text-Primary fw-bold d-flex align-items-center "
                                      style={{ fontSize: "16px" }}
                                    >
                                      <i className="bx bxs-graduation me-2 fs-4 text-primary" />
                                      Will Smith
                                    </label>
                                    <p className="m-0 ps-4">
                                      Tel - +91 9825804569
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div
                              className="d-flex"
                              style={{
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <h5 className="modal-title">Customer Details</h5>
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
                        id="step-2"
                        className="tab-pane"
                        role="tabpanel"
                        aria-labelledby="step-2"
                      >
                        <div className="row">
                          <div className="col-md-4 ">
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Select Course
                                        <span className="text-danger">*</span>
                                      </label>
                                      <select
                                        type="text"
                                        className="form-select"
                                        value
                                      >
                                        <option value="a">Course-1</option>
                                        <option value="b">Course-2</option>
                                        <option value="c">Course-3</option>
                                        <option value="d">Course-4</option>
                                        <option value="e">Course-5</option>
                                        <option value="f">Course-6</option>
                                      </select>
                                    </div>
                                    <div className>
                                      <label className="form-label">
                                        Search By
                                      </label>
                                      <div className="input-icon mb-3">
                                        <input
                                          type="text"
                                          defaultValue
                                          className="form-control"
                                          placeholder="Search…"
                                        />
                                        <span className="input-icon-addon">
                                          {/* Download SVG icon from http://tabler-icons.io/i/search */}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          >
                                            <path
                                              stroke="none"
                                              d="M0 0h24v24H0z"
                                              fill="none"
                                            />
                                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                            <path d="M21 21l-6 -6" />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="table-responsive">
                                      <table className="table text-center text-nowrap table-bordered border-primary">
                                        <thead>
                                          <tr>
                                            <th>Course Code</th>
                                            <th>Course Name</th>
                                            <th>Course Duration</th>
                                            <th>Trainer</th>
                                            <th>Unit Price</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>CS101</td>
                                            <td>Computer Science</td>
                                            <td>12 weeks</td>
                                            <td>John Doe</td>
                                            <td>$308.00</td>
                                            <td>
                                              <button
                                                className="btn btn-primary"
                                                type="button"
                                              >
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="icon m-0"
                                                  width={20}
                                                  height={20}
                                                  viewBox="0 0 24 24"
                                                  strokeWidth={2}
                                                  stroke="currentColor"
                                                  fill="none"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                >
                                                  <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                  />
                                                  <path d="M12 5l0 14" />
                                                  <path d="M5 12l14 0" />
                                                </svg>
                                              </button>
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
                          <div className="col-md-8 pe-0">
                            <div id="service-table">
                              <div className="card">
                                <div className="card-body p-0">
                                  <div className="table-responsive">
                                    <table
                                      className="table card-table table-vcenter text-center text-nowrap"
                                      id
                                      style={{ width: "100%" }}
                                    >
                                      <thead>
                                        <tr>
                                          <th>SL NO</th>
                                          <th>Course Name</th>
                                          <th>Unit Price</th>
                                          <th>Discount (%)</th>
                                          <th>Gross Amt ($)</th>
                                          <th>Tax</th>
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>HTML</td>
                                          <td>
                                            <input
                                              type="number"
                                              className="form-control"
                                            />
                                          </td>
                                          <td>5%</td>
                                          <td>$543</td>
                                          <td>18%</td>
                                          <td>
                                            <button
                                              className="btn btn-danger ripple"
                                              type="button"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-playstation-x m-0"
                                                width={20}
                                                height={20}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              >
                                                <path
                                                  stroke="none"
                                                  d="M0 0h24v24H0z"
                                                  fill="none"
                                                />
                                                <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z"></path>
                                                <path d="M8.5 8.5l7 7" />
                                                <path d="M8.5 15.5l7 -7" />
                                              </svg>
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody>
                                      <thead>
                                        <tr>
                                          <th
                                            colSpan={5}
                                            style={{ textAlign: "end" }}
                                          >
                                            Total discount{" "}
                                          </th>
                                          <th colSpan={2}>5%</th>
                                        </tr>
                                        <tr>
                                          <th
                                            colSpan={5}
                                            style={{ textAlign: "end" }}
                                          >
                                            Total tax{" "}
                                          </th>
                                          <th colSpan={2}>18%</th>
                                        </tr>
                                        <tr>
                                          <th
                                            colSpan={5}
                                            style={{ textAlign: "end" }}
                                          >
                                            Grand total
                                          </th>
                                          <th colSpan={2}>$ 616.00</th>
                                        </tr>
                                      </thead>
                                      <thead
                                        id="package-total"
                                        style={{ display: "none" }}
                                      >
                                        <tr>
                                          <th
                                            colSpan={7}
                                            style={{ textAlign: "end" }}
                                          >
                                            Package Amount
                                          </th>
                                          <th colSpan={2}>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </th>
                                        </tr>
                                      </thead>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="step-3"
                        className="tab-pane"
                        role="tabpanel"
                        aria-labelledby="step-3"
                      >
                        <div className="row">
                          <div className="col-md-3">
                            <div className="card border border-primary">
                              <div className="card-body">
                                <h3
                                  className="card-title mb-2"
                                  style={{ color: "#1F3BB3" }}
                                >
                                  <b className="me-2">Jhone DOe</b>
                                  <span className="badge bg-red">
                                    Residential
                                  </span>
                                </h3>
                                <p className="card-p d-flex align-items-center mb-2 ">
                                  <i
                                    className="bx bx-phone me-2"
                                    style={{ fontSize: "14px" }}
                                  />
                                  +91 9758697820
                                </p>
                                <p className="card-p  d-flex align-items-center mb-2">
                                  <i
                                    className="bx bx-envelope me-2"
                                    style={{ fontSize: "14px" }}
                                  />
                                  abc@pvtltd.com
                                </p>
                                <hr className="my-3" />
                                <h3
                                  className="card-title mb-1"
                                  style={{ color: "#1F3BB3" }}
                                >
                                  <b>Course Details</b>
                                </h3>
                                <div className="amount">
                                  <p className="m-0 card-p">Cyber Security</p>
                                  <p className="m-0">Duration : 12 Weeks</p>
                                  <p className="m-0">
                                    Starting Date: 25/04/2023
                                  </p>
                                  <p className="m-0">Starting Time: 05:47 PM</p>
                                </div>
                                <hr className="my-3" />
                                <div className="driver mt-2">
                                  <h3
                                    className="card-title mb-1"
                                    style={{ color: "#1F3BB3" }}
                                  >
                                    <b>Amount Details</b>
                                  </h3>
                                  <div className="row">
                                    <div className="col-md-7">
                                      <p className="m-0"> Total:</p>
                                    </div>
                                    <div className="col-md-5">
                                      <p className="m-0">$200.00</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="card">
                              <div className="card-body">
                                <ul
                                  className="nav nav-pills nav-pills-primary"
                                  data-bs-toggle="tabs"
                                  role="tablist"
                                >
                                  <li
                                    className="nav-item me-2"
                                    role="presentation"
                                  >
                                    <a
                                      href="#tab-one"
                                      className="nav-link active"
                                      data-bs-toggle="tab"
                                      aria-selected="true"
                                      role="tab"
                                    >
                                      Address
                                    </a>
                                  </li>
                                  <li
                                    className="nav-item me-2"
                                    role="presentation"
                                  >
                                    <a
                                      href="#tab-three"
                                      className="nav-link"
                                      data-bs-toggle="tab"
                                      aria-selected="false"
                                      role="tab"
                                      tabIndex={-1}
                                    >
                                      Additional Info
                                    </a>
                                  </li>
                                </ul>
                                <div className="tab-content">
                                  <div
                                    className="tab-pane active show"
                                    id="tab-one"
                                    role="tabpanel"
                                  >
                                    <div className="row my-3">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <label
                                          htmlFor="radio-card-1"
                                          className="radio-card"
                                        >
                                          <input
                                            type="radio"
                                            name="radio-card"
                                            id="radio-card-1"
                                            defaultChecked
                                          />
                                          <div className="card-content-wrapper">
                                            <span className="check-icon" />
                                            <div className="card-content">
                                              <h4>Sky Enterprice</h4>
                                              <p className="mb-1">
                                                {" "}
                                                <strong>Contact No:</strong>
                                                1234567890
                                              </p>
                                              <p className="mb-1">
                                                {" "}
                                                <strong>Email ID:</strong>
                                                ABC@gmail.com
                                              </p>
                                              <p className="mb-1">
                                                <strong>Address:</strong>8
                                                Shopping Centre, 9 Bishan Place,
                                                Singapore 579837
                                              </p>
                                              <div className="form-check">
                                                <input
                                                  className="form-check-input"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id="flexRadioDefault2"
                                                  defaultChecked
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="flexRadioDefault2"
                                                >
                                                  Default Address
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane"
                                    id="tab-three"
                                    role="tabpanel"
                                  >
                                    <div className="row mt-3">
                                      <div className="form-group col-lg-6 col-md-6 col-sm-12 text-start">
                                        <label
                                          htmlFor="message-text"
                                          className="col-form-label"
                                        >
                                          Date
                                        </label>
                                        <input
                                          type="date"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="form-group col-lg-6 col-md-6 col-sm-12 text-start">
                                        <label
                                          htmlFor="message-text"
                                          className="col-form-label"
                                        >
                                          Time
                                        </label>
                                        <input
                                          type="time"
                                          className="form-control"
                                          placeholder="Time of Cleaning"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="step-4"
                        className="tab-pane"
                        role="tabpanel"
                        aria-labelledby="step-4"
                      >
                        <div className="row">
                          <div className="col-md-3">
                            <div className="card border border-primary">
                              <div className="card-body">
                                <h3
                                  className="card-title mb-1"
                                  style={{ color: "#1F3BB3" }}
                                >
                                  <b>Address</b>
                                </h3>
                                <p className="m-0">
                                  BLK 3017 BEDOK NORTH STREET 5 #01-22 GOURMET
                                  EAST KITCHEN SINGAPORE 486121
                                </p>
                                <hr className="my-3" />
                                <h3
                                  className="card-title mb-1"
                                  style={{ color: "#1F3BB3" }}
                                >
                                  <b>Course Details</b>
                                </h3>
                                <p className="m-0 card-p">Cyber Security</p>
                                <p className="m-0">Duration : 12 Weeks</p>
                                <p className="m-0">Starting Date: 25/04/2023</p>
                                <p className="m-0">Starting Time: 05:47 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="row">
                              <div className="col-md-8">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="table-responsive">
                                      <table className="table card-table table-vcenter text-center text-nowrap datatable">
                                        <thead>
                                          <tr>
                                            <th>SL NO</th>
                                            <th>Course Name</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Gross Amount ($)</th>
                                            <th>Discount (%)</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>1</td>
                                            <td>Html</td>
                                            <td>$308.00</td>
                                            <td>2</td>
                                            <td>$308.00</td>
                                            <td>8%</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="card border border-primary">
                                  <div className="card-body">
                                    <h3
                                      className="card-title mb-1"
                                      style={{ color: "#1F3BB3" }}
                                    >
                                      <b className="me-2">Customer Details</b>
                                    </h3>
                                    <p className="m-0">
                                      <i
                                        className="bx bx-user me-2 pt-1"
                                        style={{ fontSize: "14px" }}
                                      />
                                      Jhone Doe
                                    </p>
                                    <p className="m-0">
                                      <i
                                        className="bx bx-phone me-2 pt-1"
                                        style={{ fontSize: "14px" }}
                                      />
                                      +91-9737155901
                                    </p>
                                    <hr className="my-3" />
                                    <h3
                                      className="card-title mb-1"
                                      style={{ color: "#1F3BB3" }}
                                    >
                                      <b className="me-2">Amount Details</b>
                                    </h3>
                                    <div className="row">
                                      <div className="col-md-7">
                                        <p className="m-0">
                                          Total <small>(before tax):</small>
                                        </p>
                                        <p className="m-0">Total Tax:</p>
                                        <p className="m-0">Total Discount:</p>
                                        <h6>Grand Total:</h6>
                                      </div>
                                      <div className="col-md-5">
                                        <p className="m-0">$200.00</p>
                                        <p className="m-0">$0.00</p>
                                        <p className="m-0">$0.00</p>
                                        <h6>$200.00</h6>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-info w-100 mt-3"
                                      data-dismiss="modal"
                                    >
                                      Confirm
                                    </button>
                                  </div>
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
                                                  <button type="button" class="btn me-auto sw-btn-prev sw-btn">Previous</button>
                                                  <button type="button" class="btn btn-primary next-btn" >Next</button>
                                              </div> */}
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
    </div>
  );
};
{
  /* <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->



    <!-- JAVASCRIPT -->
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

    <script>
    $('#smartwizard-edit').smartWizard({
      transition: {
        animation: 'slideHorizontal', // Effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
      }
    });

    </script>

</body>

</html> */
}
