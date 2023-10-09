// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";

//     <head>

//         <meta charset="utf-8" />
//         <title>Calendar | Tonga</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta content="#" name="description" />
//         <meta content="Themesbrand" name="author" />
//         <!-- App favicon -->
//         <link rel="shortcut icon" href="assets/images/favicon.ico">

//         <link rel="stylesheet" type="text/css" href="assets/libs/tui-time-picker/tui-time-picker.min.css">
//         <link rel="stylesheet" type="text/css" href="assets/libs/tui-date-picker/tui-date-picker.min.css">
//         <link href="assets/libs/tui-calendar/tui-calendar.min.css" rel="stylesheet" type="text/css" />

//         <!-- Bootstrap Css -->
//         <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
//         <!-- Icons Css -->
//         <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
//         <!-- App Css-->
//         <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
// <style>
//     .tui-full-calendar-popup-section-item {
//         display: flex;
//         align-items: center;
//     }
//     .tui-full-calendar-section-calendar .tui-full-calendar-dropdown-button .tui-full-calendar-content {
//         white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     }
//     .tui-full-calendar-popup-section {
//         display: flex;
//     }
//     .tui-full-calendar-popup-section-item .tui-full-calendar-content {
//         white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     }
//     .tui-full-calendar-schedule-title{
//         border-bottom: 1px solid #d5d5d5;
//     }
// </style>
//     </head>

//     <body data-sidebar="dark" data-layout-mode="light">

