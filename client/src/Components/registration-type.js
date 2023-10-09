// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";

// <head>

//     <meta charset="utf-8" />
//     <title>Registration Type | Tonga</title>
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

//         .dropdown {
//             position: relative;
//             font-size: 14px;
//             color: #182433;
//         }

//         .dropdown .dropdown-list {
//             padding: 0;
//             background: #ffffff;
//             position: absolute;
//             top: 30px;
//             left: 2px;
//             right: 2px;
//             z-index: 1000;
//             border: 1px solid rgba(4, 32, 69, 0.14);
//             border-radius: 4px;
//             box-shadow: 0px 16px 24px 2px rgba(0, 0, 0, 0.07), 0px 6px 30px 5px rgba(0, 0, 0, 0.06), 0px 8px 10px -5px rgba(0, 0, 0, 0.1);
//             transform-origin: 50% 0;
//             transform: scale(1, 0);
//             transition: transform 0.15s ease-in-out 0.15s;
//             max-height: 66vh;
//             overflow-y: scroll;
//         }

//         .dropdown .dropdown-option {
//             display: flex;
//             align-items: center;
//             padding: 8px 12px;
//             opacity: 0;
//             transition: opacity 0.15s ease-in-out;
//         }

//         .dropdown .dropdown-label {
//             display: block;
//             background: #fff;
//             font-family: var(--tblr-font-sans-serif);
//             font-size: .875rem;
//             font-weight: 400;
//             line-height: 1.4285714286 !important;
//             padding: 0.4375rem 0.75rem !important;

//             cursor: pointer;
//             border: 1px solid #dadfe5;
//             border-radius: 4px;
//         }

//         .dropdown .dropdown-label:before {
//             font-family: "Material Design Icons";
//             content: "\f0140";
//             color: #a5a9b1;
//             float: right;
//         }

//         .dropdown.on .dropdown-list {
//             transform: scale(1, 1);
//             transition-delay: 0s;
//         }

//         .dropdown.on .dropdown-list .dropdown-option {
//             opacity: 1;
//             transition-delay: 0.2s;
//             color: #182433;
//         }

//         .dropdown.on .dropdown-label:before {
//             content: "\f0143";
//             font-family: "Material Design Icons";
//             color: #a5a9b1;
//         }

//         .dropdown [type="checkbox"] {
//             position: relative;
//             top: -1px;
//             margin-right: 4px;
//         }
//     </style>

// </head>

// <body data-sidebar="dark">

