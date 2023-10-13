import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { AxiosInstance } from "../axiosInstance";

export const UserRoleModel = ({
  isOpen,
  setIsOpen,
  viewRole = true,
  userData,
}) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  const [isAllSelected, setIsAllSelected] = useState(false);

  const [permissionChecked, setPermissionChecked] = useState({
    userManagement: false,
    contentManagement: false,
    finManagement: false,
    reporting: false,
    payroll: false,
    role: false,
    admin: false,
  });

  const { register, reset } = useForm();

  const fetchRoleData = async () => {
    try {
      const { data } = await AxiosInstance.get("/roles/selectedRoleData", {
        params: {
          id: userData.roleId,
        },
      });
      checkAllSelected(data[0]);
      reset(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const checkAllSelected = (data) => {
    const isAllChecked = {
      userManagement: [],
      finManagement: [],
      payroll: [],
      reporting: [],
      contentManagement: [],
      role: [],
      isAllSelected: [],
    };
    if (Object.keys(data).length) {
      for (const checkbox in data.contentManagement) {
        isAllChecked.contentManagement.push(data.contentManagement[checkbox]);
        isAllChecked.isAllSelected.push(data.contentManagement[checkbox]);
      }
      for (const checkbox in data.finManagement) {
        isAllChecked.finManagement.push(data.finManagement[checkbox]);
        isAllChecked.isAllSelected.push(data.finManagement[checkbox]);
      }
      for (const checkbox in data.payRoll) {
        isAllChecked.payroll.push(data.payRoll[checkbox]);
        isAllChecked.isAllSelected.push(data.payRoll[checkbox]);
      }
      for (const checkbox in data.reporting) {
        isAllChecked.reporting.push(data.reporting[checkbox]);
        isAllChecked.isAllSelected.push(data.reporting[checkbox]);
      }
      for (const checkbox in data.userManagement) {
        isAllChecked.userManagement.push(data.userManagement[checkbox]);
        isAllChecked.isAllSelected.push(data.userManagement[checkbox]);
      }
      for (const checkbox in data.role) {
        isAllChecked.role.push(data.role[checkbox]);
        isAllChecked.isAllSelected.push(data.role[checkbox]);
      }
      if (isAllChecked.isAllSelected.includes(false)) setIsAllSelected(false);
      else setIsAllSelected(true);

      checkIfAllSelected(isAllChecked);
    }
  };

  const checkIfAllSelected = (isAllChecked) => {
    if (isAllChecked.contentManagement.includes(false)) {
      permissionChecked.contentManagement = false;
    } else {
      permissionChecked.contentManagement = true;
    }
    if (isAllChecked.userManagement.includes(false)) {
      permissionChecked.userManagement = false;
    } else {
      permissionChecked.userManagement = true;
    }
    if (isAllChecked.reporting.includes(false)) {
      permissionChecked.reporting = false;
    } else {
      permissionChecked.reporting = true;
    }
    if (isAllChecked.payroll.includes(false)) {
      permissionChecked.payroll = false;
    } else {
      permissionChecked.payroll = true;
    }
    if (isAllChecked.finManagement.includes(false)) {
      permissionChecked.finManagement = false;
    } else {
      permissionChecked.finManagement = true;
    }
    if (isAllChecked.role.includes(false)) {
      permissionChecked.role = false;
    } else {
      permissionChecked.role = true;
    }
    if (
      isAllChecked.role.includes(false) ||
      isAllChecked.userManagement.includes(false)
    ) {
      permissionChecked.admin = false;
    } else {
      permissionChecked.admin = true;
    }
    setPermissionChecked({ ...permissionChecked });
  };

  useEffect(() => {
    fetchRoleData();
  }, []);

  return (
    <div>
      <Modal
        className="modal-fullscreen"
        show={isOpen}
        onHide={handleClose}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="role-title">View User Role</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label className="d-flex mx-4 form-label">
              {" "}
              User Name : <p className="mx-3">{userData.userName}</p>
            </label>
            <label className="d-flex mx-4 form-label">
              Role Name : <p className="mx-3">{userData.roleName}</p>
            </label>
            <label className="d-flex mx-4 form-label">
              {" "}
              Status : <p className="mx-3">{userData.status}</p>
            </label>

            <div className="col-12">
              <h4>Role Permissions</h4>
              <div className="table-responsive">
                <table className="table table-flush-spacing">
                  <tbody>
                    <tr>
                      <td className="text-nowrap fw-medium">
                        Administrator Access{" "}
                        <i className="bx bx-info-circle bx-xs" />
                        {/* <ToggleButton
                          aria-label="Allows a full access to the system"
                          title="Allows a full access to the system"
                          className="bx bx-info-circle bx-xs"
                        /> */}
                      </td>
                      <td>
                        <div className="form-check ">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={isAllSelected}
                            disabled={viewRole}
                          />
                          <label className="form-check-label">Select All</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <tbody>
                        <tr>
                          <th>
                            <div className="form-check mx-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={permissionChecked.admin}
                                disabled={viewRole}
                              />
                              <td className="text-nowrap fw-medium">Admin</td>
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <div className="form-check mx-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={permissionChecked.userManagement}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">
                              User Management
                            </td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("userManagement.read")}
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("userManagement.write")}
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check  me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("userManagement.create")}
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Create
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("userManagement.delete")}
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className="form-check mx-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={permissionChecked.role}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">
                              Roles And Permission
                            </td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("role.read")}
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("role.write")}
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check  me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("role.create")}
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Create
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("role.delete")}
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </tr>
                    <tr>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={permissionChecked.contentManagement}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">
                          Content Management
                        </td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("contentManagement.read")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("contentManagement.write")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("contentManagement.create")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("contentManagement.delete")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Delete</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={permissionChecked.finManagement}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">
                          Financial Management
                        </td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("finManagement.read")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("finManagement.write")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("finManagement.create")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("finManagement.delete")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Delete</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={permissionChecked.reporting}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">Reporting</td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("reporting.read")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("reporting.write")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("reporting.create")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("reporting.delete")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Delete</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={permissionChecked.payroll}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">Payroll</td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("payRoll.read")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("payRoll.write")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("payRoll.create")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("payRoll.delete")}
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Delete</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Modal.Footer>
            <div className="row">
              <div className="col-12 text-center">
                {/* {!viewRole && (
                    <button
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1"
                    >
                      {roleId ? "Update" : "Submit"}
                    </button>
                  )} */}
                <button
                  type="reset"
                  className="btn btn-label-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};
