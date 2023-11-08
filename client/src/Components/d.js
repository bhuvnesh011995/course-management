// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";
import { onMenuClicked } from "../common-components/useCommonUsableFunctions";

// <head>

//     <meta charset="utf-8" />
//     <title>Calendar | Tonga</title>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta content="#" name="description" />
//     <meta content="Themesbrand" name="author" />
//     <!-- App favicon -->
//     <link rel="shortcut icon" href="assets/images/favicon.ico">

//     <link href="https://cdn.jsdelivr.net/npm/fullcalendar@5.9.0/main.css" rel="stylesheet">

//     <!-- Bootstrap Css -->
//     <link rel="stylesheet" href="assets/css/bootstrap.min.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">
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

{
  /* <!-- Start layout-wrapper --> */
}
export const D = () => {
  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
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
            {/* end page title */}
            <div className="row">
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-grid">
                      <button
                        className="btn font-16 btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addEventModal"
                      >
                        <i className="mdi mdi-plus-circle-outline" /> Add New
                      </button>
                    </div>
                    <h5 className="text-primary my-3">Sort By :</h5>
                    <div className="mb-3">
                      <label htmlFor="startDate" className="form-label">
                        Start Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="startDate"
                        name="startDate"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="endDate" className="form-label">
                        End Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="courseFilter" className="form-label">
                        Course Filter
                      </label>
                      <select
                        className="selectpicker form-select"
                        id="courseFilter"
                        name="courseFilter"
                      >
                        <option value="">All Courses</option>
                        <option value="Course 1">Course 1</option>
                        <option value="Course 2">Course 2</option>
                        <option value="Course 3">Course 3</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="trainerFilter" className="form-label">
                        Trainer Filter
                      </label>
                      <select
                        className="selectpicker form-select"
                        id="trainerFilter"
                        name="trainerFilter"
                      >
                        <option value="">All Trainers</option>
                        <option value="Trainer 1">Trainer 1</option>
                        <option value="Trainer 2">Trainer 2</option>
                        <option value="Trainer 3">Trainer 3</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="classFilter" className="form-label">
                        Class Filter
                      </label>
                      <select
                        className="selectpicker form-select"
                        id="classFilter"
                        name="classFilter"
                      >
                        <option value="">All Classes</option>
                        <option value="Class A">Class A</option>
                        <option value="Class B">Class B</option>
                        <option value="Class C">Class C</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
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
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="addEventModalLabel">
                              Add Course
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="modal-body">
                            <form id="eventForm" className="row">
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="courseName">Course Name:</label>
                                <select
                                  className="form-select"
                                  id="courseName"
                                  required=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="course1">Course 1</option>
                                  <option value="course2">Course 2</option>
                                  <option value="course3">Course 3</option>
                                </select>
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="className">Class Name:</label>
                                <select
                                  className="form-select"
                                  id="className"
                                  required=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="class1">Class 1</option>
                                  <option value="class2">Class 2</option>
                                  <option value="class3">Class 3</option>
                                </select>
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="startTime">Start Time:</label>
                                <input
                                  type="time"
                                  className="form-control"
                                  id="startTime"
                                  required=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="endTime">End Time:</label>
                                <input
                                  type="time"
                                  className="form-control"
                                  id="endTime"
                                  required=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="eventStartDate">
                                  Start Date:
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="eventStartDate"
                                  required=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="eventEndDate">End Date:</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="eventEndDate"
                                  required=""
                                />
                              </div>
                              <div className="col-md-12 form-group mb-3">
                                <label htmlFor="location">Location:</label>
                                <select
                                  className="form-select"
                                  id="location"
                                  required=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="location1">Location 1</option>
                                  <option value="location2">Location 2</option>
                                  <option value="location3">Location 3</option>
                                </select>
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
                              Add Course
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
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="eventDetailsModalLabel"
                            >
                              Course Details
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="modal-body">
                            <form id="eventDetailsForm" className="row">
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="eventDetailsTitle">
                                  Course Name:
                                </label>
                                <select
                                  className="form-select"
                                  id="eventDetailsTitle"
                                  disabled=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="course1">Course 1</option>
                                  <option value="course2">Course 2</option>
                                  <option value="course3">Course 3</option>
                                </select>
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="eventDetailsType">
                                  Class Name:
                                </label>
                                <select
                                  className="form-select"
                                  id="eventDetailsType"
                                  disabled=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="class1">Class 1</option>
                                  <option value="class2">Class 2</option>
                                  <option value="class3">Class 3</option>
                                </select>
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="eventDetailsStartTime">
                                  Start Time:
                                </label>
                                <input
                                  type="time"
                                  className="form-control"
                                  id="eventDetailsStartTime"
                                  disabled=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="eventDetailsEndTime">
                                  End Time:
                                </label>
                                <input
                                  type="time"
                                  className="form-control"
                                  id="eventDetailsEndTime"
                                  disabled=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="eventDetailsStartDate">
                                  Start Date:
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="eventDetailsStartDate"
                                  disabled=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label htmlFor="eventDetailsEndDate">
                                  End Date:
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="eventDetailsEndDate"
                                  disabled=""
                                />
                              </div>
                              <div className="col-md-12 form-group mb-3">
                                <label htmlFor="eventDetailsLocation">
                                  Location:
                                </label>
                                <select
                                  className="form-select"
                                  id="eventDetailsLocation"
                                  disabled=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="location1">Location 1</option>
                                  <option value="location2">Location 2</option>
                                  <option value="location3">Location 3</option>
                                </select>
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
  /* <!-- end main content--> */
}

