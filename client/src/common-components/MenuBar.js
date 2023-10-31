import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MenuBar = () => {
  const [previousMenu, setPreviousMenu] = useState("");

  const showMenuList = (menuName) => {
    const element = document.getElementById(menuName);
    if (element.classList.contains("mm-show")) {
      element.classList.remove("mm-show");
      element.parentElement.classList.remove("mm-active");
    } else {
      element.parentElement.classList.add("mm-active");
      element.classList.add("mm-show");
    }
    setPreviousMenu(menuName);
    closePreviousMenu(menuName);
  };

  const closePreviousMenu = (nextMenu) => {
    if (previousMenu != nextMenu) {
      if (previousMenu == "menu-admin" && nextMenu == "roles-menu") return;
      if (previousMenu == "roles-menu" && nextMenu != "roles-menu") {
        const element = document.getElementById("menu-admin");
        if (element)
          if (element.classList.contains("mm-show")) {
            element.classList.remove("mm-show");
            element.parentElement.classList.remove("mm-active");
          }
      }
      const element = document.getElementById(previousMenu);
      if (element)
        if (element.classList.contains("mm-show")) {
          element.classList.remove("mm-show");
          element.parentElement.classList.remove("mm-active");
        }
    }
  };

  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled mm-show" id="side-menu">
            <li className="mm-active">
              <Link to="/" className="waves-effect active">
                <i className="bx bx-home-circle" />
                <span className="badge rounded-pill bg-info float-end">02</span>
                <span key="t-dashboards">Dashboard</span>
              </Link>
            </li>
            <li>
              <a
                onClick={() => showMenuList("menu-admin")}
                className="has-arrow waves-effect"
              >
                <i className="bx bx-user" />
                <span>Admin</span>
              </a>
              <ul className="sub-menu mm-collapse " id="menu-admin">
                <li>
                  <Link to="/user-management">User Managment</Link>
                </li>
                <li>
                  <Link
                    to="/roles"
                    className="sub-menu"
                    // onClick={() => showMenuList("roles-menu")}
                  >
                    Roles and Permission
                  </Link>
                  {/* <ul className="sub-menu mm-collapse" id="roles-menu">
                    <li>
                      <Link to="/roles">Roles</Link>
                    </li>
                    <li>
                      <Link to="/permission">Permissions</Link>
                    </li>
                  </ul> */}
                </li>
              </ul>
            </li>
            <li>
              <Link to="/customer-management" className="waves-effect">
                <i className="bx bxs-graduation" />
                <span key="t-Customer">Customer </span>
              </Link>
            </li>
            <li>
              <Link to="/lead" className="waves-effect">
                <i className="bx bx-task" />
                <span key="t-lead">Lead </span>
              </Link>
            </li>
            <li>
              <a
                className="has-arrow waves-effect"
                onClick={() => showMenuList("schedule-menu")}
              >
                <i className="bx bx-calendar" />
                <span key="t-scedule">Scedule </span>
              </a>
              <ul
                className="sub-menu mm-collapse"
                id="schedule-menu"
                aria-expanded="false"
              >
                <li>
                  <Link to="/scheduling">Calendar</Link>
                </li>
                <li>
                  <Link to="/trainer">Trainers</Link>
                </li>
                <li>
                  <Link to="/date-range">Holidays</Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={() => showMenuList("finance-menu")}
                className="has-arrow waves-effect"
              >
                <i className="bx bx-dollar" />
                <span key="t-finance">Finance </span>
              </a>
              <ul className="sub-menu mm-collapse" id="finance-menu">
                <li>
                  <Link to="/quotation">Quotation Management</Link>
                </li>
                <li>
                  <Link to="/sales-quotation">Sales Quotation</Link>
                </li>
                <li>
                  <Link to="/invoice">Invoice Management</Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={() => showMenuList("course-management-menu")}
                className="has-arrow waves-effect"
              >
                <i className="bx bx-food-menu" />
                <span key="t-course">Course Managment</span>
              </a>
              <ul className="sub-menu mm-collapse" id="course-management-menu">
                <li>
                  <Link to="/registration-type">Registration Type</Link>
                </li>
                <li>
                  <Link to="/trade-level">Trade Level</Link>
                </li>
                <li>
                  <Link to="/trade-type">Trade Types</Link>
                </li>
                <li>
                  <Link to="/course">Courses</Link>
                </li>
                <li>
                  <Link to="/class">Class</Link>
                </li>
                <li>
                  <Link to="/certificate">Certificate Generation</Link>
                </li>
                {/* <li>
                  <Link to="/task">Task </Link>
                </li> */}
                <li>
                  <Link to="/attendance">Attendance</Link>
                </li>
                <li>
                  <Link to="/feedback">Feedback</Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow waves-effect"
                onClick={() => showMenuList("hrms-menu")}
              >
                <i className="bx bx-customize" />
                <span key="t-hrms">HRMS</span>
              </a>
              <ul className="sub-menu mm-collapse" id="hrms-menu">
                <li>
                  <Link to="/employee">Employee Management</Link>
                </li>
                <li>
                  <Link to="/payroll">Payroll Maagment</Link>
                </li>
                <li>
                  <Link to="/leave">Leave Management</Link>
                </li>
                <li>
                  <Link to="/timesheet">Timesheet Tracking</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Sidebar */}
      </div>
    </div>
  );
};
