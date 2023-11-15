import "../assets/css/app.min.css";
import React from "react";

export const AccountHistory = () => {
  return (
    <div>
      <div ClassName="main-content">
        <div ClassName="page-content">
          <div ClassName="container-fluid">
            <div ClassName="row">
              <div ClassName="col-12">
                <div ClassName="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 ClassName="mb-sm-0 font-size-18">Account History</h4>

                  <div ClassName="page-title-right">
                    <ol ClassName="breadcrumb m-0">
                      <li ClassName="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li ClassName="breadcrumb-item active">
                        Account History
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div ClassName="row">
              <div ClassName="col-xl-12">
                <div ClassName="card">
                  <div ClassName="card-body p-3">
                    <div ClassName="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div ClassName="row w-100">
                        <div ClassName="col-xl-5">
                          <select ClassName="form-select">
                            <option value="CA">Newest</option>
                            <option value="NV">Oldest</option>
                            <option value="OR">Recent</option>
                          </select>
                        </div>

                        <div ClassName="col-xl-7">
                          <div ClassName="d-flex" role="search">
                            <input
                              ClassName="form-control me-2"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                            />{" "}
                            <button ClassName="btn btn-light" type="submit">
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

            <div ClassName="row g-4">
              <div ClassName="col-md-12">
                <div ClassName="card ">
                  <div ClassName="card-header justify-content-between">
                    <div ClassName="card-title">Account History List </div>
                  </div>
                  <div ClassName="card-body">
                    <div ClassName="table-responsive">
                      <table
                        id="datatable-buttons"
                        ClassName="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Enrollment ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Quotation History</th>
                            <th>Past Invoices</th>
                            <th>Activities Record</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>E102</td>
                            <td>John Doe</td>
                            <td>john@example.com</td>
                            <td>
                              <a
                                href="#"
                                ClassName="btn btn-outline-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#viewQuotationHistoryModal"
                              >
                                View Quotation History
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                ClassName="btn btn-outline-info btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#viewPastInvoiceModal"
                              >
                                View Past Invoices
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                ClassName="btn btn-outline-secondary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#viewActivitiesModal"
                              >
                                View Activities
                              </a>
                            </td>
                            <td>
                              <a
                                aria-label="anchor"
                                ClassName="btn btn-icon btn-sm btn-danger rounded-pill"
                              >
                                <i ClassName="mdi mdi-trash-can"></i>
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

        <div
          ClassName="modal fade"
          id="viewQuotationHistoryModal"
          tabindex="-1"
          aria-labelledby="viewQuotationHistoryModalLabel"
          aria-hidden="true"
        >
          <div ClassName="modal-dialog modal-lg">
            <div ClassName="modal-content">
              <div ClassName="modal-header">
                <h5 ClassName="modal-title" id="viewQuotationHistoryModalLabel">
                  Quotation History
                </h5>
                <button
                  type="button"
                  ClassName="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div ClassName="modal-body">
                <table
                  id="datatable-buttons"
                  ClassName="table table-bordered dt-responsive nowrap w-100"
                >
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Course</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023-08-01</td>
                      <td>Course-1</td>
                      <td>$1500</td>
                      <td>
                        <a
                          aria-label="anchor"
                          ClassName="btn btn-icon btn-sm btn-warning me-1 rounded-pill"
                        >
                          <i ClassName="mdi mdi-eye"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          ClassName="btn btn-icon btn-sm btn-primary rounded-pill"
                        >
                          <i ClassName="mdi mdi-download"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div ClassName="modal-footer">
                <button
                  type="button"
                  ClassName="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          ClassName="modal fade"
          id="viewPastInvoiceModal"
          tabindex="-1"
          aria-labelledby="viewPastInvoiceModalLabel"
          aria-hidden="true"
        >
          <div ClassName="modal-dialog modal-lg">
            <div ClassName="modal-content">
              <div ClassName="modal-header">
                <h5 ClassName="modal-title" id="viewPastInvoiceModalLabel">
                  View Past Invoice
                </h5>
                <button
                  type="button"
                  ClassName="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div ClassName="modal-body">
                <table
                  id="datatable-buttons"
                  ClassName="table table-bordered dt-responsive nowrap w-100"
                >
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Course</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023-08-15</td>
                      <td>Course-1</td>
                      <td>$1500</td>
                      <td>
                        <a
                          aria-label="anchor"
                          ClassName="btn btn-icon btn-sm btn-warning me-1 rounded-pill"
                        >
                          <i ClassName="mdi mdi-eye"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          ClassName="btn btn-icon btn-sm btn-primary rounded-pill"
                        />
                        <i ClassName="mdi mdi-download"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div ClassName="modal-footer">
                <button
                  type="button"
                  ClassName="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          ClassName="modal fade"
          id="viewActivitiesModal"
          tabindex="-1"
          aria-labelledby="viewActivitiesModalLabel"
          aria-hidden="true"
        >
          <div ClassName="modal-dialog modal-lg">
            <div ClassName="modal-content">
              <div ClassName="modal-header">
                <h5 ClassName="modal-title" id="viewActivitiesModalLabel">
                  Activities Record
                </h5>
                <button
                  type="button"
                  ClassName="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div ClassName="modal-body">
                <table
                  id="datatable-buttons"
                  ClassName="table table-bordered dt-responsive nowrap w-100"
                >
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Activity Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023-08-20</td>
                      <td>Logged In</td>
                      <td>User logged in to the system.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div ClassName="modal-footer">
                <button
                  type="button"
                  ClassName="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer ClassName="footer">
          <div ClassName="container-fluid">
            <div ClassName="row">
              <div ClassName="col-sm-6">
                <script>document.write(new Date().getFullYear())</script> ©
                Tonga.
              </div>
              <div ClassName="col-sm-6">
                <div ClassName="text-sm-end d-none d-sm-block">
                  Design & Develop by{" "}
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
  /* Start layout-wrapper  */
}
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
    $(document).ready(function() {
  $('table#datatable-buttons').DataTable();
} );
</script>
</body>

</html> */
}
