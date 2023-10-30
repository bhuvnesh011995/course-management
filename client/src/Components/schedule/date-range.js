// <!doctype html>
// <html lang="en">

import { useEffect, useState } from "react";
import { AllCalendar } from "../../common-components/Calendar";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { AddNewHoliday } from "./modals/HolidayModal";
import { AxiosInstance } from "../../common-components/axiosInstance";

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

export const DateRange = () => {
  const type = {
    sortBy: "",
  };

  const [events, setEvents] = useState([]);
  const [showEvent, setShowEvent] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [filteredQueries, setFilteredQueries] = useState(type);

  useEffect(() => {
    getAllEvents();
  }, [filteredQueries]);

  const addNewEvent = (data) => {
    setShowEvent(true);
    setEventData(data);
  };

  const getAllEvents = async () => {
    try {
      const { data } = await AxiosInstance.get("/events/getEvents", {
        params: filteredQueries,
      });
      setEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredType = (type) => {
    filteredQueries["sortBy"] = type;
    setFilteredQueries({ ...filteredQueries });
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
                  <h4 className="mb-sm-0 font-size-18">Date Range</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Date Range</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3">
                    <button
                      className="btn font-16 btn-primary text-end"
                      onClick={() => addNewEvent()}
                    >
                      <i className="mdi mdi-plus-circle-outline" /> Add New
                    </button>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <select
                        className="form-select"
                        onChange={({ target }) => filteredType(target.value)}
                      >
                        <option value={""}>Sort By :</option>
                        <option value="all">All</option>
                        <option value="holiday">Holiday</option>
                        <option value="weekend">Weekend</option>
                        {/* <option value="leave">Leave</option> */}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      id="legend"
                      className="d-flex align-items-center justify-content-end gap-3"
                    >
                      <h6>Label :</h6>
                      <div className="d-flex align-items-center justify-content-center ">
                        <div
                          style={{
                            backgroundColor: "green",
                            width: "10px",
                            height: "10px",
                            borderRadius: "5rem",
                          }}
                          className="mx-1"
                        ></div>
                        <div className="legend-label">Holiday</div>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <div
                          style={{
                            backgroundColor: "blue",
                            width: "10px",
                            height: "10px",
                            borderRadius: "5rem",
                          }}
                        />
                        <div className="mx-1 legend-label">Weekend</div>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <div
                          style={{
                            backgroundColor: "red",
                            width: "10px",
                            height: "10px",
                            borderRadius: "5rem",
                          }}
                        />
                        <div className="mx-1 legend-label">Leave</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <AllCalendar
                      events={events}
                      callback={(e) => addNewEvent(e)}
                      type={"holiday"}
                    />
                  </div>
                </div>
              </div>
              <div style={{ clear: "both" }} />
            </div>
          </div>
        </div>{" "}
        {/* container-fluid */}
      </div>
      {/* End Page-content */}
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
      {showEvent && (
        <AddNewHoliday
          isOpen={showEvent}
          setIsOpen={setShowEvent}
          eventData={eventData}
        />
      )}
    </div>
  );
};