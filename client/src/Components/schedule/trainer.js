import { useEffect, useState } from "react";
import { NewTrainerModal } from "./modals/AddTrainerModal";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { trainerHeaders } from "../../Constants/table.constants";
import { DeleteModel } from "../../common-components/models/DeleteModal";
import { ViewTrainer } from "./modals/ViewTrainerModal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const Trainer = () => {
  const { user, NewAxiosInstance } = useAuth();
  const [trainers, setTrainers] = useState([]);
  const [trainerModal, setTrainerModal] = useState(false);
  const [viewTrainer, setViewTrainer] = useState(false);
  const [trainerData, setTrainerData] = useState(null);
  const [deleteTrainer, setDeleteTrainer] = useState(false);
  const [trainerIndex, setTrainerIndex] = useState(null);

  useEffect(() => {
    getAllTrainers();
  }, []);

  const updateTrainers = (data) => {
    const filterTrainer = trainers.filter((e) => e._id == data._id);
    if (filterTrainer.length) {
      trainers[trainerIndex] = data;
      setTrainers([...trainers]);
    } else {
      setTrainers([...trainers, data]);
    }
  };

  const showTrainerModal = (e, type, index) => {
    setTrainerIndex(index);
    setTrainerData(e);

    if (type == "view") {
      setViewTrainer(true);
    } else if (type == "delete") {
      setDeleteTrainer(true);
    }

    if (type != "delete" && type != "view") setTrainerModal(true);
  };

  const getAllTrainers = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/trainer/getTrainers");
      setTrainers(data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteSelectedTrainer = async (trainerData) => {
    try {
      toast.dismiss();
      const deletedTrainer = await NewAxiosInstance.delete(
        "/trainer/deleteTrainer",
        {
          params: trainerData,
        }
      );
      if (deletedTrainer.status == 200) {
        const filteredTrainers = trainers.filter(
          (e) => e._id != trainerData._id
        );
        setTrainers([...filteredTrainers]);
        toast.success(deletedTrainer.data.message);
      } else {
        toast.error(deletedTrainer.data.message);
      }
    } catch (err) {
      toast.error("something went wrong !");
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
                  <h4 className="mb-sm-0 font-size-18">Trainer Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Trainer Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {user.userData?.roleData?.trainer?.create && (
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div className="row w-50"></div>

                        <button
                          className="btn btn-primary me-2"
                          onClick={() => showTrainerModal()}
                        >
                          <i className="bx bx-plus me-1 fw-semibold align-middle" />
                          Add New Trainer
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
                    <div className="card-title">Trainer's List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        tableHeaders={trainerHeaders}
                        data={trainers}
                        actionButtons
                        deleteButton={user.userData?.roleData?.lead?.delete}
                        editButton={user.userData?.roleData?.trainer?.write}
                        viewButton
                        callback={(e, type, index) =>
                          showTrainerModal(e, type, index)
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
      {trainerModal && (
        <NewTrainerModal
          isOpen={trainerModal}
          setIsOpen={setTrainerModal}
          callback={(e) => updateTrainers(e)}
          viewTrainer={viewTrainer}
          trainerData={trainerData}
        />
      )}
      {deleteTrainer && (
        <DeleteModel
          setIsOpen={setDeleteTrainer}
          isOpen={deleteTrainer}
          message={`do you really want to delete trainer ${trainerData.trainerName}`}
          callback={(e) => deleteSelectedTrainer(e)}
          deleteHeader={"Trainer"}
          data={trainerData}
        />
      )}
      {viewTrainer && (
        <ViewTrainer
          trainerData={trainerData}
          setIsOpen={setViewTrainer}
          isOpen={viewTrainer}
        />
      )}
    </div>
  );
};
