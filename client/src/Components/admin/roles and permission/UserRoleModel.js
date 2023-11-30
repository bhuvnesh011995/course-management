import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";

export const UserRoleModel = ({
  isOpen,
  setIsOpen,
  viewRole = true,
  userData,
}) => {
  const { NewAxiosInstance } = useAuth();
  const handleClose = () => {
    setIsOpen(false);
  };

  const [isAllSelected, setIsAllSelected] = useState(false);

  const checkArray = [
    "employeeManagement",
    "trainer",
    "finManagement",
    "payroll",
    "leaveManagement",
    "userManagement",
    "lead",
    "holiday",
    "registrationType",
    "tradeLevel",
    "courses",
    "class",
    "certificateGeneration",
    "tradeType",
    "customer",
    "timesheet",
    "role",
  ];

  const [permissionChecked, setPermissionChecked] = useState({
    lead: false,
    holiday: false,
    registrationType: false,
    tradeLevel: false,
    tradeType: false,
    courses: false,
    class: false,
    certificateGeneration: false,
    userManagement: false,
    employeeManagement: false,
    finManagement: false,
    leaveManagement: false,
    payroll: false,
    role: false,
    admin: false,
    HRMS: false,
    schedule: false,
    courseManagement: false,
    timesheet: false,
    customer: false,
    trainer: false,
  });

  const { register, reset, watch, setValue, getValues } = useForm();

  const checkAllSelected = (data) => {
    const isAllChecked = {
      lead: [],
      holiday: [],
      registrationType: [],
      tradeLevel: [],
      courses: [],
      class: [],
      certificateGeneration: [],
      tradeType: [],
      customer: [],
      timesheet: [],
      trainer: [],
      userManagement: [],
      finManagement: [],
      payroll: [],
      leaveManagement: [],
      employeeManagement: [],
      role: [],
      isAllSelected: [],
    };
    if (Object.keys(data).length) {
      checkArray.map((type) => {
        for (const checkbox in data[type]) {
          isAllChecked[type].push(data[type][checkbox]);
          isAllChecked.isAllSelected.push(data[type][checkbox]);
        }
      });

      for (const checkbox in data.trainer) {
        isAllChecked.trainer.push(data.trainer[checkbox]);
        isAllChecked.isAllSelected.push(data.trainer[checkbox]);
      }
      if (isAllChecked.isAllSelected.includes(false)) setIsAllSelected(false);
      else setIsAllSelected(true);

      checkIfAllSelected(isAllChecked);
    }
  };

  const checkIfAllSelected = (isAllChecked) => {
    checkArray.map((type) => {
      if (isAllChecked[type].includes(false)) {
        permissionChecked[type] = false;
      } else {
        permissionChecked[type] = true;
      }
    });
    if (
      isAllChecked.role.includes(false) ||
      isAllChecked.userManagement.includes(false)
    ) {
      permissionChecked.admin = false;
    } else {
      permissionChecked.admin = true;
    }
    if (
      isAllChecked.timesheet.includes(false) ||
      isAllChecked.payroll.includes(false) ||
      isAllChecked.leaveManagement.includes(false) ||
      isAllChecked.employeeManagement.includes(false)
    ) {
      permissionChecked.HRMS = false;
    } else {
      permissionChecked.HRMS = true;
    }

    if (
      isAllChecked.registrationType.includes(false) ||
      isAllChecked.tradeLevel.includes(false) ||
      isAllChecked.tradeType.includes(false) ||
      isAllChecked.courses.includes(false) ||
      isAllChecked.class.includes(false) ||
      isAllChecked.certificateGeneration.includes(false)
    ) {
      permissionChecked.courseManagement = false;
    } else {
      permissionChecked.courseManagement = true;
    }

    if (
      isAllChecked.trainer.includes(false) ||
      isAllChecked.holiday.includes(false)
    ) {
      permissionChecked.schedule = false;
    } else {
      permissionChecked.schedule = true;
    }

    setPermissionChecked({ ...permissionChecked });
  };

  useEffect(() => {
    fetchRoleData();
  }, []);

  const fetchRoleData = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/roles/selectedRoleData", {
        params: {
          id: userData.roleId,
        },
      });
      checkAllSelected(data[0]);
      reset(data[0]);
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const onPermissionChange = (permission) => {
    setValue(permission, !getValues(permission));
    checkAllSelected();
  };

  const selectAll = (isChecked) => {
    checkArray.map((type) => selectAllTypes(type, isChecked));
    setIsAllSelected(isChecked);
    setPermissionChecked({
      lead: isChecked,
      holiday: isChecked,
      registrationType: isChecked,
      tradeLevel: isChecked,
      courses: isChecked,
      class: isChecked,
      certificateGeneration: isChecked,
      tradeType: isChecked,
      trainer: isChecked,
      customer: isChecked,
      timesheet: isChecked,
      userManagement: isChecked,
      employeeManagement: isChecked,
      HRMS: isChecked,
      courseManagement: isChecked,
      schedule: isChecked,
      finManagement: isChecked,
      leaveManagement: isChecked,
      payroll: isChecked,
      role: isChecked,
      admin: isChecked,
    });
  };

  const selectAllTypes = (type, isChecked) => {
    setValue(`${type}.read`, isChecked);
    setValue(`${type}.write`, isChecked);
    setValue(`${type}.create`, isChecked);
    setValue(`${type}.delete`, isChecked);
    permissionChecked[type] = isChecked;
    setPermissionChecked(permissionChecked);
  };

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
              <div style={{ height: "400px" }} className="table-responsive">
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
                            onChange={({ target }) => selectAll(target.checked)}
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
                              onChange={() =>
                                onPermissionChange("userManagement.selectAll")
                              }
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
                                  onChange={() =>
                                    onPermissionChange("userManagement.read")
                                  }
                                  checked={
                                    permissionChecked.userManagement
                                      ? permissionChecked.userManagement
                                      : watch("userManagement.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("userManagement.write")}
                                  onChange={() =>
                                    onPermissionChange("userManagement.write")
                                  }
                                  checked={
                                    permissionChecked.userManagement
                                      ? permissionChecked.userManagement
                                      : watch("userManagement.write")
                                  }
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
                                  onChange={() =>
                                    onPermissionChange("userManagement.create")
                                  }
                                  checked={
                                    permissionChecked.userManagement
                                      ? permissionChecked.userManagement
                                      : watch("userManagement.create")
                                  }
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
                                  onChange={() =>
                                    onPermissionChange("userManagement.delete")
                                  }
                                  checked={
                                    permissionChecked.userManagement
                                      ? permissionChecked.userManagement
                                      : watch("userManagement.delete")
                                  }
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
                              onChange={() =>
                                onPermissionChange("role.selectAll")
                              }
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
                                  onChange={() =>
                                    onPermissionChange("role.read")
                                  }
                                  checked={
                                    permissionChecked.role
                                      ? permissionChecked.role
                                      : watch("role.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("role.write")}
                                  onChange={() =>
                                    onPermissionChange("role.write")
                                  }
                                  checked={
                                    permissionChecked.role
                                      ? permissionChecked.role
                                      : watch("role.write")
                                  }
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
                                  onChange={() =>
                                    onPermissionChange("role.create")
                                  }
                                  checked={
                                    permissionChecked.role
                                      ? permissionChecked.role
                                      : watch("role.create")
                                  }
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
                                  onChange={() =>
                                    onPermissionChange("role.delete")
                                  }
                                  checked={
                                    permissionChecked.role
                                      ? permissionChecked.role
                                      : watch("role.delete")
                                  }
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
                      <tbody>
                        <tr>
                          <th>
                            <div className="form-check mx-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={permissionChecked.HRMS}
                                disabled={viewRole}
                              />
                              <td className="text-nowrap fw-medium">HRMS</td>
                            </div>
                          </th>
                        </tr>

                        <tr>
                          <div className="form-check mx-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={() =>
                                onPermissionChange(
                                  "employeeManagement.selectAll"
                                )
                              }
                              checked={permissionChecked.employeeManagement}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">
                              employee Management
                            </td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("employeeManagement.read")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "employeeManagement.read"
                                    )
                                  }
                                  checked={
                                    permissionChecked.employeeManagement
                                      ? permissionChecked.employeeManagement
                                      : watch("employeeManagement.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("employeeManagement.write")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "employeeManagement.write"
                                    )
                                  }
                                  checked={
                                    permissionChecked.employeeManagement
                                      ? permissionChecked.employeeManagement
                                      : watch("employeeManagement.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("employeeManagement.create")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "employeeManagement.create"
                                    )
                                  }
                                  checked={
                                    permissionChecked.employeeManagement
                                      ? permissionChecked.employeeManagement
                                      : watch("employeeManagement.create")
                                  }
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
                                  {...register("employeeManagement.delete")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "employeeManagement.delete"
                                    )
                                  }
                                  checked={
                                    permissionChecked.employeeManagement
                                      ? permissionChecked.employeeManagement
                                      : watch("employeeManagement.delete")
                                  }
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
                              onChange={() =>
                                onPermissionChange("leaveManagement.selectAll")
                              }
                              checked={permissionChecked.leaveManagement}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">
                              leaveManagement
                            </td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("leaveManagement.read")}
                                  onChange={() =>
                                    onPermissionChange("leaveManagement.read")
                                  }
                                  checked={
                                    permissionChecked.leaveManagement
                                      ? permissionChecked.leaveManagement
                                      : watch("leaveManagement.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("leaveManagement.write")}
                                  onChange={() =>
                                    onPermissionChange("leaveManagement.write")
                                  }
                                  checked={
                                    permissionChecked.leaveManagement
                                      ? permissionChecked.leaveManagement
                                      : watch("leaveManagement.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("leaveManagement.create")}
                                  onChange={() =>
                                    onPermissionChange("leaveManagement.create")
                                  }
                                  checked={
                                    permissionChecked.leaveManagement
                                      ? permissionChecked.leaveManagement
                                      : watch("leaveManagement.create")
                                  }
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
                                  {...register("leaveManagement.delete")}
                                  onChange={() =>
                                    onPermissionChange("leaveManagement.delete")
                                  }
                                  checked={
                                    permissionChecked.leaveManagement
                                      ? permissionChecked.leaveManagement
                                      : watch("leaveManagement.delete")
                                  }
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
                              onChange={() =>
                                onPermissionChange("payroll.selectAll")
                              }
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
                                  {...register("payroll.read")}
                                  onChange={() =>
                                    onPermissionChange("payroll.read")
                                  }
                                  checked={
                                    permissionChecked.payroll
                                      ? permissionChecked.payroll
                                      : watch("payroll.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("payroll.write")}
                                  onChange={() =>
                                    onPermissionChange("payroll.write")
                                  }
                                  checked={
                                    permissionChecked.payroll
                                      ? permissionChecked.payroll
                                      : watch("payroll.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("payroll.create")}
                                  onChange={() =>
                                    onPermissionChange("payroll.create")
                                  }
                                  checked={
                                    permissionChecked.payroll
                                      ? permissionChecked.payroll
                                      : watch("payroll.create")
                                  }
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
                                  {...register("payroll.delete")}
                                  onChange={() =>
                                    onPermissionChange("payroll.delete")
                                  }
                                  checked={
                                    permissionChecked.payroll
                                      ? permissionChecked.payroll
                                      : watch("payroll.delete")
                                  }
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
                              onChange={() =>
                                onPermissionChange("timesheet.selectAll")
                              }
                              checked={permissionChecked.timesheet}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">Timesheet</td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("timesheet.read")}
                                  onChange={() =>
                                    onPermissionChange("timesheet.read")
                                  }
                                  checked={
                                    permissionChecked.timesheet
                                      ? permissionChecked.timesheet
                                      : watch("timesheet.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("timesheet.write")}
                                  onChange={() =>
                                    onPermissionChange("timesheet.write")
                                  }
                                  checked={
                                    permissionChecked.timesheet
                                      ? permissionChecked.timesheet
                                      : watch("timesheet.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("timesheet.create")}
                                  onChange={() =>
                                    onPermissionChange("timesheet.create")
                                  }
                                  checked={
                                    permissionChecked.timesheet
                                      ? permissionChecked.timesheet
                                      : watch("timesheet.create")
                                  }
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
                                  {...register("timesheet.delete")}
                                  onChange={() =>
                                    onPermissionChange("timesheet.delete")
                                  }
                                  checked={
                                    permissionChecked.timesheet
                                      ? permissionChecked.timesheet
                                      : watch("timesheet.delete")
                                  }
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
                      <tbody>
                        <tr>
                          <th>
                            <div className="form-check mx-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={permissionChecked.schedule}
                                disabled={viewRole}
                              />
                              <td className="text-nowrap fw-medium">
                                Schedule
                              </td>
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <div className="form-check mx-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={() =>
                                onPermissionChange("trainer.selectAll")
                              }
                              checked={permissionChecked.trainer}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">Trainer</td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("trainer.read")}
                                  onChange={() =>
                                    onPermissionChange("trainer.read")
                                  }
                                  checked={
                                    permissionChecked.trainer
                                      ? permissionChecked.trainer
                                      : watch("trainer.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("trainer.write")}
                                  onChange={() =>
                                    onPermissionChange("trainer.write")
                                  }
                                  checked={
                                    permissionChecked.trainer
                                      ? permissionChecked.trainer
                                      : watch("trainer.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("trainer.create")}
                                  onChange={() =>
                                    onPermissionChange("trainer.create")
                                  }
                                  checked={
                                    permissionChecked.trainer
                                      ? permissionChecked.trainer
                                      : watch("trainer.create")
                                  }
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
                                  {...register("trainer.delete")}
                                  onChange={() =>
                                    onPermissionChange("trainer.delete")
                                  }
                                  checked={
                                    permissionChecked.trainer
                                      ? permissionChecked.trainer
                                      : watch("trainer.delete")
                                  }
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
                              onChange={() =>
                                onPermissionChange("holiday.selectAll")
                              }
                              checked={permissionChecked.holiday}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">Holiday</td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("holiday.read")}
                                  onChange={() =>
                                    onPermissionChange("holiday.read")
                                  }
                                  checked={
                                    permissionChecked.holiday
                                      ? permissionChecked.holiday
                                      : watch("holiday.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("holiday.write")}
                                  onChange={() =>
                                    onPermissionChange("holiday.write")
                                  }
                                  checked={
                                    permissionChecked.holiday
                                      ? permissionChecked.holiday
                                      : watch("holiday.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("holiday.create")}
                                  onChange={() =>
                                    onPermissionChange("holiday.create")
                                  }
                                  checked={
                                    permissionChecked.holiday
                                      ? permissionChecked.holiday
                                      : watch("holiday.create")
                                  }
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
                                  {...register("holiday.delete")}
                                  onChange={() =>
                                    onPermissionChange("holiday.delete")
                                  }
                                  checked={
                                    permissionChecked.holiday
                                      ? permissionChecked.holiday
                                      : watch("holiday.delete")
                                  }
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
                      <tbody>
                        <tr>
                          <th>
                            <div className="form-check mx-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={permissionChecked.courseManagement}
                                disabled={viewRole}
                              />
                              <td className="text-nowrap fw-medium">
                                Course Management
                              </td>
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <div className="form-check mx-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={() =>
                                onPermissionChange("registrationType.selectAll")
                              }
                              checked={permissionChecked.registrationType}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">
                              Registration Type
                            </td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("registrationType.read")}
                                  onChange={() =>
                                    onPermissionChange("registrationType.read")
                                  }
                                  checked={
                                    permissionChecked.registrationType
                                      ? permissionChecked.registrationType
                                      : watch("registrationType.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("registrationType.write")}
                                  onChange={() =>
                                    onPermissionChange("registrationType.write")
                                  }
                                  checked={
                                    permissionChecked.registrationType
                                      ? permissionChecked.registrationType
                                      : watch("registrationType.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("registrationType.create")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "registrationType.create"
                                    )
                                  }
                                  checked={
                                    permissionChecked.registrationType
                                      ? permissionChecked.registrationType
                                      : watch("registrationType.create")
                                  }
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
                                  {...register("registrationType.delete")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "registrationType.delete"
                                    )
                                  }
                                  checked={
                                    permissionChecked.registrationType
                                      ? permissionChecked.registrationType
                                      : watch("registrationType.delete")
                                  }
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
                              onChange={() =>
                                onPermissionChange("tradeLevel.selectAll")
                              }
                              checked={permissionChecked.tradeLevel}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">
                              Trade Level
                            </td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("tradeLevel.read")}
                                  onChange={() =>
                                    onPermissionChange("tradeLevel.read")
                                  }
                                  checked={
                                    permissionChecked.tradeLevel
                                      ? permissionChecked.tradeLevel
                                      : watch("tradeLevel.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("tradeLevel.write")}
                                  onChange={() =>
                                    onPermissionChange("tradeLevel.write")
                                  }
                                  checked={
                                    permissionChecked.tradeLevel
                                      ? permissionChecked.tradeLevel
                                      : watch("tradeLevel.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("tradeLevel.create")}
                                  onChange={() =>
                                    onPermissionChange("tradeLevel.create")
                                  }
                                  checked={
                                    permissionChecked.tradeLevel
                                      ? permissionChecked.tradeLevel
                                      : watch("tradeLevel.create")
                                  }
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
                                  {...register("tradeLevel.delete")}
                                  onChange={() =>
                                    onPermissionChange("tradeLevel.delete")
                                  }
                                  checked={
                                    permissionChecked.tradeLevel
                                      ? permissionChecked.tradeLevel
                                      : watch("tradeLevel.delete")
                                  }
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
                              onChange={() =>
                                onPermissionChange("tradeType.selectAll")
                              }
                              checked={permissionChecked.tradeType}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">
                              Trade Type
                            </td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("tradeType.read")}
                                  onChange={() =>
                                    onPermissionChange("tradeType.read")
                                  }
                                  checked={
                                    permissionChecked.tradeType
                                      ? permissionChecked.tradeType
                                      : watch("tradeType.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("tradeType.write")}
                                  onChange={() =>
                                    onPermissionChange("tradeType.write")
                                  }
                                  checked={
                                    permissionChecked.tradeType
                                      ? permissionChecked.tradeType
                                      : watch("tradeType.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("tradeType.create")}
                                  onChange={() =>
                                    onPermissionChange("tradeType.create")
                                  }
                                  checked={
                                    permissionChecked.tradeType
                                      ? permissionChecked.tradeType
                                      : watch("tradeType.create")
                                  }
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
                                  {...register("tradeType.delete")}
                                  onChange={() =>
                                    onPermissionChange("tradeType.delete")
                                  }
                                  checked={
                                    permissionChecked.tradeType
                                      ? permissionChecked.tradeType
                                      : watch("tradeType.delete")
                                  }
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
                              onChange={() =>
                                onPermissionChange("courses.selectAll")
                              }
                              checked={permissionChecked.courses}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">Course</td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("courses.read")}
                                  onChange={() =>
                                    onPermissionChange("courses.read")
                                  }
                                  checked={
                                    permissionChecked.courses
                                      ? permissionChecked.courses
                                      : watch("courses.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("courses.write")}
                                  onChange={() =>
                                    onPermissionChange("courses.write")
                                  }
                                  checked={
                                    permissionChecked.courses
                                      ? permissionChecked.courses
                                      : watch("courses.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("courses.create")}
                                  onChange={() =>
                                    onPermissionChange("courses.create")
                                  }
                                  checked={
                                    permissionChecked.courses
                                      ? permissionChecked.courses
                                      : watch("courses.create")
                                  }
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
                                  {...register("courses.delete")}
                                  onChange={() =>
                                    onPermissionChange("courses.delete")
                                  }
                                  checked={
                                    permissionChecked.courses
                                      ? permissionChecked.courses
                                      : watch("courses.delete")
                                  }
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
                              onChange={() =>
                                onPermissionChange("class.selectAll")
                              }
                              checked={permissionChecked.class}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">Class</td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("class.read")}
                                  onChange={() =>
                                    onPermissionChange("class.read")
                                  }
                                  checked={
                                    permissionChecked.class
                                      ? permissionChecked.class
                                      : watch("class.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("class.write")}
                                  onChange={() =>
                                    onPermissionChange("class.write")
                                  }
                                  checked={
                                    permissionChecked.class
                                      ? permissionChecked.class
                                      : watch("class.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("class.create")}
                                  onChange={() =>
                                    onPermissionChange("class.create")
                                  }
                                  checked={
                                    permissionChecked.class
                                      ? permissionChecked.class
                                      : watch("class.create")
                                  }
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
                                  {...register("class.delete")}
                                  onChange={() =>
                                    onPermissionChange("class.delete")
                                  }
                                  checked={
                                    permissionChecked.class
                                      ? permissionChecked.class
                                      : watch("class.delete")
                                  }
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
                              onChange={() =>
                                onPermissionChange(
                                  "certificateGeneration.selectAll"
                                )
                              }
                              checked={permissionChecked.certificateGeneration}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">
                              Certificate Generation
                            </td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("certificateGeneration.read")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "certificateGeneration.read"
                                    )
                                  }
                                  checked={
                                    permissionChecked.certificateGeneration
                                      ? permissionChecked.certificateGeneration
                                      : watch("certificateGeneration.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("certificateGeneration.write")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "certificateGeneration.write"
                                    )
                                  }
                                  checked={
                                    permissionChecked.certificateGeneration
                                      ? permissionChecked.certificateGeneration
                                      : watch("certificateGeneration.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("certificateGeneration.create")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "certificateGeneration.create"
                                    )
                                  }
                                  checked={
                                    permissionChecked.certificateGeneration
                                      ? permissionChecked.certificateGeneration
                                      : watch("certificateGeneration.create")
                                  }
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
                                  {...register("certificateGeneration.delete")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "certificateGeneration.delete"
                                    )
                                  }
                                  checked={
                                    permissionChecked.certificateGeneration
                                      ? permissionChecked.certificateGeneration
                                      : watch("certificateGeneration.delete")
                                  }
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
                          onChange={() =>
                            onPermissionChange("finManagement.selectAll")
                          }
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
                              onChange={() =>
                                onPermissionChange("finManagement.read")
                              }
                              checked={
                                permissionChecked.finManagement
                                  ? permissionChecked.finManagement
                                  : watch("finManagement.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("finManagement.write")}
                              onChange={() =>
                                onPermissionChange("finManagement.write")
                              }
                              checked={
                                permissionChecked.finManagement
                                  ? permissionChecked.finManagement
                                  : watch("finManagement.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("finManagement.create")}
                              onChange={() =>
                                onPermissionChange("finManagement.create")
                              }
                              checked={
                                permissionChecked.finManagement
                                  ? permissionChecked.finManagement
                                  : watch("finManagement.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("finManagement.delete")}
                              onChange={() =>
                                onPermissionChange("finManagement.delete")
                              }
                              checked={
                                permissionChecked.finManagement
                                  ? permissionChecked.finManagement
                                  : watch("finManagement.delete")
                              }
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
                          onChange={() => onPermissionChange("lead.selectAll")}
                          checked={permissionChecked.lead}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">Lead</td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("lead.read")}
                              onChange={() => onPermissionChange("lead.read")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("lead.write")}
                              onChange={() => onPermissionChange("lead.write")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("lead.create")}
                              onChange={() => onPermissionChange("lead.create")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("lead.delete")}
                              onChange={() => onPermissionChange("lead.delete")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.delete")
                              }
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
                          onChange={() =>
                            onPermissionChange("customer.selectAll")
                          }
                          checked={permissionChecked.customer}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">Customer</td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("customer.read")}
                              onChange={() =>
                                onPermissionChange("customer.read")
                              }
                              checked={
                                permissionChecked.customer
                                  ? permissionChecked.customer
                                  : watch("customer.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("customer.write")}
                              onChange={() =>
                                onPermissionChange("customer.write")
                              }
                              checked={
                                permissionChecked.customer
                                  ? permissionChecked.customer
                                  : watch("customer.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("customer.create")}
                              onChange={() =>
                                onPermissionChange("customer.create")
                              }
                              checked={
                                permissionChecked.customer
                                  ? permissionChecked.customer
                                  : watch("customer.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("customer.delete")}
                              onChange={() =>
                                onPermissionChange("customer.delete")
                              }
                              checked={
                                permissionChecked.customer
                                  ? permissionChecked.customer
                                  : watch("customer.delete")
                              }
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
