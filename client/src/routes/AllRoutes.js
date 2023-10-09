import { Route, Routes } from "react-router-dom";
import { Index } from "../Components";
import { AccountHistory } from "../Components/account-history";
import { Attendance } from "../Components/attendance";
import { Category } from "../Components/categoery";
import { SelectCourse } from "../Components/cccccc";
import { Certificate } from "../Components/certificate";
import { Class } from "../Components/class";
import { Course } from "../Components/course";
import { CustomerManagement } from "../Components/customer-maagment";
import { D } from "../Components/d";
import { DateRange } from "../Components/date-range";
import { Employee } from "../Components/employee";
import { F } from "../Components/f";
import { FeedBack } from "../Components/feedback";
import { Invoice } from "../Components/invoice";
import { LeadGrid } from "../Components/lead-grid";
import { Lead } from "../Components/lead";
import { Lead2 } from "../Components/lead2";
import { Leave } from "../Components/leave";
import { Mail } from "../Components/mail";
import { MonitorVenueAvailability } from "../Components/monitor-venue-availability";
import { PayRoll } from "../Components/payroll";
import { Permission } from "../Components/admin/roles and permission/permission";
import { Profile } from "../Components/profile";
import { Quotation } from "../Components/quotation";
import { ReadEmail } from "../Components/read-email";
import { RegistrationType } from "../Components/registration-type";
import { Roles } from "../Components/admin/roles and permission/roles";
import { S } from "../Components/s";
import { SalesQuotation } from "../Components/sales-quotation";
import { Scheduling } from "../Components/sceduling";
import { SubCategory } from "../Components/sub-categoery";
import { Table } from "../Components/table";
import { Task } from "../Components/task";
import { TimeSheet } from "../Components/timesheet";
import { TradeLevel } from "../Components/trade-level";
import { TradeType } from "../Components/trade-type";
import { Trainer } from "../Components/trainer";
import { UserManagement } from "../Components/admin/user-managment";
import { UserRegistration } from "../Components/user-registraion";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Index}></Route>
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
        <Route path="/permission" Component={Permission}></Route>
        <Route path="/profile" Component={Profile}></Route>
        <Route path="/quotation" Component={Quotation}></Route>
        <Route path="/read-email" Component={ReadEmail}></Route>
        <Route path="/registration-type" Component={RegistrationType}></Route>
        <Route path="/roles" Component={Roles}></Route>
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
        <Route path="/user-management" Component={UserManagement}></Route>
        <Route path="/user-registration" Component={UserRegistration}></Route>
      </Routes>
    </div>
  );
};
