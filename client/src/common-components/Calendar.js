import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CustomToolbar } from "./calendarCustomComponent";
import { convertUtcDateAndTime } from "./useCommonUsableFunctions";

export const AllCalendar = ({ events, callback, type }) => {
  const localizer = useMemo(() => momentLocalizer(moment), []);

  // const [selectedMonth, setSelectedMonth] = useState(new Date());

  // let [allDayEvents, setAllDayEvents] = useState([]);

  // useEffect(() => {
  //   if (!events[0]?.type) if (events && events?.length) createDayEvents(events);
  // }, [events, selectedMonth]);

  const viewSelectedEvent = (event) => {
    event["startDate"] = moment(event.startDate).format("YYYY-MM-DD");
    event["endDate"] = moment(event.endDate).format("YYYY-MM-DD");
    event["startTime"] = moment(event.startTime, "hh:mm A").format("HH:mm");
    event["endTime"] = moment(event.endTime, "hh:mm A").format("HH:mm");
    if (event?.type) {
      if (callback) callback(event, "holiday");
    } else {
      if (callback) callback(event);
    }
  };

  // function getAllDatesBetween(start, end) {
  //   const datesArray = [];
  //   const currentDate = moment(start);

  //   while (currentDate.isSameOrBefore(end)) {
  //     datesArray.push(currentDate.format("YYYY-MM-DD"));
  //     currentDate.add(1, "day");
  //   }

  //   return datesArray;
  // }

  // const createDayEvents = (allEvents) => {
  //   let dates;
  //   allDayEvents = [];
  //   allEvents.map((event, index) => {
  //     dates = [];
  //     if (new Date(event.endDate) > new Date(selectedMonth)) {
  //       if (
  //         new Date(event.endDate).getFullYear() > // if selected year is less than end year
  //         new Date(selectedMonth).getFullYear()
  //       ) {
  //         if (
  //           new Date(event.startDate).getMonth() == // if selected month equals end month because year is greater
  //           new Date(selectedMonth).getMonth()
  //         ) {
  //           dates = getAllDatesBetween(
  //             event.startDate,
  //             new Date(
  //               moment(selectedMonth).endOf("month").format("YYYY-MM-DD"),
  //             ),
  //           );
  //           addDayByEvents(event, dates);
  //         } else if (
  //           new Date(selectedMonth).getMonth() > // is selected month is greater that startDate and selected year is less than end year
  //           new Date(event.startDate).getMonth()
  //         ) {
  //           dates = getAllDatesBetween(
  //             selectedMonth,
  //             new Date(
  //               moment(selectedMonth).endOf("month").format("YYYY-MM-DD"),
  //             ),
  //           );
  //           addDayByEvents(event, dates);
  //         }
  //       } else if (
  //         new Date(event.endDate).getFullYear() == // if selected year equals end year
  //         new Date(selectedMonth).getFullYear()
  //       ) {
  //         if (
  //           new Date(event.startDate).getMonth() <= // if selected month is smaller than end month
  //           new Date(selectedMonth).getMonth()
  //         ) {
  //           dates = getAllDatesBetween(
  //             selectedMonth,
  //             new Date(
  //               moment(selectedMonth)
  //                 .add(1, "month")
  //                 .startOf("month")
  //                 .format("YYYY-MM-DD"),
  //             ),
  //           );
  //           addDayByEvents(event, dates);
  //         } else if (
  //           new Date(event.endDate).getMonth() == // if selected month equals end month
  //           new Date(selectedMonth).getMonth()
  //         ) {
  //           dates = getAllDatesBetween(selectedMonth, event.endDate);
  //           addDayByEvents(event, dates);
  //         }
  //       }
  //     }
  //   });
  // };

  // add events by dates
  // const addDayByEvents = (event, selectedDates) => {
  //   event.lectureDay.map((weekDay) => {
  //     if (weekDay == "Monday") {
  //       if (selectedDates.length > 0) {
  //         selectedDates.map((date) => {
  //           if (new Date(date).getDay() == 1) {
  //             allDayEvents.push({
  //               title: event.title,
  //               startDate: new Date(date),
  //               endDate: new Date(date),
  //               _id: event._id,
  //             });
  //             setAllDayEvents([...allDayEvents]);
  //           }
  //         });
  //       }
  //     } else if (weekDay == "Tuesday") {
  //       if (selectedDates.length > 0) {
  //         selectedDates.map((date) => {
  //           if (new Date(date).getDay() == 2) {
  //             allDayEvents.push({
  //               title: event.title,
  //               startDate: new Date(date),
  //               endDate: new Date(date),
  //               _id: event._id,
  //             });
  //             setAllDayEvents([...allDayEvents]);
  //           }
  //         });
  //       }
  //     } else if (weekDay == "Wednesday") {
  //       if (selectedDates.length > 0) {
  //         selectedDates.map((date) => {
  //           if (new Date(date).getDay() == 3) {
  //             allDayEvents.push({
  //               title: event.title,
  //               startDate: new Date(date),
  //               endDate: new Date(date),
  //               _id: event._id,
  //             });
  //             setAllDayEvents([...allDayEvents]);
  //           }
  //         });
  //       }
  //     } else if (weekDay == "Thursday") {
  //       if (selectedDates.length > 0) {
  //         selectedDates.map((date) => {
  //           if (new Date(date).getDay() == 4) {
  //             allDayEvents.push({
  //               title: event.title,
  //               startDate: new Date(date),
  //               endDate: new Date(date),
  //               _id: event._id,
  //             });
  //             setAllDayEvents([...allDayEvents]);
  //           }
  //         });
  //       }
  //     } else if (weekDay == "Friday") {
  //       if (selectedDates.length > 0) {
  //         selectedDates.map((date) => {
  //           if (new Date(date).getDay() == 5) {
  //             allDayEvents.push({
  //               title: event.title,
  //               startDate: new Date(date),
  //               endDate: new Date(date),
  //               _id: event._id,
  //             });
  //             setAllDayEvents([...allDayEvents]);
  //           }
  //         });
  //       }
  //     } else if (weekDay == "Saturday") {
  //       if (selectedDates.length > 0) {
  //         selectedDates.map((date) => {
  //           if (new Date(date).getDay() == 6) {
  //             allDayEvents.push({
  //               title: event.title,
  //               startDate: new Date(date),
  //               endDate: new Date(date),
  //               _id: event._id,
  //             });
  //             setAllDayEvents([...allDayEvents]);
  //           }
  //         });
  //       }
  //     } else if (weekDay == "Sunday") {
  //       if (selectedDates.length > 0) {
  //         selectedDates.map((date) => {
  //           if (new Date(date).getDay() == 0) {
  //             allDayEvents.push({
  //               title: event.title,
  //               startDate: new Date(date),
  //               endDate: new Date(date),
  //               _id: event._id,
  //             });
  //             setAllDayEvents([...allDayEvents]);
  //           }
  //         });
  //       }
  //     }
  //   });
  // };

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
      if (callback) callback(data);
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
            val?.startTime ? val.startTime : "00:00",
          )
        }
        endAccessor={(val) =>
          convertUtcDateAndTime(
            val.endDate,
            val?.endTime ? val.endTime : "00:00",
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
        // onNavigate={(selectedDate) =>
        //   setSelectedMonth(
        //     new Date(
        //       moment(selectedDate).startOf("month").format("YYYY-MM-DD"),
        //     ),
        //   )
        // }
      />
    </div>
  );
};
