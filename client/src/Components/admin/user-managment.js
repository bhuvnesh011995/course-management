import { useEffect, useState } from "react";
import { AddNewUserModal } from "./UserManagementModel";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { userTableHeaders } from "../../Constants/table.constants";
import { DeleteModel } from "../../common-components/models/DeleteModal";
import { EmailVerfificationModal } from "../../common-components/models/emailVerificationModal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { BASEURL } from "../../config/config";

export const UserManagement = () => {
  const { user, NewAxiosInstance } = useAuth();
  const [users, setUsers] = useState([]);
  const [newUserModal, setNewUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [viewUser, setViewUser] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userIndex, setUserIndex] = useState(null);
  const [emailModal, setEmailModal] = useState(false);

  const showNewUserModal = (data, type, index) => {
    setUserIndex(index);
    if (type == "view") setViewUser(true);
    else if (type == "delete") {
      setDeleteUserModal(true);
    } else if (type == "sendMail") {
      setEmailModal(true);
    } else {
      setViewUser(false);
      setDeleteUserModal(false);
      setEmailModal(false);
    }
    if (data) setUserData(data);
    else setUserData(null);
    if (type != "delete" && type != "sendMail") setNewUserModal(true);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/users/getUsers", {
        params: { token: localStorage.getItem("token") },
      });
      console.log(data);
      setUsers(data.users);
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const deleteUser = async () => {
    try {
      toast.dismiss();
      const { data } = await NewAxiosInstance.delete("/users/deleteUser", {
        params: userData,
      });
      toast.success("User Deleted");
      users.splice(userIndex, 1);
      setUsers([...users]);
    } catch (err) {
      toast.error("error occured");
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
          (a, b) => new Date(a.created_at) - new Date(b.created_at),
        );
        setUsers([...oldestSorted]);
        break;
      case "New":
        const newSorted = users.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at),
        );
        setUsers([...newSorted]);
        break;
    }
  };

  return (
    <div id='layout-wrapper'>
      <div className='main-content'>
        <div className='page-content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
                  <h4 className='mb-sm-0 font-size-18'>User Management</h4>
                  <div className='page-title-right'>
                    <ol className='breadcrumb m-0'>
                      <li className='breadcrumb-item'>
                        <Link to='/'>Dashboard</Link>
                      </li>
                      <li className='breadcrumb-item active'>
                        User Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='card'>
                  <div className='card-body p-3'>
                    <div className='d-flex align-items-center justify-content-between flex-wrap gap-3'>
                      <div className='row w-50'></div>
                      <button
                        className='btn btn-primary me-2'
                        onClick={() => showNewUserModal()}
                      >
                        <i className='bx bx-plus me-1 fw-semibold align-middle' />
                        Add New User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row g-4'>
              <div className='col-md-12'>
                <div className='card '>
                  <div className='card-header justify-content-between'>
                    <div className='card-title'>User List </div>
                  </div>
                  <div className='card-body'>
                    <div className='table-responsive'>
                      <CommonDataTable
                        data={users}
                        tableHeaders={userTableHeaders}
                        actionButtons
                        editButton={
                          user.userData?.roleData?.userManagement?.write
                        }
                        viewButton
                        deleteButton={
                          user.userData?.roleData?.userManagement?.delete
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
          mailHeader={"Verification"}
          userData={{ email: userData.email, subject: "Verify Your Account" }}
          mailText={`
      <p >Congratulations! Your account has been successfully registered. Please confirm your email address by clicking the link below.</p>\n
      <p>We may need to send you critical information about our service, and it is important that we have an accurate email address.</p>\n    \n
      <a href=${BASEURL} class="verification-btn">Confirm email address</a><br>\n
      <p><strong>Tonga</strong> <br>\n
      Support Team\n
      </p>\n\n \n
    `}
        />
      )}
    </div>
  );
};
