// <!doctype html>
// <html lang="en">

import { useEffect, useState } from "react";
import { AllCalendar } from "../../common-components/Calendar";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { NewClassModal } from "../course-management/class/classModal";
import { AddNewHoliday } from "./modals/HolidayModal";

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
  const [classEventModal, setClassEventModal] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [events, setEvents] = useState([]);
  const [holidayEventModal, setHolidayEventModal] = useState(false);

  useEffect(() => {
    getEvents();
  }, [selectedFilter]);

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

  const getEvents = async () => {
    try {
      const { data } = await AxiosInstance.get("/class/getClasses", {
        params: selectedFilter,
      });
      setEvents(data.classes);
    } catch (err) {
      console.error(err);
    }
  };

  const showSelectedEvent = (data, type) => {
    if (type == "holiday") {
      setHolidayEventModal(true);
    } else {
      setClassEventModal(true);
    }
    setEventData(data);
  };
  const updateEvent = async (data, type) => {
    const filterEvents = events.filter((e) => e._id == data._id);
    if (filterEvents?.length) {
      events.map((e, index) => {
        if (e._id == data._id) events[index] = data;
      });
      setEvents([...events]);
    } else {
      setEvents([...events, data]);
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
                  <h4 className="mb-sm-0 font-size-18">Scedule</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a>Dashboard</a>
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
                    <div className="mb-3">
                      <label className="form-label">Start Date</label>
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
                      <label className="form-label">End Date</label>
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
                          <option key={e._id} value={e._id}>
                            {e.courseName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Trainer Filter</label>
                      <select
                        className="selectpicker form-select"
                        onChange={({ target }) =>
                          addFilter(target.value, "trainer")
                        }
                        value={selectedFilter.trainer}
                      >
                        <option value="">All Trainers</option>
                        {trainers.map((e) => (
                          <option key={e._id} value={e._id}>
                            {e.trainerName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Class Filter</label>
                      <select
                        className="selectpicker form-select"
                        onChange={({ target }) =>
                          addFilter(target.value, "class")
                        }
                        value={selectedFilter.class}
                      >
                        <option value="">All Classes</option>
                        {classes.map((e) => (
                          <option key={e._id} value={e._id}>
                            {e.classCode}
                          </option>
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
                    <AllCalendar
                      events={events}
                      callback={(e, type) => showSelectedEvent(e, type)}
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
                Design &amp; Develop by Braincavesoft
              </div>
            </div>
          </div>
        </div>
      </footer>
      {classEventModal && (
        <NewClassModal
          setIsOpen={setClassEventModal}
          isOpen={classEventModal}
          classData={eventData}
          isCalendar
          callback={(e) => updateEvent(e)}
        />
      )}
      {holidayEventModal && (
        <AddNewHoliday
          isOpen={holidayEventModal}
          setIsOpen={setHolidayEventModal}
          eventData={eventData}
        />
      )}
    </div>
  );
};
