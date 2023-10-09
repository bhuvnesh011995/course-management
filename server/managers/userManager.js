const UserModel = require("../models/userModel");

const addNewUser = async (data) => {
  try {
    data["name"] = data.firstName + " " + data.lastName;
    data["contactNumber"] = data.mobile;
    const user = await UserModel.create(data);
    const newUser = user.save();
    return newUser;
  } catch (err) {
    console.error(err);
  }
};

const getUsers = async () => {
  try {
    const users = await UserModel.find({});
    return users;
  } catch (err) {
    console.error(err);
  }
};

const deleteUser = async (data) => {
  try {
    await UserModel.deleteOne({ _id: data._id });
    return { message: "User Deleted Successfully" };
  } catch (err) {
    console.error(err);
  }
};

const updateUser = async (data) => {
  try {
    const updateUser = await UserModel.updateOne(
      { _id: data._id },
      {
        firstName: data.firstName,
        lastName: data.lastName,
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        userName: data.userName,
        password: data.password,
        userRole: data.userRole,
        status: data.status,
      }
    );
    return { updateUser };
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewUser,
  getUsers,
  deleteUser,
  updateUser,
};
