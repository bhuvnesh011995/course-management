import { Route, Routes, useNavigate } from "react-router-dom";
import { Index } from "../Components/dashboard/index";
import { AccountHistory } from "../Components/account-history";
import { Attendance } from "../Components/course-management/attendance/attendance";
import { Category } from "../Components/categoery";
import { SelectCourse } from "../Components/cccccc";
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
import { Mail } from "../Components/mail";
import { MonitorVenueAvailability } from "../Components/monitor-venue-availability";
import { PayRoll } from "../Components/hrms/Payroll/payroll";
import { Profile } from "../Components/profile";

import { ReadEmail } from "../Components/read-email";
import { RegistrationType } from "../Components/course-management/registration-type/registration-type";
import { S } from "../Components/s";
import { SalesQuotation } from "../Components/Quotation/sales-quotation";
import { Scheduling } from "../Components/schedule/sceduling";
import { SubCategory } from "../Components/sub-categoery";
import { Table } from "../Components/table";
import { TradeLevel } from "../Components/course-management/trade-level/trade-level";
import { TradeType } from "../Components/course-management/trade-type/trade-type";
import { Trainer } from "../Components/schedule/trainer";
import { useCallback, useEffect } from "react";
import { Roles } from "../Components/admin/roles and permission/roles";
import { UserManagement } from "../Components/admin/user-managment";
import { LoginUser } from "../Components/registration/user-login";
import { UserRegistration } from "../Components/registration/user-registraion";
import { CommonNavbar } from "../common-components/Navbar";
import { MenuBar } from "../common-components/MenuBar";
import { Quotation } from "../Components/Quotation/quotation";
import { TimeSheet } from "../Components/hrms/Timesheet/timesheet";
import MultiLanguage from "../Components/Settings/MultiLanguage/MultiLanguage";
import { Constants } from "../Components/Settings/Constants/Constants";
import { SystemConfig } from "../Components/Settings/SystemConfig/SystemConfig";
import { useAuth } from "../context/authContext";
import { filePath } from "../common-components/useCommonUsableFunctions";
import { CommonFooter } from "../common-components/commonFooter";

export const AllRoutes = () => {
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
        <Route path='/admin/roles' Component={Roles}></Route>
        <Route path='/admin/user-management' Component={UserManagement}></Route>
        <Route path='/' Component={Index}></Route>
        <Route path='/login' Component={LoginUser}></Route>
        <Route path='/user-registration' Component={UserRegistration}></Route>
        <Route path='/accountHistory' Component={AccountHistory}></Route>
        <Route
          path='/course-management/attendance'
          Component={Attendance}
        ></Route>
        <Route path='/category' Component={Category}></Route>
        <Route path='/course-management/class' Component={Class}></Route>
        <Route path='/SelectCourse' Component={SelectCourse}></Route>
        <Route
          path='/course-management/Certificate'
          Component={Certificate}
        ></Route>
        <Route path='/course-management/course' Component={Course}></Route>
        <Route
          path='/customer-management'
          Component={CustomerManagement}
        ></Route>
        <Route path='/schedule/date-range' Component={DateRange}></Route>
        <Route path='/hrms/employee' Component={Employee}></Route>
        <Route path='/finance/invoice' Component={Invoice}></Route>
        <Route path='/lead-grid' Component={LeadGrid}></Route>
        <Route path='/lead' Component={Lead}></Route>
        <Route path='/hrms/leave' Component={Leave}></Route>
        <Route path='/mail' Component={Mail}></Route>
        <Route
          path='/monitor-venue-availability'
          Component={MonitorVenueAvailability}
        ></Route>
        <Route path='/hrms/payroll' Component={PayRoll}></Route>
        <Route path='/profile' Component={Profile}></Route>
        <Route path='/finance/quotation' Component={Quotation}></Route>
        <Route path='/read-email' Component={ReadEmail}></Route>
        <Route
          path='/course-management/registration-type'
          Component={RegistrationType}
        ></Route>
        <Route path='/s' Component={S}></Route>
        <Route
          path='/finance/sales-quotation'
          Component={SalesQuotation}
        ></Route>
        <Route path='/schedule/scheduling' Component={Scheduling}></Route>
        <Route path='/sub-category' Component={SubCategory}></Route>
        <Route path='/table' Component={Table}></Route>
        <Route path='/hrms/timesheet' Component={TimeSheet}></Route>
        <Route
          path='/course-management/trade-level'
          Component={TradeLevel}
        ></Route>
        <Route
          path='/course-management/trade-type'
          Component={TradeType}
        ></Route>
        <Route path='/schedule/trainer' Component={Trainer}></Route>
        <Route path='/settings/multilanguage' Component={MultiLanguage}></Route>
        <Route path='/settings/constants' Component={Constants}></Route>
        <Route path='/settings/system' Component={SystemConfig}></Route>
      </Routes>
      <CommonFooter />
    </div>
  );
};
