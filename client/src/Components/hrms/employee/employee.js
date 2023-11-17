import { useEffect, useState } from "react";
import { NewEmployeeManagementModal } from "./newEmployeeManagementModal";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { employeeHeaders } from "../../../Constants/table.constants";
import { DeleteModel } from "../../../common-components/models/DeleteModal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Employee = () => {
  const [employeeModal, setEmployeeModal] = useState(false);
  const [viewEmployee, setViewEmployee] = useState(false);
  const [deleteEmployee, setDeleteEmployee] = useState(false);

  const [employeeData, setEmployeeData] = useState({});
  const [employeeIndex, setEmployeeIndex] = useState(null);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const showEmployee = (e, type, index) => {
    setEmployeeData(e);
    setEmployeeIndex(index);

    if (type == "view") {
      setViewEmployee(true);
      setDeleteEmployee(false);
    } else if (type == "delete") {
      setDeleteEmployee(true);
      setViewEmployee(false);
    } else {
      setViewEmployee(false);
      setDeleteEmployee(false);
    }
    if (type != "delete") setEmployeeModal(true);
  };

  const updateEmployee = (employee) => {
    const filteredEmployee = employees.filter((e) => e._id == employee._id);

    if (filteredEmployee?.length) {
      employees[employeeIndex] = employee;
      setEmployees([...employees]);
    } else {
      setEmployees([...employees, employee]);
    }
  };

  const getEmployees = async () => {
    try {
      const { data } = await AxiosInstance.get("/employee/getEmployees");
      setEmployees(data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteSelectedEmployee = async (employee) => {
    try {
      toast.dismiss();
      const { data } = await AxiosInstance.delete("/employee/deleteEmployee", {
        params: employee,
      });
      toast.success("employee deleted");
      const filteredEmployees = employees.filter((e) => e._id != employee._id);
      setEmployees([...filteredEmployees]);
    } catch (err) {
      toast.error("error occured");
      console.error(err);
    }
  };

  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Employee Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Employee Management
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
                      <div className="row w-50"></div>
                      <button
                        className="btn btn-primary me-2"
                        onClick={(e) => showEmployee()}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Employee
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Employee List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        tableHeaders={employeeHeaders}
                        data={employees}
                        actionButtons
                        editButton
                        deleteButton
                        viewButton
                        callback={(e, type, index) =>
                          showEmployee(e, type, index)
                        }
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
      {employeeModal && (
        <NewEmployeeManagementModal
          isOpen={employeeModal}
          setIsOpen={setEmployeeModal}
          employeeData={employeeData}
          viewEmployee={viewEmployee}
          callback={(e) => updateEmployee(e)}
        />
      )}
      {deleteEmployee && (
        <DeleteModel
          setIsOpen={setDeleteEmployee}
          isOpen={deleteEmployee}
          message={`Do you really want to delete ${employeeData.employeeName}.`}
          callback={(e) => deleteSelectedEmployee(e)}
          deleteHeader={"Employee"}
          data={employeeData}
        />
      )}
    </div>
  );
};
