import { useEffect, useState } from "react";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { attendanceHeaders } from "../../../Constants/table.constants";
import { AttendanceGenerateModal } from "./generateLeads";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export const Attendance = () => {
  const { NewAxiosInstance } = useAuth();
  const filterObject = {
    participantName: "",
    course: "",
  };

  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState(filterObject);
  const [generatePdfModal, setGeneratePdfModal] = useState(false);

  const [filteredLeads, setFilteredLeads] = useState([]);

  useEffect(() => {
    if (!filters.participantName.length && !filters.course.length) getCourses();
    if (filters.participantName.length || filters.course.length)
      getFilteredLeads();
  }, [filters]);

  const getCourses = async () => {
    try {
      toast.dismiss();
      const { data } = await NewAxiosInstance.get("/courses/getCourses");
      if (data?.allCourses.length) {
        setCourses(data?.allCourses);
        filters.course = data.allCourses[0]._id;
        setFilters({ ...filters });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getFilteredLeads = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/leads/getFilteredLeads", {
        params: filters,
      });
      setFilteredLeads(data);
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
                  <h4 className="mb-sm-0 font-size-18">
                    Attendance Management
                  </h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to={"/"}>Dashboard</Link>
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
                            <label>Search By Course:</label>
                            <select
                              onChange={({ target }) => {
                                filters.course = target.value;
                                setFilters({ ...filters });
                              }}
                              className="form-select"
                              value={filters.course}
                            >
                              {courses.length ? (
                                courses.map((e) => (
                                  <option key={e._id} value={e._id}>
                                    {e.courseName}
                                  </option>
                                ))
                              ) : (
                                <option value={""} selected>
                                  No Courses
                                </option>
                              )}
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
                    <div className=" d-flex flex-end justify-content-end">
                      <button
                        className="btn btn-primary"
                        style={{
                          height: "20px",
                          padding: "0 0.5rem",
                          fontSize: "0.7rem",
                        }}
                        onClick={() => {
                          if (filteredLeads.length) setGeneratePdfModal(true);
                          else toast.error("No Customer Courses");
                        }}
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
                <script>{new Date().getFullYear()}</script> © Tonga.
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
