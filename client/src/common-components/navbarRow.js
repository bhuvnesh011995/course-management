import { useState } from "react";
import { Link } from "react-router-dom";

export const CommonRowMenubar = () => {
  const menuObject = {
    admin: false,
    schedule: false,
    finance: false,
    courseManagement: false,
    hrms: false,
  };

  const [menuList, setMenuList] = useState(menuObject);

  const closeAllMenuLists = () => {
    setMenuList(menuObject);
  };

  const showMenuList = (type) => {
    closeAllMenuLists();
    switch (type) {
      case "admin":
        setMenuList({ admin: !menuList.admin });
        break;
      case "schedule":
        setMenuList({ schedule: !menuList.schedule });
        break;
      case "finance":
        setMenuList({ finance: !menuList.finance });
        break;
      case "course-management":
        setMenuList({ courseManagement: !menuList.courseManagement });
        break;
      case "hrms":
        setMenuList({ hrms: !menuList.hrms });
        break;
    }
  };

  return (
    <div id='layout-wrapper'>
      <div className='topnav'>
        <div className='container-fluid'>
          <nav className='navbar navbar-light navbar-expand-lg topnav-menu'>
            <div
              className='collapse navbar-collapse d-flex align-items-center justify-content-center'
              id='topnav-menu-content'
            >
              <ul className='navbar-nav d-flex align-items-center justify-content-center'>
                <li className='nav-item'>
                  <h4
                    className='text-white m-0'
                    style={{ padding: "1rem 1.3rem" }}
                  >
                    Tonga
                  </h4>
                </li>
                <li className='nav-item mx-2'>
                  <Link className='nav-link' to='/'>
                    <i className='bx bx-home-circle mx-1' />
                    <span className='badge rounded-pill bg-info float-end ms-2'>
                      02
                    </span>
                    <span key='t-dashboards'>Dashboard</span>
                  </Link>
                </li>
                <li className='nav-item dropdown mx-2'>
                  <a
                    onClick={() => showMenuList("admin")}
                    className='nav-link dropdown-toggle arrow-none cursor-pointer'
                  >
                    <i className='bx bx-user mx-1' />
                    <span key='t-admin'>Admin</span>
                    <div className='arrow-down' />
                  </a>
                  {menuList.admin && (
                    <div className='dropdown-menu'>
                      <Link to='/user-management' className='dropdown-item'>
                        User Management
                      </Link>
                      <div className='dropdown'>
                        <Link
                          to='/roles'
                          className='dropdown-item dropdown-toggle arrow-none'
                        >
                          <span key='t-calendar'>Roles and Permission</span>
                        </Link>
                        {/* <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-email"
                    >
                      <a
                        href="roles.html"
                        className="dropdown-item"
                        key="t-tui-calendar"
                      >
                        Roles
                      </a>
                      <a
                        href="permission.html"
                        className="dropdown-item"
                        key="t-full-calender"
                      >
                        Permissions
                      </a>
                    </div> */}
                      </div>
                    </div>
                  )}
                </li>
                <li className='nav-item mx-2'>
                  <Link to='/customer-management' className='nav-link'>
                    <i className='bx bxs-graduation mx-1' />
                    <span key='t-Customer'>Customer</span>
                  </Link>
                </li>
                <li className='nav-item mx-2'>
                  <Link className='nav-link' to='/lead'>
                    <i className='bx bx-task mx-1' />
                    <span key='t-lead'>Lead</span>
                  </Link>
                </li>
                <li className='nav-item dropdown mx-2'>
                  <a
                    className='nav-link dropdown-toggle arrow-none'
                    onClick={() => showMenuList("schedule")}
                  >
                    <i className='bx bx-calendar mx-1' />
                    <span key='t-scedule'>Scedule</span>
                    <div className='arrow-down' />
                  </a>
                  {menuList.schedule && (
                    <div className='dropdown-menu'>
                      <Link to='/scheduling' className='dropdown-item'>
                        Calendar
                      </Link>
                      <Link to='/trainer' className='dropdown-item'>
                        Trainers
                      </Link>
                      <Link to='/date-range' className='dropdown-item'>
                        Holidays
                      </Link>
                    </div>
                  )}
                </li>
                <li className='nav-item dropdown mx-2'>
                  <a
                    className='nav-link dropdown-toggle arrow-none'
                    onClick={() => showMenuList("finance")}
                  >
                    <i className='bx bx-dollar mx-1' />
                    <span key='t-scedule'>Finance</span>
                    <div className='arrow-down' />
                  </a>
                  {menuList.finance && (
                    <div className='dropdown-menu'>
                      <Link to='/quotation' className='dropdown-item'>
                        Quotation Management
                      </Link>
                      <Link to='/sales-quotation' className='dropdown-item'>
                        Sales Quotation
                      </Link>
                      <Link to='/invoice' className='dropdown-item'>
                        Invoice Management
                      </Link>
                    </div>
                  )}
                </li>
                <li className='nav-item dropdown mx-2'>
                  <a
                    className='nav-link dropdown-toggle arrow-none'
                    onClick={() => showMenuList("course-management")}
                  >
                    <i className='bx bx-food-menu mx-1' />
                    <span key='t-course'>Course Managment</span>
                    <div className='arrow-down' />
                  </a>
                  {menuList.courseManagement && (
                    <div className='dropdown-menu'>
                      <Link to='/registration-type' className='dropdown-item'>
                        Registration Type
                      </Link>
                      <Link to='/trade-level' className='dropdown-item'>
                        Trade Level
                      </Link>
                      <Link to='/trade-type' className='dropdown-item'>
                        Trade Types
                      </Link>
                      <Link to='/course' className='dropdown-item'>
                        Courses
                      </Link>
                      <Link to='/class' className='dropdown-item'>
                        Class
                      </Link>
                      <Link to='/certificate' className='dropdown-item'>
                        Certificate Generation
                      </Link>
                      <Link to='/task' className='dropdown-item'>
                        Task{" "}
                      </Link>
                      <Link to='/attendance' className='dropdown-item'>
                        Attendance
                      </Link>
                    </div>
                  )}
                </li>
                <li className='nav-item dropdown mx-2'>
                  <a
                    className='nav-link dropdown-toggle arrow-none'
                    onClick={() => showMenuList("hrms")}
                  >
                    <i className='bx bx-customize mx-1' />
                    <span key='t-hrms'>HRMS</span>
                    <div className='arrow-down' />
                  </a>
                  {menuList.hrms && (
                    <div
                      className='dropdown-menu'
                      aria-labelledby='topnav-components'
                    >
                      <a
                        className='dropdown-item '
                        href='employee.html'
                        id='topnav-form'
                        role='button'
                      >
                        <span key='t-forms'>Employee Management</span>
                      </a>
                      <a
                        className='dropdown-item '
                        href='payroll.html'
                        id='topnav-form'
                        role='button'
                      >
                        <span key='t-forms'>Payroll Maagment</span>
                      </a>
                      <a
                        className='dropdown-item '
                        href='leave.html'
                        id='topnav-form'
                        role='button'
                      >
                        <span key='t-forms'>Leave Management</span>
                      </a>
                      <a
                        className='dropdown-item '
                        href='timesheet.html'
                        id='topnav-form'
                        role='button'
                      >
                        <span key='t-forms'>Timesheet Tracking</span>
                      </a>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
