// <!doctype html>
// <html lang="en">

import { useEffect, useState } from "react";
import { CourseModal } from "./courseModal";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { courseHeaders } from "../../../Constants/table.constants";
import { DeleteModel } from "../../../common-components/models/DeleteModal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export const Course = () => {
  const { user, NewAxiosInstance } = useAuth();
  const [tradeTypes, setTradeTypes] = useState([]);
  const [registrationTypes, setRegistrationTypes] = useState([]);
  const [courseModal, setCourseModal] = useState(false);
  const [courseIndex, setCourseIndex] = useState(null);
  const [viewCourse, setViewCourse] = useState(false);
  const [deleteCourse, setDeleteCourse] = useState(false);
  const [allCourses, setAllCourses] = useState([]);
  const [onOffCourses, setOnOffCourses] = useState({
    active: 0,
    inActive: 0,
  });
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    getAllCourses();
    getTradeTypes();
    getRegistrationTypes();
  }, []);

  const getTradeTypes = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/trades/getTradeTypes");
      setTradeTypes(data.allTradeTypes);
    } catch (err) {
      console.error(err);
    }
  };

  const getRegistrationTypes = async () => {
    try {
      const { data } = await NewAxiosInstance.get(
        "/registrationType/getRegistrationTypes"
      );
      setRegistrationTypes(data);
    } catch (err) {
      console.error(err);
    }
  };

  const showCourseModal = (data, type, index) => {
    setCourseIndex(index);
    setCourseData(data);
    if (type == "view") {
      setViewCourse(true);
      setDeleteCourse(false);
    } else if (type == "delete") {
      setDeleteCourse(true);
      setViewCourse(false);
    } else {
      setDeleteCourse(false);
      setViewCourse(false);
    }
    if (type != "delete") setCourseModal(true);
  };

  const getAllCourses = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/courses/getCourses");
      const onOffCourses = {
        active: 0,
        inActive: 0,
      };
      data.allCourses.map((course) => {
        if (course.ActiveCourses.length > 0) {
          onOffCourses.active += 1;
        } else {
          onOffCourses.inActive += 1;
        }
      });
      setOnOffCourses({ ...onOffCourses });

      setAllCourses(data.allCourses);
    } catch (err) {
      console.error(err);
    }
  };

  const updateCourses = (course) => {
    const checkCourses = allCourses.filter((e) => e._id == course._id);
    if (checkCourses.length) {
      allCourses[courseIndex] = course;
      setAllCourses([...allCourses]);
    } else {
      setAllCourses((old) => [...old, course]);
      onOffCourses.inActive += 1;
      setOnOffCourses({ ...onOffCourses });
    }
  };

  const deleteSelectedCourse = async (course) => {
    try {
      toast.dismiss();
      const deletedCourse = await NewAxiosInstance.delete(
        "/courses/deleteCourse",
        {
          params: course,
        }
      );
      if (deletedCourse.status == 200) {
        const filteredCourses = allCourses.filter((e) => e._id != course._id);
        const onOffCourses = {
          active: 0,
          inActive: 0,
        };
        filteredCourses.map((course) => {
          if (course.ActiveCourses.length > 0) {
            onOffCourses.active += 1;
          } else {
            onOffCourses.inActive += 1;
          }
        });
        setOnOffCourses({ ...onOffCourses });
        setAllCourses([...filteredCourses]);

        toast.success(deletedCourse.data.message);
      } else {
        toast.error(deletedCourse.data.message);
      }
    } catch (err) {
      toast.error("error occured");
      console.error(err);
    }
  };

  return (
    <div>
      <div id="layout-wrapper">
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Course Management</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link to={"/"}>Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">
                          Course Management
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {user.userData?.roleData?.courses?.create && (
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-body p-3">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                          <div className="row w-50"></div>
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => showCourseModal()}
                          >
                            <i className="bx bx-plus me-1 fw-semibold align-middle" />
                            Add New Course
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="row">
                <div className="col-lg-3">
                  <div className="card mini-stats-wid">
                    <div className="card-body">
                      <div className="d-flex flex-wrap">
                        <div className="me-3">
                          <p className="text-muted mb-2">Active Course</p>
                          <h5 className="mb-0">{onOffCourses.active}</h5>
                        </div>
                        <div className="avatar-sm ms-auto">
                          <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                            <i className="mdi mdi-book" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card blog-stats-wid">
                    <div className="card-body">
                      <div className="d-flex flex-wrap">
                        <div className="me-3">
                          <p className="text-muted mb-2">Pending Course</p>
                          <h5 className="mb-0">{onOffCourses.inActive}</h5>
                        </div>
                        <div className="avatar-sm ms-auto">
                          <div className="avatar-title bg-danger bg-soft rounded-circle text-primary font-size-20">
                            <i className="mdi mdi-clock-alert text-danger" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card blog-stats-wid">
                    <div className="card-body">
                      <div className="d-flex flex-wrap">
                        <div className="me-3">
                          <p className="text-muted mb-2">Free Courses</p>
                          <h5 className="mb-0">
                            {
                              allCourses.filter((course) => course.price == 0)
                                .length
                            }
                          </h5>
                        </div>
                        <div className="avatar-sm ms-auto">
                          <div className="avatar-title bg-success bg-soft rounded-circle text-success font-size-20">
                            <i className="mdi mdi-note" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card blog-stats-wid">
                    <div className="card-body">
                      <div className="d-flex flex-wrap">
                        <div className="me-3">
                          <p className="text-muted mb-2">Paid Courses</p>
                          <h5 className="mb-0">
                            {
                              allCourses.filter((course) => course.price > 0)
                                .length
                            }
                          </h5>
                        </div>
                        <div className="avatar-sm ms-auto">
                          <div className="avatar-title bg-warning bg-soft rounded-circle text-warning font-size-20">
                            <i className="bx bx-dollar" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-md-12">
                  <div className="card ">
                    <div className="card-header justify-content-between">
                      <div className="card-title">Course List </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <CommonDataTable
                          tableHeaders={courseHeaders}
                          data={allCourses}
                          actionButtons
                          editButton={user.userData?.roleData?.courses?.write}
                          deleteButton={
                            user.userData?.roleData?.courses?.delete
                          }
                          viewButton
                          callback={(e, type, index) =>
                            showCourseModal(e, type, index)
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
      </div>
      {courseModal && (
        <CourseModal
          setIsOpen={setCourseModal}
          isOpen={courseModal}
          tradeTypes={tradeTypes}
          registrationTypes={registrationTypes}
          courseData={courseData}
          viewCourse={viewCourse}
          callback={(e) => updateCourses(e)}
        />
      )}
      {deleteCourse && (
        <DeleteModel
          setIsOpen={setDeleteCourse}
          isOpen={deleteCourse}
          message={`do you really want to delete this course !`}
          callback={(e) => deleteSelectedCourse(e)}
          deleteHeader={"Course"}
          data={courseData}
        />
      )}
    </div>
  );
};
