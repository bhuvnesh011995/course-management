/* eslint-disable default-case */
import { useEffect, useState } from "react";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { AddNewUserModal } from "./UserManagementModel";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { userTableHeaders } from "../../Constants/table.constants";
import { DeleteModel } from "../../common-components/models/DeleteModal";
import { EmailVerfificationModal } from "../../common-components/models/emailVerificationModal";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { toast } from "react-toastify";

export const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUserModal, setNewUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [viewUser, setViewUser] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userIndex, setUserIndex] = useState(null);
  const [emailModal, setEmailModal] = useState(false);
  const [loginUser, setLoginUser] = useState({});

  const showNewUserModal = (data, type, index) => {
    setUserIndex(index);
    if (type == "view") setViewUser(true);
    else if (type == "delete") {
      setDeleteUserModal(true);
    } else if (type == "verify") {
      setEmailModal(true);
    } else {
      setViewUser(false);
      setDeleteUserModal(false);
      setEmailModal(false);
    }
    if (data) setUserData(data);
    else setUserData(null);
    if (type != "delete" && type != "verify") setNewUserModal(true);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {
    try {
      const { data } = await AxiosInstance.get("/users/getUsers", {
        params: { token: localStorage.getItem("token") },
      });
      setUsers(data.users);
      setLoginUser(data.userData[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async () => {
    try {
      const { data } = await AxiosInstance.delete("/users/deleteUser", {
        params: userData,
      });
      toast.success("User Deleted")
      users.splice(userIndex, 1);
      setUsers([...users]);
    } catch (err) {
      toast.error("error occured")
      console.error(err);
    }
  };

  const updateUserData = (data) => {
    const foundUser = users.filter((e) => e._id == data._id);
    if (foundUser.length) {
      users[userIndex] = data;
      setUsers([...users]);
    } else {
      setUsers((old) => [...old, data]);
    }
  };

  const changeToDateData = ({ target }) => {
    switch (target.value) {
      case "Old":
        const oldestSorted = users.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        );
        setUsers([...oldestSorted]);
        break;
      case "New":
        const newSorted = users.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setUsers([...newSorted]);
        break;
      case "Rec":
        console.log("Recent");
        break;
    }
  };

  return (
    <div id="layout-wrapper">
      <CommonNavbar />
      <MenuBar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">User Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        User Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="row w-50">
                        <div className="col-xl-5">
                          <select
                            className="form-select"
                            onChange={changeToDateData}
                          >
                            <option value="New">Newest</option>
                            <option value="Old">Oldest</option>
                            <option value="Rec">Recent</option>
                          </select>
                        </div>
                      </div>
                      {loginUser?.roleData?.userManagement?.write && (
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => showNewUserModal()}
                        >
                          <i className="bx bx-plus me-1 fw-semibold align-middle" />
                          Add New User
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">User List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={users}
                        tableHeaders={userTableHeaders}
                        actionButtons
                        editButton={loginUser?.roleData?.userManagement?.create}
                        viewButton={loginUser?.roleData?.userManagement?.read}
                        deleteButton={
                          loginUser?.roleData?.userManagement?.delete
                        }
                        verificationMailButton
                        downloadExcel
                        downloadPdf
                        callback={(e, type, index) =>
                          showNewUserModal(e, type, index)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>

        <div
          className="modal fade"
          id="varify-user"
          tabIndex={-1}
          aria-labelledby="viewUserModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewUserModalLabel">
                  Send Verification Email
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="To : jhone@123"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject : Verify Email Address"
                    />
                  </div>
                  <div className="mb-3">
                    <form method="post">
                      <textarea
                        id="open-source-plugins"
                        defaultValue={
                          '                                <p>Congratulations! Your account has been successfully registered. Please confirm your email address by clicking the link below.</p>\n                                <p>We may need to send you critical information about our service, and it is important that we have an accurate email address.</p>\n                               \n                                <a href="#" style="font-family: \'Helvetica Neue\',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #fff; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #34c38f; margin: 0; border-color: #34c38f; border-style: solid; border-width: 8px 16px;">Confirm email address</a>\n                                <p><strong>Tonga</strong> <br>\n                                    Support Team\n                                </p>\n\n                                \n                            '
                        }
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success">
                  Send
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© Tonga.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by{" "}
                  <a href="https://braincavesoft.com" target="_blank">
                    Braincave Software Pvt.Ltd.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {newUserModal && (
        <AddNewUserModal
          isOpen={newUserModal}
          setIsOpen={setNewUserModal}
          userData={userData}
          callback={(e) => updateUserData(e)}
          viewUser={viewUser}
        />
      )}
      {deleteUserModal && (
        <DeleteModel
          isOpen={deleteUserModal}
          setIsOpen={setDeleteUserModal}
          message={`do you really want to delete ${userData.name} user.`}
          deleteHeader={"User"}
          callback={(e) => deleteUser(e)}
        />
      )}
      {emailModal && (
        <EmailVerfificationModal
          isOpen={emailModal}
          setIsOpen={setEmailModal}
          userData={userData}
        />
      )}
    </div>
  );
};
