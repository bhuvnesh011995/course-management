const courseManager = require("../managers/courseManager");

// const addNewCourse = (req, res) => {
//   courseManager
//     .addNewCourse(req.body)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getCourses = (req, res) => {
//   courseManager
//     .getCourses()
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getCourse = (req, res) => {
//   courseManager
//     .getCourse(req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const updateCourse = (req, res) => {
//   courseManager
//     .updateCourse(req.body)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const deleteCourse = (req, res) => {
//   courseManager
//     .deleteCourse(req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getFilteredCourses = (req, res) => {
//   courseManager
//     .getFilteredCourses(req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

module.exports = {
  addNewCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
  getFilteredCourses,
};
