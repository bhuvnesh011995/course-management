// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>Course Calendar</title>
//     <!-- Include Bootstrap CSS and FullCalendar CSS/JavaScript via CDN -->
//     <link href="assets/css/bootstrap.min.css" rel="stylesheet">
//     <link href="https://cdn.jsdelivr.net/npm/fullcalendar@5.9.0/main.css" rel="stylesheet">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0/dist/css/bootstrap-select.min.css"
//         rel="stylesheet">
//     <link rel="stylesheet"
//         href="https://cdn.jsdelivr.net/npm/tempusdominus-bootstrap-4@5.39.0/build/css/tempusdominus-bootstrap-4.min.css">

//     <style>
//         /* Style the calendar container */
//         #calendar {
//             max-width: 800px;
//             margin: 0 auto;
//         }
//     </style>
// </head>

// <body>
// <!-- Add course button -->
export const SelectCourse = () => {
  return (
    <div>
      <button
        id="add-course-button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addCourseModal"
      >
        Add Course
      </button>
      {"{"}/* // {/* Calendar container */} */{"}"}
      <div id="calendar" />
      {"{"}/* // {/* Bootstrap Modal for adding courses */} */{"}"}
      <div
        className="modal fade"
        id="addCourseModal"
        tabIndex={-1}
        aria-labelledby="addCourseModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCourseModalLabel">
                Add Course
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* Add course form elements here */}
              <form id="courseForm">
                <div className="mb-3">
                  <label htmlFor="courseName" className="form-label">
                    Course Name
                  </label>
                  <select
                    className="selectpicker form-control"
                    id="courseName"
                    name="courseName"
                    data-live-search="true"
                    required
                  >
                    <option value="Course 1">Course 1</option>
                    <option value="Course 2">Course 2</option>
                    <option value="Course 3">Course 3</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="trainer" className="form-label">
                    Trainer
                  </label>
                  <select
                    className="selectpicker form-control"
                    id="trainer"
                    name="trainer"
                    data-live-search="true"
                    required
                  >
                    <option value="Trainer 1">Trainer 1</option>
                    <option value="Trainer 2">Trainer 2</option>
                    <option value="Trainer 3">Trainer 3</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="class" className="form-label">
                    Class
                  </label>
                  <select
                    className="selectpicker form-control"
                    id="class"
                    name="class"
                    required
                  >
                    <option value="Class A">Class A</option>
                    <option value="Class B">Class B</option>
                    <option value="Class C">Class C</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="classTime" className="form-label">
                    Class Time
                  </label>
                  <div
                    className="input-group date"
                    id="classTimePicker"
                    data-target-input="nearest"
                  >
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      data-target="#classTimePicker"
                      id="classTime"
                      name="classTime"
                      required
                    />
                    <div
                      className="input-group-append"
                      data-target="#classTimePicker"
                      data-toggle="datetimepicker"
                    >
                      <div className="input-group-text">
                        <i className="fa fa-clock" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="startDate" className="form-label">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    name="startDate"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="endDate" className="form-label">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    name="endDate"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {"{"}/* {/* Event details popover */} */{"}"}
      <div id="event-details" />
    </div>
  );
};

{
  /* <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.9.0/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.9.0/interaction/main.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0/dist/js/bootstrap-select.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0/dist/js/i18n/defaults-en_US.js"></script>

    <script
        src="https://cdn.jsdelivr.net/npm/tempusdominus-bootstrap-4@5.39.0/build/js/tempusdominus-bootstrap-4.min.js"></script>

    <!-- JavaScript code for calendar functionality -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var calendarEl = document.getElementById('calendar');

            var calendar = new FullCalendar.Calendar(calendarEl, {
                // Configure FullCalendar options here
                initialView: 'dayGridMonth',
                events: [
                    // Add events here
                    {
                        title: 'Course 1',
                        start: '2023-09-10T10:00:00',
                        end: '2023-09-10T12:00:00',
                        trainer: 'Trainer Name 1',
                        description: 'Course Description 1',
                    },
                    {
                        title: 'Course 2',
                        start: '2023-09-15T14:00:00',
                        end: '2023-09-15T16:00:00',
                        trainer: 'Trainer Name 2',
                        description: 'Course Description 2',
                    },
                    // Add more events as needed
                ],
                eventClick: function (info) {
                    // Display event details in a popover when clicking on an event
                    $(info.el).popover({
                        title: info.event.title,
                        content: `
                                     Trainer: ${info.event.extendedProps.trainer}<br>
                                     Description: ${info.event.extendedProps.description}<br>
                                     Class Time: ${info.event.start.toLocaleString()} - ${info.event.end.toLocaleString()}<br>
                                     Start Date: ${info.event.start.toLocaleDateString()}<br>
                                     End Date: ${info.event.end.toLocaleDateString()}
                                 `,
                        trigger: 'click',
                        placement: 'top',
                        container: 'body',
                        html: true,
                    });
                    $(info.el).popover('show');
                },
            });

            calendar.render();

            // Handle course form submission
            $('#courseForm').on('submit', function (e) {
                e.preventDefault();
                var courseName = $('#courseName').val();
                var trainer = $('#trainer').val();
                var classTime = $('#classTime').val();
                var startDate = $('#startDate').val();
                var endDate = $('#endDate').val();

                // Add the new event to the calendar
                calendar.addEvent({
                    title: courseName,
                    start: startDate,
                    end: endDate,
                    trainer: trainer,
                    description: 'Course Description', // You can customize this
                });

                // Close the modal
                $('#addCourseModal').modal('hide');

                // Clear the form
                $('#courseForm')[0].reset();
            });
        });
    </script>
</body>

</html> */
}
