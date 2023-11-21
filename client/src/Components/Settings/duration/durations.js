import { useEffect, useState } from "react";
// import { AxiosInstance } from "../../common-components/axiosInstance";
// import { CommonDataTable } from "../../common-components/CommonDataTable";
// import { trainerHeaders } from "../../Constants/table.constants";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { DeleteModel } from "../../../common-components/models/DeleteModal";
import { DurationModal } from "./durationModal";

export const Durations = () => {
  const [durationModal, setDurationModal] = useState(false);
  const [durationData, setDurationData] = useState(null);
  const [durationIndex, setDurationIndex] = useState(null);
  const [durations, setDurations] = useState([]);
  const [deleteDuration, setDeleteDuration] = useState(false);

  const showDurationModal = (e, type, index) => {
    setDurationIndex(index);
    setDurationData(e);
    console.log(type);
    if (type == "delete") {
      setDeleteDuration(true);
    }

    if (type != "delete") setDurationModal(true);
  };

  useEffect(() => {
    getAllDurations();
  }, []);

  const getAllDurations = async () => {
    try {
      const allDurations = await AxiosInstance.get("/durations/getDurations");
      if (allDurations.status == 200) {
        setDurations(allDurations.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateDurations = (data) => {
    const checkDurations = durations.filter((e) => e._id == data._id);

    if (checkDurations.length > 0) {
      durations[durationIndex] = data;
      setDurations([...durations]);
    } else {
      setDurations((old) => [...old, data]);
    }
  };

  const deleteSelectedDurations = async (durationId) => {
    try {
      toast.dismiss();
      const deleteDuration = await AxiosInstance.delete(
        "/durations/deleteDuration",
        {
          params: { _id: durationId },
        }
      );
      if (deleteDuration.status == 200) {
        const filteredDurations = durations.filter(
          (duration) => duration._id != durationId
        );
        setDurations([...filteredDurations]);
        toast.success(deleteDuration.data.message);
      } else {
        toast.error("something went wrong");
      }
    } catch (err) {
      toast.error("something went wrong");
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
                  <h4 className="mb-sm-0 font-size-18">Course Durations</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Course Durations
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
                        onClick={() => showDurationModal()}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Duration
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
                    <div className="card-title">Duration's List </div>
                  </div>
                  <div className="row g-4 p-4">
                    {durations.length > 0 ? (
                      durations.map((e, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="card">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-end">
                                <div className="role-heading">
                                  <h4 className="mb-2 text-primary fw-bold cursor-pointer">
                                    <a>
                                      {e.duration + " " + e.type}
                                      {e.duration > 1 ? "s" : ""}
                                    </a>
                                  </h4>
                                  <div>
                                    <button
                                      onClick={() =>
                                        showDurationModal(e, null, index)
                                      }
                                      className="btn btn-sm btn-primary role-edit-modal mx-1"
                                    >
                                      <small>Edit Duration</small>
                                    </button>
                                    <button
                                      onClick={() =>
                                        showDurationModal(
                                          e._id,
                                          "delete",
                                          index
                                        )
                                      }
                                      className="btn btn-sm btn-danger role-edit-modal"
                                    >
                                      <small>Delete Duration</small>
                                    </button>
                                  </div>
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
      {durationModal && (
        <DurationModal
          setIsOpen={setDurationModal}
          isOpen={durationModal}
          callback={(data) => updateDurations(data)}
          durationData={durationData}
        />
      )}

      {deleteDuration && (
        <DeleteModel
          setIsOpen={setDeleteDuration}
          isOpen={deleteDuration}
          message={"Do you really want to delete this duration."}
          callback={(durationId) => deleteSelectedDurations(durationId)}
          deleteHeader="Duration"
          data={durationData}
        />
      )}
    </div>
  );
};
