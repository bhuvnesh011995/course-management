const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const JWTSECRETKEY = process.env.JWTSECRETKEY;

const addNewUser = async (req, res, next) => {
  try {
    // const encryptedpass = await bcrypt.hash(req.body.password, 10);
    // req.body["password"] = encryptedpass;
    req.body["name"] = req.body.firstName + " " + req.body.lastName;
    req.body["contactNumber"] = req.body.mobile;
    const user = await db.user.create(req.body);
    const newUser = user.save();
    return res.status(200).send(newUser);
  } catch (err) {
    next(err);
  }
};

const getUsers = async (req,res,next) => {
  try {
    const users = await db.user.aggregate([
      {
        $match: {
          email: { $ne: "admin@tonga.com" },
        },
      },
    ]);
    return res.status(200).send({ users, userData :req.user});
  } catch (err) {
    next(err)
  }
};

const deleteUser = async (req,res,next) => {
  try {
    let data = req.query
    await db.user.deleteOne({ _id: data._id });
    return res.status(200).send({ message: "User Deleted Successfully" });
  } catch (err) {
    next(err)
  }
};

const updateUser = async (req,res,next) => {
  try {
    let data = req.body
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
    return res.status(200).send({ message: "user Updated Successfully !" })
  } catch (err) {
  
    next(err)
  }
};

const updateUserWithImage = async (req,res,next) => {
  try {
    let { file, body } = req
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
    return res.status(200).send({ message: "User Added Successfully !!" });
  } catch (err) {
    next(err);
  }
};

const signIn = async (req,res,next) => {
  try {
    let data = req.body
    const user = await db.user.findOne({ email: data.email });

    if (user) {
      if (user.password == data.password) {
        const token = jwt.sign(
          { email: user.email, password: user.password },
          JWTSECRETKEY
        );
        return res.status(200).send({ token: token })
      } else {
        let err = new Error("Wrong email id or password !");
        err.statusCode = 401;
        throw err;
      }
    } else {
        let err = new Error("Wrong email id or password !");
        err.statusCode = 401;
        throw err;
    }
  } catch (err) {
    next(err);
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
