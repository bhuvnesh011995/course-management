import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import moment from "moment";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  emailPattern,
  namePattern,
  phonePattern,
} from "../common-components/validations";

export const Profile = () => {
  // const {
  //   handleSubmit,
  //   register,
  //   watch,
  //   reset,
  //   formState: { errors },
  // } = useForm();

  // const [profileModal, setProfileModal] = useState(false);
  const { user, NewAxiosInstance } = useAuth();

  // const updateLoginUser = async (data) => {
  //   const updateUser = await NewAxiosInstance.post("/users/updateUser", data);
  //   console.log(updateUser);
  // };

  return (
    <div id='layout-wrapper'>
      <div className='main-content'>
        <div className='page-content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
                  <h4 className='mb-sm-0 font-size-18'>Profile Management</h4>
                  <div className='page-title-right'>
                    <ol className='breadcrumb m-0'>
                      <li className='breadcrumb-item'>
                        <a href='index.html'>Dashboard</a>
                      </li>
                      <li className='breadcrumb-item active'>
                        Profile Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className='row g-4'>
              <div className='col-md-12'>
                <div className='card '>
                  <div className='card-header justify-content-between'>
                    <div className='card-title'>Profile List </div>
                  </div>
                  <div className='card-body'>
                    <div className='table-responsive'>
                      <table
                        id='datatable-buttons'
                        className='table table-bordered dt-responsive nowrap w-100'
                      >
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            {/* <th>Date of Birth</th> */}
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Gender</th>
                            <th>Role</th>
                            {/* <th>Actions</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td style={{ cursor: "pointer" }}>
                              {user.userData?.name}
                            </td>
                            {/* <td>
                              {user.userData?.DOB &&
                                moment(user.userData?.DOB).format("YYYY-MM-DD")}
                            </td> */}
                            <td>{user.userData?.email}</td>
                            <td>
                              {user.userData?.phoneNo && user.userData?.phoneNo}
                            </td>
                            <td>
                              {user.userData?.gender && user.userData?.gender}
                            </td>
                            <td>
                              {user.userData?.roleData?.roleName &&
                                user.userData?.roleData?.roleName}
                            </td>
                            {/* <td>
                              <p
                                onClick={() => setProfileModal(true)}
                                className='btn btn-icon btn-sm btn-primary rounded-pill'
                              >
                                <i className='mdi mdi-pencil' />
                              </p>
                            </td> */}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      {/* <Modal show={profileModal} onHide={() => setProfileModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(updateLoginUser)}>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>User Name</label>
                <input
                  type='text'
                  className='form-control'
                  {...register("userName", { pattern: namePattern })}
                />
                {errors.userName && (
                  <span className='text-danger'>
                    {errors.userName?.message}
                  </span>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>Contact</label>
                <input
                  type='text'
                  className='form-control'
                  {...register("phoneNo", { pattern: phonePattern })}
                />
                {errors.phoneNo && (
                  <span className='text-danger'>{errors.phoneNo?.message}</span>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>Date Of Birth</label>
                <div className='input-group'>
                  <input
                    type='date'
                    className='form-control'
                    placeholder='dd M, yyyy'
                    {...register("DOB")}
                  />
                </div>
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>
                  Gender <span className='text-danger'>*</span>
                </label>
                <select className='form-select' {...register("gender")}>
                  <option key={""} value=''>
                    Select gender
                  </option>
                  <option key={"Male"} value='Male'>
                    Male
                  </option>
                  <option key={"Female"} value='Female'>
                    Female
                  </option>
                  <option key={"Other"} value='Other'>
                    Other
                  </option>
                </select>
              </div>
            </div>

            <div className='modal-footer'>
              <button
                type='button'
                onClick={() => setProfileModal(false)}
                className='btn btn-secondary'
              >
                Cancel
              </button>
              <button type='submit' className='btn btn-primary'>
                Update
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal> */}
    </div>
  );
};
