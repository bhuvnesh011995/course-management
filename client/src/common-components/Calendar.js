import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useMemo, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CustomToolbar } from "./calendarCustomComponent";
import { convertUtcDateAndTime } from "./useCommonUsableFunctions";
import { NewClassModal } from "../Components/course-management/models/classModal";

export const AllCalendar = ({ events, callback, type }) => {
  const localizer = useMemo(() => momentLocalizer(moment), []);

  const viewSelectedEvent = (event) => {
    event["startDate"] = moment(event.startDate).format("YYYY-MM-DD");
    event["endDate"] = moment(event.endDate).format("YYYY-MM-DD");
    event["startTime"] = moment(event.startTime, "hh:mm A").format("HH:mm");
    event["endTime"] = moment(event.endTime, "hh:mm A").format("HH:mm");
    if (event?.type) {
      callback(event, "holiday");
    } else {
      callback(event);
    }
  };

  const handleCreateSlot = ({ start, end }) => {
    const data = {
      startDate: moment(start).format("YYYY-MM-DD"),
      endDate: moment(end).format("YYYY-MM-DD"),
    };
    if (type != "holiday") {
      data["startTime"] = moment(start).startOf().format("HH:mm");
      data["endTime"] = moment(end).endOf().format("HH:mm");
    }
    if (type == "holiday") {
      callback(data);
    }
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#32de84",
      color: "white",
      fontSize: "15px",
      fontWeight: "bolder",
      border: "none",
    };
    if (event.type == "leave") {
      style.backgroundColor = "red";
    } else if (event.type == "holiday") {
      style.backgroundColor = "green";
    } else if (event.type == "weekend") {
      style.backgroundColor = "blue";
    }

    return {
      className: "",
      style,
    };
  };
  return (
    <div style={{ overflow: "auto", overflowY: "hidden", height: "500px" }}>
      <Calendar
        selectable={true}
        localizer={localizer}
        events={events}
        style={{ overflow: "hidden" }}
        startAccessor={(val) =>
          convertUtcDateAndTime(
            val.startDate,
            val?.startTime ? val.startTime : "00:00"
          )
        }
        endAccessor={(val) =>
          convertUtcDateAndTime(
            val.endDate,
            val?.endTime ? val.endTime : "00:00"
          )
        }
        views={["month", "week", "day"]}
        components={{
          toolbar: CustomToolbar,
        }}
        timeslots={2}
        onSelectEvent={viewSelectedEvent}
        eventPropGetter={eventStyleGetter}
        onSelectSlot={handleCreateSlot}
      />
    </div>
  );
};
