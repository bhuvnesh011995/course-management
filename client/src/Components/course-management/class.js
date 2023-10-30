import { useEffect, useState } from "react";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { NewClassModal } from "./models/classModal";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { classHeaders } from "../../Constants/table.constants";
import { DeleteModel } from "../../common-components/models/DeleteModal";

export const Class = () => {
  const [classModal, setClassModal] = useState(false);
  const [classes, setClasses] = useState([]);
  const [classData, setClassData] = useState({});
  const [classIndex, setClassIndex] = useState(null);
  const [viewClass, setViewClass] = useState(false);
  const [deleteClass, setDeleteClass] = useState(false);

  useEffect(() => {
    getClasses();
  }, []);

  const showClass = async (data, type, index) => {
    setClassIndex(index);
    setClassData(data);
    if (type == "view") {
      setViewClass(true);
      setDeleteClass(false);
    } else if (type == "delete") {
      setDeleteClass(true);
      setViewClass(false);
    } else {
      setViewClass(false);
      setDeleteClass(false);
    }
    if (type != "delete") setClassModal(true);
  };

  const getClasses = async () => {
    try {
      const { data } = await AxiosInstance.get("/class/getClasses");
      setClasses(data.classes);
    } catch (err) {
      console.error(err);
    }
  };

  const updateClasses = (data) => {
    const filterClass = classes.filter((e) => e._id == data._id);
    if (filterClass.length) {
      classes[classIndex] = data;
      setClasses([...classes]);
    } else {
      setClasses([...classes, data]);
    }
  };

  const deleteSelectedClass = async (classData) => {
    try {
      const { data } = await AxiosInstance.delete("/class/deleteClass", {
        params: classData,
      });
      const filteredClasses = classes.filter((e) => e._id != classData._id);

      setClasses([...filteredClasses]);
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
                  <h4 className="mb-sm-0 font-size-18">Class Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Class Management
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
                        onClick={() => showClass()}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Class
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
                    <div className="card-title">Class List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        tableHeaders={classHeaders}
                        data={classes}
                        actionButtons
                        editButton
                        deleteButton
                        viewButton
                        callback={(e, type, index) => showClass(e, type, index)}
                      />
                      {/* <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th scope="col">Class Code</th>
                            <th>Trainer</th>
                            <th>Course</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Class Timing</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>CS101</td>
                            <td>John Doe</td>
                            <td>Computer Science</td>
                            <td>01 Jan,2023</td>
                            <td>01 June, 2023</td>
                            <td>10:00 AM - 12:00 PM</td>
                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#viewClassModal"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editClassModal"
                              >
                                <i className="mdi mdi-pencil" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-danger rounded-pill"
                              >
                                <i className="mdi mdi-trash-can" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table> */}
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
      {classModal && (
        <NewClassModal
          setIsOpen={setClassModal}
          isOpen={classModal}
          classData={classData}
          viewClass={viewClass}
          callback={(e) => updateClasses(e)}
        />
      )}
      {deleteClass && (
        <DeleteModel
          isOpen={deleteClass}
          setIsOpen={setDeleteClass}
          message={`Do You Really Want To Delete class ${classData.classCode}`}
          callback={(e) => deleteSelectedClass(e)}
          deleteHeader={"Class"}
          data={classData}
        />
      )}
    </div>
  );
};
