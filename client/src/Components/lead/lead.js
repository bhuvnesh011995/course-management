/* eslint-disable default-case */
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
import { TradeLevel1, tradeType } from "../../Constants/newLeadContants";
import { MenuBar } from "../../common-components/MenuBar";
import { Navbar } from "react-bootstrap";
import { CommonNavbar } from "../../common-components/Navbar";

export const Lead = () => {
  const [newLeadModal, setNewLeadModal] = useState(false);
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [leadData, setLeadData] = useState(null);
  const [leadIndex, setLeadIndex] = useState(null);
  const [deleteLeadModal, setDeleteLeadModal] = useState(false);
  const [viewLead, setViewLead] = useState(false);
  const [leadTab, setLeadTab] = useState("all");

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
      leads.map((e, index) => {
        if (e._id == checkLeads[0]._id) {
          leads[index] = leadData;
          setLeads([...leads]);
          return;
        }
      });
      updateLeadList(leadTab, leadData);
    } else {
      setLeads((old) => [...old, leadData]);
      if (leadTab == "new" || leadTab == "all")
        updateLeadList(leadTab, leadData);
    }
  };

  const getAllLeads = async () => {
    try {
      const { data } = await AxiosInstance.get("/leads/getAllLeads");
      data.leads.map((lead) => {
        tradeType.map((e) => {
          if (e.value == lead.tradeType) lead.tradeType = e.name;
        });
      });
      setLeads(data.leads);
      setFilteredLeads(data.leads);
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
      updateLeadList("delete", leadData);
    } catch (err) {
      console.error(err);
    }
  };

  const updateLeadList = (type, leadData) => {
    switch (type) {
      case "all":
        if (leadData) {
          const checkLeads = filteredLeads.filter((e) => e._id == leadData._id);
          if (checkLeads.length) {
            filteredLeads[leadIndex] = leadData;
            setFilteredLeads([...filteredLeads]);
          } else {
            setFilteredLeads((old) => [...old, leadData]);
          }
        } else {
          setFilteredLeads([...leads]);
        }
        break;
      case "new":
        if (leadData) {
          const checkLeads = filteredLeads.filter((e) => e._id == leadData._id);
          if (checkLeads.length) {
            filteredLeads[leadIndex] = leadData;
            const newLeads = filteredLeads.filter(
              (e) => !e.getPayment && !e.confirmed
            );
            setFilteredLeads([...newLeads]);
          } else {
            setFilteredLeads((old) => [...old, leadData]);
          }
        } else {
          const newLeads = leads.filter((e) => !e.getPayment && !e.confirmed);
          setFilteredLeads([...newLeads]);
        }
        break;
      case "pending":
        if (leadData) {
          const checkLeads = filteredLeads.filter((e) => e._id == leadData._id);
          if (checkLeads.length) {
            filteredLeads[leadIndex] = leadData;
            const pendingLeads = filteredLeads.filter(
              (e) => e.getPayment && !e.confirmed
            );
            setFilteredLeads([...pendingLeads]);
          }
        } else {
          const pendingLeads = leads.filter(
            (e) => e.getPayment && !e.confirmed
          );
          setFilteredLeads([...pendingLeads]);
        }
        break;
      case "assign":
        if (leadData) {
          const checkLeads = filteredLeads.filter((e) => e._id == leadData._id);
          if (checkLeads.length) {
            filteredLeads[leadIndex] = leadData;
            const completedLeads = filteredLeads.filter(
              (e) => e.getPayment && e.confirmed && !e.courseAssigned
            );
            setFilteredLeads([...completedLeads]);
          }
        } else {
          const completedLeads = leads.filter(
            (e) => e.getPayment && e.confirmed && !e.courseAssigned
          );
          console.log(completedLeads);
          setFilteredLeads([...completedLeads]);
        }
        break;
      case "completed":
        if (leadData) {
          const checkLeads = filteredLeads.filter((e) => e._id == leadData._id);
          if (checkLeads.length) {
            filteredLeads[leadIndex] = leadData;
            const completedLeads = filteredLeads.filter(
              (e) => e.getPayment && e.confirmed && e.courseAssigned
            );
            setFilteredLeads([...completedLeads]);
          }
        } else {
          const completedLeads = leads.filter(
            (e) => e.getPayment && e.confirmed && e.courseAssigned
          );
          setFilteredLeads([...completedLeads]);
        }
        break;
      case "delete":
        const newLeads = filteredLeads.filter((e) => e._id != leadData._id);
        setFilteredLeads([...newLeads]);
        break;
    }
    setLeadTab(type);
  };

  return (
    <div id="layout-wrapper">
      <CommonNavbar />
      <MenuBar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
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
                  <div>
                    <div className="card-body">
                      <CommonDataTable
                        data={filteredLeads}
                        tableHeaders={leadTableHeaders}
                        actionButtons
                        editButton
                        tableSearchBar={false}
                        deleteButton
                        callback={(e, type, index) =>
                          showLeadModal(e, type, index)
                        }
                        updateLeadList={(e) => updateLeadList(e)}
                        leadModelButtons
                      />
                      <div className="category-container mb-0 "></div>
                    </div>
                  </div>
                </div>
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
          setLeadData={setLeadData}
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