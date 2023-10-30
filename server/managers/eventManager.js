const EventModel = require("../models/eventModal");

const AddEvent = async (data) => {
  try {
    const newEvent = await EventModel.create(data);
    const addedEvent = await newEvent.save();

    return addedEvent;
  } catch (err) {
    console.error(err);
  }
};

const getEvents = async (data) => {
  try {
    const query = [];
    if (data.sortBy == "all" || data.sortBy == "" || !data.sortBy) {
      query.push({
        $match: {},
      });
    } else if (
      data.sortBy == "holiday" ||
      data.sortBy == "leave" ||
      data.sortBy == "weekend"
    ) {
      query.push({
        $match: {
          $expr: {
            $eq: [data.sortBy, "$type"],
          },
        },
      });
    }
    console.log(query);
    const events = await EventModel.aggregate(query);
    console.log(events);
    return events;
  } catch (err) {
    console.error(err);
  }
};

const getEvent = async (data) => {
  try {
    const selectedEvent = await EventModel.findOne({ _id: data._id });
    return selectedEvent;
  } catch (err) {
    console.error(err);
  }
};

const deleteEvent = async (data) => {
  try {
    const deleteEvent = await EventModel.deleteOne({ _id: data._id });
    return { message: "Event Deleted Successfully !" };
  } catch (err) {
    console.error(err);
  }
};

const updateEvent = async (data) => {
  try {
    const updateEvent = await EventModel.updateOne(
      { _id: data._id },
      {
        holidayTitle: data.class,
        type: data?.holidayType,
        startDate: data.startDate,
        endDate: data.endDate,
      }
    );
    return { message: "event updated successfully !" };
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  AddEvent,
  getEvents,
  getEvent,
  deleteEvent,
  updateEvent,
};
