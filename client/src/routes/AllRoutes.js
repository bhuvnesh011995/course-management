import { Route, Routes, useNavigate } from "react-router-dom";
import { Index } from "../Components";
import { AccountHistory } from "../Components/account-history";
import { Attendance } from "../Components/course-management/attendance";
import { Category } from "../Components/categoery";
import { SelectCourse } from "../Components/cccccc";
import { Certificate } from "../Components/course-management/certificate";
import { Class } from "../Components/course-management/class";
import { Course } from "../Components/course-management/course";
import { CustomerManagement } from "../Components/customers/customer-maagment";
import { D } from "../Components/d";
import { DateRange } from "../Components/schedule/date-range";
import { Employee } from "../Components/hrms/employee";
import { F } from "../Components/f";
import { FeedBack } from "../Components/course-management/feedback";
import { Invoice } from "../Components/invoice";
import { LeadGrid } from "../Components/lead/lead-grid";
import { Lead } from "../Components/lead/lead";
import { Lead2 } from "../Components/lead/lead2";
import { Leave } from "../Components/leave";
import { Mail } from "../Components/mail";
import { MonitorVenueAvailability } from "../Components/monitor-venue-availability";
import { PayRoll } from "../Components/Payroll/payroll";
import { Profile } from "../Components/profile";

import { ReadEmail } from "../Components/read-email";
import { RegistrationType } from "../Components/course-management/registration-type";
import { S } from "../Components/s";
import { SalesQuotation } from "../Components/sales-quotation";
import { Scheduling } from "../Components/schedule/sceduling";
import { SubCategory } from "../Components/sub-categoery";
import { Table } from "../Components/table";
import { TradeLevel } from "../Components/course-management/trade-level";
import { TradeType } from "../Components/course-management/trade-type";
import { Trainer } from "../Components/schedule/trainer";
import { AdminRoutes } from "./adminRoutes";
import { useEffect } from "react";
import { Roles } from "../Components/admin/roles and permission/roles";
import { Permission } from "../Components/admin/roles and permission/permission";
import { UserManagement } from "../Components/admin/user-managment";
import { LoginUser } from "../Components/registration/user-login";
import { UserRegistration } from "../Components/registration/user-registraion";
import { CommonNavbar } from "../common-components/Navbar";
import { MenuBar } from "../common-components/MenuBar";
import { Quotation } from "../Components/Quotation/quotation";
import { TimeSheet } from "../Components/Timesheet/timesheet";

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
        <Route path="/admin/roles" Component={Roles}></Route>
        <Route path="/permission" Component={Permission}></Route>
        <Route path="/admin/user-management" Component={UserManagement}></Route>
        <Route path="/" Component={Index}></Route>
        <Route path="/login" Component={LoginUser}></Route>
        <Route path="/user-registration" Component={UserRegistration}></Route>
        <Route path="/accountHistory" Component={AccountHistory}></Route>
        <Route
          path="/course-management/attendance"
          Component={Attendance}
        ></Route>
        <Route path="/category" Component={Category}></Route>
        <Route path="/course-management/class" Component={Class}></Route>
        <Route path="/SelectCourse" Component={SelectCourse}></Route>
        <Route
          path="/course-management/Certificate"
          Component={Certificate}
        ></Route>
        <Route path="/course-management/course" Component={Course}></Route>
        <Route
          path="/customer-management"
          Component={CustomerManagement}
        ></Route>
        <Route path="/schedule/date-range" Component={DateRange}></Route>
        <Route path="/hrms/employee" Component={Employee}></Route>
        <Route path="/course-management/feedback" Component={FeedBack}></Route>
        <Route path="/finance/invoice" Component={Invoice}></Route>
        <Route path="/lead-grid" Component={LeadGrid}></Route>
        <Route path="/lead" Component={Lead}></Route>
        <Route path="/lead2" Component={Lead2}></Route>
        <Route path="/hrms/leave" Component={Leave}></Route>
        <Route path="/mail" Component={Mail}></Route>
        <Route
          path="/monitor-venue-availability"
          Component={MonitorVenueAvailability}
        ></Route>
        <Route path="/hrms/payroll" Component={PayRoll}></Route>
        <Route path="/profile" Component={Profile}></Route>
        <Route path="/finance/quotation" Component={Quotation}></Route>
        <Route path="/read-email" Component={ReadEmail}></Route>
        <Route
          path="/course-management/registration-type"
          Component={RegistrationType}
        ></Route>
        <Route path="/s" Component={S}></Route>
        <Route
          path="/finance/sales-quotation"
          Component={SalesQuotation}
        ></Route>
        <Route path="/schedule/scheduling" Component={Scheduling}></Route>
        <Route path="/sub-category" Component={SubCategory}></Route>
        <Route path="/table" Component={Table}></Route>
        <Route path="/hrms/timesheet" Component={TimeSheet}></Route>
        <Route
          path="/course-management/trade-level"
          Component={TradeLevel}
        ></Route>
        <Route
          path="/course-management/trade-type"
          Component={TradeType}
        ></Route>
        <Route path="/schedule/trainer" Component={Trainer}></Route>
      </Routes>
    </div>
  );
};
