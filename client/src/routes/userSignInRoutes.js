import { Route, Routes } from "react-router-dom";
import { UserRegistration } from "../Components/registration/user-registraion";
import { LoginUser } from "../Components/registration/user-login";

export const SignInRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={LoginUser}></Route>
        <Route path="/user-registration" Component={UserRegistration}></Route>
      </Routes>
    </div>
  );
};