//     <!-- Start layout-wrapper -->
export const RegistrationType = () => {
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
                  <h4 className="mb-sm-0 font-size-18">Registration Type</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Registration Type
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
                        data-bs-target="#addRegistrationTypeModal"
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
                {/* Registration Type Table */}
                <div className="card">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Registration Type List</div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="registration-type-table"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>
                              <input type="checkbox" />
                            </th>
                            <th>Registration Type</th>
                            <th>Trade Level</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>CoreTrade</td>
                            <td>Tradesman (FC+SA)</td>
                            <td>
                              <a
                                aria-label="View"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-info rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#selectRegistrationLevelModal"
                              >
                                <i className="mdi mdi-plus" />
                              </a>
                              <a
                                aria-label="View"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#viewRegistrationTypeModal"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                aria-label="Edit"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editRegistrationTypeModal"
                              >
                                <i className="mdi mdi-pencil" />
                              </a>
                              <a
                                aria-label="Delete"
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
                {/*/ Registration Type Table */}
              </div>
            </div>
            {/*/ Registration Type cards */}
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        {/* Add Registration Type Modal */}
        <div
          className="modal fade"
          id="addRegistrationTypeModal"
          tabIndex={-1}
          aria-labelledby="addRegistrationTypeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addRegistrationTypeModalLabel">
                  Add New Registration Type
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="addRegistrationTypeForm">
                  <div className="mb-3">
                    <label htmlFor="registrationName" className="form-label">
                      Registration Type:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="registrationName"
                      placeholder="Enter registration type"
                      required
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
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* View Registration Type Modal */}
        <div
          className="modal fade"
          id="viewRegistrationTypeModal"
          tabIndex={-1}
          aria-labelledby="viewRegistrationTypeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewRegistrationTypeModalLabel">
                  View Registration Type
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="viewRegistrationTypeForm">
                  <div className="mb-3">
                    <label
                      htmlFor="viewRegistrationName"
                      className="form-label"
                    >
                      Registration Type:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewRegistrationName"
                      defaultValue="CoreTrade"
                      disabled
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
        {/* Edit Registration Type Modal */}
        <div
          className="modal fade"
          id="editRegistrationTypeModal"
          tabIndex={-1}
          aria-labelledby="editRegistrationTypeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editRegistrationTypeModalLabel">
                  Edit Registration Type
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="editRegistrationTypeForm">
                  <div className="mb-3">
                    <label
                      htmlFor="editRegistrationName"
                      className="form-label"
                    >
                      Registration Type:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editRegistrationName"
                      defaultValue="CoreTrade"
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
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="editRegistrationTypeSubmit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Select Registration Level Modal */}
        <div
          className="modal fade"
          id="selectRegistrationLevelModal"
          tabIndex={-1}
          aria-labelledby="selectRegistrationLevelModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="selectRegistrationLevelModalLabel"
                >
                  Select Trade Level
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="selectRegistrationLevelForm">
                  <div className="mb-3">
                    <div className="form-label">
                      Trade Level
                      <span className="text-danger">*</span>
                    </div>
                    <div className="dropdown" data-control="checkbox-dropdown">
                      <label className="dropdown-label">Select</label>
                      <div className="dropdown-list">
                        <a
                          href="#"
                          data-toggle="check-all"
                          className="dropdown-option border-bottom text-blue"
                        >
                          Check All
                        </a>
                        <label className="dropdown-option">
                          <input
                            type="checkbox"
                            name="dropdown-group"
                            defaultValue="Selection 1"
                          />
                          Tradesman (FC+SA)
                        </label>
                        <label className="dropdown-option">
                          <input
                            type="checkbox"
                            name="dropdown-group"
                            defaultValue="Selection 2"
                          />
                          Tradesman (Re-Test)
                        </label>
                        <label className="dropdown-option">
                          <input
                            type="checkbox"
                            name="dropdown-group"
                            defaultValue="Selection 3"
                          />
                          Trade Foreman (FC+SA)
                        </label>
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
                <button type="button" className="btn btn-primary">
                  Save
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
    <script src="assets/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
    <script src="assets/libs/bootstrap-timepicker/js/bootstrap-timepicker.min.js"></script>

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
    <script>
        const selectBox = document.querySelector('.select-box');
        const selectAllCheckbox = document.getElementById('select-all');

        selectAllCheckbox.addEventListener('change', () => {
            const isChecked = selectAllCheckbox.checked;
            selectBox.querySelectorAll('option').forEach(option => {
                option.selected = isChecked;
            });
        });

        selectBox.addEventListener('change', () => {
            const selectedOptions = Array.from(selectBox.selectedOptions).map(option => option.value);
            if (selectedOptions.length === selectBox.options.length) {
                selectAllCheckbox.checked = true;
            } else {
                selectAllCheckbox.checked = false;
            }
            console.log("Selected options:", selectedOptions);
        });
    </script>
    <script>
        (function ($) {
            var CheckboxDropdown = function (el) {
                var _this = this;
                this.isOpen = false;
                this.areAllChecked = false;
                this.$el = $(el);
                this.$label = this.$el.find('.dropdown-label');
                this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
                this.$inputs = this.$el.find('[type="checkbox"]');

                this.onCheckBox();

                this.$label.on('click', function (e) {
                    e.preventDefault();
                    _this.toggleOpen();
                });

                this.$checkAll.on('click', function (e) {
                    e.preventDefault();
                    _this.onCheckAll();
                });

                this.$inputs.on('change', function (e) {
                    _this.onCheckBox();
                });
            };

            CheckboxDropdown.prototype.onCheckBox = function () {
                this.updateStatus();
            };

            CheckboxDropdown.prototype.updateStatus = function () {
                var checked = this.$el.find(':checked');

                this.areAllChecked = false;
                this.$checkAll.html('Check All');

                if (checked.length <= 0) {
                    this.$label.html('Select Options');
                }
                else if (checked.length === 1) {
                    this.$label.html(checked.parent('label').text());
                }
                else if (checked.length === this.$inputs.length) {
                    this.$label.html('All Selected');
                    this.areAllChecked = true;
                    this.$checkAll.html('Uncheck All');
                }
                else {
                    this.$label.html(checked.length + ' Selected');
                }
            };

            CheckboxDropdown.prototype.onCheckAll = function (checkAll) {
                if (!this.areAllChecked || checkAll) {
                    this.areAllChecked = true;
                    this.$checkAll.html('Uncheck All');
                    this.$inputs.prop('checked', true);
                }
                else {
                    this.areAllChecked = false;
                    this.$checkAll.html('Check All');
                    this.$inputs.prop('checked', false);
                }

                this.updateStatus();
            };

            CheckboxDropdown.prototype.toggleOpen = function (forceOpen) {
                var _this = this;

                if (!this.isOpen || forceOpen) {
                    this.isOpen = true;
                    this.$el.addClass('on');
                    $(document).on('click', function (e) {
                        if (!$(e.target).closest('[data-control]').length) {
                            _this.toggleOpen();
                        }
                    });
                }
                else {
                    this.isOpen = false;
                    this.$el.removeClass('on');
                    $(document).off('click');
                }
            };

            var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
            for (var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
                new CheckboxDropdown(checkboxesDropdowns[i]);
            }
        })(jQuery);
    </script>
</body>

</html> */
}
