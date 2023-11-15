// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";
import { useState } from "react";
import {
  BarChart,
  DoughnutChart,
} from "../common-components/models/EarningChartModel";
import { CommonDataTable } from "../common-components/CommonDataTable";
import { courseData, tableHeaders } from "../Constants/table.constants";

export const Index = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Dashboard</h4>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-xxl-7 col-xl-7 col-lg-12">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between bg border-bottom">
                        <div className="card-title"> Top Categories </div>
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-light btn-wave btn-sm waves-effect waves-light"
                          >
                            View All
                          </button>{" "}
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row gy-xl-0 gy-3">
                          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div>
                              {" "}
                              <a className="category-link primary text-center">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="category-svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M0 0h24v24H0V0z" fill="none" />
                                  <path
                                    d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z"
                                    opacity=".3"
                                  />
                                  <path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path>
                                </svg>
                                <p className="fs-6 mb-1 text-dark fw-semibold">
                                  UI/UX Design
                                </p>
                                <span className="fs-11 text-muted">
                                  1000+ Courses
                                </span>
                              </a>{" "}
                            </div>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
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
                          </div>
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
                        {/* <div
                          id="stacked-column-chart"
                          className="apex-charts"
                          dir="ltr"
                        /> */}
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
                              928
                            </h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="text-muted fs-12">
                                Daily Registration
                              </div>
                              <div className="text-success">
                                <i className="bx bx-trending-up fs-16 me-1 align-middle d-inline-flex" />
                                +2.02%
                              </div>
                            </div>{" "}
                            <a className="text-primary fs-12">
                              View All
                              <i className="bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block" />
                            </a>
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
                              35,393
                            </h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="text-muted fs-12">
                                Total Customers
                              </div>
                              <div className="text-danger">
                                <i className="bx bx-trending-down fs-16 me-1 align-middle d-inline-flex" />
                                -0.24%
                              </div>
                            </div>{" "}
                            <a className="text-secondary fs-12">
                              View All
                              <i className="bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block" />
                            </a>
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
                              573
                            </h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="text-muted fs-12">
                                Total Trainers
                              </div>
                              <div className="text-danger">
                                <i className="bx bx-trending-down fs-16 me-1 align-middle d-inline-flex" />
                                -1.32%
                              </div>
                            </div>{" "}
                            <a className="text-warning fs-12">
                              View All
                              <i className="bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block" />
                            </a>
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
                              2,389
                            </h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="text-muted fs-12">
                                Total Courses
                              </div>
                              <div className="text-success">
                                <i className="bx bx-trending-up fs-16 me-1 align-middle d-inline-flex" />
                                +0.89%
                              </div>
                            </div>{" "}
                            <a className="text-danger fs-12">
                              View All
                              <i className="bx bx-right-arrow-alt ms-2 fw-semibold d-inline-block" />
                            </a>
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
                        <div className="card-title"> My Courses </div>
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-light btn-sm"
                          >
                            View All
                          </button>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table text-nowrap">
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
                          </table>
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
                      <li>
                        <div className="d-flex">
                          <div className="d-flex flex-fill align-items-center">
                            <div className="me-2">
                              {" "}
                              <span className="avatar avatar-rounded">
                                {" "}
                                <img
                                  src="../assets/images/faces/1.jpg"
                                  alt=""
                                />{" "}
                              </span>
                            </div>
                            <div>
                              {" "}
                              <span className="d-block fw-semibold">
                                John Henry
                              </span>{" "}
                              <span className="text-muted">M.Tech</span>{" "}
                            </div>
                          </div>
                          <div className="text-end">
                            {" "}
                            <span className="d-block text-primary fw-semibold">
                              321 Classes
                            </span>
                            <span className="text-muted">
                              Digital Marketing
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="d-flex flex-fill align-items-center">
                            <div className="me-2">
                              {" "}
                              <span className="avatar avatar-rounded">
                                {" "}
                                <img
                                  src="../assets/images/faces/5.jpg"
                                  alt=""
                                />{" "}
                              </span>
                            </div>
                            <div>
                              {" "}
                              <span className="d-block fw-semibold">
                                Mortal Yun
                              </span>{" "}
                              <span className="text-muted">P.H.D</span>{" "}
                            </div>
                          </div>
                          <div className="text-end">
                            {" "}
                            <span className="d-block text-primary fw-semibold">
                              25 Classes
                            </span>{" "}
                            <span className="text-muted">
                              Stocks &amp; Trading
                            </span>{" "}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="d-flex flex-fill align-items-center">
                            <div className="me-2">
                              {" "}
                              <span className="avatar avatar-rounded">
                                {" "}
                                <img
                                  src="../assets/images/faces/8.jpg"
                                  alt=""
                                />{" "}
                              </span>
                            </div>
                            <div>
                              {" "}
                              <span className="d-block fw-semibold">
                                Trex Con
                              </span>{" "}
                              <span className="text-muted">MBBS</span>{" "}
                            </div>
                          </div>
                          <div className="text-end">
                            {" "}
                            <span className="d-block text-primary fw-semibold">
                              39 Classes
                            </span>{" "}
                            <span className="text-muted">Science</span>{" "}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="d-flex flex-fill align-items-center">
                            <div className="me-2">
                              {" "}
                              <span className="avatar avatar-rounded">
                                {" "}
                                <img
                                  src="../assets/images/faces/12.jpg"
                                  alt=""
                                />{" "}
                              </span>
                            </div>
                            <div>
                              {" "}
                              <span className="d-block fw-semibold">
                                Saiu Sarah
                              </span>{" "}
                              <span className="text-muted">P.H.D</span>{" "}
                            </div>
                          </div>
                          <div className="text-end">
                            {" "}
                            <span className="d-block text-primary fw-semibold">
                              11 Classes
                            </span>{" "}
                            <span className="text-muted">Science</span>{" "}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="d-flex flex-fill align-items-center">
                            <div className="me-2">
                              {" "}
                              <span className="avatar avatar-rounded">
                                {" "}
                                <img
                                  src="../assets/images/faces/15.jpg"
                                  alt=""
                                />{" "}
                              </span>
                            </div>
                            <div>
                              {" "}
                              <span className="d-block fw-semibold">
                                Ion Hau
                              </span>{" "}
                              <span className="text-muted">M.Tech</span>{" "}
                            </div>
                          </div>
                          <div className="text-end">
                            {" "}
                            <span className="d-block text-primary fw-semibold">
                              124 Classes
                            </span>
                            <span className="text-muted">Web Development</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title"> New Customers </div>
                    <div>
                      {" "}
                      <button type="button" className="btn btn-sm btn-light">
                        View All
                      </button>{" "}
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table text-nowrap">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Courses</th>
                            <th scope="col">Completed</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <div className="d-flex align-items-center">
                                <div className="me-2">
                                  {" "}
                                  <span className="avatar avatar-rounded">
                                    {" "}
                                    <img
                                      src="../assets/images/faces/13.jpg"
                                      alt=""
                                    />
                                  </span>{" "}
                                </div>
                                <div>
                                  {" "}
                                  <span className="d-blockfw-semibold">
                                    Richard Dom
                                  </span>
                                  <span className="d-block fs-12 text-muted">
                                    richarddom1116@demo.com
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td>9</td>
                            <td>1</td>
                            <td>
                              <div className="hstack gap-2 fs-15">
                                {" "}
                                <a
                                  aria-label="anchor"
                                  className="btn btn-icon btn-sm btn-info rounded-pill"
                                >
                                  <i className="bx bxs-edit-alt" />
                                </a>{" "}
                                <a
                                  aria-label="anchor"
                                  className="btn btn-icon btn-sm btn-danger rounded-pill"
                                >
                                  <i className="bx bxs-trash" />
                                </a>{" "}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="d-flex align-items-center">
                                <div className="me-2">
                                  {" "}
                                  <span className="avatar avatar-rounded">
                                    {" "}
                                    <img
                                      src="../assets/images/faces/5.jpg"
                                      alt=""
                                    />
                                  </span>{" "}
                                </div>
                                <div>
                                  {" "}
                                  <span className="d-blockfw-semibold">
                                    Alicia Keys
                                  </span>
                                  <span className="d-block fs-12 text-muted">
                                    aliciakeys89@gmail.com
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td>1</td>
                            <td>0</td>
                            <td>
                              <div className="hstack gap-2 fs-15">
                                {" "}
                                <a
                                  aria-label="anchor"
                                  className="btn btn-icon btn-sm btn-info rounded-pill"
                                >
                                  <i className="bx bxs-edit-alt" />
                                </a>{" "}
                                <a
                                  aria-label="anchor"
                                  className="btn btn-icon btn-sm btn-danger rounded-pill"
                                >
                                  <i className="bx bxs-trash" />
                                </a>{" "}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="d-flex align-items-center">
                                <div className="me-2">
                                  {" "}
                                  <span className="avatar avatar-rounded">
                                    {" "}
                                    <img
                                      src="../assets/images/faces/10.jpg"
                                      alt=""
                                    />
                                  </span>{" "}
                                </div>
                                <div>
                                  {" "}
                                  <span className="d-blockfw-semibold">
                                    Robert Brook
                                  </span>
                                  <span className="d-block fs-12 text-muted">
                                    robertbrook95@gmail.com
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td>15</td>
                            <td>0</td>
                            <td>
                              <div className="hstack gap-2 fs-15">
                                {" "}
                                <a
                                  aria-label="anchor"
                                  className="btn btn-icon btn-sm btn-info rounded-pill"
                                >
                                  <i className="bx bxs-edit-alt" />
                                </a>{" "}
                                <a
                                  aria-label="anchor"
                                  className="btn btn-icon btn-sm btn-danger rounded-pill"
                                >
                                  <i className="bx bxs-trash" />
                                </a>{" "}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" className="border-bottom-0">
                              <div className="d-flex align-items-center">
                                <div className="me-2">
                                  {" "}
                                  <span className="avatar avatar-rounded">
                                    {" "}
                                    <img
                                      src="../assets/images/faces/9.jpg"
                                      alt=""
                                    />
                                  </span>{" "}
                                </div>
                                <div>
                                  {" "}
                                  <span className="d-blockfw-semibold">
                                    Alex Boi
                                  </span>{" "}
                                  <span className="d-block fs-12 text-muted">
                                    alexboi555@gmail.com
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td className="border-bottom-0">16</td>
                            <td className="border-bottom-0">3</td>
                            <td className="border-bottom-0">
                              <div className="hstack gap-2 fs-15">
                                {" "}
                                <a
                                  aria-label="anchor"
                                  className="btn btn-icon btn-sm btn-info rounded-pill"
                                >
                                  <i className="bx bxs-edit-alt" />
                                </a>{" "}
                                <a
                                  aria-label="anchor"
                                  className="btn btn-icon btn-sm btn-danger rounded-pill"
                                >
                                  <i className="bx bxs-trash" />
                                </a>{" "}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card ">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title"> Payouts </div>
                    <div className="ms-auto">
                      <ul className="nav nav-pills">
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
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* <div id="donut_chart" className="apex-charts" dir="ltr" /> */}
                    <DoughnutChart />
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
                        data={courseData}
                        tableHeaders={tableHeaders}
                        actionButtons
                        callback={(data) => console.log(data)}
                        editButton
                        deleteButton
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        {/* Transaction Modal */}
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
        {/* end modal */}
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
      {/* end main content*/}
    </div>
  );
};

