const userManager = require("../managers/userManager");

const addNewUser = (req, res) => {
  userManager
    .addNewUser(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.error(500).send(err));
};

const getUsers = (req, res) => {
  userManager
    .getUsers(req.user)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const deleteUser = (req, res) => {
  userManager
    .deleteUser(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const updateUser = (req, res) => {
  userManager
    .updateUser(req.body)
    .then((result) => res.status(result.status).send(result.data))
    .catch((err) => res.status(500).send(err));
};

const updateUserWithImage = (req, res) => {
  userManager
    .updateUserWithImage(req)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const signIn = (req, res) => {
  userManager
    .signIn(req.body)
    .then((data) => res.status(data.statusCode).send(data.data))
    .catch((err) => {
      res.status(500).json({success:false,message:"internal error occured"})
      console.log(err)
    });
};

module.exports = {
  addNewUser,
  getUsers,
  deleteUser,
  updateUser,
  updateUserWithImage,
  signIn,
};
