import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./AllRoutes";
import { AdminRoutes } from "./adminRoutes";
import { SignInRoutes } from "./userSignInRoutes";

export const WebRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
};
