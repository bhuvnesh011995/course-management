// <!doctype html>
// <html lang="en">

import { useEffect, useState } from "react";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { NewTrainerModal } from "./modals/AddTrainerModal";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { trainerHeaders } from "../../Constants/table.constants";

// <head>

//     <meta charset="utf-8" />
//     <title>Trainer Management | Tonga</title>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta content="#" name="description" />
//     <meta content="Themesbrand" name="author" />
//     <!-- App favicon -->
//     <link rel="shortcut icon" href="assets/images/favicon.ico">

//     <!-- DataTables -->
//     <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
//     <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
//         type="text/css" />

//     <!-- Responsive datatable examples -->
//     <link href="assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css" rel="stylesheet"
//         type="text/css" />

//     <!-- Bootstrap Css -->
//     <link href="assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
//     <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
//     <!-- Icons Css -->
//     <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
//     <!-- App Css-->
//     <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
//     <!-- Custom Css-->
//     <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />
//     <link rel="stylesheet" href="assets/libs/smart-wizaed/smart-wizaed.css">
//     <link href="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.0/main.css" rel="stylesheet">
//     <style>
//         #calendar {
//     width: 100%;
//     height: 100%;
// }
//         .select2-container {
//             width: 100% !important;
//         }

//         /* Styling for the custom file input container */
//         .custom-file-input {
//             position: relative;
//             display: inline-block;
//             cursor: pointer;
//             border: 1px solid #ccc;
//             padding: 0.47rem 1.75rem 0.47rem 0.75rem;
//             border-radius: 5px;
//             width: 90%;
//         }

//         /* Styling for the actual file input */
//         .custom-file-input input[type="file"] {
//             display: none;
//         }

//         .avatar-md {
//             height: 2rem;
//             width: 2rem;
//         }
//         .sw>.tab-content {
//             height: 100% !important;
//         }
//     </style>
// </head>

// <body data-sidebar="dark">

//     <!-- Start layout-wrapper -->
export const Trainer = () => {
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
    console.log(data);
  };

  const showTrainerModal = (e, type, index) => {
    setTrainerIndex(index);
    setTrainerData(e);

    if (type == "view") {
      setViewTrainer(true);
      setDeleteTrainer(false);
    } else if (type == "delete") {
      setViewTrainer(false);
      setDeleteTrainer(true);
    } else {
      setViewTrainer(false);
      setDeleteTrainer(false);
    }

    if (type != "delete") setTrainerModal(true);
  };

  const getAllTrainers = async () => {
    try {
      const { data } = await AxiosInstance.get("/trainer/getTrainers");
      setTrainers(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="layout-wrapper">
      <CommonNavbar />
      <MenuBar />
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
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Trainer Management
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
                        deleteButton
                        editButton
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
    </div>
  );
};
