import { useEffect, useState } from "react";
import { AllCalendar } from "../../common-components/Calendar";
import { AddNewHoliday } from "./modals/HolidayModal";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import moment from "moment";
import { CalendarEventModal } from "./calendarEventModal";

export const Scheduling = () => {
  const { NewAxiosInstance } = useAuth();
  const filterObject = {
    course: "",
    trainer: "",
    class: "",
    startDate: "",
    endDate: "",
  };

  const [selectedFilter, setSelectedFilter] = useState(filterObject);
  const [calendarEventModal, setCalendarEventModal] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [events, setEvents] = useState([]);
  const [holidayEventModal, setHolidayEventModal] = useState(false);

  useEffect(() => {
    getEvents();
  }, [selectedFilter]);

  const googleAuthenticate = async (classEvents) => {
    try {
      const response = await NewAxiosInstance.get("/google/googleAuthUrl");
      if (response.status == 200) {
        if (response.data?.isAuthenticated) {
          getGoogleEvents(classEvents);
          return;
        }
        // setEvents(classEvents);
        window.open(response.data.redirectCalendarUrl);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getGoogleEvents = async (classEvents) => {
    const eventArr = [];
    const response = await NewAxiosInstance.get("/google/calendarEvents");
    response.data.map((googleEvent) => {
      eventArr.push({
        title: `${googleEvent.summary} ${
          googleEvent.description
            ? "description : ( " + googleEvent.description + " ) "
            : ""
        } `,
        classId: googleEvent?.extendedProperties?.private?.classId
          ? googleEvent?.extendedProperties?.private?.classId
          : "",
        event_id: googleEvent.id,
        classRemarks: googleEvent?.description ? googleEvent.description : "",
        startTime: googleEvent.start.dateTime
          ? moment(googleEvent.start.dateTime).format("hh:mm A")
          : null,
        endTime: googleEvent.end.dateTime
          ? moment(googleEvent.end.dateTime).format("hh:mm A")
          : null,
        startDate: googleEvent.start.dateTime
          ? googleEvent.start.dateTime
          : googleEvent.start.date,
        endDate: googleEvent.end.dateTime
          ? googleEvent.end.dateTime
          : googleEvent.end.date,
      });
    });
    setEvents(eventArr);
  };

  const getEvents = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/class/getClasses", {
        params: selectedFilter,
      });
      googleAuthenticate(data.classes);
    } catch (err) {
      console.error(err);
    }
  };

  const showSelectedEvent = (data, type) => {
    if (type == "holiday") {
      setHolidayEventModal(true);
    } else {
      setCalendarEventModal(true);
    }
    setEventData(data);
  };

  return (
    <div id='layout-wrapper'>
      <div className='main-content'>
        <div className='page-content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
                  <h4 className='mb-sm-0 font-size-18'>Schedule</h4>
                  <div className='page-title-right'>
                    <ol className='breadcrumb m-0'>
                      <li className='breadcrumb-item'>
                        <Link to={"/"}>Dashboard</Link>
                      </li>
                      <li className='breadcrumb-item active'>Schedule</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='card'>
                  <div className='card-body'>
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

      {calendarEventModal && (
        <CalendarEventModal
          isOpen={calendarEventModal}
          setIsOpen={setCalendarEventModal}
          eventData={eventData}
          callback={(data) => {
            events.map((event, index) => {
              if (event.event_id == data.event_id) {
                events[index] = data;
              }
            });
          }}
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
