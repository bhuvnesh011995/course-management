import { Route, Routes, useNavigate } from "react-router-dom";
import { Roles } from "../Components/admin/roles and permission/roles";
import { UserManagement } from "../Components/admin/user-managment";
import { useEffect } from "react";

export const AdminRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/roles" Component={Roles}></Route>
        <Route path="/user-management" Component={UserManagement}></Route>
      </Routes>
    </div>
  );
};
