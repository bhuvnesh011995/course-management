import { CommonFooter } from "../common-components/commonFooter";

export const MonitorVenueAvailability = () => {
  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    Monitor Venue Availability
                  </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Monitor Venue Availability
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
                        data-bs-target="#addVenueModal"
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Monitor Venue
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
                    <div className="card-title">Monitor Venue List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Location</th>
                            <th>Area</th>
                            <th>Capacity</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Venue A</td>
                            <td>Area 1</td>
                            <td>100</td>
                            <td>
                              <span className="badge badge-soft-success">
                                Available
                              </span>
                            </td>
                            <td>
                              <a
                                aria-label="anchor"
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#viewVenueModal"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                aria-label="anchor"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editVenueModal"
                              >
                                <i className="mdi mdi-pencil" />
                              </a>
                              <a
                                aria-label="anchor"
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
        {/* Add Venue Modal */}
        <div
          className="modal fade"
          id="addVenueModal"
          tabIndex={-1}
          aria-labelledby="addVenueModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addVenueModalLabel">
                  Add Venue
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
                    <label className="form-label">Venue Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="venueName"
                      placeholder="Enter venue name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Area</label>
                    <input
                      type="text"
                      className="form-control"
                      id="venueArea"
                      placeholder="Enter area"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Capacity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="venueCapacity"
                      placeholder="Enter capacity"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select" id="venueStatus" required>
                      <option value disabled>
                        Select status
                      </option>
                      <option value="Available">Available</option>
                      <option value="Unavailable">Unavailable</option>
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
                  Add Venue
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Venue Modal */}
        <div
          className="modal fade"
          id="editVenueModal"
          tabIndex={-1}
          aria-labelledby="editVenueModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editVenueModalLabel">
                  Edit Venue
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
                    <label className="form-label">Venue Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="editVenueName"
                      placeholder="Enter venue name"
                      defaultValue="Venue 1"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Area</label>
                    <input
                      type="text"
                      className="form-control"
                      id="editVenueArea"
                      placeholder="Enter area"
                      defaultValue="Area A"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Capacity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="editVenueCapacity"
                      placeholder="Enter capacity"
                      defaultValue={100}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      id="editVenueStatus"
                      required
                    >
                      <option value="Available">Available</option>
                      <option value="Unavailable">Unavailable</option>
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
        {/* View Venue Modal */}
        <div
          className="modal fade"
          id="viewVenueModal"
          tabIndex={-1}
          aria-labelledby="viewVenueModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewVenueModalLabel">
                  View Venue
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Venue Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="viewVenueName"
                    readOnly
                    defaultValue="Venue 1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    id="viewVenueArea"
                    readOnly
                    defaultValue="Area A"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Capacity</label>
                  <input
                    type="text"
                    className="form-control"
                    id="viewVenueCapacity"
                    readOnly
                    defaultValue={100}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <input
                    type="text"
                    className="form-control"
                    id="viewVenueStatus"
                    readOnly
                    defaultValue="Available"
                  />
                </div>
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
      </div>
      {/* end main content*/}
    </div>
  );
};

{
  /* <!-- Start layout-wrapper -->

<!-- 

    <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>
    <script src="assets/libs/select2/js/select2.min.js"></script>

    <script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
    <script src="assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
    <script src="assets/libs/jszip/jszip.min.js"></script>
    <script src="assets/libs/pdfmake/build/pdfmake.min.js"></script>
    <script src="assets/libs/pdfmake/build/vfs_fonts.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>

    <script src="assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
    <script src="assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>

    <script src="assets/js/pages/datatables.init.js"></script>


    <script src="assets/js/app.js"></script>
    <script
        src="https://cdn.tiny.cloud/1/qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc/tinymce/5.10.7-133/tinymce.min.js"></script>
    <script src="assets/js/pages/email-editor.js"></script>
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

</html> --> */
}
