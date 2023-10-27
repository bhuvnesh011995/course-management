const eventManager = require("../managers/eventManager");

const AddEvent = (req, res) => {
  eventManager
    .AddEvent(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getEvents = (req, res) => {
  eventManager
    .getEvents(req.user)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getEvent = (req, res) => {
  eventManager
    .getEvent(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const deleteEvent = (req, res) => {
  eventManager
    .deleteEvent(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const updateEvent = (req, res) => {
  eventManager
    .updateEvent(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

module.exports = {
  AddEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent,
};
