// <!doctype html>
// <html lang="en">

import { useEffect, useState } from "react";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { RegistrationTypeModal } from "./models/registrationTypeModal";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { registrationTypeHeaders } from "../../Constants/table.constants";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { DeleteModel } from "../../common-components/models/DeleteModal";
import { toast } from "react-toastify";
//     <style>
//         .select2-container {
//             width: 100% !important;
//         }

//         .dropdown {
//             position: relative;
//             font-size: 14px;
//             color: #182433;
//         }

//         .dropdown .dropdown-list {
//             padding: 0;
//             background: #ffffff;
//             position: absolute;
//             top: 30px;
//             left: 2px;
//             right: 2px;
//             z-index: 1000;
//             border: 1px solid rgba(4, 32, 69, 0.14);
//             border-radius: 4px;
//             box-shadow: 0px 16px 24px 2px rgba(0, 0, 0, 0.07), 0px 6px 30px 5px rgba(0, 0, 0, 0.06), 0px 8px 10px -5px rgba(0, 0, 0, 0.1);
//             transform-origin: 50% 0;
//             transform: scale(1, 0);
//             transition: transform 0.15s ease-in-out 0.15s;
//             max-height: 66vh;
//             overflow-y: scroll;
//         }

//         .dropdown .dropdown-option {
//             display: flex;
//             align-items: center;
//             padding: 8px 12px;
//             opacity: 0;
//             transition: opacity 0.15s ease-in-out;
//         }

//         .dropdown .dropdown-label {
//             display: block;
//             background: #fff;
//             font-family: var(--tblr-font-sans-serif);
//             font-size: .875rem;
//             font-weight: 400;
//             line-height: 1.4285714286 !important;
//             padding: 0.4375rem 0.75rem !important;

//             cursor: pointer;
//             border: 1px solid #dadfe5;
//             border-radius: 4px;
//         }

//         .dropdown .dropdown-label:before {
//             font-family: "Material Design Icons";
//             content: "\f0140";
//             color: #a5a9b1;
//             float: right;
//         }

//         .dropdown.on .dropdown-list {
//             transform: scale(1, 1);
//             transition-delay: 0s;
//         }

//         .dropdown.on .dropdown-list .dropdown-option {
//             opacity: 1;
//             transition-delay: 0.2s;
//             color: #182433;
//         }

//         .dropdown.on .dropdown-label:before {
//             content: "\f0143";
//             font-family: "Material Design Icons";
//             color: #a5a9b1;
//         }

//         .dropdown [type="checkbox"] {
//             position: relative;
//             top: -1px;
//             margin-right: 4px;
//         }
//     </style>

// </head>
export const RegistrationType = () => {
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
      console.log(registrationData);
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
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Registration Type
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
                        {/* <div className="col-xl-5">
                          <select className="form-select">
                            <option key={"CA"} value="CA">
                              Newest
                            </option>
                            <option key={"NV"} value="NV">
                              Oldest
                            </option>
                            <option key={"OR"} value="OR">
                              Recent
                            </option>
                          </select>
                        </div> */}
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
                        editButton
                        deleteButton
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
