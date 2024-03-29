/* eslint-disable default-case */
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";

export const AddNewRoleModel = ({
  isOpen,
  setIsOpen,
  roleId,
  viewRole,
  callback,
}) => {
  const { NewAxiosInstance } = useAuth();
  const [isAllSelected, setIsAllSelected] = useState(false);

  const [permissionChecked, setPermissionChecked] = useState({
    lead: false,
    holiday: false,
    constants: false,
    system: false,
    registrationType: false,
    tradeLevel: false,
    tradeType: false,
    courses: false,
    class: false,
    certificateGeneration: false,
    attendance: false,
    userManagement: false,
    employeeManagement: false,
    finManagement: false,
    leaveManagement: false,
    payroll: false,
    role: false,
    admin: false,
    HRMS: false,
    schedule: false,
    settings: false,
    courseManagement: false,
    timesheet: false,
    customer: false,
    trainer: false,
    calendar: false,
    multiLanguage: false,
  });

  useEffect(() => {
    if (roleId) {
      setRoleData();
    }
  }, []);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm();

  const checkArray = [
    "employeeManagement",
    "trainer",
    "calendar",
    "multiLanguage",
    "finManagement",
    "payroll",
    "leaveManagement",
    "userManagement",
    "lead",
    "holiday",
    "constants",
    "system",
    "registrationType",
    "tradeLevel",
    "courses",
    "class",
    "certificateGeneration",
    "attendance",
    "tradeType",
    "customer",
    "timesheet",
    "role",
  ];

  const permissionType = {
    admin: ["role", "userManagement"],
    HRMS: ["timesheet", "leaveManagement", "payroll", "employeeManagement"],
    schedule: ["trainer", "holiday", "calendar"],
    settings: ["multiLanguage", "constants", "system"],
    courseManagement: [
      "registrationType",
      "tradeLevel",
      "courses",
      "class",
      "certificateGeneration",
      "attendance",
      "tradeType",
    ],
  };

  const setRoleData = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/roles/selectedRoleData", {
        params: {
          id: roleId,
        },
      });
      checkAllSelected(data[0]);
      reset(data[0]);
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const editRoleData = async (roleData) => {
    try {
      toast.dismiss();
      const { data } = NewAxiosInstance.post("/roles/editRole", roleData);
      toast.success("Role Updated");
      callback(roleData);
      handleCloseRoleModal();
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const addNewRole = async (roleData) => {
    try {
      toast.dismiss();
      const newRole = await NewAxiosInstance.post(
        "/roles/addNewRole",
        roleData,
      );
      if (newRole.status == 200) {
        toast.success("Role Added Successfully");
        callback(newRole.data);
        handleCloseRoleModal();
      } else {
        toast.error(newRole.data.message);
      }
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const handleCloseRoleModal = () => {
    setIsOpen(false);
    selectAll(false);
    reset();
  };

  const selectAll = (isChecked) => {
    checkArray.map((type) => selectAllTypes(type, isChecked));
    setIsAllSelected(isChecked);
    setPermissionChecked({
      lead: isChecked,
      holiday: isChecked,
      constants: isChecked,
      system: isChecked,
      registrationType: isChecked,
      tradeLevel: isChecked,
      courses: isChecked,
      class: isChecked,
      certificateGeneration: isChecked,
      attendance: isChecked,
      tradeType: isChecked,
      trainer: isChecked,
      calendar: isChecked,
      multiLanguage: isChecked,
      customer: isChecked,
      timesheet: isChecked,
      userManagement: isChecked,
      employeeManagement: isChecked,
      HRMS: isChecked,
      courseManagement: isChecked,
      schedule: isChecked,
      settings: isChecked,
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

  const onPermissionChange = (permission) => {
    setValue(permission, !getValues(permission));
    if (getValues(permission)) {
      setValue(permission.split(".")[0].concat(".read"), true);
    }
    selectPermissionTab(permission);
    checkAllSelected();
  };

  const selectPermissionTab = (permission) => {
    switch (permission) {
      case "userManagement.selectAll":
        selectAllTypes("userManagement", getValues(permission));
        break;
      case "lead.selectAll":
        selectAllTypes("lead", getValues(permission));
        break;
      case "holiday.selectAll":
        selectAllTypes("holiday", getValues(permission));
        break;
      case "constants.selectAll":
        selectAllTypes("constants", getValues(permission));
        break;
      case "system.selectAll":
        selectAllTypes("system", getValues(permission));
        break;
      case "registrationType.selectAll":
        selectAllTypes("registrationType", getValues(permission));
        break;
      case "tradeLevel.selectAll":
        selectAllTypes("tradeLevel", getValues(permission));
        break;
      case "courses.selectAll":
        selectAllTypes("courses", getValues(permission));
        break;
      case "class.selectAll":
        selectAllTypes("class", getValues(permission));
        break;
      case "certificateGeneration.selectAll":
        selectAllTypes("certificateGeneration", getValues(permission));
        break;
      case "attendance.selectAll":
        selectAllTypes("attendance", getValues(permission));
        break;
      case "tradeType.selectAll":
        selectAllTypes("tradeType", getValues(permission));
        break;

      case "customer.selectAll":
        selectAllTypes("customer", getValues(permission));
        break;
      case "timesheet.selectAll":
        selectAllTypes("timesheet", getValues(permission));
        break;
      case "employeeManagement.selectAll":
        selectAllTypes("employeeManagement", getValues(permission));
        break;
      case "trainer.selectAll":
        selectAllTypes("trainer", getValues(permission));
        break;
      case "calendar.selectAll":
        selectAllTypes("calendar", getValues(permission));
        break;
      case "multiLanguage.selectAll":
        selectAllTypes("multiLanguage", getValues(permission));
        break;
      case "finManagement.selectAll":
        selectAllTypes("finManagement", getValues(permission));
        break;
      case "leaveManagement.selectAll":
        selectAllTypes("leaveManagement", getValues(permission));
        break;
      case "payroll.selectAll":
        selectAllTypes("payroll", getValues(permission));
        break;
      case "role.selectAll":
        selectAllTypes("role", getValues(permission));
        break;
    }
  };

  const checkAllSelected = (data = getValues()) => {
    const isAllChecked = {
      lead: [],
      holiday: [],
      constants: [],
      system: [],
      registrationType: [],
      tradeLevel: [],
      courses: [],
      class: [],
      certificateGeneration: [],
      attendance: [],
      tradeType: [],
      customer: [],
      timesheet: [],
      trainer: [],
      calendar: [],
      multiLanguage: [],
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
      for (const checkbox in data.calendar) {
        isAllChecked.calendar.push(data.calendar[checkbox]);
        isAllChecked.isAllSelected.push(data.calendar[checkbox]);
      }
      for (const checkbox in data.multiLanguage) {
        isAllChecked.multiLanguage.push(data.multiLanguage[checkbox]);
        isAllChecked.isAllSelected.push(data.multiLanguage[checkbox]);
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
      isAllChecked.certificateGeneration.includes(false) ||
      isAllChecked.attendance.includes(false)
    ) {
      permissionChecked.courseManagement = false;
    } else {
      permissionChecked.courseManagement = true;
    }

    if (
      isAllChecked.trainer.includes(false) ||
      isAllChecked.holiday.includes(false) ||
      isAllChecked.calendar.includes(false)
    ) {
      permissionChecked.schedule = false;
    } else {
      permissionChecked.schedule = true;
    }

    if (
      isAllChecked.multiLanguage.includes(false) ||
      isAllChecked.constants.includes(false) ||
      isAllChecked.system.includes(false)
    ) {
      permissionChecked.settings = false;
    } else {
      permissionChecked.settings = true;
    }

    setPermissionChecked({ ...permissionChecked });
  };

  const selectMainPermissionTab = (tabName) => {
    setValue(tabName, !getValues(tabName));

    switch (tabName) {
      case "admin":
        permissionType.admin.map((type) => {
          selectAllTypes(type, getValues(tabName));

          setValue(`${type}.selectAll`, tabName);
        });
        break;
      case "HRMS":
        permissionType.HRMS.map((type) => {
          selectAllTypes(type, getValues(tabName));
          setValue(`${type}.selectAll`, tabName);
        });
        break;

      case "courseManagement":
        permissionType.courseManagement.map((type) => {
          selectAllTypes(type, getValues(tabName));
          setValue(`${type}.selectAll`, tabName);
        });
        break;

      case "schedule":
        permissionType.schedule.map((type) => {
          selectAllTypes(type, getValues(tabName));
          setValue(`${type}.selectAll`, tabName);
        });
        break;
      case "settings":
        permissionType.settings.map((type) => {
          selectAllTypes(type, getValues(tabName));
          setValue(`${type}.selectAll`, tabName);
        });
        break;
    }
    checkAllSelected();
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleCloseRoleModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>
            {viewRole ? (
              <h3 className='role-title'>View Role</h3>
            ) : (
              <h3 className='role-title'>{roleId ? "Edit" : "Add New"} Role</h3>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(roleId ? editRoleData : addNewRole)}>
            <div className='col-12 mb-4 fv-plugins-icon-container'>
              <label className='form-label'>
                Role Name <span className='text-danger'>*</span>
              </label>
              <input
                type='text'
                id='modalRoleName'
                {...register("roleName", {
                  required: "this field is required",
                })}
                className='form-control'
                placeholder='Enter a role name'
                disabled={viewRole}
              />
              {errors?.roleName && (
                <span className='text-danger'>{errors?.roleName.message}</span>
              )}
            </div>
            <div className='col-12'>
              <h4>Role Permissions</h4>
              <div style={{ height: "400px" }} className='table-responsive'>
                <table className='table table-flush-spacing'>
                  <tbody>
                    <tr>
                      <td className='text-nowrap fw-medium'>
                        Administrator Access{" "}
                        <i className='bx bx-info-circle bx-xs' />
                        {/* <ToggleButton
                          aria-label="Allows a full access to the system"
                          title="Allows a full access to the system"
                          className="bx bx-info-circle bx-xs"
                        /> */}
                      </td>
                      <td>
                        <div className='form-check '>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            onChange={({ target }) => selectAll(target.checked)}
                            checked={isAllSelected}
                            disabled={viewRole}
                          />
                          <label className='form-check-label'>Select All</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <tbody>
                        <tr>
                          <th>
                            <div className='form-check mx-3'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                onChange={() =>
                                  selectMainPermissionTab("admin")
                                }
                                checked={permissionChecked.admin}
                                disabled={viewRole}
                              />
                              <td className='text-nowrap fw-medium'>Admin</td>
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("userManagement.selectAll")
                              }
                              checked={permissionChecked.userManagement}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>
                              User Management
                            </td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check  me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("role.selectAll")
                              }
                              checked={permissionChecked.role}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>
                              Roles And Permission
                            </td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check  me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
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
                            <div className='form-check mx-3'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                onChange={() => selectMainPermissionTab("HRMS")}
                                checked={permissionChecked.HRMS}
                                disabled={viewRole}
                              />
                              <td className='text-nowrap fw-medium'>HRMS</td>
                            </div>
                          </th>
                        </tr>

                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange(
                                  "employeeManagement.selectAll",
                                )
                              }
                              checked={permissionChecked.employeeManagement}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>
                              employee Management
                            </td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("employeeManagement.read")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "employeeManagement.read",
                                    )
                                  }
                                  checked={
                                    permissionChecked.employeeManagement
                                      ? permissionChecked.employeeManagement
                                      : watch("employeeManagement.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("employeeManagement.write")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "employeeManagement.write",
                                    )
                                  }
                                  checked={
                                    permissionChecked.employeeManagement
                                      ? permissionChecked.employeeManagement
                                      : watch("employeeManagement.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("employeeManagement.create")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "employeeManagement.create",
                                    )
                                  }
                                  checked={
                                    permissionChecked.employeeManagement
                                      ? permissionChecked.employeeManagement
                                      : watch("employeeManagement.create")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("employeeManagement.delete")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "employeeManagement.delete",
                                    )
                                  }
                                  checked={
                                    permissionChecked.employeeManagement
                                      ? permissionChecked.employeeManagement
                                      : watch("employeeManagement.delete")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("leaveManagement.selectAll")
                              }
                              checked={permissionChecked.leaveManagement}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>
                              leaveManagement
                            </td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("payroll.selectAll")
                              }
                              checked={permissionChecked.payroll}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>Payroll</td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("timesheet.selectAll")
                              }
                              checked={permissionChecked.timesheet}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>Timesheet</td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
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
                            <div className='form-check mx-3'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                onChange={() =>
                                  selectMainPermissionTab("schedule")
                                }
                                checked={permissionChecked.schedule}
                                disabled={viewRole}
                              />
                              <td className='text-nowrap fw-medium'>
                                Schedule
                              </td>
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("trainer.selectAll")
                              }
                              checked={permissionChecked.trainer}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>Trainer</td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("calendar.selectAll")
                              }
                              checked={permissionChecked.calendar}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>Calendar</td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("calendar.read")}
                                  onChange={() =>
                                    onPermissionChange("calendar.read")
                                  }
                                  checked={
                                    permissionChecked.calendar
                                      ? permissionChecked.calendar
                                      : watch("calendar.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>Read</label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("holiday.selectAll")
                              }
                              checked={permissionChecked.holiday}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>Holiday</td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
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
                            <div className='form-check mx-3'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                onChange={() =>
                                  selectMainPermissionTab("courseManagement")
                                }
                                checked={permissionChecked.courseManagement}
                                disabled={viewRole}
                              />
                              <td className='text-nowrap fw-medium'>
                                Course Management
                              </td>
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("registrationType.selectAll")
                              }
                              checked={permissionChecked.registrationType}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>
                              Registration Type
                            </td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("registrationType.create")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "registrationType.create",
                                    )
                                  }
                                  checked={
                                    permissionChecked.registrationType
                                      ? permissionChecked.registrationType
                                      : watch("registrationType.create")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("registrationType.delete")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "registrationType.delete",
                                    )
                                  }
                                  checked={
                                    permissionChecked.registrationType
                                      ? permissionChecked.registrationType
                                      : watch("registrationType.delete")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("tradeLevel.selectAll")
                              }
                              checked={permissionChecked.tradeLevel}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>
                              Trade Level
                            </td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("tradeType.selectAll")
                              }
                              checked={permissionChecked.tradeType}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>
                              Trade Type
                            </td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("courses.selectAll")
                              }
                              checked={permissionChecked.courses}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>Course</td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("class.selectAll")
                              }
                              checked={permissionChecked.class}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>Class</td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
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
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange(
                                  "certificateGeneration.selectAll",
                                )
                              }
                              checked={permissionChecked.certificateGeneration}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>
                              Certificate Generation
                            </td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("certificateGeneration.read")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "certificateGeneration.read",
                                    )
                                  }
                                  checked={
                                    permissionChecked.certificateGeneration
                                      ? permissionChecked.certificateGeneration
                                      : watch("certificateGeneration.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("certificateGeneration.write")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "certificateGeneration.write",
                                    )
                                  }
                                  checked={
                                    permissionChecked.certificateGeneration
                                      ? permissionChecked.certificateGeneration
                                      : watch("certificateGeneration.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("attendance.selectAll")
                              }
                              checked={permissionChecked.attendance}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>
                              Attendance
                            </td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("attendance.read")}
                                  onChange={() =>
                                    onPermissionChange("attendance.read")
                                  }
                                  checked={
                                    permissionChecked.attendance
                                      ? permissionChecked.attendance
                                      : watch("attendance.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("attendance.write")}
                                  onChange={() =>
                                    onPermissionChange("attendance.write")
                                  }
                                  checked={
                                    permissionChecked.attendance
                                      ? permissionChecked.attendance
                                      : watch("attendance.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </tr>

                    <tr>
                      <div className='form-check mx-3'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          onChange={() =>
                            onPermissionChange("finManagement.selectAll")
                          }
                          checked={permissionChecked.finManagement}
                          disabled={viewRole}
                        />
                        <td className='text-nowrap fw-medium'>
                          Financial Management
                        </td>
                      </div>
                      <td>
                        <div className='d-flex'>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
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
                            <label className='form-check-label'>Read</label>
                          </div>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
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
                            <label className='form-check-label'>Write</label>
                          </div>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
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
                            <label className='form-check-label'>Create</label>
                          </div>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
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
                            <label className='form-check-label'>Delete</label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <div className='form-check mx-3'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          onChange={() => onPermissionChange("lead.selectAll")}
                          checked={permissionChecked.lead}
                          disabled={viewRole}
                        />
                        <td className='text-nowrap fw-medium'>Lead</td>
                      </div>
                      <td>
                        <div className='d-flex'>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              {...register("lead.read")}
                              onChange={() => onPermissionChange("lead.read")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.read")
                              }
                              disabled={viewRole}
                            />
                            <label className='form-check-label'>Read</label>
                          </div>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              {...register("lead.write")}
                              onChange={() => onPermissionChange("lead.write")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.write")
                              }
                              disabled={viewRole}
                            />
                            <label className='form-check-label'>Write</label>
                          </div>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              {...register("lead.create")}
                              onChange={() => onPermissionChange("lead.create")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.create")
                              }
                              disabled={viewRole}
                            />
                            <label className='form-check-label'>Create</label>
                          </div>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              {...register("lead.delete")}
                              onChange={() => onPermissionChange("lead.delete")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.delete")
                              }
                              disabled={viewRole}
                            />
                            <label className='form-check-label'>Delete</label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <div className='form-check mx-3'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          onChange={() =>
                            onPermissionChange("customer.selectAll")
                          }
                          checked={permissionChecked.customer}
                          disabled={viewRole}
                        />
                        <td className='text-nowrap fw-medium'>Customer</td>
                      </div>
                      <td>
                        <div className='d-flex'>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
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
                            <label className='form-check-label'>Read</label>
                          </div>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
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
                            <label className='form-check-label'>Write</label>
                          </div>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
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
                            <label className='form-check-label'>Create</label>
                          </div>
                          <div className='form-check me-3 me-lg-5'>
                            <input
                              className='form-check-input'
                              type='checkbox'
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
                            <label className='form-check-label'>Delete</label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <tbody>
                        <tr>
                          <th>
                            <div className='form-check mx-3'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                onChange={() =>
                                  selectMainPermissionTab("settings")
                                }
                                checked={permissionChecked.settings}
                                disabled={viewRole}
                              />
                              <td className='text-nowrap fw-medium'>
                                Settings
                              </td>
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("multiLanguage.selectAll")
                              }
                              checked={permissionChecked.multiLanguage}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>
                              multiLanguage
                            </td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("multiLanguage.read")}
                                  onChange={() =>
                                    onPermissionChange("multiLanguage.read")
                                  }
                                  checked={
                                    permissionChecked.multiLanguage
                                      ? permissionChecked.multiLanguage
                                      : watch("multiLanguage.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("multiLanguage.write")}
                                  onChange={() =>
                                    onPermissionChange("multiLanguage.write")
                                  }
                                  checked={
                                    permissionChecked.multiLanguage
                                      ? permissionChecked.multiLanguage
                                      : watch("multiLanguage.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("multiLanguage.create")}
                                  onChange={() =>
                                    onPermissionChange("multiLanguage.create")
                                  }
                                  checked={
                                    permissionChecked.multiLanguage
                                      ? permissionChecked.multiLanguage
                                      : watch("multiLanguage.create")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("multiLanguage.delete")}
                                  onChange={() =>
                                    onPermissionChange("multiLanguage.delete")
                                  }
                                  checked={
                                    permissionChecked.multiLanguage
                                      ? permissionChecked.multiLanguage
                                      : watch("multiLanguage.delete")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("constants.selectAll")
                              }
                              checked={permissionChecked.constants}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>constants</td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("constants.read")}
                                  onChange={() =>
                                    onPermissionChange("constants.read")
                                  }
                                  checked={
                                    permissionChecked.constants
                                      ? permissionChecked.constants
                                      : watch("constants.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("constants.write")}
                                  onChange={() =>
                                    onPermissionChange("constants.write")
                                  }
                                  checked={
                                    permissionChecked.constants
                                      ? permissionChecked.constants
                                      : watch("constants.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("constants.create")}
                                  onChange={() =>
                                    onPermissionChange("constants.create")
                                  }
                                  checked={
                                    permissionChecked.constants
                                      ? permissionChecked.constants
                                      : watch("constants.create")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Create
                                </label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("constants.delete")}
                                  onChange={() =>
                                    onPermissionChange("constants.delete")
                                  }
                                  checked={
                                    permissionChecked.constants
                                      ? permissionChecked.constants
                                      : watch("constants.delete")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className='form-check mx-3'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              onChange={() =>
                                onPermissionChange("system.selectAll")
                              }
                              checked={permissionChecked.system}
                              disabled={viewRole}
                            />
                            <td className='text-nowrap fw-medium'>system</td>
                          </div>
                          <td>
                            <div className='d-flex'>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("system.read")}
                                  onChange={() =>
                                    onPermissionChange("system.read")
                                  }
                                  checked={
                                    permissionChecked.system
                                      ? permissionChecked.system
                                      : watch("system.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>Read</label>
                              </div>
                              <div className='form-check me-3 me-lg-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  {...register("system.write")}
                                  onChange={() =>
                                    onPermissionChange("system.write")
                                  }
                                  checked={
                                    permissionChecked.system
                                      ? permissionChecked.system
                                      : watch("system.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className='form-check-label'>
                                  Write
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Modal.Footer>
              <div className='row'>
                <div className='col-12 text-center'>
                  {!viewRole && (
                    <button
                      type='submit'
                      className='btn btn-primary me-sm-3 me-1'
                    >
                      {roleId ? "Update" : "Submit"}
                    </button>
                  )}
                  <button
                    type='reset'
                    className='btn btn-label-secondary'
                    onClick={handleCloseRoleModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
