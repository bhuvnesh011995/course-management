// <!doctype html>
// <html lang="en">

import { useEffect, useState } from "react";
import { AllCalendar } from "../../common-components/Calendar";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { AxiosInstance } from "../../common-components/axiosInstance";

//     <style>
//         .event-holiday {
//             background-color: #28a745;
//             /* Success color */
//             color: #fff;
//             /* White text */
//             border-color: #28a745;
//             /* Success color */
//         }

//         .event-weekend {
//             background-color: #007bff;
//             /* Primary color */
//             color: #fff;
//             /* White text */
//             border-color: #007bff;
//             /* Primary color */
//         }

//         .event-leave {
//             background-color: #dc3545;
//             /* Danger color */
//             color: #fff;
//             /* White text */
//             border-color: #dc3545;
//             /* Danger color */
//         }

//         #legend {
//             margin-top: 5px;
//         }

//         .legend-item {
//             display: flex;
//             align-items: center;
//             margin-bottom: 8px;
//         }

//         .legend-color {
//             width: 10px;
//             height: 10px;
//             margin-right: 5px;
//             border-radius: 50%;
//         }

//         .legend-label {
//             font-size: 14px;
//         }

//         .event-holiday {
//             background-color: #28a745;
//         }

//         .event-weekend {
//             background-color: #007bff;
//         }

//         .event-leave {
//             background-color: #dc3545;
//         }
//     </style>
// </head>

export const Scheduling = () => {
  const filterObject = {
    course: "",
    trainer: "",
    class: "",
    startDate: "",
    endDate: "",
  };

  const [courses, setCourses] = useState([]);
  const [classes, setClasses] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(filterObject);

  useEffect(() => {
    getCourses();
    getClasses();
    getTrainers();
  }, []);

  const getCourses = async () => {
    try {
      const { data } = await AxiosInstance.get("/courses/getCourses");
      setCourses(data.allCourses);
    } catch (err) {
      console.error(err);
    }
  };

  const getClasses = async () => {
    try {
      const { data } = await AxiosInstance.get("/class/getClasses");
      setClasses(data.classes);
    } catch (err) {
      console.error(err);
    }
  };

  const getTrainers = async () => {
    try {
      const { data } = await AxiosInstance.get("/trainer/getTrainers");
      setTrainers(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addFilter = (value, type) => {
    selectedFilter[type] = value;
    setSelectedFilter({ ...selectedFilter });
  };

  const clearFilters = () => {
    setSelectedFilter(filterObject);
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
                  <h4 className="mb-sm-0 font-size-18">Scedule</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Scedule</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body">
                    {/* <div className="d-grid">
                      <button
                        className="btn font-16 btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addEventModal"
                      >
                        <i className="mdi mdi-plus-circle-outline" /> Add New
                      </button>
                    </div>
                    <hr /> */}
                    <div className="mb-3">
                      <label htmlFor="startDate" className="form-label">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        onChange={({ target }) =>
                          addFilter(target.value, "startDate")
                        }
                        value={selectedFilter.startDate}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="endDate" className="form-label">
                        End Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        onChange={({ target }) =>
                          addFilter(target.value, "endDate")
                        }
                        value={selectedFilter.endDate}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Course Filter</label>
                      <select
                        className="selectpicker form-select"
                        onChange={({ target }) =>
                          addFilter(target.value, "course")
                        }
                        value={selectedFilter.course}
                      >
                        <option value="">All Courses</option>
                        {courses.map((e) => (
                          <option value={e._id}>{e.courseName}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="trainerFilter" className="form-label">
                        Trainer Filter
                      </label>
                      <select
                        className="selectpicker form-select"
                        onChange={({ target }) =>
                          addFilter(target.value, "trainer")
                        }
                        value={selectedFilter.trainer}
                      >
                        <option value="">All Trainers</option>
                        {trainers.map((e) => (
                          <option value={e._id}>{e.trainerName}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="classFilter" className="form-label">
                        Class Filter
                      </label>
                      <select
                        className="selectpicker form-select"
                        onChange={({ target }) =>
                          addFilter(target.value, "class")
                        }
                        value={selectedFilter.class}
                      >
                        <option value="">All Classes</option>
                        {classes.map((e) => (
                          <option value={e._id}>{e.classCode}</option>
                        ))}
                      </select>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn font-16 btn-primary"
                        onClick={clearFilters}
                      >
                        {" "}
                        Clear Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="card">
                  <div className="card-body">
                    <AllCalendar filters={selectedFilter} />
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
                Design &amp; Develop by Braincavesoft
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
