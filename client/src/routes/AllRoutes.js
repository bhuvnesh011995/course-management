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
import { DateRange } from "../Components/date-range";
import { Employee } from "../Components/employee";
import { F } from "../Components/f";
import { FeedBack } from "../Components/course-management/feedback";
import { Invoice } from "../Components/invoice";
import { LeadGrid } from "../Components/lead/lead-grid";
import { Lead } from "../Components/lead/lead";
import { Lead2 } from "../Components/lead/lead2";
import { Leave } from "../Components/leave";
import { Mail } from "../Components/mail";
import { MonitorVenueAvailability } from "../Components/monitor-venue-availability";
import { PayRoll } from "../Components/payroll";
import { Profile } from "../Components/profile";
import { Quotation } from "../Components/quotation";
import { ReadEmail } from "../Components/read-email";
import { RegistrationType } from "../Components/course-management/registration-type";
import { S } from "../Components/s";
import { SalesQuotation } from "../Components/sales-quotation";
import { Scheduling } from "../Components/schedule/sceduling";
import { SubCategory } from "../Components/sub-categoery";
import { Table } from "../Components/table";
import { Task } from "../Components/course-management/task";
import { TimeSheet } from "../Components/timesheet";
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

export const AllRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
  });
  return (
    <div>
      <Routes>
        <Route path="/roles" Component={Roles}></Route>
        <Route path="/permission" Component={Permission}></Route>
        <Route path="/user-management" Component={UserManagement}></Route>
        <Route path="/dashboard" Component={Index}></Route>
        <Route path="/" Component={LoginUser}></Route>
        <Route path="/user-registration" Component={UserRegistration}></Route>
        <Route path="/accountHistory" Component={AccountHistory}></Route>
        <Route path="/attendance" Component={Attendance}></Route>
        <Route path="/category" Component={Category}></Route>
        <Route path="/class" Component={Class}></Route>
        <Route path="/SelectCourse" Component={SelectCourse}></Route>
        <Route path="/Certificate" Component={Certificate}></Route>
        <Route path="/course" Component={Course}></Route>
        <Route
          path="/customer-management"
          Component={CustomerManagement}
        ></Route>
        <Route path="/d" Component={D}></Route>
        <Route path="/date-range" Component={DateRange}></Route>
        <Route path="/employee" Component={Employee}></Route>
        <Route path="/f" Component={F}></Route>
        <Route path="/feedback" Component={FeedBack}></Route>
        <Route path="/invoice" Component={Invoice}></Route>
        <Route path="/lead-grid" Component={LeadGrid}></Route>
        <Route path="/lead" Component={Lead}></Route>
        <Route path="/lead2" Component={Lead2}></Route>
        <Route path="/leave" Component={Leave}></Route>
        <Route path="/mail" Component={Mail}></Route>
        <Route
          path="/monitor-venue-availability"
          Component={MonitorVenueAvailability}
        ></Route>
        <Route path="/payroll" Component={PayRoll}></Route>
        <Route path="/profile" Component={Profile}></Route>
        <Route path="/quotation" Component={Quotation}></Route>
        <Route path="/read-email" Component={ReadEmail}></Route>
        <Route path="/registration-type" Component={RegistrationType}></Route>
        <Route path="/s" Component={S}></Route>
        <Route path="/sales-quotation" Component={SalesQuotation}></Route>
        <Route path="/scheduling" Component={Scheduling}></Route>
        <Route path="/sub-category" Component={SubCategory}></Route>
        <Route path="/table" Component={Table}></Route>
        <Route path="/task" Component={Task}></Route>
        <Route path="/timesheet" Component={TimeSheet}></Route>
        <Route path="/trade-level" Component={TradeLevel}></Route>
        <Route path="/trade-type" Component={TradeType}></Route>
        <Route path="/trainer" Component={Trainer}></Route>
      </Routes>
    </div>
  );
};
