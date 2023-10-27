import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useMemo, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CustomToolbar } from "./calendarCustomComponent";
import { AddEvent } from "./models/Event";

export const CommonCalendar = ({}) => {
  const localizer = useMemo(() => momentLocalizer(moment), []);
  const [eventModal, setEventModal] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [events, setEvents] = useState([
    {
      id: 1,
      startDate: new Date(),
      endDate: new Date("2023-11-1"),
      title: "Event 1",
      allDay: true,
    },
  ]);

  const viewSelectedEvent = (event) => {
    event["startDate"] = moment(event.startDate).format("YYYY-MM-DD");
    event["endDate"] = moment(event.endDate).format("YYYY-MM-DD");
    event["startTime"] = moment(event.startDate, "hh:mm A").format("HH:mm");
    event["endTime"] = moment(event.endDate, "hh:mm A").format("HH:mm");
    setEventData(event);
    setEventModal(true);
  };

  const handleCreateSlot = ({ start, end }) => {
    setEventData(null);
    setEventModal(true);
  };

  return (
    <div style={{ overflow: "auto", overflowY: "hidden", height: "500px" }}>
      <Calendar
        selectable={true}
        localizer={localizer}
        events={events}
        style={{ overflow: "hidden" }}
        startAccessor={(val) => new Date(val.startDate)}
        endAccessor={(val) => new Date(val.endDate)}
        views={["month", "week", "day"]}
        components={{
          toolbar: CustomToolbar,
        }}
        timeslots={2}
        onSelectEvent={viewSelectedEvent}
        onSelectSlot={handleCreateSlot}
      />
      {eventModal && (
        <AddEvent
          isOpen={eventModal}
          setIsOpen={setEventModal}
          eventData={eventData}
        />
      )}
    </div>
  );
};
