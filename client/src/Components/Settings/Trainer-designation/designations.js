import { useEffect, useState } from "react";
// import { AxiosInstance } from "../../common-components/axiosInstance";
// import { CommonDataTable } from "../../common-components/CommonDataTable";
// import { trainerHeaders } from "../../Constants/table.constants";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { DesignationModal } from "./designationModal";
import { DeleteModel } from "../../../common-components/models/DeleteModal";

export const Designations = () => {
  const [designationModal, setDesignationModal] = useState(false);
  const [designationData, setDesignationData] = useState(null);
  const [designationIndex, setDesignationIndex] = useState(null);
  const [designations, setDesignations] = useState([]);
  const [deleteDesignation, setDeleteDesignation] = useState(false);

  const showDesignationModal = (e, type, index) => {
    setDesignationIndex(index);
    setDesignationData(e);
    console.log(type);
    if (type == "delete") {
      setDeleteDesignation(true);
    }

    if (type != "delete") setDesignationModal(true);
  };

  useEffect(() => {
    getAllDesignations();
  }, []);

  const getAllDesignations = async () => {
    try {
      const allDesignations = await AxiosInstance.get(
        "/designations/getDesignations"
      );
      if (allDesignations.status == 200) {
        setDesignations(allDesignations.data);
      } else {
        toast.error("something went wrong !");
      }
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const updateDesignations = (data) => {
    const checkDesignation = designations.filter((e) => e._id == data._id);

    if (checkDesignation.length > 0) {
      designations[designationIndex] = data;
      setDesignations([...designations]);
    } else {
      setDesignations((old) => [...old, data]);
    }
  };

  const deleteSelectedDesignation = async (designationId) => {
    try {
      toast.dismiss();
      const deletedDesignation = await AxiosInstance.delete(
        "/designations/deleteDesignation",
        {
          params: { _id: designationId },
        }
      );
      if (deletedDesignation.status == 200) {
        const filteredDesignations = designations.filter(
          (designation) => designation._id != designationId
        );
        setDesignations([...filteredDesignations]);
        toast.success(deletedDesignation.data.message);
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
                  <h4 className="mb-sm-0 font-size-18">Trainer Designations</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Trainer Designations
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
                        onClick={() => showDesignationModal()}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Designation
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
                    <div className="card-title">Designation's List </div>
                  </div>
                  <div className="row g-4 p-4">
                    {designations.length > 0 ? (
                      designations.map((e, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="card">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-end">
                                <div className="role-heading">
                                  <h4 className="mb-2 text-primary fw-bold cursor-pointer">
                                    <a>{e.designation}</a>
                                  </h4>
                                  <div>
                                    <button
                                      onClick={() =>
                                        showDesignationModal(e, null, index)
                                      }
                                      className="btn btn-sm btn-primary role-edit-modal mx-1"
                                    >
                                      <small>Edit Designation</small>
                                    </button>
                                    <button
                                      onClick={() =>
                                        showDesignationModal(
                                          e._id,
                                          "delete",
                                          index
                                        )
                                      }
                                      className="btn btn-sm btn-danger role-edit-modal"
                                    >
                                      <small>Delete Designation</small>
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
      {designationModal && (
        <DesignationModal
          setIsOpen={setDesignationModal}
          isOpen={designationModal}
          callback={(data) => updateDesignations(data)}
          designationData={designationData}
        />
      )}

      {deleteDesignation && (
        <DeleteModel
          setIsOpen={setDeleteDesignation}
          isOpen={deleteDesignation}
          message={"Do you really want to delete this designation."}
          callback={(designationId) => deleteSelectedDesignation(designationId)}
          deleteHeader="Designation"
          data={designationData}
        />
      )}
    </div>
  );
};
