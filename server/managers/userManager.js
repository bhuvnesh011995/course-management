const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const JWTSECRETKEY = process.env.JWTSECRETKEY;

const addNewUser = async (data) => {
  try {
    // const encryptedpass = await bcrypt.hash(data.password, 10);
    // data["password"] = encryptedpass;
    data["name"] = data.firstName + " " + data.lastName;
    data["contactNumber"] = data.mobile;
    const user = await db.user.create(data);
    const newUser = user.save();
    return newUser;
  } catch (err) {
    console.error(err);
  }
};

const getUsers = async (userData) => {
  try {
    const users = await db.user.aggregate([
      {
        $match: {
          email: { $ne: "admin@tonga.com" },
        },
      },
    ]);
    return { users, userData };
  } catch (err) {
    console.error(err);
  }
};

const deleteUser = async (data) => {
  try {
    await db.user.deleteOne({ _id: data._id });
    return { message: "User Deleted Successfully" };
  } catch (err) {
    console.error(err);
  }
};

const updateUser = async (data) => {
  try {
    // const encryptedpass = await bcrypt.hash(data.password, 10);
    // data["password"] = encryptedpass;

    const updateUser = await db.user.updateOne(
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
    return { status: 200, data: { message: "user Updated Successfully !" } };
  } catch (err) {
    console.error(err);
    return err;
  }
};

const updateUserWithImage = async ({ file, body }) => {
  try {
    const query = JSON.parse(body.userData);
    query.userData["userImagePath"] = `images/${file.filename}`;
    query.userData["name"] =
      query.userData.firstName + " " + query.userData.lastName;

    const user = await db.user.updateOne(
      { _id: query.userData._id },
      {
        firstName: query.userData.firstName,
        lastName: query.userData.lastName,
        course: query.userData.course,
        discription: query.userData.discription,
        name: query.userData.name,
        email: query.userData.email,
        phoneNo: query.userData.phoneNo,
        userName: query.userData.userName,
        password: query.userData.password,
        userImagePath: query.userData.userImagePath,
        userRole: query.userData.userRole,
        status: query.userData.status,
      }
    );
    return { message: "User Added Successfully !!" };
  } catch (err) {
    console.error(err);
  }
};

const signIn = async (data) => {
  try {

    const user = await db.user.findOne({ email: data.email });

    if (user) {
      if (user.password == data.password) {
        const token = jwt.sign(
          { email: user.email, password: user.password },
          JWTSECRETKEY
        );
        return { statusCode:200,data:{ token: token }};
      } else {
        return { statusCode:401,data:{ message:"Wrong email id or password !"}};
      }
    } else {
      return { statusCode:401,data:{ message:"Wrong email id or password !"} };
    }
  } catch (err) {
    return err
  }
};

module.exports = {
  addNewUser,
  getUsers,
  deleteUser,
  updateUser,
  updateUserWithImage,
  signIn,
};
