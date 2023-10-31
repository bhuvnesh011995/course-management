import { useEffect, useState } from "react";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { AddNewTask } from "./models/taskModal";
import { AxiosInstance } from "../../common-components/axiosInstance";

export const Task = () => {
  const [taskModel, setTaskModel] = useState(false);
  const [taskData, setTaskData] = useState({});
  const [tasks, setTasks] = useState([]);
  const [deleteTask, setDeleteTask] = useState(false);
  const [viewTask, setViewTask] = useState(false);
  const [taskIndex, setTaskIndex] = useState(null);

  useEffect(() => {
    getTasks();
  }, []);

  const showTaskModal = (e, type, index) => {
    setTaskData(e);
    setTaskIndex(index);
    if (type == "view") {
      setViewTask(true);
      setDeleteTask(false);
    } else if (type == "delete") {
      setViewTask(false);
      setDeleteTask(true);
    } else {
      setViewTask(false);
      setDeleteTask(false);
    }
    if (type != "delete") setTaskModel(true);
  };

  const getTasks = async () => {
    try {
      const { data } = await AxiosInstance.get("/task/getTasks");
      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTasks = (task) => {
    const filteredTasks = tasks.filter((e) => e._id == task._id);
    if (filteredTasks.length) {
      tasks[taskIndex] = task;
      setTasks([...tasks]);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const deleteSelectedTask = async (task) => {
    try {
      const { data } = await AxiosInstance.delete(
        "/certificates/deleteCertificate",
        { params: task }
      );
      const filteredTasks = tasks.filter((e) => e._id != task._id);
      setTasks([...filteredTasks]);
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
                  <h4 className="mb-sm-0 font-size-18">Task Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Task Management
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
                        onClick={() => showTaskModal()}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Task
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
                    <div className="card-title">Task List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Task Name</th>
                            <th>Assigned To</th>
                            <th>Assigned By</th>
                            <th>Course</th>
                            <th>Class</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Created At</th>
                            <th>Due Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Task 1</td>
                            <td>Customer A</td>
                            <td>Trainer X</td>
                            <td>Course X</td>
                            <td>Class 101</td>
                            <td>
                              <span className="badge badge-soft-danger">
                                Pending
                              </span>
                            </td>
                            <td>
                              <span className="badge badge-soft-danger">
                                High
                              </span>
                            </td>
                            <td>2023-09-5</td>
                            <td>2023-09-10</td>
                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#viewTaskModal"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editTaskModal"
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
                      </table>
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
      {taskModel && (
        <AddNewTask
          isOpen={taskModel}
          setIsOpen={setTaskModel}
          taskData={taskData}
          viewTask={viewTask}
          callback={(e) => updateTasks(e)}
        />
      )}
    </div>
  );
};
