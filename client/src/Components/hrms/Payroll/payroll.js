import { useEffect, useState } from "react";
import AddPayrollModal from "./AddPayrollModal";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { payrollHeaders } from "../../../Constants/table.constants";
import { toast } from "react-toastify";
import { DeleteModel } from "../../../common-components/models/DeleteModal";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export const PayRoll = () => {
  const { user, NewAxiosInstance } = useAuth();
  const [isAddPayrollModalOpen, setAddPayrollModal] = useState(false);
  const [allPayrolls, setAllPayrolls] = useState([]);
  const [deletePayroll, setDeletePayroll] = useState(false);
  const [payrollData, setPayrollData] = useState(null);
  const [payrollIndex, setPayrollIndex] = useState(null);
  const [viewPayroll, setViewPayroll] = useState(false);

  useEffect(() => {
    getAllPayrolls();
  }, []);

  const showPayroll = (e, type, index) => {
    setPayrollData(e);
    setPayrollIndex(index);

    if (type == "view") {
      setViewPayroll(true);
      setDeletePayroll(false);
    } else if (type == "delete") {
      setDeletePayroll(true);
      setViewPayroll(false);
    } else {
      setViewPayroll(false);
      setDeletePayroll(false);
    }
    if (type != "delete") setAddPayrollModal(true);
  };

  const getAllPayrolls = async () => {
    try {
      const payrolls = await NewAxiosInstance.get("/payrolls/getPayrolls");
      if (payrolls.status == 200) setAllPayrolls(payrolls.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updatePayrolls = (data) => {
    const filteredPayrolls = allPayrolls.filter(
      (payroll) => payroll._id == data._id
    );
    if (filteredPayrolls.length) {
      allPayrolls[payrollIndex] = data;
      setAllPayrolls([...allPayrolls]);
    } else {
      setAllPayrolls([...allPayrolls, data]);
    }
  };

  const deleteSelectedPayroll = async (data) => {
    try {
      toast.dismiss();
      const deletedPayroll = await NewAxiosInstance.delete(
        "/payrolls/deletePayroll",
        { params: data }
      );

      if (deletedPayroll.status == 200) {
        const filteredPayrolls = allPayrolls.filter(
          (payroll) => payroll._id != data._id
        );
        setAllPayrolls(filteredPayrolls);

        toast.success(deletedPayroll.data);
      }
    } catch (err) {
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
                  <h4 className="mb-sm-0 font-size-18">Payroll Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Payroll Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {user.userData?.roleData?.payroll?.create && (
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div className="row w-50"></div>
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => showPayroll()}
                        >
                          <i className="bx bx-plus me-1 fw-semibold align-middle" />
                          Add New Payroll
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Payroll List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={allPayrolls}
                        tableHeaders={payrollHeaders}
                        actionButtons
                        editButton={user.userData?.roleData?.payroll?.write}
                        deleteButton={user.userData?.roleData?.payroll?.delete}
                        viewButton
                        callback={(data, type, index) =>
                          showPayroll(data, type, index)
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
      {isAddPayrollModalOpen && (
        <AddPayrollModal
          show={isAddPayrollModalOpen}
          setShow={setAddPayrollModal}
          callback={(data) => updatePayrolls(data)}
          viewPayroll={viewPayroll}
          payrollData={payrollData}
        />
      )}
      {deletePayroll && (
        <DeleteModel
          setIsOpen={setDeletePayroll}
          isOpen={deletePayroll}
          message={`Do you really want to delete employee ${payrollData?.name} payroll.`}
          callback={(data) => deleteSelectedPayroll(data)}
          deleteHeader={"Payroll"}
          data={payrollData}
        />
      )}
    </div>
  );
};
