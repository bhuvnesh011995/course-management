import { useEffect, useState } from "react";
import { NewClassModal } from "./classModal";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { classHeaders } from "../../../Constants/table.constants";
import { DeleteModel } from "../../../common-components/models/DeleteModal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export const Class = () => {
  const { user, NewAxiosInstance } = useAuth();
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
      const { data } = await NewAxiosInstance.get("/class/getClasses");
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
      toast.dismiss();
      const deleteClassData = await NewAxiosInstance.delete(
        "/class/deleteClass",
        {
          params: classData,
        }
      );
      if (deleteClassData.status == 200) {
        const filteredClasses = classes.filter((e) => e._id != classData._id);
        setClasses([...filteredClasses]);
        toast.success(deleteClassData.data.message);
      } else {
        toast.error(deleteClassData.data.message);
      }
    } catch (err) {
      toast.error("error occured");
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
                  <h4 className="mb-sm-0 font-size-18">Class Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to={"/"}>Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Class Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {user.userData?.roleData?.class?.create && (
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
                        </div> */}
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
            )}
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
                        editButton={user.userData?.roleData?.class?.write}
                        deleteButton={user.userData?.roleData?.class?.delete}
                        viewButton
                        callback={(e, type, index) => showClass(e, type, index)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
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
          message={`Do You Really Want To Delete class ${classData?.course}`}
          callback={(e) => deleteSelectedClass(e)}
          deleteHeader={"Class"}
          data={classData}
        />
      )}
    </div>
  );
};
