const EventModel = require("../models/eventModal");
const db = require("../models");

const AddEvent = async (req, res, next) => {
  try {
    const { body } = req;
    const newEvent = await db.events.create(body);
    const addedEvent = await newEvent.save();

    return res.status(200).send(addedEvent);
  } catch (err) {
    next(err);
  }
};

const getEvents = async (req, res, next) => {
  try {
    const { query, user } = req;
    const matchQuery = [];
    if (query.sortBy == "all" || query.sortBy == "" || !query.sortBy) {
      matchQuery.push({
        $match: {},
      });
    } else if (
      query.sortBy == "holiday" ||
      query.sortBy == "leave" ||
      query.sortBy == "weekend"
    ) {
      matchQuery.push({
        $match: {
          $expr: {
            $eq: [query.sortBy, "$type"],
          },
        },
      });
    }
    const events = await db.events.aggregate(matchQuery);
    return res.status(200).send(events);
  } catch (err) {
    next(err);
  }
};

const getEvent = async (req, res, next) => {
  try {
    const { query } = req;
    const selectedEvent = await db.events.findOne({ _id: query._id });
    return res.status(200).send(selectedEvent);
  } catch (err) {
    next(err);
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const { query } = req;
    const deleteEvent = await db.events.deleteOne({ _id: query._id });
    return res.status(200).send({ message: "Event Deleted Successfully !" });
  } catch (err) {
    next(err);
  }
};

const updateEvent = async (req, res, next) => {
  try {
    const { body } = req;
    const updateEvent = await db.events.updateOne(
      { _id: body._id },
      {
        $set: body,
      }
    );
    return res.status(200).send({ message: "event updated successfully !" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  AddEvent,
  getEvents,
  getEvent,
  deleteEvent,
  updateEvent,
};
