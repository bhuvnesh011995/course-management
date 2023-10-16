import { useEffect, useState } from "react";
import { CommonRowMenubar } from "../../common-components/navbarRow";
import { AddNewLeadModel } from "./addNewLeadModel";
import { Link } from "react-router-dom";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import {
  leadContants,
  leadTableHeaders,
} from "../../Constants/table.constants";
import axios from "axios";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { DeleteModel } from "../../common-components/models/DeleteModal";

export const Lead = () => {
  const [newLeadModal, setNewLeadModal] = useState(false);
  const [leads, setLeads] = useState([]);
  const [leadData, setLeadData] = useState(null);
  const [leadIndex, setLeadIndex] = useState(null);
  const [deleteLeadModal, setDeleteLeadModal] = useState(false);
  const [viewLead, setViewLead] = useState(false);

  const showLeadModal = (data, type, index) => {
    setLeadIndex(index);
    if (data) {
      setLeadData(data);
    } else if (!data) {
      setLeadData(null);
    }
    if (type == "delete") {
      setDeleteLeadModal(true);
    } else if (type == "view") setViewLead(true);
    else {
      setDeleteLeadModal(false);
      setViewLead(false);
    }
    if (type != "delete") setNewLeadModal(!newLeadModal);
  };

  useEffect(() => {
    getAllLeads();
  }, []);

  const updateLeads = (leadData) => {
    const checkLeads = leads.filter((e) => e._id == leadData._id);
    if (checkLeads.length) {
      leads[leadIndex] = leadData;
      setLeads([...leads]);
    } else {
      setLeads((old) => [...old, leadData]);
    }
  };

  const getAllLeads = async () => {
    try {
      const { data } = await AxiosInstance.get("/leads/getAllLeads");
      setLeads(data.leads);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteLead = async (leadData) => {
    try {
      const { data } = await AxiosInstance.delete("/leads/deleteLead", {
        params: leadData,
      });
      const filterLeads = leads.filter((e) => e._id != leadData._id);
      setLeads([...filterLeads]);
    } catch (err) {
      console.error(err);
    }
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
                    <div class="btns">
                      <button
                        className="mx-1 btn btn-primary"
                        onClick={() => showLeadModal()}
                        style={{ height: "20px", padding: "0 0.5rem" }}
                      >
                        <i className="bx bx-plus fw-semibold align-middle" />{" "}
                        Add New
                      </button>
                      <Link
                        to="/lead-grid"
                        className="btn mx-1 btn-primary me-2"
                        style={{ height: "20px", padding: "0 0.5rem" }}
                      >
                        <i className="bx bxs-grid-alt fw-semibold align-middle"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <CommonDataTable
                      data={leads}
                      tableHeaders={leadTableHeaders}
                      actionButtons
                      editButton
                      tableSearchBar={false}
                      deleteButton
                      callback={(e, type, index) =>
                        showLeadModal(e, type, index)
                      }
                      leadModelButtons
                    />
                    <div className="category-container mb-0 "></div>
                  </div>
                </div>
                {/* <div className="card">
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
                </div> */}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      {newLeadModal && (
        <AddNewLeadModel
          setIsOpen={setNewLeadModal}
          isOpen={newLeadModal}
          leadData={leadData}
          callback={(e) => updateLeads(e)}
          viewLead={viewLead}
        />
      )}
      {deleteLeadModal && (
        <DeleteModel
          setIsOpen={setDeleteLeadModal}
          isOpen={deleteLeadModal}
          message={`do you really want to delete this Lead`}
          callback={(e) => deleteLead(e)}
          deleteHeader={"Lead"}
          data={leadData}
        />
      )}
    </div>
  );
};
