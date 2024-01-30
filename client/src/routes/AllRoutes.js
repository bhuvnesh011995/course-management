import { Route, Routes, useNavigate } from "react-router-dom";
import { Index } from "../Components/dashboard/index";
import { Attendance } from "../Components/course-management/attendance/attendance";
import { Certificate } from "../Components/course-management/certificate/certificate";
import { Class } from "../Components/course-management/class/class";
import { Course } from "../Components/course-management/course/course";
import { CustomerManagement } from "../Components/customers/customer-maagment";
import { DateRange } from "../Components/schedule/date-range";
import { Employee } from "../Components/hrms/employee/employee";
import { Invoice } from "../Components/Quotation/invoice";
import { LeadGrid } from "../Components/lead/lead-grid";
import { Lead } from "../Components/lead/lead";
import { Leave } from "../Components/hrms/leave/leave";
import { PayRoll } from "../Components/hrms/Payroll/payroll";
import { Profile } from "../Components/profile";

import { RegistrationType } from "../Components/course-management/registration-type/registration-type";
import { SalesQuotation } from "../Components/Quotation/sales-quotation";
import { Scheduling } from "../Components/schedule/sceduling";
import { TradeLevel } from "../Components/course-management/trade-level/trade-level";
import { TradeType } from "../Components/course-management/trade-type/trade-type";
import { Trainer } from "../Components/schedule/trainer";
import { useEffect } from "react";
import { Roles } from "../Components/admin/roles and permission/roles";
import { UserManagement } from "../Components/admin/user-managment";
import { LoginUser } from "../Components/registration/user-login";
import { CommonNavbar } from "../common-components/Navbar";
import { MenuBar } from "../common-components/MenuBar";
import { Quotation } from "../Components/Quotation/quotation";
import { TimeSheet } from "../Components/hrms/Timesheet/timesheet";
import MultiLanguage from "../Components/Settings/MultiLanguage/MultiLanguage";
import { Constants } from "../Components/Settings/Constants/Constants";
import { SystemConfig } from "../Components/Settings/SystemConfig/SystemConfig";
import { useAuth } from "../context/authContext";
import { CommonFooter } from "../common-components/commonFooter";

export const AllRoutes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
  }, []);

  return (
    <div>
      {localStorage.getItem("token") && (
        <div>
          <CommonNavbar />
          <MenuBar />
        </div>
      )}
      <Routes>
        <Route path='/' Component={Index}></Route>
        <Route path='/login' Component={LoginUser}></Route>
        {/* {Object.keys(user.userData).length && ( */}
        <Route path='/profile' Component={Profile}></Route>
        {/* )}
        {user.userData?.roleData?.role?.read && ( */}
        <Route path='/admin/roles' Component={Roles}></Route>
        {/* )}
        {user.userData?.roleData?.userManagement?.read && ( */}
        <Route path='/admin/user-management' Component={UserManagement}></Route>
        {/* )}{" "}
        {user.userData?.roleData?.attendance?.read && ( */}
        <Route
          path='/course-management/attendance'
          Component={Attendance}
        ></Route>
        {/* )}
        {user.userData?.roleData?.class?.read && ( */}
        <Route path='/course-management/class' Component={Class}></Route>
        {/* )}
        {user.userData?.roleData?.certificateGeneration?.read && ( */}
        <Route
          path='/course-management/Certificate'
          Component={Certificate}
        ></Route>
        {/* )}
        {user.userData?.roleData?.courses?.read && ( */}
        <Route path='/course-management/course' Component={Course}></Route>
        {/* )}
        {user.userData?.roleData?.customer?.read && ( */}
        <Route
          path='/customer-management'
          Component={CustomerManagement}
        ></Route>
        {/* )}
        {user.userData?.roleData?.holiday?.read && ( */}
        <Route path='/schedule/date-range' Component={DateRange}></Route>
        {/* )}
        {user.userData?.roleData?.employeeManagement?.read && ( */}
        <Route path='/hrms/employee' Component={Employee}></Route>
        {/* )}
        {user.userData?.roleData?.finManagement?.read && ( */}
        <Route path='/finance/invoice' Component={Invoice}></Route>
        {/* )}
        {user.userData?.roleData?.lead?.read && ( */}
        <Route path='/lead/lead-grid' Component={LeadGrid}></Route>
        {/* )}
        {user.userData?.roleData?.lead?.read && ( */}
        <Route path='/lead' Component={Lead}></Route>
        {/* )}
        {user.userData?.roleData?.leaveManagement?.read && ( */}
        <Route path='/hrms/leave' Component={Leave}></Route>
        {/* )}
        {user.userData?.roleData?.payroll?.read && ( */}
        <Route path='/hrms/payroll' Component={PayRoll}></Route>
        {/* )}
        {user.userData?.roleData?.finManagement?.read && ( */}
        <Route path='/finance/quotation' Component={Quotation}></Route>
        {/* )}
        {user.userData?.roleData?.registrationType?.read && ( */}
        <Route
          path='/course-management/registration-type'
          Component={RegistrationType}
        ></Route>
        {/* )}
        {user.userData?.roleData?.finManagement?.read && ( */}
        <Route
          path='/finance/sales-quotation'
          Component={SalesQuotation}
        ></Route>
        {/* )}
        {user.userData?.roleData?.calendar?.read && ( */}
        <Route path='/schedule/scheduling' Component={Scheduling}></Route>
        {/* )}
        {user.userData?.roleData?.timesheet?.read && ( */}
        <Route path='/hrms/timesheet' Component={TimeSheet}></Route>
        {/* )}
        {user.userData?.roleData?.tradeLevel?.read && ( */}
        <Route
          path='/course-management/trade-level'
          Component={TradeLevel}
        ></Route>
        {/* )}
        {user.userData?.roleData?.tradeType?.read && ( */}
        <Route
          path='/course-management/trade-type'
          Component={TradeType}
        ></Route>
        {/* )}
        {user.userData?.roleData?.trainer?.read && ( */}
        <Route path='/schedule/trainer' Component={Trainer}></Route>
        {/* )}
        {user.userData?.roleData?.multiLanguage?.read && ( */}
        <Route path='/settings/multilanguage' Component={MultiLanguage}></Route>
        {/* )}
        {user.userData?.roleData?.constants?.read && ( */}
        <Route path='/settings/constants' Component={Constants}></Route>
        {/* )}
        {user.userData?.roleData?.system?.read && ( */}
        <Route path='/settings/system' Component={SystemConfig}></Route>
        {/* )} */}
      </Routes>
      <CommonFooter />
    </div>
  );
};
