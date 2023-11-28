import { useEffect, useState } from "react";
import { RegistrationTypeModal } from "./registrationTypeModal";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { registrationTypeHeaders } from "../../../Constants/table.constants";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { DeleteModel } from "../../../common-components/models/DeleteModal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { CommonFooter } from "../../../common-components/commonFooter";

export const RegistrationType = () => {
  const { user } = useAuth();
  const [registrationModal, setRegistrationModal] = useState(false);
  const [registrationTypes, setRegistrationTypes] = useState([]);
  const [registrationData, setRegistrationData] = useState(null);
  const [regIndex, setRegIndex] = useState(null);
  const [deleteRegModal, setDeleteRegModal] = useState(false);
  const [viewRegModal, setViewRegModal] = useState(false);

  useEffect(() => {
    getRegistrationTypes();
  }, []);

  const showRegistrationModal = (e, type, index) => {
    setRegIndex(index);
    setRegistrationData(e);

    if (type == "delete") {
      setDeleteRegModal(true);
    } else if (type == "view") setViewRegModal(true);
    else {
      setDeleteRegModal(false);
      setViewRegModal(false);
    }

    if (type != "delete") setRegistrationModal(true);
  };

  const getRegistrationTypes = async () => {
    try {
      const { data } = await AxiosInstance.get(
        "/registrationType/getRegistrationTypes"
      );
      data.map(
        (e) =>
          (e.tradeLevels = e.tradeLevels.map(
            (level) => level.tradeLevel + " , "
          ))
      );
      setRegistrationTypes(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateRegistration = (registrationData) => {
    const checkRegType = registrationTypes.filter(
      (e) => e._id == registrationData._id
    );
    if (checkRegType.length) {
      registrationData.tradeLevels = registrationData.tradeLevels.map(
        (level) => level.tradeLevel + " , "
      );
      registrationTypes[regIndex] = registrationData;
      setRegistrationTypes([...registrationTypes]);
    } else {
      registrationData.tradeLevels = registrationData.tradeLevels.map(
        (level) => level.tradeLevel + " , "
      );
      setRegistrationTypes((old) => [...old, registrationData]);
    }
  };

  const deleteRegistrationType = async (selectedData) => {
    try {
      const deletedRegistration = await AxiosInstance.delete(
        "/registrationType/deleteRegistration",
        { params: selectedData }
      );
      if (deletedRegistration.status == 200) {
        const filterRegistrationTypes = registrationTypes.filter(
          (e) => e._id != selectedData._id
        );
        setRegistrationTypes([...filterRegistrationTypes]);
        toast.success(deletedRegistration.data.message);
      } else {
        toast.error("something went wrong !");
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
                  <h4 className="mb-sm-0 font-size-18">Registration Type</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to={"/"}>Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Registration Type
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* {user.userData?.roleData?.registrationType?.create && (
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div className="row w-50">
                          
                        </div>
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => showRegistrationModal()}
                        >
                          <i className="bx bx-plus me-1 fw-semibold align-middle" />
                          Add New
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Registration Type List</div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        tableHeaders={registrationTypeHeaders}
                        data={registrationTypes}
                        actionButtons
                        viewButton
                        editButton={
                          user.userData?.roleData?.registrationType?.write
                        }
                        deleteButton={
                          user.userData?.roleData?.registrationType?.delete
                        }
                        callback={(e, type, index) =>
                          showRegistrationModal(e, type, index)
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
      {registrationModal && (
        <RegistrationTypeModal
          isOpen={registrationModal}
          setIsOpen={setRegistrationModal}
          registrationData={registrationData}
          viewModal={viewRegModal}
          callback={(e) => updateRegistration(e)}
        />
      )}

      {deleteRegModal && (
        <DeleteModel
          setIsOpen={setDeleteRegModal}
          isOpen={deleteRegModal}
          message={`Do you really want to delete ${registrationData?.registrationName}`}
          callback={(e) => deleteRegistrationType(e)}
          deleteHeader={"Registration Type"}
          data={registrationData}
        />
      )}
    </div>
  );
};
