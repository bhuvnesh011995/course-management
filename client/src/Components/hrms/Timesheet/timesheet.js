import { useEffect, useState } from "react";
import AddTimesheetModal from "./AddTimesheetModal";
import { DeleteModel } from "../../../common-components/models/DeleteModal";
import { toast } from "react-toastify";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { timesheetHeaders } from "../../../Constants/table.constants";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export const TimeSheet = () => {
  const { user, NewAxiosInstance } = useAuth();
  const [isAddModalOpen, setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [timesheetData, setTimesheetData] = useState(null);
  const [timesheetIndex, setTimesheetIndex] = useState(null);
  const [deleteTimesheet, setDeleteTimesheet] = useState(false);
  const [allTimesheets, setAllTimesheets] = useState([]);

  useEffect(() => {
    getAllTimesheets();
  }, []);

  const showTimesheet = (e, type, index) => {
    setTimesheetData(e);
    setTimesheetIndex(index);

    if (type == "view") {
      setViewModal(true);
      setDeleteTimesheet(false);
    } else if (type == "delete") {
      setDeleteTimesheet(true);
      setViewModal(false);
    } else {
      setViewModal(false);
      setDeleteTimesheet(false);
    }
    if (type != "delete") setAddModal(true);
  };

  const deleteSelectedTimeSheet = async (selectedTimeSheet) => {
    try {
      toast.dismiss();
      const deletedTimesheet = await NewAxiosInstance.delete(
        "/timesheets/deleteTimesheet",
        { params: selectedTimeSheet }
      );
      if (deletedTimesheet.status == 200) {
        const filteredTimesheets = allTimesheets.filter(
          (timesheet) => timesheet._id != selectedTimeSheet._id
        );
        setAllTimesheets([...filteredTimesheets]);
        toast.success(deletedTimesheet.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAllTimesheets = async () => {
    try {
      const timesheets = await NewAxiosInstance.get(
        "/timesheets/getTimesheets"
      );
      setAllTimesheets(timesheets.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTimesheets = (data) => {
    const filteredTimesheet = allTimesheets.filter(
      (timesheet) => timesheet._id == data._id
    );
    if (filteredTimesheet.length) {
      allTimesheets[timesheetIndex] = data;
      setAllTimesheets([...allTimesheets]);
    } else {
      setAllTimesheets([...allTimesheets, data]);
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
                  <h4 className="mb-sm-0 font-size-18">TimeSheet Tracking</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Timesheet Tracking
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {user.userData?.roleData?.timesheet?.create && (
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div className="row w-50"></div>
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => showTimesheet()}
                        >
                          <i className="bx bx-plus me-1 fw-semibold align-middle" />
                          Add New Timesheet
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
                    <div className="card-title">Tracking List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={allTimesheets}
                        tableHeaders={timesheetHeaders}
                        actionButtons
                        editButton={user.userData?.roleData?.timesheet?.write}
                        deleteButton={
                          user.userData?.roleData?.timesheet?.delete
                        }
                        viewButton
                        callback={(data, type, index) =>
                          showTimesheet(data, type, index)
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
      {isAddModalOpen && (
        <AddTimesheetModal
          show={isAddModalOpen}
          setShow={setAddModal}
          viewModal={viewModal}
          timesheetData={timesheetData}
          callback={(data) => updateTimesheets(data)}
        />
      )}
      {deleteTimesheet && (
        <DeleteModel
          setIsOpen={setDeleteTimesheet}
          isOpen={deleteTimesheet}
          message={`Do you really want to delete Customer ${timesheetData?.name} timeSheet`}
          callback={(data) => deleteSelectedTimeSheet(data)}
          deleteHeader={"TimeSheet"}
          data={timesheetData}
        />
      )}
    </div>
  );
};
