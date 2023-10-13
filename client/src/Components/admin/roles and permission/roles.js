import { useEffect, useState } from "react";
import { MenuBar } from "../../../common-components/MenuBar";
import { CommonNavbar } from "../../../common-components/Navbar";
import { Modal, ToggleButton } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AddNewRoleModel } from "../../../common-components/models/RoleManagementModels";
import { RoleListContants } from "../../../Constants/table.constants";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { rolesTableHeaders } from "../../../Constants/table.constants";
import { UserRoleModel } from "../../../common-components/models/UserRoleModel";
import { AxiosInstance } from "../../../common-components/axiosInstance";

//     <title>Role Management | Tonga</title>

export const Roles = () => {
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const [roles, setRoles] = useState([]);
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [roleId, setRoleId] = useState(null);
  const [viewRole, setViewRole] = useState(false);
  const [userRoles, setUserRoles] = useState([]);
  const [userRoleModelOpen, setUserRoleModelOpen] = useState(false);
  const [userRoleData, setUserRoleData] = useState(null);
  const [loginUser, setLoginUser] = useState({});

  useEffect(() => {
    getUserRoleInfo();
    getRoleData();
  }, []);

  const showRoleModal = (id, type) => {
    if (id) {
      setRoleId(id);
    } else if (!id) {
      setRoleId(null);
    }
    if (type == "viewRole") {
      setViewRole(true);
    } else {
      setViewRole(false);
    }
    setRoleModalOpen(true);
  };

  const updateRoleData = (newData) => {
    const inRole = roles.filter((old) => old._id == newData._id);
    if (inRole.length) {
      roles.map((e, index) => {
        if (e._id == inRole[0]._id) {
          roles[index] = newData;
          return;
        }
      });
    } else {
      roles.push(newData);
      setRoles([...roles]);
    }
  };

  const getRoleData = async () => {
    try {
      const { data } = await AxiosInstance.get("/roles/getRoles", {
        params: { token: localStorage.getItem("token") },
      });
      setRoles(data.roleData);
      setFilteredRoles(data.roleData);
      setLoginUser(data.user[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const getUserRoleInfo = async () => {
    try {
      const { data } = await AxiosInstance.get("/roles/getUserRoleInfo");
      setUserRoles(data);
    } catch (err) {
      console.error(err);
    }
  };

  const showUserRoleModel = (data, type) => {
    setUserRoleModelOpen(true);
    setUserRoleData(data);
  };

  const setSearchRoles = ({ target }) => {
    const newRoles = roles.filter((e) =>
      e.roleName.toLowerCase().includes(target.value.toLowerCase())
    );

    setFilteredRoles(newRoles);
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
                  <h4 className="mb-sm-0 font-size-18">Role Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Role Management
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
                        <div className="col-xl-7">
                          <div className="d-flex" role="search">
                            <input
                              className="form-control me-2"
                              type="search"
                              placeholder="Search"
                              onChange={setSearchRoles}
                            />{" "}
                            <button className="btn btn-light" type="submit">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                      {loginUser?.roleData?.role?.create && (
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => showRoleModal()}
                        >
                          <i className="bx bx-plus me-1 fw-semibold align-middle" />
                          Add New Role
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {filteredRoles?.length > 0 ? (
                filteredRoles.map((e) => (
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="fw-normal">
                            Total {e.totalUsers} users
                          </h6>
                          <div className="avatar-group">
                            {/* {e.avatarImages.map((e) => (
                            <div className="avatar-group-item">
                              <a className="d-inline-block" value="member-6">
                                <img
                                  src={e}
                                  className="rounded-circle avatar-xs"
                                />
                              </a>
                            </div>
                          ))} */}
                            <div className="avatar-group-item">
                              <a className="d-inline-block">
                                <div className="avatar-xs">
                                  <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                    3+
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-end">
                          <div className="role-heading">
                            <h4
                              onClick={() => showRoleModal(e._id, "viewRole")}
                              className="mb-2 text-primary fw-bold cursor-pointer"
                            >
                              <a>{e.roleName}</a>
                            </h4>
                            {loginUser?.roleData?.role?.write && (
                              <button
                                onClick={() => showRoleModal(e._id)}
                                className="btn btn-sm btn-primary role-edit-modal"
                              >
                                <small>Edit Role</small>
                              </button>
                            )}
                          </div>
                          <a className="text-muted cursor-pointer">
                            <i className="bx bx-copy fs-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-data-found">No Data Found</div>
              )}

              <div className="col-12">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Roles List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={userRoles}
                        tableHeaders={rolesTableHeaders}
                        actionButtons
                        viewButton={loginUser?.roleData?.role?.read}
                        downloadExcel
                        downloadPdf
                        callback={(e, type) => showUserRoleModel(e, type)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
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
      {/* end main content*/}
      {roleModalOpen && (
        <AddNewRoleModel
          isOpen={roleModalOpen}
          setIsOpen={setRoleModalOpen}
          roleId={roleId}
          viewRole={viewRole}
          callback={(e) => updateRoleData(e)}
        />
      )}
      {userRoleModelOpen && (
        <UserRoleModel
          isOpen={userRoleModelOpen}
          setIsOpen={setUserRoleModelOpen}
          userData={userRoleData}
        />
      )}
    </div>
  );
};
