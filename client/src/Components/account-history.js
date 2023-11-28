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

        <footer ClassName="footer">
          <div ClassName="container-fluid">
            <div ClassName="row">
              <div ClassName="col-sm-6">
                <script>{new Date().getFullYear()}</script> © Tonga.
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
