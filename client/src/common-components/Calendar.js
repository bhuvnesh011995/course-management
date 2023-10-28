import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CustomToolbar } from "./calendarCustomComponent";
import { AddEvent } from "./models/Event";
import { AxiosInstance } from "./axiosInstance";
import { convertUtcDateAndTime } from "./useCommonUsableFunctions";
import { NewClassModal } from "../Components/course-management/models/classModal";

export const AllCalendar = ({ filters }) => {
  const localizer = useMemo(() => momentLocalizer(moment), []);
  const [eventModal, setEventModal] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents();
  }, [filters]);

  const viewSelectedEvent = (event) => {
    event["startDate"] = moment(event.startDate).format("YYYY-MM-DD");
    event["endDate"] = moment(event.endDate).format("YYYY-MM-DD");
    event["startTime"] = moment(event.startTime, "hh:mm A").format("HH:mm");
    event["endTime"] = moment(event.endTime, "hh:mm A").format("HH:mm");
    setEventData(event);
    setEventModal(true);
  };

  // const handleCreateSlot = ({ start, end }) => {
  //   const data = {
  //     startDate: moment(start).format("YYYY-MM-DD"),
  //     endDate: moment(end).format("YYYY-MM-DD"),
  //     startTime: moment(start).startOf().format("HH:mm"),
  //     endTime: moment(end).endOf().format("HH:mm"),
  //   };
  //   setEventData(data);
  //   setEventModal(true);
  // };

  const getEvents = async () => {
    try {
      const { data } = await AxiosInstance.get("/class/getClasses", {
        params: filters,
      });
      setEvents(data.classes);
    } catch (err) {
      console.error(err);
    }
  };

  const updateEvent = async (data, type) => {
    // if (type == "delete") {
    //   const filteredEvents = events.filter((e) => e._id != data._id);
    //   setEvents([...filteredEvents]);
    //   return;
    // }
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
    <div style={{ overflow: "auto", overflowY: "hidden", height: "500px" }}>
      <Calendar
        selectable={true}
        localizer={localizer}
        events={events}
        style={{ overflow: "hidden" }}
        startAccessor={(val) =>
          convertUtcDateAndTime(val.startDate, val.startTime)
        }
        endAccessor={(val) => convertUtcDateAndTime(val.endDate, val.endTime)}
        views={["month", "week", "day"]}
        components={{
          toolbar: CustomToolbar,
        }}
        timeslots={2}
        onSelectEvent={viewSelectedEvent}
        // onSelectSlot={handleCreateSlot}
      />
      {eventModal && (
        // <AddEvent
        //   isOpen={eventModal}
        //   setIsOpen={setEventModal}
        //   eventData={eventData}
        //   callback={(e, type) => updateEvent(e, type)}
        // />
        <NewClassModal
          setIsOpen={setEventModal}
          isOpen={eventModal}
          classData={eventData}
          isCalendar
          callback={(e) => updateEvent(e)}
        />
      )}
    </div>
  );
};