//         <!-- Begin page -->
export const S = () => {
  return (
    <div id="layout-wrapper">
      <CommonNavbar />
      {/* ========== Left Sidebar Start ========== */}
      <MenuBar />
      {/* Left Sidebar End */}
      {/* ============================================================== */}
      {/* Start right Content here */}
      {/* ============================================================== */}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">TUI Calendar</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Calendar</a>
                      </li>
                      <li className="breadcrumb-item active">TUI Calendar</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div id="lnb">
                      <div id="right">
                        <div id="menu" className="mb-3">
                          <span
                            id="menu-navi"
                            className="d-sm-flex flex-wrap text-center text-sm-start justify-content-sm-between"
                          >
                            <div className="d-sm-flex flex-wrap gap-1">
                              <div
                                className="btn-group mb-2"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary move-day"
                                  data-action="move-prev"
                                >
                                  <i
                                    className="calendar-icon ic-arrow-line-left mdi mdi-chevron-left"
                                    data-action="move-prev"
                                  />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary move-day"
                                  data-action="move-next"
                                >
                                  <i
                                    className="calendar-icon ic-arrow-line-right mdi mdi-chevron-right"
                                    data-action="move-next"
                                  />
                                </button>
                              </div>
                              <button
                                type="button"
                                className="btn btn-primary move-today mb-2"
                                data-action="move-today"
                              >
                                Today
                              </button>
                            </div>
                            <h4
                              id="renderRange"
                              className="render-range fw-bold pt-1 mx-3"
                            />
                            <div className="dropdown align-self-start mt-3 mt-sm-0 mb-2">
                              <button
                                id="dropdownMenu-calendarType"
                                className="btn btn-primary"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <i
                                  id="calendarTypeIcon"
                                  className="calendar-icon ic_view_month"
                                  style={{ marginRight: "4px" }}
                                />
                                <span id="calendarTypeName">Dropdown</span>
                                &nbsp;
                                <i className="calendar-icon tui-full-calendar-dropdown-arrow" />
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                role="menu"
                                aria-labelledby="dropdownMenu-calendarType"
                              >
                                <li role="presentation">
                                  <a
                                    className="dropdown-item"
                                    role="menuitem"
                                    data-action="toggle-daily"
                                  >
                                    <i className="calendar-icon ic_view_day" />
                                    Daily
                                  </a>
                                </li>
                                <li role="presentation">
                                  <a
                                    className="dropdown-item"
                                    role="menuitem"
                                    data-action="toggle-weekly"
                                  >
                                    <i className="calendar-icon ic_view_week" />
                                    Weekly
                                  </a>
                                </li>
                                <li role="presentation">
                                  <a
                                    className="dropdown-item"
                                    role="menuitem"
                                    data-action="toggle-monthly"
                                  >
                                    <i className="calendar-icon ic_view_month" />
                                    Month
                                  </a>
                                </li>
                                <li role="presentation">
                                  <a
                                    className="dropdown-item"
                                    role="menuitem"
                                    data-action="toggle-weeks2"
                                  >
                                    <i className="calendar-icon ic_view_week" />
                                    2 weeks
                                  </a>
                                </li>
                                <li role="presentation">
                                  <a
                                    className="dropdown-item"
                                    role="menuitem"
                                    data-action="toggle-weeks3"
                                  >
                                    <i className="calendar-icon ic_view_week" />
                                    3 weeks
                                  </a>
                                </li>
                                <li
                                  role="presentation"
                                  className="dropdown-divider"
                                />
                                <li role="presentation">
                                  <a
                                    className="dropdown-item"
                                    role="menuitem"
                                    data-action="toggle-workweek"
                                  >
                                    <input
                                      type="checkbox"
                                      className="tui-full-calendar-checkbox-square"
                                      defaultValue="toggle-workweek"
                                      defaultChecked
                                    />
                                    <span className="checkbox-title" />
                                    Show weekends
                                  </a>
                                </li>
                                <li role="presentation">
                                  <a
                                    className="dropdown-item"
                                    role="menuitem"
                                    data-action="toggle-start-day-1"
                                  >
                                    <input
                                      type="checkbox"
                                      className="tui-full-calendar-checkbox-square"
                                      defaultValue="toggle-start-day-1"
                                    />
                                    <span className="checkbox-title" />
                                    Start Week on Monday
                                  </a>
                                </li>
                                <li role="presentation">
                                  <a
                                    className="dropdown-item"
                                    role="menuitem"
                                    data-action="toggle-narrow-weekend"
                                  >
                                    <input
                                      type="checkbox"
                                      className="tui-full-calendar-checkbox-square"
                                      defaultValue="toggle-narrow-weekend"
                                    />
                                    <span className="checkbox-title" />
                                    Narrower than weekdays
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="lnb-new-schedule float-sm-end ms-sm-3 mt-4 mt-sm-0">
                        <button
                          id="btn-new-schedule"
                          type="button"
                          className="btn btn-primary lnb-new-schedule-btn"
                          data-toggle="modal"
                        >
                          New schedule
                        </button>
                      </div>
                      <div
                        id="calendarList"
                        className="lnb-calendars-d1 mt-4 mt-sm-0 me-sm-0 mb-4"
                      />
                      <div id="calendar" style={{ height: "800px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© Skote.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by Themesbrand
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
  /* <!-- END layout-wrapper -->

        <!-- Right Sidebar -->
        <div class="right-bar">
            <div data-simplebar class="h-100">
                <div class="rightbar-title d-flex align-items-center px-3 py-4">
            
                    <h5 class="m-0 me-2">Settings</h5>

                    <a href="javascript:void(0);" class="right-bar-toggle ms-auto">
                        <i class="mdi mdi-close noti-icon"></i>
                    </a>
                </div>

                <!-- Settings -->
                <hr class="mt-0" />
                <h6 class="text-center mb-0">Choose Layouts</h6>

                <div class="p-4">
                    <div class="mb-2">
                        <img src="assets/images/layouts/layout-1.jpg" class="img-thumbnail" alt="layout images">
                    </div>

                    <div class="form-check form-switch mb-3">
                        <input class="form-check-input theme-choice" type="checkbox" id="light-mode-switch" checked>
                        <label class="form-check-label" for="light-mode-switch">Light Mode</label>
                    </div>
    
                    <div class="mb-2">
                        <img src="assets/images/layouts/layout-2.jpg" class="img-thumbnail" alt="layout images">
                    </div>
                    <div class="form-check form-switch mb-3">
                        <input class="form-check-input theme-choice" type="checkbox" id="dark-mode-switch">
                        <label class="form-check-label" for="dark-mode-switch">Dark Mode</label>
                    </div>
    
                    <div class="mb-2">
                        <img src="assets/images/layouts/layout-3.jpg" class="img-thumbnail" alt="layout images">
                    </div>
                    <div class="form-check form-switch mb-3">
                        <input class="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch">
                        <label class="form-check-label" for="rtl-mode-switch">RTL Mode</label>
                    </div>

                    <div class="mb-2">
                        <img src="assets/images/layouts/layout-4.jpg" class="img-thumbnail" alt="layout images">
                    </div>
                    <div class="form-check form-switch mb-5">
                        <input class="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch">
                        <label class="form-check-label" for="dark-rtl-mode-switch">Dark RTL Mode</label>
                    </div>

            
                </div>

            </div> <!-- end slimscroll-menu-->
        </div>
        <!-- /Right-bar -->

        <!-- Right bar overlay-->
        <div class="rightbar-overlay"></div>
        
        <!-- JAVASCRIPT -->
        <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>

        <script src="https://uicdn.toast.com/tui.code-snippet/latest/tui-code-snippet.min.js"></script>
        <script src="assets/libs/tui-dom/tui-dom.min.js"></script>

        <script src="assets/libs/tui-time-picker/tui-time-picker.min.js"></script>
        <script src="assets/libs/tui-date-picker/tui-date-picker.min.js"></script>
        
        <script src="assets/libs//moment/min/moment.min.js"></script>
        <script src="assets/libs/chance/chance.min.js"></script>

        <script src="assets/libs/tui-calendar/tui-calendar.min.js"></script>

        <script src="assets/js/pages/calendars.js"></script>
        <script src="assets/js/pages/schedules.js"></script>
        <script src="assets/js/pages/calendar.init.js"></script>

        <!-- App js -->
        <script src="assets/js/app.js"></script>

    </body>
</html> */
}