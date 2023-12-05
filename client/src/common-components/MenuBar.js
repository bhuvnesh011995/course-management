import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useLocation } from "react-router-dom";

export const MenuBar = () => {
  const { pathname } = useLocation();
  const [previousMenu, setPreviousMenu] = useState("");

  useEffect(() => {
    showMenuList(`${pathname.split("/")[1]}-menu`);
    const element = document.getElementById(`${pathname.split("/")[1]}-menu`);

    if (element)
      if (!element.classList.contains("mm-show")) {
        element.classList.add("mm-show");
        element.parentElement.classList.add("mm-active");
      }
  }, [pathname]);

  const showMenuList = (menuName) => {
    const element = document.getElementById(menuName);
    if (element)
      if (element.classList.contains("mm-show")) {
        element.classList.remove("mm-show");
        element.parentElement.classList.remove("mm-active");
      } else {
        element.parentElement.classList.add("mm-active");
        element.classList.add("mm-show");
      }
    setPreviousMenu(menuName);
    closePreviousMenu(menuName ? menuName : `${pathname.split("/")[1]}`);
  };

  const closePreviousMenu = (nextMenu) => {
    if (previousMenu)
      if (previousMenu != nextMenu) {
        const element = document.getElementById(previousMenu);
        if (element)
          if (element.classList.contains("mm-show")) {
            element.classList.remove("mm-show");
            element.parentElement.classList.remove("mm-active");
          }
      }
  };

  return (
    <div
      className="vertical-menu"
      style={{ overflow: "hidden", overflowY: true }}
    >
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled mm-show" id="side-menu">
            <li className={`${pathname == "/" && "mm-active"}`}>
              <Link
                to="/"
                className={`waves-effect ${pathname.split("/")[1] == ""}`}
                onClick={() => showMenuList()}
              >
                <i className="bx bx-home-circle" />
                <span className="badge rounded-pill bg-info float-end">02</span>
                <span key="t-dashboards">
                  <FormattedMessage
                    id="Dashboard"
                    defaultMessage={"Dashboard"}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/lead"
                className={`waves-effect ${
                  pathname.split("/")[1] == "lead" && "mm-active"
                }`}
                onClick={() => showMenuList()}
              >
                <i className="bx bx-task" />
                <span key="t-lead">
                  <FormattedMessage id="Lead" defaultMessage={"Lead"} />{" "}
                </span>
              </Link>
            </li>
            <li>
              <a
                className={`has-arrow waves-effect ${
                  pathname.split("/")[1] == "schedule" && "mm-active"
                }`}
                onClick={() => showMenuList("schedule-menu")}
              >
                <i className="bx bx-calendar" />
                <span key="t-course">
                  <FormattedMessage id="Schedule" defaultMessage={"Schedule"} />
                </span>
              </a>
              <ul
                className="sub-menu mm-collapse"
                id="schedule-menu"
                aria-expanded="false"
              >
                <li
                  className={`${
                    pathname.split("/")[2] == "scheduling" && "mm-active"
                  }`}
                >
                  <Link to="/schedule/scheduling">
                    <FormattedMessage
                      id="Calendar"
                      defaultMessage={"Calendar"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "trainer" && "mm-active"
                  }`}
                >
                  <Link to="/schedule/trainer">
                    <FormattedMessage
                      id="Trainers"
                      defaultMessage={"Trainers"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "date-range" && "mm-active"
                  }`}
                >
                  <Link to="/schedule/date-range">
                    <FormattedMessage
                      id="Holidays"
                      defaultMessage={"Holidays"}
                    />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={() => showMenuList("course-management-menu")}
                className={`has-arrow waves-effect ${
                  pathname.split("/")[1] == "course-management" && "mm-active"
                }`}
              >
                <i className="bx bx-food-menu" />
                <span key="t-course">
                  <FormattedMessage
                    id="Course_Management"
                    defaultMessage={"Course Management"}
                  />
                </span>
              </a>
              <ul className="sub-menu mm-collapse" id="course-management-menu">
                <li
                  className={`${
                    pathname.split("/")[2] == "registration-type" && "mm-active"
                  }`}
                >
                  <Link to="/course-management/registration-type">
                    <FormattedMessage
                      id="Registration_Type"
                      defaultMessage={"Registration Type"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "trade-level" && "mm-active"
                  }`}
                >
                  <Link to="/course-management/trade-level">
                    <FormattedMessage
                      id="Trade_Level"
                      defaultMessage={"Trade Level"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "trade-type" && "mm-active"
                  }`}
                >
                  <Link to="/course-management/trade-type">
                    <FormattedMessage
                      id="Trade_Types"
                      defaultMessage={"Trade Types"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "course" && "mm-active"
                  }`}
                >
                  <Link to="/course-management/course">
                    <FormattedMessage id="Courses" defaultMessage={"Courses"} />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "class" && "mm-active"
                  }`}
                >
                  <Link to="/course-management/class">
                    <FormattedMessage id="Class" defaultMessage={"Class"} />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "certificate" && "mm-active"
                  }`}
                >
                  <Link to="/course-management/certificate">
                    <FormattedMessage
                      id="Certificate_Generation"
                      defaultMessage={"Certificate Generation"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "attendance" && "mm-active"
                  }`}
                >
                  <Link to="/course-management/attendance">
                    <FormattedMessage
                      id="Attendance"
                      defaultMessage={"Attendance"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "feedback" && "mm-active"
                  }`}
                >
                  <Link to="/course-management/feedback">
                    <FormattedMessage
                      id="Feedback"
                      defaultMessage={"Feedback"}
                    />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/customer-management"
                className={`waves-effect ${
                  pathname.split("/")[1] == "customer-management" && "mm-active"
                }`}
                onClick={() => showMenuList()}
              >
                <i className="bx bxs-graduation" />
                <span key="t-Customer">
                  <FormattedMessage id="Customer" defaultMessage={"Customer"} />{" "}
                </span>
              </Link>
            </li>

            <li>
              <a
                onClick={() => showMenuList("finance-menu")}
                className={`has-arrow waves-effect ${
                  pathname.split("/")[1] == "finance" && "mm-active"
                }`}
              >
                <i className="bx bx-dollar" />
                <span key="t-finance">
                  <FormattedMessage id="Finance" defaultMessage={"Finance"} />{" "}
                </span>
              </a>
              <ul className="sub-menu mm-collapse" id="finance-menu">
                <li
                  className={`${
                    pathname.split("/")[2] == "quotation" && "mm-active"
                  }`}
                >
                  <Link to="/finance/quotation">
                    <FormattedMessage
                      id="Quotation_Management"
                      defaultMessage={"Quotation Management"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "sales-quotation" && "mm-active"
                  }`}
                >
                  <Link to="/finance/sales-quotation">
                    <FormattedMessage
                      id="Sales_Quotation"
                      defaultMessage={"Sales Quotation"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "invoice" && "mm-active"
                  }`}
                >
                  <Link to="/finance/invoice">
                    <FormattedMessage
                      id="Invoice_Management"
                      defaultMessage={"Invoice Management"}
                    />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={() => showMenuList("admin-menu")}
                className={`has-arrow waves-effect ${
                  pathname.split("/")[1] == "admin" && "mm-active"
                }`}
              >
                <i className="bx bx-user" />
                <span>
                  <FormattedMessage id="Admin" defaultMessage={"Admin"} />
                </span>
              </a>
              <ul className="sub-menu mm-collapse " id="admin-menu">
                <li
                  className={`${
                    pathname.split("/")[2] == "user-management" && "mm-active"
                  }`}
                >
                  <Link to="/admin/user-management">
                    <FormattedMessage
                      id="User_Managment"
                      defaultMessage={"User Managment"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "roles" && "mm-active"
                  }`}
                >
                  <Link to="/admin/roles" className="sub-menu">
                    <FormattedMessage
                      id="Roles_and_Permission"
                      defaultMessage={"Roles and Permission"}
                    />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                className={`has-arrow waves-effect ${
                  pathname.split("/")[1] == "hrms" && "mm-active"
                }`}
                onClick={() => showMenuList("hrms-menu")}
              >
                <i className="bx bx-customize" />
                <span key="t-hrms">
                  <FormattedMessage id="HRMS" defaultMessage={"HRMS"} />
                </span>
              </a>
              <ul className="sub-menu mm-collapse" id="hrms-menu">
                <li
                  className={`${
                    pathname.split("/")[2] == "employee" && "mm-active"
                  }`}
                >
                  <Link to="/hrms/employee">
                    <FormattedMessage
                      id="Employee_Management"
                      defaultMessage={"Employee Management"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "payroll" && "mm-active"
                  }`}
                >
                  <Link to="/hrms/payroll">
                    <FormattedMessage
                      id="Payroll_Maagment"
                      defaultMessage={"Payroll Maagment"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "leave" && "mm-active"
                  }`}
                >
                  <Link to="/hrms/leave">
                    <FormattedMessage
                      id="Leave_Management"
                      defaultMessage={"Leave Management"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "timesheet" && "mm-active"
                  }`}
                >
                  <Link to="/hrms/timesheet">
                    <FormattedMessage
                      id="Timesheet_Tracking"
                      defaultMessage={"Timesheet Tracking"}
                    />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                className={`has-arrow waves-effect ${
                  pathname.split("/")[1] == "setting" && "mm-active"
                }`}
                onClick={() => showMenuList("settings-menu")}
              >
                <i className="bx bx-customize" />
                <span key="t-setting">
                  <FormattedMessage id="Settings" defaultMessage={"Settings"} />
                </span>
              </a>
              <ul className="sub-menu mm-collapse" id="settings-menu">
                <li
                  className={`${
                    pathname.split("/")[2] == "multilanguage" && "mm-active"
                  }`}
                >
                  <Link to="/settings/multilanguage">
                    <FormattedMessage
                      id="Multi_Language"
                      defaultMessage={"Multi Language"}
                    />
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.split("/")[2] == "constants" && "mm-active"
                  }`}
                >
                  <Link to="/settings/constants">
                    <FormattedMessage
                      id="Constants"
                      defaultMessage={"Constants"}
                    />
                  </Link>
                </li>

                <li
                  className={`${
                    pathname.split("/")[2] == "system" && "mm-active"
                  }`}
                >
                  <Link to="/settings/system">
                    <FormattedMessage
                      id="System_Configuration"
                      defaultMessage={"System Configuration"}
                    />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
