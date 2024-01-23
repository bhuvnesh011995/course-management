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
  Legend,
);

export const Index = () => {
  const { NewAxiosInstance, user } = useAuth();
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
    // googleAuthenticate();
    getDashboardClasses();
    getDashboardCustomers();
    getDashboardTrainers();
    allDashboardClassTypes();
    allDashboardCourses();
    allUsers();
  }, []);

  // const googleAuthenticate = async (classEvents) => {
  //   try {
  //     const response = await NewAxiosInstance.get("/google/googleAuthUrl");
  //     if (response.status == 200) {
  //       if (response.data?.isAuthenticated) {
  //         return;
  //       }
  //       window.open(response.data.redirectCalendarUrl);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const getDashboardClasses = async () => {
    try {
      const dashboardClassesData = await NewAxiosInstance.get(
        "/class/getDashboardClasses",
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
                  (Math.abs(totalClassDone) - Math.abs(totalClassDuration)),
              ),
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
        "/leads/getDashboardCustomers",
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
        "/trainer/getDashboardTrainers",
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
        "/registrationType/allDashboardClassTypes",
      );
      setCategoryTypes(totalClassTypes.data);
    } catch (err) {
      console.error(err);
    }
  };

  const allDashboardCourses = async () => {
    try {
      const allCourses = await NewAxiosInstance.get(
        "/courses/allDashboardCourses",
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
    <div id='layout-wrapper'>
      <div className='main-content'>
        <div className='page-content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
                  <h4 className='mb-sm-0 font-size-18'>Dashboard</h4>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xxl-7 col-xl-7 col-lg-12'>
                <div className='row'>
                  <div className='col-xl-12'>
                    <div className='card'>
                      <div className='card-header d-flex justify-content-between bg border-bottom'>
                        <div className='card-title'> Top Categories </div>
                        {user.userData?.roleData?.registrationType?.read && (
                          <div>
                            {" "}
                            <Link
                              className='d-flex align-items-center justify-content-centerbtn btn-light btn-wave btn-sm waves-effect waves-light cursor-pointer'
                              to='/course-management/registration-type'
                            >
                              View All
                            </Link>
                          </div>
                        )}
                      </div>
                      <div className='card-body'>
                        <div className='row gy-xl-0 gy-3'>
                          {categoryTypes.length ? (
                            categoryTypes.map((type, index) => (
                              <div className='cursor-pointer col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 p-2'>
                                <div>
                                  {" "}
                                  <a className='category-link primary text-center'>
                                    {" "}
                                    <div className='category-svg'>
                                      <img
                                        src={allRegistrationIcons[index]}
                                        width={40}
                                        height={40}
                                      />
                                    </div>
                                    <p className='fs-6 mb-1 text-dark fw-semibold'>
                                      {type.registrationName}
                                    </p>
                                    <span className='fs-11 text-muted'>
                                      {type.totalRegistrations} Courses
                                    </span>
                                  </a>{" "}
                                </div>
                              </div>
                            ))
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className='col-xl-12'>
                    <div className='card'>
                      <div className='card-header justify-content-between align-items-center'>
                        <div className='d-sm-flex flex-wrap'>
                          <div className='card-title mb-0'>Earnings Report</div>
                          <div className='ms-auto'>
                            <ul className='nav nav-pills'>
                              <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                  Week
                                </a>
                              </li>
                              <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                  Month
                                </a>
                              </li>
                              <li className='nav-item'>
                                <a className='nav-link active' href='#'>
                                  Year
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='card-body'>
                        <BarChart />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className='col-xxl-5 col-xl-5 col-lg-12'>
                <div className='row'>
                  {user.userData?.roleData?.userManagement?.read && (
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                      <div className='card '>
                        <div className='card-body'>
                          <div className='d-flex flex-wrap align-items-top gap-2'>
                            <div className='mini-stat-icon avatar-sm rounded-circle bg-primary'>
                              <span className='avatar-title rounded'>
                                <i className='bx bx-copy-alt font-size-24' />
                              </span>
                            </div>
                            <div className='flex-fill'>
                              <h5 className='d-block fw-semibold fs-18 mb-1'>
                                {all.registrations}
                              </h5>
                              <div className='d-flex justify-content-between align-items-center'>
                                <div className='text-muted fs-12'>
                                  total Registration
                                </div>
                                {/* <div className="text-success">
                                <i className="bx bx-trending-up fs-16 me-1 align-middle d-inline-flex" />
                                +2.02%
                              </div> */}
                              </div>{" "}
                              <Link
                                to='/admin/user-management'
                                className='text-primary fs-12'
                              >
                                View All
                                <i className='bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block' />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {user.userData?.roleData?.customer?.read && (
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                      <div className='card '>
                        <div className='card-body'>
                          <div className='d-flex flex-wrap gap-2 align-items-top'>
                            <div className='mini-stat-icon avatar-sm rounded-circle bg-primary'>
                              <span className='avatar-title rounded'>
                                <i className='bx bx-copy-alt font-size-24' />
                              </span>
                            </div>
                            <div className='flex-fill'>
                              <h5 className='d-block fw-semibold fs-18 mb-1'>
                                {all.customers}
                              </h5>
                              <div className='d-flex justify-content-between align-items-center'>
                                <div className='text-muted fs-12'>
                                  Total Customers
                                </div>
                                {/* <div className="text-danger">
                                <i className="bx bx-trending-down fs-16 me-1 align-middle d-inline-flex" />
                                -0.24%
                              </div> */}
                              </div>{" "}
                              <Link
                                to='/customer-management'
                                className='text-secondary fs-12'
                              >
                                View All
                                <i className='bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block' />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {user.userData?.roleData?.trainer?.read && (
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                      <div className='card '>
                        <div className='card-body'>
                          <div className='d-flex flex-wrap gap-2 align-items-top'>
                            <div className='mini-stat-icon avatar-sm rounded-circle bg-primary'>
                              <span className='avatar-title rounded'>
                                <i className='bx bx-copy-alt font-size-24' />
                              </span>
                            </div>
                            <div className='flex-fill'>
                              <h5 className='d-block fw-semibold fs-18 mb-1'>
                                {all.trainers}
                              </h5>
                              <div className='d-flex justify-content-between align-items-center'>
                                <div className='text-muted fs-12'>
                                  Total Trainers
                                </div>
                                {/* <div className="text-danger">
                                <i className="bx bx-trending-down fs-16 me-1 align-middle d-inline-flex" />
                                -1.32%
                              </div> */}
                              </div>{" "}
                              <Link
                                to='/schedule/trainer'
                                className='text-warning fs-12'
                              >
                                View All
                                <i className='bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block' />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {user.userData?.roleData?.courses?.read && (
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                      <div className='card '>
                        <div className='card-body'>
                          <div className='d-flex flex-wrap gap-2 align-items-top'>
                            <div className='mini-stat-icon avatar-sm rounded-circle bg-primary'>
                              <span className='avatar-title rounded'>
                                <i className='bx bx-copy-alt font-size-24' />
                              </span>
                            </div>
                            <div className='flex-fill'>
                              <h5 className='d-block fw-semibold fs-18 mb-1'>
                                {all.courses}
                              </h5>
                              <div className='d-flex justify-content-between align-items-center'>
                                <div className='text-muted fs-12'>
                                  Total Courses
                                </div>
                                {/* <div className="text-success">
                                <i className="bx bx-trending-up fs-16 me-1 align-middle d-inline-flex" />
                                +0.89%
                              </div> */}
                              </div>{" "}
                              <Link
                                to='/course-management/course'
                                className='text-danger fs-12'
                              >
                                View All
                                <i className='bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block' />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {user.userData?.roleData?.class?.read && (
                  <div className='row'>
                    <div className='col-xl-12'>
                      <div className='card  overflow-hidden'>
                        <div className='card-header d-flex align-items-center justify-content-between'>
                          <div className='card-title'> All Classes </div>
                          <div>
                            {" "}
                            <Link
                              className='d-flex align-items-center justify-content-centerbtn btn-light btn-wave btn-sm waves-effect waves-light cursor-pointer'
                              to='/course-management/class'
                            >
                              View All
                            </Link>
                          </div>
                        </div>
                        <div className='card-body p-0'>
                          <div className='table-responsive'>
                            <CommonDataTable
                              data={dashboardClasses}
                              tableHeaders={dashboardClassHeaders}
                              tableSearchBar={false}
                              selectDataByOne
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='row'>
              {user.userData?.roleData?.trainer?.read && (
                <div className='col-xl-3'>
                  <div className='card '>
                    <div className='card-header'>
                      <div className='card-title'>Top Trainers</div>
                    </div>
                    <div className='card-body'>
                      <ul className='list-unstyled courses-Trainers mb-0'>
                        {dashboardTrainers.length ? (
                          dashboardTrainers.map((trainer) => (
                            <li>
                              <div className='d-flex'>
                                <div className='d-flex flex-fill align-items-center'>
                                  <div className='me-2'>
                                    {" "}
                                    <span className='avatar avatar-rounded'>
                                      {" "}
                                      {trainer.trainerImagePath && (
                                        <img
                                          src={filePath(
                                            trainer.trainerImagePath,
                                          )}
                                          alt=''
                                        />
                                      )}{" "}
                                    </span>
                                  </div>
                                  <div>
                                    {" "}
                                    <span className='d-block fw-semibold'>
                                      {trainer.trainerName}
                                    </span>{" "}
                                    <span className='text-muted'>
                                      {trainer.designation}
                                    </span>
                                  </div>
                                </div>
                                <div className='text-end'>
                                  {" "}
                                  <span className='d-block text-primary fw-semibold'>
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
              )}
              {user.userData?.roleData?.customer?.read && (
                <div className='col-xl-5'>
                  <div className='card '>
                    <div className='card-header justify-content-between'>
                      <div className='card-title'> Customers </div>
                      <div>
                        {" "}
                        <Link
                          className='d-flex align-items-center justify-content-centerbtn btn-light btn-wave btn-sm waves-effect waves-light cursor-pointer'
                          to='/lead'
                        >
                          View All
                        </Link>
                      </div>
                    </div>
                    <div className='card-body p-0'>
                      <div className='table-responsive'>
                        <CommonDataTable
                          data={dashboardCustomers}
                          tableHeaders={dashboardCustomerHeaders}
                          tableSearchBar={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {user.userData?.roleData?.lead?.read && (
                <div className='col-xl-4'>
                  <div className='card '>
                    <div className='card-header d-flex align-items-center justify-content-between'>
                      <div className='card-title'> Payouts </div>
                      <div className='ms-auto'>
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
                    <div className='card-body'>
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
              )}
            </div>
            {user.userData?.roleData?.courses?.read && (
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='card '>
                    <div className='card-header justify-content-between'>
                      <div className='card-title'> Course List </div>
                    </div>
                    <div className='card-body'>
                      <div className='table-responsive'>
                        <CommonDataTable
                          data={dashoardCourses}
                          tableHeaders={dashboardCourseHeaders}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
