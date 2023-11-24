/* eslint-disable default-case */
import { useEffect, useState } from "react";
import { AddNewLeadModel } from "./addNewLeadModel";
import { Link } from "react-router-dom";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { leadTableHeaders } from "../../Constants/table.constants";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { DeleteModel } from "../../common-components/models/DeleteModal";
import { tradeType } from "../../Constants/newLeadContants";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../context/authContext";

export const Lead = () => {
  const { user } = useAuth();
  const [newLeadModal, setNewLeadModal] = useState(false);
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [leadData, setLeadData] = useState(null);
  const [leadIndex, setLeadIndex] = useState(null);
  const [deleteLeadModal, setDeleteLeadModal] = useState(false);
  const [viewLead, setViewLead] = useState(false);
  const [leadTab, setLeadTab] = useState("all");

  const [tradeTypes, setTradeTypes] = useState([]);
  const [registrationTypes, setRegistrationTypes] = useState([]);

  const filterTypes = {
    registrationType: "",
    tradeType: "",
    textSearch: "",
  };
  const [selectedFilter, setSelectedFilter] = useState(filterTypes);

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
    getRegistrationTypes();
    getTradeTypes();
  }, [selectedFilter]);

  const getTradeTypes = async () => {
    try {
      const { data } = await AxiosInstance.get("/trades/getTradeTypes");
      setTradeTypes(data.allTradeTypes);
    } catch (err) {
      console.error(err);
    }
  };

  const getRegistrationTypes = async () => {
    try {
      const { data } = await AxiosInstance.get(
        "/registrationType/getRegistrationTypes"
      );
      setRegistrationTypes(data);
    } catch (err) {
      console.error(err);
    }
  };

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

  const getAllLeads = async (filterLead) => {
    try {
      const { data } = await AxiosInstance.get("/leads/getAllLeads", {
        params: selectedFilter,
      });
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
      toast.dismiss();
      const { data } = await AxiosInstance.delete("/leads/deleteLead", {
        params: leadData,
      });
      toast.success("lead deleted");
      const filterLeads = leads.filter((e) => e._id != leadData._id);
      setLeads([...filterLeads]);
      updateLeadList("delete", leadData);
    } catch (err) {
      toast.error("error occured");
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
              (e) => !e?.course?.length && e.status != "pending"
            );
            setFilteredLeads([...newLeads]);
          } else {
            setFilteredLeads((old) => [...old, leadData]);
          }
        } else {
          const newLeads = leads.filter(
            (e) => !e?.course?.length && e.status != "pending"
          );
          setFilteredLeads([...newLeads]);
        }
        break;
      case "pending":
        if (leadData) {
          const checkLeads = filteredLeads.filter((e) => e._id == leadData._id);
          if (checkLeads.length) {
            filteredLeads[leadIndex] = leadData;
            const pendingLeads = filteredLeads.filter(
              (e) => e?.course?.length && e.status != "assign"
            );
            setFilteredLeads([...pendingLeads]);
          }
        } else {
          const pendingLeads = leads.filter(
            (e) => e?.course?.length && e.status != "assign"
          );
          setFilteredLeads([...pendingLeads]);
        }
        break;
      case "assign":
        if (leadData) {
          const checkLeads = filteredLeads.filter((e) => e._id == leadData._id);
          if (checkLeads.length) {
            filteredLeads[leadIndex] = leadData;
            const assignedLeads = filteredLeads.filter(
              (e) => e?.course?.length && e.status != "confirmed"
            );
            setFilteredLeads([...assignedLeads]);
          }
        } else {
          const assignedLeads = leads.filter(
            (e) => e?.course?.length && e.status != "confirmed"
          );
          setFilteredLeads([...assignedLeads]);
        }
        break;
      case "delete":
        const newLeads = filteredLeads.filter((e) => e._id != leadData._id);
        setFilteredLeads([...newLeads]);
        break;
    }
    if (type != "delete") setLeadTab(type);
  };

  const clearFilters = () => {
    setSelectedFilter((old) => ({ ...filterTypes }));
  };

  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title">
                      <FormattedMessage
                        id="Lead_List"
                        defaultMessage="Lead List"
                      />
                    </div>
                    <div className="row w-75">
                      <div className="col-xl-4">
                        <select
                          className="form-select"
                          onChange={({ target }) => {
                            setSelectedFilter((old) => ({
                              ...old,
                              tradeType: target.value,
                            }));
                          }}
                          value={selectedFilter.tradeType}
                        >
                          <option value="">Select Trade Type</option>
                          {tradeTypes.map((type) => (
                            <option key={type._id} value={type._id}>
                              {type?.tradeType}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-xl-4">
                        <select
                          className="form-select"
                          onChange={({ target }) => {
                            setSelectedFilter((old) => ({
                              ...old,
                              registrationType: target.value,
                            }));
                          }}
                          value={selectedFilter.registrationType}
                        >
                          <option value="">Select Registration Type</option>
                          {registrationTypes.map((type) => (
                            <option key={type._id} value={type._id}>
                              {type?.registrationName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-xl-4">
                        <div className="d-flex" role="search">
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            onChange={({ target }) => {
                              setSelectedFilter((old) => ({
                                ...old,
                                textSearch: target.value,
                              }));
                            }}
                            value={selectedFilter.textSearch}
                          />{" "}
                          <button
                            onClick={clearFilters}
                            className=" btn btn-light"
                            type="submit"
                            style={{ width: "200px" }}
                          >
                            <FormattedMessage
                              id="Clear_Filters"
                              defaultMessage="Clear Filters"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="btns">
                      {user.userData?.roleData?.lead?.create && (
                        <button
                          className="mx-1 btn btn-primary"
                          onClick={() => showLeadModal()}
                          style={{ height: "20px", padding: "0 0.5rem" }}
                        >
                          <i className="bx bx-plus fw-semibold align-middle" />{" "}
                          <FormattedMessage
                            id="Add_New"
                            defaultMessage="Add New"
                          />
                        </button>
                      )}
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
                        editButton={user.userData?.roleData?.lead?.write}
                        tableSearchBar={false}
                        deleteButton={user.userData?.roleData?.lead?.delete}
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
          registrationTypes={registrationTypes}
          tradeTypes={tradeTypes}
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
