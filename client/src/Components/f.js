// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.css" rel="stylesheet" />
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.10.0/jquery.timepicker.min.css">
//     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.js"></script>
//     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.10.0/jquery.timepicker.min.js"></script>
//     <title>FullCalendar Example</title>
//     <style>
//         body {
//             font-family: Arial, Helvetica, sans-serif;
//         }

//         #calendar {
//             max-width: 900px;
//             margin: 0 auto;
//         }
//     </style>
// </head>
// <body>
export const F = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target="#add-event-modal"
      >
        Add Event
      </button>
      <div id="calendar" />
      <div
        className="modal fade"
        id="event-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="event-modal-title"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="event-modal-title">
                Event Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="edit-event-form">
                <input type="hidden" id="event-id" />
                <div className="form-group">
                  <label>
                    <i className="fa fa-book" /> Course Name:
                  </label>
                  <select id="course-name" className="form-control" required>
                    <option value="Course A">Course A</option>
                    <option value="Course B">Course B</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <i className="fa fa-graduation-cap" /> Class Name:
                  </label>
                  <select id="class-name" className="form-control" required>
                    <option value="Class 101">Class 101</option>
                    <option value="Class 102">Class 102</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <i className="fa fa-calendar" /> Start Date:
                  </label>
                  <input
                    type="text"
                    id="start-date"
                    className="form-control datepicker"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <i className="fa fa-calendar" /> End Date:
                  </label>
                  <input
                    type="text"
                    id="end-date"
                    className="form-control datepicker"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <i className="fa fa-clock" /> Start Time:
                  </label>
                  <input
                    type="text"
                    id="start-time"
                    className="form-control timepicker"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <i className="fa fa-clock" /> End Time:
                  </label>
                  <input
                    type="text"
                    id="end-time"
                    className="form-control timepicker"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <i className="fa fa-user" /> Trainer:
                  </label>
                  <select id="trainer" className="form-control" required>
                    <option value="Trainer 1">Trainer 1</option>
                    <option value="Trainer 2">Trainer 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <i className="fa fa-map-marker" /> Location:
                  </label>
                  <select id="location" className="form-control" required>
                    <option value="Location A">Location A</option>
                    <option value="Location B">Location B</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <i className="fa fa-info-circle" /> Description:
                  </label>
                  <textarea
                    id="description"
                    className="form-control"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                id="edit-event-button"
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                id="delete-event-button"
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <script>
        $(document).ready(function() {
            var calendar = $("#calendar");
            var eventModal = $("#event-modal");
            var editEventForm = $("#edit-event-form");
            var editEventButton = $("#edit-event-button");
            var deleteEventButton = $("#delete-event-button");
            var isEditing = false;

            calendar.fullCalendar({
                header: {
                    left: "prev,next today",
                    center: "title",
                    right: "month,agendaWeek,agendaDay"
                },
                defaultView: "month",
                editable: true,
                eventLimit: true,
                events: [
                    {
                        id: "1",
                        title: "Course A - Class 101",
                        start: "2023-09-16T10:30:00",
                        end: "2023-09-16T11:30:00",
                        course: "Course A",
                        class: "Class 101",
                        trainer: "Trainer 1",
                        location: "Location A",
                        description: "Description for Event 1"
                    },
                    {
                        id: "2",
                        title: "Course B - Class 102",
                        start: "2023-09-18T14:00:00",
                        end: "2023-09-18T15:00:00",
                        course: "Course B",
                        class: "Class 102",
                        trainer: "Trainer 2",
                        location: "Location B",
                        description: "Description for Event 2"
                    }
                ],
                eventClick: function(calEvent, jsEvent, view) {
                    // Display event details in a modal dialog
                    editEventForm[0].reset(); // Clear previous form values
                    $("#event-id").val(calEvent.id);
                    $("#course-name").val(calEvent.course);
                    $("#class-name").val(calEvent.class);
                    $("#start-date").val(calEvent.start.format("YYYY-MM-DD"));
                    $("#end-date").val(calEvent.end.format("YYYY-MM-DD"));
                    $("#start-time").val(calEvent.start.format("HH:mm"));
                    $("#end-time").val(calEvent.end.format("HH:mm"));
                    $("#trainer").val(calEvent.trainer);
                    $("#location").val(calEvent.location);
                    $("#description").val(calEvent.description);
                    editEventButton.show();
                    deleteEventButton.show();
                    disableFormFields();
                    editEventButton.text("Edit"); // Change button text to "Edit"
                    isEditing = false;
                    eventModal.modal("show");
                },
                eventDrop: function(event, delta, revertFunc) {
                    // Handle event drop (update)
                    updateEvent(event);
                },
                eventResize: function(event, delta, revertFunc) {
                    // Handle event resize (update)
                    updateEvent(event);
                }
            });

            // Edit button click handler
            editEventButton.click(function() {
                if (!isEditing) {
                    enableFormFields();
                    editEventButton.text("Save"); // Change button text to "Save"
                    isEditing = true;
                } else {
                    // Handle Save operation here
                    // Update the event and close modal
                    var eventId = $("#event-id").val();
                    var course = $("#course-name").val();
                    var className = $("#class-name").val();
                    var startDate = $("#start-date").val();
                    var endDate = $("#end-date").val();
                    var startTime = $("#start-time").val();
                    var endTime = $("#end-time").val();
                    var trainer = $("#trainer").val();
                    var location = $("#location").val();
                    var description = $("#description").val();

                    // Update event and close modal
                    var eventToUpdate = calendar.fullCalendar("clientEvents", eventId)[0];
                    eventToUpdate.title = course;
                    eventToUpdate.course = course;
                    eventToUpdate.class = className;
                    eventToUpdate.start = startDate + "T" + startTime;
                    eventToUpdate.end = endDate + "T" + endTime;
                    eventToUpdate.trainer = trainer;
                    eventToUpdate.location = location;
                    eventToUpdate.description = description;
                    calendar.fullCalendar("updateEvent", eventToUpdate);

                    disableFormFields();
                    editEventButton.text("Edit"); // Change button text back to "Edit"
                    isEditing = false;
                }
            });

            // Delete button click handler
            deleteEventButton.click(function() {
                var eventId = $("#event-id").val();

                // Delete event and close modal
                calendar.fullCalendar("removeEvents", eventId);
                eventModal.modal("hide");
            });

            function disableFormFields() {
                $(".form-control").prop("readonly", true);
                $("select").prop("disabled", true);
            }

            function enableFormFields() {
                $(".form-control").prop("readonly", false);
                $("select").prop("disabled", false);
            }

            function updateEvent(event) {
                // Implement your logic for updating events here
                // You can send the updated event data to the server if needed
                // For this example, we're updating the event data in the calendar only
                calendar.fullCalendar("updateEvent", event);
            }
        });
    </script>
</body>
</html> */
}
