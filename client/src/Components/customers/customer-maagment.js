// <!doctype html>
// <html lang="en">

import { useEffect, useState } from "react";
import { customersHeaders } from "../../Constants/table.constants";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { onMenuClicked } from "../../common-components/useCommonUsableFunctions";
import { AddNewLeadModel } from "../lead/addNewLeadModel";
import { ViewCustomerModal } from "./customerModal";

export const CustomerManagement = () => {
  const [allCustomers, setAllCustomers] = useState([]);
  const [customerModal, setCustomerModal] = useState(false);
  const [customerData, setCustomerData] = useState(null);
  const [customerIndex, setCustomerIndex] = useState(null);
  const [tradeTypes, setTradeTypes] = useState([]);
  const [registrationTypes, setRegistrationTypes] = useState([]);
  const [viewCustomer, setViewCustomer] = useState(false);
  const [registrationData, setRegistrationData] = useState([]);

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

  const updateCustomer = (e) => {
    console.log(e);
  };

  useEffect(() => {
    getTradeTypes();
    getRegistrationTypes();
    getCustomers();
  }, []);

  const getCustomers = async () => {
    try {
      const { data } = await AxiosInstance.get("/leads/getAllLeads");
      setAllCustomers(data.leads);
    } catch (err) {
      console.error(err);
    }
  };

  const showCustomerModal = (data, type, index) => {
    try {
      setCustomerIndex(index);
      setCustomerData(data);
      const selectedType = registrationTypes.filter(
        (e) => data.registrationType == e._id
      );
      setRegistrationData(selectedType);
      if (type == "view") setViewCustomer(true);
      if (type != "view" && type != "delete") setCustomerModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
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
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="row w-100">
                        {/* <div className="col-xl-4">
                          <select className="form-select">
                            <option value={0} selected>
                              Sort By
                            </option>
                            <option value="CA">Newest</option>
                            <option value="NV">Oldest</option>
                            <option value="OR">Recent</option>
                          </select>
                        </div> */}
                        <div className="col-xl-4">
                          <select className="form-select">
                            <option value="" selected>
                              Select Company
                            </option>
                            {allCustomers.map((company) => (
                              <option value={company._id}>
                                {company?.companyName}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* <div className="col-xl-4">
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
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">customer List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        tableHeaders={customersHeaders}
                        data={allCustomers}
                        actionButtons
                        viewButton
                        editButton
                        deleteButton
                        downloadExcel
                        callback={(e, type, index) =>
                          showCustomerModal(e, type, index)
                        }
                        downloadPdf
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
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
      {customerModal && (
        <AddNewLeadModel
          setIsOpen={setCustomerModal}
          isOpen={customerModal}
          leadData={customerData}
          callback={(e) => updateCustomer(e)}
          registrationTypes={registrationTypes}
          tradeTypes={tradeTypes}
        />
      )}
      {viewCustomer && (
        <ViewCustomerModal
          setIsOpen={setViewCustomer}
          isOpen={viewCustomer}
          leadData={customerData}
          registrationData={registrationData}
        />
      )}
    </div>
  );
};
