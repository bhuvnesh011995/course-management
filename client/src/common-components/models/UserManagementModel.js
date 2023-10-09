import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  emailPattern,
  namePattern,
  passwordPattern,
  phonePattern,
} from "../validations";

export const AddNewUserModal = ({
  isOpen,
  setIsOpen,
  userData,
  callback,
  viewUser,
}) => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userData) setUserData();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const setUserData = () => {
    setValue("user", userData);
  };

  const addNewUser = async (userData) => {
    try {
      userData.user["name"] =
        userData.user["firstName"] + " " + userData.user["lastName"];
      const { data } = await axios.post(
        "http://localhost:5000/api/users/addNewUser",
        userData.user
      );
      callback(data);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const updateUser = async (userData) => {
    try {
      userData.user["name"] =
        userData.user["firstName"] + " " + userData.user["lastName"];
      const { data } = await axios.post(
        "http://localhost:5000/api/users/updateUser",
        userData.user
      );
      callback(userData.user);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {viewUser ? (
              <h5 className="modal-title" id="addUserModalLabel">
                View User
              </h5>
            ) : (
              <h5 className="modal-title" id="addUserModalLabel">
                {userData ? "Edit" : "Add"} User
              </h5>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(userData ? updateUser : addNewUser)}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter first name"
                  {...register("user.firstName", {
                    required: "First Name is required",
                    pattern: namePattern,
                  })}
                  disabled={viewUser}
                />
                <span className="text-danger">
                  {errors?.user?.firstName && errors?.user?.firstName.message}
                </span>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                  {...register("user.lastName", {
                    required: "Last Name is required",
                    pattern: namePattern,
                  })}
                  disabled={viewUser}
                />
                <span className="text-danger">
                  {errors?.user?.lastName && errors?.user?.lastName.message}
                </span>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="userEmail" className="form-label">
                  Email
                </label>
                <input
                  className="form-control"
                  placeholder="Enter email"
                  {...register("user.email", {
                    required: "Email is Required",
                    pattern: emailPattern,
                    validate: (fieldValue) => {
                      return (
                        fieldValue !== "admin@admin.admin" ||
                        "enter different email address"
                      );
                    },
                  })}
                  disabled={viewUser}
                />
                <span className="text-danger">
                  {errors?.user?.email && errors?.user?.email?.message}
                </span>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="userContact" className="form-label">
                  Mobile
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Mobile"
                  {...register("user.mobile", {
                    required: true,
                    pattern: phonePattern,
                  })}
                  disabled={viewUser}
                />
                {errors?.user?.mobile && (
                  <span className="text-danger">
                    {errors?.user?.mobile?.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="userUsername" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  {...register("user.userName", {
                    required: "User Name is required",
                    pattern: namePattern,
                  })}
                  disabled={viewUser}
                />
                <span className="text-danger">
                  {errors?.user?.userName && errors?.user?.userName.message}
                </span>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="userPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  {...register("user.password", {
                    required: "Password is required",
                    pattern: passwordPattern,
                    minLength: {
                      value: 8,
                      message: "password must be greater than 8 characters",
                    },
                  })}
                  disabled={viewUser}
                />
                <span className="text-danger">
                  {errors?.user?.password && errors?.user?.password.message}
                </span>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">User Roles</label>
                <select
                  className="form-select"
                  {...register("user.userRole")}
                  disabled={viewUser}
                >
                  <option value={""} selected>
                    -- select --
                  </option>
                  <option value={"Admin"}>Admin</option>
                  <option value={"Sub-Admin"}>Sub-Admin</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  {...register("user.status")}
                  disabled={viewUser}
                >
                  <option value={""} selected>
                    -- select --
                  </option>
                  <option value={"Active"}>Active</option>
                </select>
              </div>
            </div>
            <Modal.Footer>
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
              {!viewUser && (
                <button type="submit" className="btn btn-primary">
                  {userData ? "Update" : "Add User"}
                </button>
              )}
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};