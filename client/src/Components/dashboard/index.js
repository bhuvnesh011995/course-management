import { BarChart } from "../../common-components/models/EarningChartModel";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import {
  dashboardClassHeaders,
  dashboardCourseHeaders,
  dashboardCustomerHeaders,
} from "../../Constants/table.constants";
import { useEffect, useState } from "react";
import { filePath } from "../../common-components/useCommonUsableFunctions";
import moment from "moment";
import { Doughnut } from "react-chartjs-2";
import Img1 from "../../assets/images/companies/img-1.png";
import Img2 from "../../assets/images/companies/img-2.png";
import Img3 from "../../assets/images/companies/img-3.png";
import Img4 from "../../assets/images/companies/img-4.png";
import Img5 from "../../assets/images/companies/img-5.png";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Index = () => {
  const { NewAxiosInstance } = useAuth();
  const allRegistrationIcons = [Img1, Img2, Img3, Img4, Img5];
  const [dashboardClasses, setDashboardClasses] = useState([]);
  const [dashboardCustomers, setDashboardCustomers] = useState([]);
  const [dashboardTrainers, setDashboardTrainers] = useState([]);
  const [payoutLead, setPayoutLead] = useState({
    paid: 0,
    unPaid: 0,
  });
  const [all, setAll] = useState({
    trainers: 0,
    customers: 0,
    courses: 0,
    registrations: 0,
  });
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [dashoardCourses, setDashoardCourses] = useState([]);

  useEffect(() => {
    getDashboardClasses();
    getDashboardCustomers();
    getDashboardTrainers();
    allDashboardClassTypes();
    allDashboardCourses();
    allUsers();
  }, []);
  const getDashboardClasses = async () => {
    try {
      const dashboardClassesData = await NewAxiosInstance.get(
        "/class/getDashboardClasses"
      );
      dashboardClassesData.data.map((course, index) => {
        const startDate = moment(course.startDate).format("YYYY-MM-DD");
        const endDate = moment(course.endDate).format("YYYY-MM-DD");
        const toDayDate = moment(new Date()).format("YYYY-MM-DD");

        const totalClassDuration = moment(endDate).diff(startDate, "days");
        const totalClassDone = moment(toDayDate).diff(startDate, "days");

        const duration = moment.duration(moment(endDate).diff(startDate));

        const doneDuration = moment.duration(moment(toDayDate).diff(startDate));

        if (startDate > toDayDate) {
          dashboardClassesData.data[index].durationStatus = 0 + " %";
          dashboardClassesData.data[index].duration =
            duration.asDays() + " days" + ` (class not started)`;
        } else if (totalClassDone >= totalClassDuration) {
          dashboardClassesData.data[index].durationStatus = 100 + " %";
          dashboardClassesData.data[index].duration =
            duration.asDays() + " days" + ` (Completed)`;
        } else {
          dashboardClassesData.data[index].duration =
            duration.asDays() + " days" + ` (${doneDuration.asDays()} days)`;
          dashboardClassesData.data[index].durationStatus =
            100 -
            Math.round(
              Math.abs(
                (100 / totalClassDuration) *
                  (Math.abs(totalClassDone) - Math.abs(totalClassDuration))
              )
            ) +
            " %";
        }
      });
      setDashboardClasses(dashboardClassesData.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getDashboardCustomers = async () => {
    try {
      const dashboardCustomers = await NewAxiosInstance.get(
        "/leads/getDashboardCustomers"
      );
      setAll((old) => ({ ...old, customers: dashboardCustomers.data.length }));

      const payouts = {
        paid: 0,
        unPaid: 0,
      };
      dashboardCustomers.data.map((lead) => {
        payouts.paid += lead.completedCount;
        payouts.unPaid += lead.unCompletedCount;
      });
      setPayoutLead(payouts);
      setDashboardCustomers(dashboardCustomers.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getDashboardTrainers = async () => {
    try {
      const dashboardTrainers = await NewAxiosInstance.get(
        "/trainer/getDashboardTrainers"
      );
      setAll((old) => ({ ...old, trainers: dashboardTrainers.data.length }));
      setDashboardTrainers(dashboardTrainers.data);
    } catch (err) {
      console.error(err);
    }
  };

  const payoutChartLabels = ["Paid", "unPaid"];
  const payoutChartOptions = {
    plugins: {
      legend: {
        position: "bottom",
        maxWidth: 5,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    cutoutPercentage: 85,
  };

  const payoutChartData = {
    labels: payoutChartLabels,

    datasets: [
      {
        data: [payoutLead.paid, payoutLead.unPaid],
        backgroundColor: ["#34c38f", "#f46a6a"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
        borderWidth: 2,
        borderColor: "white",
      },
    ],
  };

  const allDashboardClassTypes = async () => {
    try {
      const totalClassTypes = await NewAxiosInstance.get(
        "/registrationType/allDashboardClassTypes"
      );
      setCategoryTypes(totalClassTypes.data);
    } catch (err) {
      console.error(err);
    }
  };

  const allDashboardCourses = async () => {
    try {
      const allCourses = await NewAxiosInstance.get(
        "/courses/allDashboardCourses"
      );
      setAll((old) => ({ ...old, courses: allCourses.data.length }));

      setDashoardCourses(allCourses.data);
    } catch (err) {
      console.error(err);
    }
  };

  const allUsers = async () => {
    try {
      const users = await NewAxiosInstance.get("/users/getUsers");
      setAll((old) => ({ ...old, registrations: users.data.users.length }));
    } catch (err) {
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
                  <h4 className="mb-sm-0 font-size-18">Dashboard</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-7 col-xl-7 col-lg-12">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between bg border-bottom">
                        <div className="card-title"> Top Categories </div>
                        <div>
                          {" "}
                          <Link
                            className="d-flex align-items-center justify-content-centerbtn btn-light btn-wave btn-sm waves-effect waves-light cursor-pointer"
                            to="/course-management/registration-type"
                          >
                            View All
                          </Link>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row gy-xl-0 gy-3">
                          {categoryTypes.length ? (
                            categoryTypes.map((type, index) => (
                              <div className="cursor-pointer col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                                <div>
                                  {" "}
                                  <a className="category-link primary text-center">
                                    {" "}
                                    <div className="category-svg">
                                      <img
                                        src={allRegistrationIcons[index]}
                                        width={40}
                                        height={40}
                                      />
                                    </div>
                                    <p className="fs-6 mb-1 text-dark fw-semibold">
                                      {type.registrationName}
                                    </p>
                                    <span className="fs-11 text-muted">
                                      {type.totalRegistrations} Courses
                                    </span>
                                  </a>{" "}
                                </div>
                              </div>
                            ))
                          ) : (
                            <div></div>
                          )}
                          {/* <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div>
                              {" "}
                              <a className="category-link secondary text-center">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="category-svg"
                                  enableBackground="new 0 0 24 24"
                                  viewBox="0 0 24 24"
                                >
                                  <g>
                                    <rect fill="none" height={24} width={24} />
                                  </g>
                                  <g>
                                    <g opacity=".3">
                                      <path d="M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5 l-0.82-1.91c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M19.99,4.01c0,0-3.55-0.69-8.23,3.99 c-1.32,1.32-2.4,3.38-2.73,4.04l2.93,2.93c0.65-0.32,2.71-1.4,4.04-2.73C20.68,7.56,19.99,4.01,19.99,4.01z M15,11 c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C17,10.1,16.1,11,15,11z"></path>
                                    </g>
                                    <g>
                                      <path d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z"></path>
                                    </g>
                                  </g>
                                </svg>
                                <p className="fs-6 mb-1 text-dark fw-semibold">
                                  Digital Marketing
                                </p>
                                <span className="fs-11 text-muted">
                                  90+ Courses
                                </span>
                              </a>{" "}
                            </div>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div>
                              {" "}
                              <a className="category-link warning text-center">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="category-svg"
                                  enableBackground="new 0 0 24 24"
                                  viewBox="0 0 24 24"
                                  id="swatchbook"
                                >
                                  <path
                                    opacity="0.2"
                                    d="M9 22H5a3.003 3.003 0 0 1-3-3V5a3.003 3.003 0 0 1 3-3h4a3.003 3.003 0 0 1 3 3v14a3.003 3.003 0 0 1-3 3z"
                                  ></path>
                                  <path
                                    opacity="0.4"
                                    d="m20.293 6.535-2.828-2.828a3.004 3.004 0 0 0-4.243 0l-1.229 1.228c0 .022.007.043.007.065v14c0 .027-.007.052-.008.08l8.301-8.302a3.004 3.004 0 0 0 0-4.243z"
                                  ></path>
                                  <circle cx={7} cy={17} r={1} opacity={1} />
                                  <path
                                    opacity={1}
                                    d="m19.065 12.007-7.073 7.072c0-.027.008-.052.008-.079a3.003 3.003 0 0 1-3 3h10a3.003 3.003 0 0 0 3-3v-4a3 3 0 0 0-2.935-2.993z"
                                  ></path>
                                </svg>
                                <p className="fs-6 mb-1 text-dark fw-semibold">
                                  Web Development
                                </p>
                                <span className="fs-11 text-muted">
                                  250+ Courses
                                </span>
                              </a>{" "}
                            </div>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div>
                              {" "}
                              <a className="category-link success">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="category-svg"
                                  enableBackground="new 0 0 24 24"
                                  viewBox="0 0 24 24"
                                >
                                  <rect fill="none" height={24} width={24} />
                                  <g opacity=".3">
                                    <path d="M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path>
                                  </g>
                                  <g>
                                    <path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path>
                                  </g>
                                </svg>
                                <p className="fs-6 mb-1 text-dark fw-semibold">
                                  Stocks &amp; Trading
                                </p>
                                <span className="fs-11 text-muted">
                                  100+ Courses
                                </span>
                              </a>{" "}
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header justify-content-between align-items-center">
                        <div className="d-sm-flex flex-wrap">
                          <div className="card-title mb-0">Earnings Report</div>
                          <div className="ms-auto">
                            <ul className="nav nav-pills">
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  Week
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  Month
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link active" href="#">
                                  Year
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <BarChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-12">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex flex-wrap align-items-top gap-2">
                          <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                            <span className="avatar-title rounded">
                              <i className="bx bx-copy-alt font-size-24" />
                            </span>
                          </div>
                          <div className="flex-fill">
                            <h5 className="d-block fw-semibold fs-18 mb-1">
                              {all.registrations}
                            </h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="text-muted fs-12">
                                total Registration
                              </div>
                              {/* <div className="text-success">
                                <i className="bx bx-trending-up fs-16 me-1 align-middle d-inline-flex" />
                                +2.02%
                              </div> */}
                            </div>{" "}
                            <Link
                              to="/admin/user-management"
                              className="text-primary fs-12"
                            >
                              View All
                              <i className="bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex flex-wrap gap-2 align-items-top">
                          <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                            <span className="avatar-title rounded">
                              <i className="bx bx-copy-alt font-size-24" />
                            </span>
                          </div>
                          <div className="flex-fill">
                            <h5 className="d-block fw-semibold fs-18 mb-1">
                              {all.customers}
                            </h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="text-muted fs-12">
                                Total Customers
                              </div>
                              {/* <div className="text-danger">
                                <i className="bx bx-trending-down fs-16 me-1 align-middle d-inline-flex" />
                                -0.24%
                              </div> */}
                            </div>{" "}
                            <Link
                              to="/customer-management"
                              className="text-secondary fs-12"
                            >
                              View All
                              <i className="bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex flex-wrap gap-2 align-items-top">
                          <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                            <span className="avatar-title rounded">
                              <i className="bx bx-copy-alt font-size-24" />
                            </span>
                          </div>
                          <div className="flex-fill">
                            <h5 className="d-block fw-semibold fs-18 mb-1">
                              {all.trainers}
                            </h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="text-muted fs-12">
                                Total Trainers
                              </div>
                              {/* <div className="text-danger">
                                <i className="bx bx-trending-down fs-16 me-1 align-middle d-inline-flex" />
                                -1.32%
                              </div> */}
                            </div>{" "}
                            <Link
                              to="/schedule/trainer"
                              className="text-warning fs-12"
                            >
                              View All
                              <i className="bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex flex-wrap gap-2 align-items-top">
                          <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                            <span className="avatar-title rounded">
                              <i className="bx bx-copy-alt font-size-24" />
                            </span>
                          </div>
                          <div className="flex-fill">
                            <h5 className="d-block fw-semibold fs-18 mb-1">
                              {all.courses}
                            </h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="text-muted fs-12">
                                Total Courses
                              </div>
                              {/* <div className="text-success">
                                <i className="bx bx-trending-up fs-16 me-1 align-middle d-inline-flex" />
                                +0.89%
                              </div> */}
                            </div>{" "}
                            <Link
                              to="/course-management/course"
                              className="text-danger fs-12"
                            >
                              View All
                              <i className="bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card  overflow-hidden">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <div className="card-title"> All Classes </div>
                        <div>
                          {" "}
                          <Link
                            className="d-flex align-items-center justify-content-centerbtn btn-light btn-wave btn-sm waves-effect waves-light cursor-pointer"
                            to="/course-management/class"
                          >
                            View All
                          </Link>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          {/* <table className="table text-nowrap">
                            <thead>
                              <tr>
                                <th scope="col">Course Title</th>
                                <th scope="col">Status</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Type</th>
                                <th scope="col">Trainer</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="align-items-center" />{" "}
                                    </div>
                                    <div> ui/ux Designing </div>
                                  </div>
                                </th>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div
                                      className="progress progress-xs course-status-progress progress-animate me-2"
                                      role="progressbar"
                                      aria-valuenow={60}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      <div
                                        className="progress-bar progress-bar-striped bg-primary"
                                        style={{ width: "60%" }}
                                      />
                                    </div>
                                    <div>60%</div>
                                  </div>
                                </td>
                                <td>3 Months</td>
                                <td>
                                  <span className="badge bg-primary">
                                    Full Time
                                  </span>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="avatar avatar-sm avatar-rounded">
                                        <img
                                          src="../assets/images/faces/2.jpg"
                                          alt=""
                                        />{" "}
                                      </span>{" "}
                                    </div>
                                    <div className="fw-semibold">
                                      Sarah Taylor
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="align-items-center" />{" "}
                                    </div>
                                    <div> Project Management </div>
                                  </div>
                                </th>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div
                                      className="progress progress-xs course-status-progress progress-animate me-2"
                                      role="progressbar"
                                      aria-valuenow={100}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      <div
                                        className="progress-bar progress-bar-striped bg-success"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div>100%</div>
                                  </div>
                                </td>
                                <td>45 Days</td>
                                <td>
                                  <span className="badge bg-success">
                                    Completed
                                  </span>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="avatar avatar-sm avatar-rounded">
                                        <img
                                          src="../assets/images/faces/11.jpg"
                                          alt=""
                                        />{" "}
                                      </span>{" "}
                                    </div>
                                    <div className="fw-semibold">
                                      Jason Smith
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="align-items-center" />{" "}
                                    </div>
                                    <div> Python </div>
                                  </div>
                                </th>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div
                                      className="progress progress-xs course-status-progress progress-animate me-2"
                                      role="progressbar"
                                      aria-valuenow={38}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      <div
                                        className="progress-bar progress-bar-striped bg-warning"
                                        style={{ width: "38%" }}
                                      />
                                    </div>
                                    <div>38%</div>
                                  </div>
                                </td>
                                <td>90 Days</td>
                                <td>
                                  <span className="badge bg-warning">
                                    Part Time
                                  </span>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="avatar avatar-sm avatar-rounded">
                                        <img
                                          src="../assets/images/faces/14.jpg"
                                          alt=""
                                        />{" "}
                                      </span>{" "}
                                    </div>
                                    <div className="fw-semibold">
                                      Alex Perira
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="align-items-center" />{" "}
                                    </div>
                                    <div> Digital Marketing </div>
                                  </div>
                                </th>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div
                                      className="progress progress-xs course-status-progress progress-animate me-2"
                                      role="progressbar"
                                      aria-valuenow={75}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      <div
                                        className="progress-bar progress-bar-striped bg-info"
                                        style={{ width: "75%" }}
                                      />
                                    </div>
                                    <div>75%</div>
                                  </div>
                                </td>
                                <td>24 Days</td>
                                <td>
                                  <span className="badge bg-info">
                                    Week End
                                  </span>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="avatar avatar-sm avatar-rounded">
                                        <img
                                          src="../assets/images/faces/8.jpg"
                                          alt=""
                                        />{" "}
                                      </span>{" "}
                                    </div>
                                    <div className="fw-semibold">
                                      Kamala Singh
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="align-items-center" />{" "}
                                    </div>
                                    <div> Full Stack Development </div>
                                  </div>
                                </th>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div
                                      className="progress progress-xs course-status-progress progress-animate me-2"
                                      role="progressbar"
                                      aria-valuenow={55}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      <div
                                        className="progress-bar progress-bar-striped bg-primary"
                                        style={{ width: "55%" }}
                                      />
                                    </div>
                                    <div>55%</div>
                                  </div>
                                </td>
                                <td>6 Months</td>
                                <td>
                                  <span className="badge bg-primary">
                                    Full Time
                                  </span>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="avatar avatar-sm avatar-rounded">
                                        <img
                                          src="../assets/images/faces/4.jpg"
                                          alt=""
                                        />{" "}
                                      </span>{" "}
                                    </div>
                                    <div className="fw-semibold">
                                      Jessica Leon
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row" className="border-bottom-0">
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="align-items-center" />{" "}
                                    </div>
                                    <div> Stocks &amp; Trading </div>
                                  </div>
                                </th>
                                <td className="border-bottom-0">
                                  <div className="d-flex align-items-center">
                                    <div
                                      className="progress progress-xs course-status-progress progress-animate me-2"
                                      role="progressbar"
                                      aria-valuenow={29}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      <div
                                        className="progress-bar progress-bar-striped bg-danger"
                                        style={{ width: "29%" }}
                                      />
                                    </div>
                                    <div>29%</div>
                                  </div>
                                </td>
                                <td className="border-bottom-0">1 Month</td>
                                <td className="border-bottom-0">
                                  <span className="badge bg-danger">
                                    Stopped
                                  </span>
                                </td>
                                <td className="border-bottom-0">
                                  <div className="d-flex align-items-center">
                                    <div className="me-2">
                                      {" "}
                                      <span className="avatar avatar-sm avatar-rounded">
                                        <img
                                          src="../assets/images/faces/12.jpg"
                                          alt=""
                                        />{" "}
                                      </span>{" "}
                                    </div>
                                    <div className="fw-semibold">
                                      Israel Khan
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table> */}
                          <CommonDataTable
                            data={dashboardClasses}
                            tableHeaders={dashboardClassHeaders}
                            tableSearchBar={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="card ">
                  <div className="card-header">
                    <div className="card-title">Top Trainers</div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled courses-Trainers mb-0">
                      {dashboardTrainers.length ? (
                        dashboardTrainers.map((trainer) => (
                          <li>
                            <div className="d-flex">
                              <div className="d-flex flex-fill align-items-center">
                                <div className="me-2">
                                  {" "}
                                  <span className="avatar avatar-rounded">
                                    {" "}
                                    {trainer.trainerImagePath && (
                                      <img
                                        src={filePath(trainer.trainerImagePath)}
                                        alt=""
                                      />
                                    )}{" "}
                                  </span>
                                </div>
                                <div>
                                  {" "}
                                  <span className="d-block fw-semibold">
                                    {trainer.trainerName}
                                  </span>{" "}
                                  <span className="text-muted">
                                    {trainer.designation}
                                  </span>
                                </div>
                              </div>
                              <div className="text-end">
                                {" "}
                                <span className="d-block text-primary fw-semibold">
                                  {trainer.classCount} Classes
                                </span>
                              </div>
                            </div>
                          </li>
                        ))
                      ) : (
                        <div></div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title"> Customers </div>
                    <div>
                      {" "}
                      <Link
                        className="d-flex align-items-center justify-content-centerbtn btn-light btn-wave btn-sm waves-effect waves-light cursor-pointer"
                        to="/lead"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={dashboardCustomers}
                        tableHeaders={dashboardCustomerHeaders}
                        tableSearchBar={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card ">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title"> Payouts </div>
                    <div className="ms-auto">
                      {/* <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            1M
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            6M
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            1Y
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                  <div className="card-body">
                    {/* <DoughnutChart
                      paid={payoutLead.paid}
                      unPaid={payoutLead.unPaid}
                    /> */}
                    <Doughnut
                      options={payoutChartOptions}
                      data={payoutChartData}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title"> Course List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={dashoardCourses}
                        tableHeaders={dashboardCourseHeaders}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade transaction-detailModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="transaction-detailModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="transaction-detailModalLabel">
                  Order Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p className="mb-2">
                  Product id: <span className="text-primary">#SK2540</span>
                </p>
                <p className="mb-4">
                  Billing Name:{" "}
                  <span className="text-primary">Neal Matthews</span>
                </p>
                <div className="table-responsive">
                  <table className="table align-middle table-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div>
                            <img
                              src="assets/images/product/img-7.png"
                              alt=""
                              className="avatar-sm"
                            />
                          </div>
                        </th>
                        <td>
                          <div>
                            <h5 className="text-truncate font-size-14">
                              Wireless Headphone (Black)
                            </h5>
                            <p className="text-muted mb-0">$ 225 x 1</p>
                          </div>
                        </td>
                        <td>$ 255</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div>
                            <img
                              src="assets/images/product/img-4.png"
                              alt=""
                              className="avatar-sm"
                            />
                          </div>
                        </th>
                        <td>
                          <div>
                            <h5 className="text-truncate font-size-14">
                              Phone patterned cases
                            </h5>
                            <p className="text-muted mb-0">$ 145 x 1</p>
                          </div>
                        </td>
                        <td>$ 145</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <h6 className="m-0 text-right">Sub Total:</h6>
                        </td>
                        <td>$ 400</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <h6 className="m-0 text-right">Shipping:</h6>
                        </td>
                        <td>Free</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <h6 className="m-0 text-right">Total:</h6>
                        </td>
                        <td>$ 400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
