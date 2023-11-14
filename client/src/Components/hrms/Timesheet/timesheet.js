import { useState } from "react";
import AddTimesheetModal from "./AddTimesheetModal";
import { DeleteModel } from "../../../common-components/models/DeleteModal";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { toast } from "react-toastify";

export const TimeSheet = () => {
  const [isAddModalOpen, setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [timesheetData, setTimesheetData] = useState(null);
  const [timesheetIndex, setTimesheetIndex] = useState(null);
  const [deleteTimesheet, setDeleteTimesheet] = useState(false);
  const [allTimesheets, setAllTimesheets] = useState([]);

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
      const deletedTimesheet = await AxiosInstance.delete(
        "/timesheets/deleteTimesheet",
        { params: selectedTimeSheet }
      );
      if (deletedTimesheet.status == 200) {
        const filteredTimesheets = allTimesheets.filter(
          (timesheet) => timesheet._id == selectedTimeSheet._id
        );
        setAllTimesheets([...filteredTimesheets]);
        toast.success(deletedTimesheet.data);
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
                  <h4 className="mb-sm-0 font-size-18">TimeSheet Tracking</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Timesheet Tracking
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
                          <select className="form-select">
                            <option value="CA">Newest</option>
                            <option value="NV">Oldest</option>
                            <option value="OR">Recent</option>
                          </select>
                        </div>
                        <div className="col-xl-7">
                          <div className="d-flex" role="search">
                            <input
                              className="form-control me-2"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                            />{" "}
                            <button className="btn btn-light" type="submit">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => showTimesheet()}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New
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
                    <div className="card-title">Tracking List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive"></div>
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
        />
      )}
      {deleteTimesheet && (
        <DeleteModel
          setIsOpen={setDeleteTimesheet}
          isOpen={deleteTimesheet}
          message={`Do you really want to delete Customer ${timesheetData?.employeeName} timeSheet`}
          callback={(data) => deleteSelectedTimeSheet(data)}
          deleteHeader={"TimeSheet"}
          data={timesheetData}
        />
      )}
    </div>
  );
};