{
  /* <!-- JAVASCRIPT -->
    <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>
    <script src="assets/libs/select2/js/select2.min.js"></script>
    <script src="assets/libs/smart-wizaed/smart-wizaed.js"></script>

    <!-- Required datatable js -->
    <script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
    <!-- Buttons examples -->
    <script src="assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
    <script src="assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
    <script src="assets/libs/jszip/jszip.min.js"></script>
    <script src="assets/libs/pdfmake/build/pdfmake.min.js"></script>
    <script src="assets/libs/pdfmake/build/vfs_fonts.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>

    <!-- Responsive examples -->
    <script src="assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
    <script src="assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>

    <!-- Datatable init js -->
    <script src="assets/js/pages/datatables.init.js"></script>
 <!-- apexcharts -->
 <script src="assets/libs/apexcharts/apexcharts.min.js"></script>

 <!-- apexcharts init -->
 <script src="assets/js/pages/apexcharts.init.js"></script>

 <!-- dashboard init -->
 <script src="assets/js/pages/dashboard.init.js"></script>

 <!-- App js -->
 <script src="assets/js/app.js"></script>

    <script src="assets/js/app.js"></script>
    <!-- form advanced init -->
    <script
        src="https://cdn.tiny.cloud/1/qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc/tinymce/5.10.7-133/tinymce.min.js"></script>
    <script src="assets/js/pages/email-editor.js"></script>
    
    <script>
        $('#smartwizard').smartWizard({
            transition: {
                animation: 'slideHorizontal', // Effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
            }
        });
    </script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.0/main.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth', // Default view
            events: [ // Sample events
                {
                    title: 'Event 1',
                    start: '2023-09-15',
                    end: '2023-09-16'
                },
                {
                    title: 'Event 2',
                    start: '2023-09-18',
                    end: '2023-09-20'
                }
            ]
        });
        calendar.render();
    });
</script>
    <script>

        $(document).ready(function () {

            $(".select2").select2({

                dropdownParent: $("#addUserModal")

            });

        });

    </script>
    <script>

        $(document).ready(function () {

            $(".select2").select2({

                dropdownParent: $("#editUserModal")

            });

        });

    </script>

</body>

</html> */
}
