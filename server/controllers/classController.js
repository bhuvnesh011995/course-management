const classManager = require("../managers/classManager");

// const addClass = (req, res) => {
//   classManager
//     .addClass(req.body)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getClasses = (req, res) => {
//   classManager
//     .getClasses(req.query, req.user)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getClass = (req, res) => {
//   classManager
//     .getClass(req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => response.status(500).send(err));
// };

// const updateClass = (req, res) => {
//   classManager
//     .updateClass(req.body)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => response.status(500).send(err));
// };

// const deleteClass = (req, res) => {
//   classManager
//     .deleteClass(req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => response.status(500).send(err));
// };

// const getCourseClasses = (req, res) => {
//   classManager
//     .getCourseClasses(req.query.id)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

module.exports = {
  addClass,
  getClasses,
  getClass,
  updateClass,
  deleteClass,
  getCourseClasses,
};