{
  /* <!-- END layout-wrapper --> */
}

{
  /* <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
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
            var datepickerAppended = false;
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: '',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            events: [
                
            ],
            eventClick: function (info) {
                // Show event details in the "Event Details" modal
                $('#eventDetailsTitle').val(info.event.title);
                $('#eventDetailsType').val(info.event.extendedProps.className);
                $('#eventDetailsStartTime').val(info.event.extendedProps.startTime);
                $('#eventDetailsEndTime').val(info.event.extendedProps.endTime);
                $('#eventDetailsStartDate').val(info.event.startStr);
                $('#eventDetailsEndDate').val(info.event.endStr);
                $('#eventDetailsLocation').val(info.event.extendedProps.location);
                $('#eventDetailsModal').modal('show');
            },
            viewDidMount: function () {
            if (!datepickerAppended) {
                var secondToolbarChunk = $(".fc-toolbar-chunk").eq(1);
                secondToolbarChunk.append('<div class="input-group" id="datepicker2"><input type="text" class="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker2" data-provide="datepicker" data-date-autoclose="true" id="datepicker"><span class="input-group-text"><i class="mdi mdi-calendar"></i></span></div>');
                $(".input-group.date").datepicker({
                    autoclose: true,
                    todayHighlight: true,
                    format: "dd M, yyyy",
                });

                // Add change event listener to the datepicker input
                $('#datepicker').on('changeDate', function (e) {
                    var selectedDate = e.date;
                    calendar.gotoDate(selectedDate);
                });

                datepickerAppended = true;
            }
        },
            editable: true,
            selectable: true,
            select: function (info) {
                // Add event when a date range is selected
                $('#courseName').val('select'); // Clear previous value
                $('#className').val('select'); // Set default class
                $('#startTime').val('');
                $('#endTime').val('');
                $('#eventStartDate').val(info.startStr);
                $('#eventEndDate').val(info.endStr);
                $('#location').val('select'); // Clear previous value
                $('#addEventModal').modal('show');
            },
        });

        calendar.render();

        function addEvent() {
            var courseName = document.getElementById('courseName').value;
            var className = document.getElementById('className').value;
            var startTime = document.getElementById('startTime').value;
            var endTime = document.getElementById('endTime').value;
            var eventStartDate = document.getElementById('eventStartDate').value;
            var eventEndDate = document.getElementById('eventEndDate').value;
            var location = document.getElementById('location').value;

            if (courseName.trim() === '' || startTime.trim() === '' || endTime.trim() === '' || eventStartDate.trim() === '' || eventEndDate.trim() === '' || location.trim() === '') {
                alert('Please fill in all event details.');
                return;
            }

            var eventData = {
                title: courseName,
                start: eventStartDate,
                end: eventEndDate,
                extendedProps: {
                    className: className,
                    startTime: startTime,
                    endTime: endTime,
                    location: location
                },
                backgroundColor: '#28a745', // Success color
                borderColor: '#28a745', // Success color
                textColor: '#fff' // White text color
            };

            calendar.addEvent(eventData);

            document.getElementById('courseName').value = '';
            document.getElementById('startTime').value = '';
            document.getElementById('endTime').value = '';
            document.getElementById('eventStartDate').value = '';
            document.getElementById('eventEndDate').value = '';
            document.getElementById('location').value = '';
            $('#addEventModal').modal('hide');
        }
    </script>



</body>

</html> */
}
