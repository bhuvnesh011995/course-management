import { useState } from "react";
import { CommonRowMenubar } from "../common-components/navbarRow";
import { AddNewLeadModel } from "../common-components/models/addNewLeadModel";

export const Lead = () => {
  const [newLeadModal, setNewLeadModal] = useState(false);

  const showLeadModal = () => {
    setNewLeadModal(!newLeadModal);
  };

  return (
    <div id="layout-wrapper">
      <CommonRowMenubar />
      <div className=" px-11 py-3  d-flex align-items-center justify-content-center">
        <div className="page-content p-0">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title">Lead List </div>
                    <div className="row w-75">
                      <div className="col-xl-4">
                        <select className="form-select">
                          <option value={0} selected>
                            Sort By
                          </option>
                          <option value={1}>New Lead</option>
                          <option value={2}>Payment-Pending</option>
                          <option value={3}>Course-Assign</option>
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
                    <button
                      className="btn btn-primary"
                      onClick={showLeadModal}
                      style={{ height: "20px", padding: "0 0.5rem" }}
                    >
                      <i className="bx bx-plus fw-semibold align-middle" /> Add
                      New
                    </button>
                  </div>
                  <div className="card-body">
                    {/* Category: New */}
                    <div className="category-container mb-0 ">
                      <table className="display">
                        <thead>
                          <tr>
                            <th className="border-bottom-0">
                              CoreTrade Registration No
                            </th>
                            <th className="border-bottom-0">Company Name</th>
                            <th className="border-bottom-0">Contact Person</th>
                            <th className="border-bottom-0">
                              Name of Participant
                            </th>
                            <th className="border-bottom-0">
                              Participant's Mobile
                            </th>
                            <th className="border-bottom-0">Trade Type</th>
                            <th className="border-bottom-0">Actions</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div
                      className="category-container mb-0 "
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div
                        style={{
                          fontSize: "0.6rem",
                          position: "absolute",
                          left: "0.4rem",
                          top: "7rem",
                        }}
                      >
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          N
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          E
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          W
                        </span>
                      </div>
                      <table>
                        {/* Initially display 2 rows */}
                        <tbody>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                        {/* Additional rows initially hidden */}
                        <tbody>
                          <tr className="extra-row" data-category="New">
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr className="extra-row" data-category="New">
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr className="extra-row" data-category="New">
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={7}
                              className="border-bottom-0 text-center"
                            >
                              <a
                                href="javascript:void(0);"
                                className="show-more-less-btn"
                                data-category="New"
                              >
                                Show More
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Category: Payment-Pending */}
                    <div className="category-container mb-0 ">
                      <div
                        style={{
                          position: "absolute",
                          left: "0.4rem",
                          top: "14rem",
                          fontSize: "0.6rem",
                        }}
                      >
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          P
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          E
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          N
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          D
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          I
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          N
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          G
                        </span>
                      </div>
                      <table>
                        {/* Initially display 2 rows */}
                        <tbody>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                        {/* Additional rows initially hidden */}
                        <tbody>
                          <tr
                            className="extra-row"
                            data-category="Payment-pending"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr
                            className="extra-row"
                            data-category="Payment-pending"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr
                            className="extra-row"
                            data-category="Payment-pending"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={7}
                              className="border-bottom-0 text-center"
                            >
                              <a
                                href="javascript:void(0);"
                                className="show-more-less-btn"
                                data-category="Payment-pending"
                              >
                                Show More{" "}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Category: Course-assign */}
                    <div className="category-container">
                      <div
                        style={{
                          position: "absolute",
                          left: "0.4rem",
                          top: "22rem",
                          fontSize: "0.6rem",
                        }}
                      >
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          A
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          S
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          S
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          I
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          G
                        </span>
                        <span
                          className="text-primary"
                          style={{ display: "block", fontWeight: 600 }}
                        >
                          N
                        </span>
                      </div>
                      <table>
                        {/* Initially display 2 rows */}
                        <tbody>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                        {/* Additional rows initially hidden */}
                        <tbody>
                          <tr
                            className="extra-row"
                            data-category="Course-assign"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr
                            className="extra-row"
                            data-category="Course-assign"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr
                            className="extra-row"
                            data-category="Course-assign"
                          >
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                              style={{ cursor: "pointer" }}
                            >
                              CTF-ELW-524-0817-G
                            </td>
                            <td>ABC Corporation</td>
                            <td>John Smith</td>
                            <td>Alice Johnson</td>
                            <td>9876543210</td>
                            <td>Tiling</td>
                            <td>
                              <i
                                className="mdi mdi-pencil align-middle me-1 text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-trash-can align-middle me-1 text-danger"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="bx bx-money align-middle me-1 text-info"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                              <i
                                className="mdi mdi-check-circle align-middle text-success"
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={7} className="text-center">
                              <a
                                href="javascript:void(0);"
                                className="show-more-less-btn"
                                data-category="Course-assign"
                              >
                                Show More
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title">Completed</div>
                    <div className="row w-75">
                      <div className="col-xl-4">
                        <select className="form-select">
                          <option value={0} selected>
                            Select Registration Type
                          </option>
                          <option value="CT">CoreTrade</option>
                        </select>
                      </div>
                      <div className="col-xl-4">
                        <select className="form-select">
                          <option value={0} selected>
                            Select Trade Level
                          </option>
                          <option value="CAFC">Tradesman(FC+AC)</option>
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
                  <div className="card-body">
                    <table
                      id="datatable-buttons"
                      className="table table-bordered dt-responsive nowrap w-100"
                    >
                      <thead>
                        <tr>
                          <th>CoreTrade Registration No</th>
                          <th>Company Name</th>
                          <th>Contact Person</th>
                          <th>Name of Participant</th>
                          <th>Participant's Mobile</th>
                          <th>Trade Type</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            style={{ cursor: "pointer" }}
                          >
                            CTF-ELW-524-0817-G
                          </td>
                          <td>ABC Corporation</td>
                          <td>John Smith</td>
                          <td>Alice Johnson</td>
                          <td>9876543210</td>
                          <td>Tiling</td>
                          <td>
                            <i
                              className="mdi mdi-pencil align-middle me-1 text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#edit"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-trash-can align-middle me-1 text-danger"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="bx bx-money align-middle me-1 text-info"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-check-circle align-middle text-success"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            style={{ cursor: "pointer" }}
                          >
                            CTF-ELW-524-0817-G
                          </td>
                          <td>ABC Corporation</td>
                          <td>John Smith</td>
                          <td>Alice Johnson</td>
                          <td>9876543210</td>
                          <td>Tiling</td>
                          <td>
                            <i
                              className="mdi mdi-pencil align-middle me-1 text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#edit"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-trash-can align-middle me-1 text-danger"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="bx bx-money align-middle me-1 text-info"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-check-circle align-middle text-success"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            style={{ cursor: "pointer" }}
                          >
                            CTF-ELW-524-0817-G
                          </td>
                          <td>ABC Corporation</td>
                          <td>John Smith</td>
                          <td>Alice Johnson</td>
                          <td>9876543210</td>
                          <td>Tiling</td>
                          <td>
                            <i
                              className="mdi mdi-pencil align-middle me-1 text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#edit"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-trash-can align-middle me-1 text-danger"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="bx bx-money align-middle me-1 text-info"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                            <i
                              className="mdi mdi-check-circle align-middle text-success"
                              style={{ fontSize: "1rem", cursor: "pointer" }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <div
          id="add-new"
          className="modal fade bs-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" style={{ maxWidth: "1200px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title add-Customer-title">Add New Lead</h5>
                <h5
                  className="modal-title update-Customer-title"
                  style={{ display: "none" }}
                >
                  Update Customer
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
                    <div className="col-md-12 mb-3">
                      <label htmlFor="category" className="form-label">
                        Registration Type <span className="text-danger">*</span>
                      </label>
                      <select className="form-select" id="myselection" required>
                        <option value selected>
                          Select Registration Type
                        </option>
                        <option value={1}>Core Trade</option>
                        <option value={2}>Multi-skilling</option>
                        <option value={3}>SEC(k)</option>
                        <option value={4}>CET(Renewal)</option>
                        <option value={5}>ALP for Malaysian &amp; NAS</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyName" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        placeholder="Enter Company Name"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyUEN" className="form-label">
                        Company UEN No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyUEN"
                        placeholder="Enter Company UEN No."
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyAddress" className="form-label">
                        Company Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyAddress"
                        placeholder="Enter Company Address"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="postalCode" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        placeholder="Enter Postal Code"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="contactPerson" className="form-label">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactPerson"
                        placeholder="Enter Contact Person"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
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
                        placeholder="Enter Contact Person's Mobile"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
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
                        placeholder="Enter Contact Person's Email Address"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="officeTelephone" className="form-label">
                        Office Telephone No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="officeTelephone"
                        placeholder="Enter Office Telephone No."
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="officeFax" className="form-label">
                        Office Fax No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="officeFax"
                        placeholder="Enter Office Fax No."
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantName" className="form-label">
                        Name of Participant
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="participantName"
                        placeholder="Enter Name of Participant"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantNRIC" className="form-label">
                        Participant's NRIC / FIN No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="participantNRIC"
                        placeholder="Enter Participant's NRIC / FIN No."
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantMobile" className="form-label">
                        Participant's Mobile
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="participantMobile"
                        placeholder="Enter Participant's Mobile"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="alternateMobile" className="form-label">
                        Alternate Mobile Number (if any)
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="alternateMobile"
                        placeholder="Enter Alternate Mobile Number (if any)"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="tradeType" className="form-label">
                        Trade Type
                      </label>
                      <select className="form-select" id="tradeType" required>
                        <option value disabled selected>
                          Select Trade Type
                        </option>
                        <option value="TradeType-1">TradeType-1</option>
                        <option value="TradeType-2">TradeType-2</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="coreTradeRegNo" className="form-label">
                        CoreTrade / Multi-skilling/Direct R1 Registration No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="coreTradeRegNo"
                        placeholder="Enter CoreTrade / Multi-skilling/Direct R1 Registration No"
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <hr />
                      <h4>
                        Upload Documents <span className="text-danger">*</span>
                      </h4>
                    </div>
                    <div className="col-md-12">
                      <div className="row myDiv" id="show1">
                        <div className="col-md-4 mb-3">
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
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid copy of NRIC / Work document
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div className="row myDiv" id="show2">
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            1st Skill Evaluation Certificate / BCA Skills
                            Qualification Statement
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid BCA Acknowledgement Notice
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Pass
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div className="row myDiv" id="show3">
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Pass
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div className="row myDiv" id="show4">
                        <div className="col-md-4 mb-3">
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
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Passt
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div className="row myDiv" id="show5">
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Copy Of PA Quota（PA复印件）
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Copy Of Worker's IC 员工的身份证复印件
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Copy Of Worker's Passport (if available)
                            员工的护照复印件 - 如有请提供
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-lg-12 text-end">
                    <button type="button" className="btn btn-primary">
                      Add New
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
        {/* /.modal */}
        <div
          id="view"
          className="modal fade bs-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" style={{ maxWidth: "1200px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title add-Customer-title">View Lead</h5>
                <h5
                  className="modal-title update-Customer-title"
                  style={{ display: "none" }}
                >
                  Update Customer
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
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyName" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        defaultValue="ABC Corporation"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyUEN" className="form-label">
                        Company UEN No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyUEN"
                        defaultValue="UEN1234567"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="companyAddress" className="form-label">
                        Company Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyAddress"
                        defaultValue="123 Main Street"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="postalCode" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        defaultValue={12345}
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="contactPerson" className="form-label">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactPerson"
                        defaultValue="John Smith"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
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
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
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
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="officeTelephone" className="form-label">
                        Office Telephone No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="officeTelephone"
                        defaultValue="555-123-4567"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="officeFax" className="form-label">
                        Office Fax No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="officeFax"
                        defaultValue="555-987-6543"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantName" className="form-label">
                        Name of Participant
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="participantName"
                        defaultValue="Alice Johnson"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantNRIC" className="form-label">
                        Participant's NRIC / FIN No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="participantNRIC"
                        defaultValue="S1234567A"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="participantMobile" className="form-label">
                        Participant's Mobile
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="participantMobile"
                        defaultValue={9876543210}
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="alternateMobile" className="form-label">
                        Alternate Mobile Number (if any)
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="alternateMobile"
                        defaultValue
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="tradeType" className="form-label">
                        Trade Type
                      </label>
                      <select className="form-select" id="tradeType" disabled>
                        <option value="TradeType-1" selected>
                          TradeType-1
                        </option>
                        <option value="TradeType-2">TradeType-2</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="coreTradeRegNo" className="form-label">
                        CoreTrade / Multi-skilling/Direct R1 Registration No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="coreTradeRegNo"
                        defaultValue="CT1234567"
                        readOnly
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="course" className="form-label">
                        Course
                      </label>
                      <select
                        className="form-select"
                        id="class-add"
                        required
                        disabled
                      >
                        <option value={0}>Select course</option>
                        <option value="class-1" selected>
                          Course-1
                        </option>
                        <option value="class-2">Course-2</option>
                        <option value="class-3">Course-3</option>
                      </select>
                    </div>
                    <div className="col-md-12 mb-3">
                      <hr />
                      <h4>
                        Upload Documents <span className="text-danger">*</span>
                      </h4>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label
                        htmlFor="acknowledgementNotice"
                        className="form-label"
                      >
                        Valid BCA Acknowledgement Notice
                      </label>
                      <br />
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="abc.pdf"
                        readOnly
                      />
                      <div className="input-icons">
                        <i
                          className="fas fa-eye text-primary"
                          style={{ cursor: "pointer" }}
                        />
                        <i
                          className="fas fa-download text-success"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="nricWorkDocument" className="form-label">
                        Valid copy of NRIC / Work document
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="xyz.pdf"
                        readOnly
                      />
                      <div className="input-icons">
                        <i
                          className="fas fa-eye text-primary"
                          style={{ cursor: "pointer" }}
                        />
                        <i
                          className="fas fa-download text-success"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-lg-12 text-end">
                    <button type="button" className="btn btn-primary">
                      Get Payment
                    </button>
                    <button type="button" className="btn btn-success">
                      Confirm
                    </button>
                    <button type="button" className="btn btn-danger">
                      Reject
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
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
        {/* /.modal */}
        <div
          id="edit"
          className="modal fade bs-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" style={{ maxWidth: "1200px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title add-Customer-title">Edit Lead</h5>
                <h5
                  className="modal-title update-Customer-title"
                  style={{ display: "none" }}
                >
                  Update Customer
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
                      <label htmlFor="alternateMobile" className="form-label">
                        Alternate Mobile Number (if any)
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="alternateMobile"
                        defaultValue="+91-1234123456"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="tradeType" className="form-label">
                        Trade Type
                      </label>
                      <select className="form-select" id="tradeType">
                        <option value="TradeType-1">TradeType-1</option>
                        <option value="TradeType-2">TradeType-2</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-12 mb-3">
                      <hr />
                      <h4>
                        Upload Documents <span className="text-danger">*</span>
                      </h4>
                    </div>
                    <div className="col-md-12">
                      <div
                        className="row myDiv"
                        id="show1"
                        style={{ display: "flex" }}
                      >
                        <div className="col-md-4 mb-3">
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
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid copy of NRIC / Work document
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div
                        className="row myDiv"
                        id="show2"
                        style={{ display: "none" }}
                      >
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            1st Skill Evaluation Certificate / BCA Skills
                            Qualification Statement
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid BCA Acknowledgement Notice
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Pass
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div
                        className="row myDiv"
                        id="show3"
                        style={{ display: "none" }}
                      >
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Pass
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div
                        className="row myDiv"
                        id="show4"
                        style={{ display: "none" }}
                      >
                        <div className="col-md-4 mb-3">
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
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Valid Copy Of NRIC / Work Passt
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
                      <div
                        className="row myDiv"
                        id="show5"
                        style={{ display: "none" }}
                      >
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="acknowledgementNotice"
                            className="form-label"
                          >
                            Copy Of PA Quota（PA复印件）
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="acknowledgementNotice"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Copy Of Worker's IC 员工的身份证复印件
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            htmlFor="nricWorkDocument"
                            className="form-label"
                          >
                            Copy Of Worker's Passport (if available)
                            员工的护照复印件 - 如有请提供
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="nricWorkDocument"
                          />
                        </div>
                      </div>
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
          </div>
        </div>
      </div>
      {newLeadModal && (
        <AddNewLeadModel setIsOpen={setNewLeadModal} isOpen={newLeadModal} />
      )}
    </div>
  );
};
