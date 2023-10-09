// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";

// <head>

//     <meta charset="utf-8" />
//     <title>Date Range | Tonga</title>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta content="#" name="description" />
//     <meta content="Themesbrand" name="author" />
//     <!-- App favicon -->
//     <link rel="shortcut icon" href="assets/images/favicon.ico">

//     <link href="https://cdn.jsdelivr.net/npm/fullcalendar@5.9.0/main.css" rel="stylesheet">

//     <!-- Bootstrap Css -->
//     <link rel="stylesheet" href="assets/css/bootstrap.min.css">
//     <link href="assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">
//     <!-- Icons Css -->
//     <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />

//     <!-- App Css-->
//     <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
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

// <body data-sidebar="dark" data-layout-mode="light">

//     <!-- Start layout-wrapper -->
export const DateRange = () => {
  return (
    <div id="layout-wrapper">
      <CommonNavbar />
      {/* ========== Left Sidebar Start ========== */}
      <MenuBar />
      {/* Left Sidebar End */}
      {/* ============================================================== */}
      {/* Start right Content here */}
      {/* ============================================================== */}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
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
            {/* end page title */}
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3">
                    <button
                      className="btn font-16 btn-primary text-end"
                      data-bs-toggle="modal"
                      data-bs-target="#addEventModal"
                    >
                      <i className="mdi mdi-plus-circle-outline" /> Add New
                    </button>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <select className="form-select" id="sortBy">
                        <option value={0}>Sort By :</option>
                        <option value="all">All</option>
                        <option value="holiday">Holiday</option>
                        <option value="weekend">Weekend</option>
                        <option value="leave">Leave</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      id="legend"
                      className="d-flex align-items-center justify-content-end gap-3"
                    >
                      <h6>Label :</h6>
                      <div className="legend-item">
                        <div className="legend-color event-holiday" />
                        <div className="legend-label">Holiday</div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color event-weekend" />
                        <div className="legend-label">Weekend</div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color event-leave" />
                        <div className="legend-label">Leave</div>
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
                    <div id="calendar" />
                    {/* Event Creation Form */}
                    {/* Add Event Modal */}
                    <div
                      className="modal fade"
                      id="addEventModal"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="addEventModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="addEventModalLabel">
                              Add Event
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="modal-body">
                            <form id="eventForm">
                              <div className="form-group mb-3">
                                <label htmlFor="eventTitle">Event Title:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="eventTitle"
                                  placeholder="Enter Event Title"
                                  required
                                />
                              </div>
                              <div className="form-group mb-3">
                                <label htmlFor="eventType">Event Type:</label>
                                <select className="form-select" id="eventType">
                                  <option value="holiday">Holiday</option>
                                  <option value="weekend">Weekend</option>
                                  <option value="leave">Leave</option>
                                </select>
                              </div>
                              <div className="form-group mb-3">
                                <label htmlFor="eventStartDate">
                                  Start Date:
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="eventStartDate"
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="eventEndDate">End Date:</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="eventEndDate"
                                  required
                                />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onclick="addEvent()"
                            >
                              Add Event
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Event Details Modal */}
                    <div
                      className="modal fade"
                      id="eventDetailsModal"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="eventDetailsModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="eventDetailsModalLabel"
                            >
                              Event Details
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="modal-body">
                            <div className="form-group mb-3">
                              <label htmlFor="eventDetailsTitle">
                                Event Title:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="eventDetailsTitle"
                                disabled
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="eventDetailsType">
                                Event Type:
                              </label>
                              <select
                                className="form-select"
                                id="eventDetailsType"
                                disabled
                              >
                                <option value="holiday">Holiday</option>
                                <option value="weekend">Weekend</option>
                                <option value="leave">Leave</option>
                              </select>
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="eventDetailsStartDate">
                                Start Date:
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="eventDetailsStartDate"
                                disabled
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="eventDetailsEndDate">
                                End Date:
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="eventDetailsEndDate"
                                disabled
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
    </div>
  );
};
{
  /* <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->



    <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>
    <script src="assets/libs/select2/js/select2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.9.0/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.9.0/interaction/main.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0/dist/js/bootstrap-select.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0/dist/js/i18n/defaults-en_US.js"></script>


    <script src="https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/tempusdominus-bootstrap-4@5.39.0/build/js/tempusdominus-bootstrap-4.min.js"></script>

    <script src="assets/js/app.js"></script>
    <script>
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            events: [  // Add your default events here
                {
                    title: 'Holiday 1',
                    start: '2023-09-10',
                    end: '2023-09-11',
                    type: 'holiday',
                    backgroundColor: '#28a745', // Success color
                    borderColor: '#28a745', // Success color
                    textColor: '#fff' // White text color
                },
                {
                    title: 'Weekend 1',
                    start: '2023-09-16',
                    end: '2023-09-17',
                    type: 'weekend',
                    backgroundColor: '#007bff', // Primary color
                    borderColor: '#007bff', // Primary color
                    textColor: '#fff' // White text color
                },
                {
                    title: 'Leave 1',
                    start: '2023-09-20',
                    end: '2023-09-22',
                    type: 'leave',
                    backgroundColor: '#dc3545', // Danger color
                    borderColor: '#dc3545', // Danger color
                    textColor: '#fff' // White text color
                }
            ],
            eventClick: function (info) {
                // Show event details in the "Event Details" modal
                $('#eventDetailsTitle').val(info.event.title);
                $('#eventDetailsType').val(info.event.extendedProps.type);
                $('#eventDetailsStartDate').val(info.event.startStr);
                $('#eventDetailsEndDate').val(info.event.endStr);
                $('#eventDetailsModal').modal('show');
            },
            editable: true,
            selectable: true,
            select: function (info) {
                // Add event when a date range is selected
                $('#eventStartDate').val(info.startStr);
                $('#eventEndDate').val(info.endStr);
                $('#addEventModal').modal('show');
            },
        });

        calendar.render();

        function addEvent() {
            var eventTitle = document.getElementById('eventTitle').value;
            var eventType = document.getElementById('eventType').value;
            var eventStartDate = document.getElementById('eventStartDate').value;
            var eventEndDate = document.getElementById('eventEndDate').value;
            var eventColor;

            if (eventTitle.trim() === '' || eventStartDate.trim() === '' || eventEndDate.trim() === '') {
                alert('Please fill in all event details.');
                return;
            }

            switch (eventType) {
                case 'holiday':
                    eventColor = '#28a745'; // Success color
                    break;
                case 'weekend':
                    eventColor = '#007bff'; // Primary color
                    break;
                case 'leave':
                    eventColor = '#dc3545'; // Danger color
                    break;
                default:
                    eventColor = '#333'; // Default color
            }

            var eventData = {
                title: eventTitle,
                start: eventStartDate,
                end: eventEndDate,
                type: eventType,
                backgroundColor: eventColor,
                borderColor: eventColor,
                textColor: '#fff'
            };

            calendar.addEvent(eventData);

            document.getElementById('eventTitle').value = '';
            document.getElementById('eventStartDate').value = '';
            document.getElementById('eventEndDate').value = '';
            $('#addEventModal').modal('hide');
        }
    </script>


</body>

</html> */
}
