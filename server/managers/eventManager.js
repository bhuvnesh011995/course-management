const classModel = require("../models/classModel");
const EventModel = require("../models/eventModal");

const AddEvent = async (data) => {
  try {
    const newEvent = await EventModel.create(data);
    const addedEvent = await newEvent.save();
    const newAddedEvent = await EventModel.aggregate([
      {
        $match: {
          $expr: {
            $eq: ["$_id", addedEvent._id],
          },
        },
      },
      {
        $lookup: {
          from: "classes",
          localField: "class",
          foreignField: "_id",
          as: "classDetails",
        },
      },
      { $unwind: "$classDetails" },
      {
        $project: {
          course: 1,
          class: 1,
          title: "$classDetails.classCode",
          startTime: 1,
          endTime: 1,
          startDate: 1,
          endDate: 1,
        },
      },
    ]);

    return newAddedEvent[0];
  } catch (err) {
    console.error(err);
  }
};

const getEvents = async () => {
  try {
    const events = await EventModel.aggregate([
      {
        $lookup: {
          from: "classes",
          localField: "class",
          foreignField: "_id",
          as: "classDetails",
        },
      },
      { $unwind: "$classDetails" },
      {
        $project: {
          course: 1,
          class: 1,
          title: "$classDetails.classCode",
          startTime: 1,
          endTime: 1,
          startDate: 1,
          endDate: 1,
        },
      },
    ]);

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
        course: data.course,
        class: data.class,
        startTime: data.startTime,
        endTime: data.endTime,
        startDate: data.startDate,
        endDate: data.endDate,
      }
    );
    const updatedEvent = await EventModel.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$_id" }, data._id],
          },
        },
      },
      {
        $lookup: {
          from: "classes",
          localField: "class",
          foreignField: "_id",
          as: "classDetails",
        },
      },
      { $unwind: "$classDetails" },
      {
        $project: {
          course: 1,
          class: 1,
          title: "$classDetails.classCode",
          startTime: 1,
          endTime: 1,
          startDate: 1,
          endDate: 1,
        },
      },
    ]);
    return updatedEvent;
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
