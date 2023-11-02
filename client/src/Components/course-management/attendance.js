// <!doctype html>
// <html lang="en">

import { useEffect, useState } from "react";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { attendanceHeaders } from "../../Constants/table.constants";
import {
  AttendanceGenerateExcelModal,
  AttendanceGenerateModal,
} from "./models/generateLeads";
import { convertToMongooseStartEndTiming } from "../../common-components/useCommonUsableFunctions";

export const Attendance = () => {
  const filterObject = {
    participantName: "",
    class: "",
  };

  const [classes, setClasses] = useState([]);
  const [filters, setFilters] = useState(filterObject);
  const [generatePdfModal, setGeneratePdfModal] = useState(false);

  const [filteredLeads, setFilteredLeads] = useState([]);

  useEffect(() => {
    if (!filters.participantName.length && !filters.class.length) getClasses();
    if (filters.participantName.length || filters.class.length)
      getFilteredLeads();
  }, [filters]);

  const getClasses = async () => {
    try {
      const { data } = await AxiosInstance.get("/class/getClasses");
      setClasses(data.classes);
      filters.class = data.classes[0]._id;
      setFilters({ ...filters });
    } catch (err) {
      console.error(err);
    }
  };

  const getFilteredLeads = async () => {
    try {
      const { data } = await AxiosInstance.get("/leads/getFilteredLeads", {
        params: filters,
      });
      setFilteredLeads(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="layout-wrapper">
      <CommonNavbar />

      <MenuBar />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    Attendance Management
                  </h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Attendance Management
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
                        <div className="col-xl-4">
                          <div className="className-select">
                            <label>Search By Class:</label>
                            <select
                              onChange={({ target }) => {
                                filters.class = target.value;
                                setFilters({ ...filters });
                              }}
                              className="form-select"
                              value={filters.class}
                            >
                              {classes.map((e) => (
                                <option value={e._id}>{e.classCode}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="className-select">
                            <label for="classDropdown">Search By Name:</label>
                            <div className="d-flex" role="search">
                              <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                onChange={({ target }) => {
                                  filters.participantName = target.value;
                                  setFilters({ ...filters });
                                }}
                                value={filters.participantName}
                              />{" "}
                            </div>
                          </div>
                        </div>
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
                    <div className="card-title">Attendance List </div>
                    <div class=" d-flex flex-end justify-content-end">
                      <button
                        class="btn btn-primary mx-1"
                        style={{
                          height: "20px",
                          padding: "0 0.5rem",
                          fontSize: "0.7rem",
                        }}
                      >
                        {" "}
                        <i class="mdi mdi-import me-1"></i>Import
                      </button>
                      <button
                        class="btn btn-primary"
                        style={{
                          height: "20px",
                          padding: "0 0.5rem",
                          fontSize: "0.7rem",
                        }}
                        onClick={() => setGeneratePdfModal(true)}
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={filteredLeads}
                        tableHeaders={attendanceHeaders}
                        tableSearchBar={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <script>document.write(new Date().getFullYear())</script> ©
                Tonga.
              </div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
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
      {generatePdfModal && (
        <AttendanceGenerateModal
          tableData={filteredLeads}
          isOpen={generatePdfModal}
          setIsOpen={setGeneratePdfModal}
        />
      )}
    </div>
  );
};
