import { useEffect, useState } from "react";
import AddLeaveModal from "./addLeaveModal";
import { toast } from "react-toastify";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { leaveHeaders } from "../../../Constants/table.constants";
import { DeleteModel } from "../../../common-components/models/DeleteModal";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export const Leave = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [allLeaves, setAllLeaves] = useState([]);
  const [deleteLeave, setDeleteLeave] = useState(false);
  const [leaveData, setLeaveData] = useState(null);
  const [leaveIndex, setLeaveIndex] = useState(null);
  const [viewLeave, setViewLeave] = useState(false);

  useEffect(() => {
    getAllLeaves();
  }, []);

  const showLeaveModal = (e, type, index) => {
    setLeaveData(e);
    setLeaveIndex(index);

    if (type == "view") {
      setViewLeave(true);
      setDeleteLeave(false);
    } else if (type == "delete") {
      setDeleteLeave(true);
      setViewLeave(false);
    } else {
      setViewLeave(false);
      setDeleteLeave(false);
    }
    if (type != "delete") setShowModal(true);
  };

  const getAllLeaves = async () => {
    try {
      const leaves = await AxiosInstance.get("/leaves/getLeaves");
      if (leaves.status == 200) setAllLeaves(leaves.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateLeaves = (data) => {
    const filteredLeaves = allLeaves.filter((leave) => leave._id == data._id);
    if (filteredLeaves.length) {
      allLeaves[leaveIndex] = data;
      setAllLeaves([...allLeaves]);
    } else {
      setAllLeaves([...allLeaves, data]);
    }
  };

  const deleteSelectedLeave = async (data) => {
    try {
      toast.dismiss();
      const deleteLeave = await AxiosInstance.delete("/leaves/deleteLeave", {
        params: data,
      });

      if (deleteLeave.status == 200) {
        const filteredLeaves = allLeaves.filter(
          (leave) => leave._id != data._id
        );
        setAllLeaves(filteredLeaves);

        toast.success(deleteLeave.data);
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
                  <h4 className="mb-sm-0 font-size-18">Leave Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Leave Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {user.userData?.roleData?.leaveManagement?.create && (
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div className="row w-50"></div>
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => showLeaveModal()}
                        >
                          <i className="bx bx-plus me-1 fw-semibold align-middle" />
                          Add New Leave
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="row g-4">
              <div className="col-md-12">
                {/* Role Table */}
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Leave List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={allLeaves}
                        tableHeaders={leaveHeaders}
                        actionButtons
                        viewButton
                        deleteButton={
                          user.userData?.roleData?.leaveManagement?.delete
                        }
                        callback={(data, type, index) =>
                          showLeaveModal(data, type, index)
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
      {deleteLeave && (
        <DeleteModel
          setIsOpen={setDeleteLeave}
          isOpen={deleteLeave}
          message={`do you really want to delete ${leaveData.name} leave .`}
          callback={(data) => deleteSelectedLeave(data)}
          deleteHeader={"Leave"}
          data={leaveData}
        />
      )}
      {showModal && (
        <AddLeaveModal
          show={showModal}
          setShow={setShowModal}
          callback={(data) => updateLeaves(data)}
          viewLeave={viewLeave}
          leaveData={leaveData}
        />
      )}
    </div>
  );
};
