import { BrowserRouter, HashRouter } from "react-router-dom";
import "./assets/css/app-calendar.css";
import "./assets/css/app-email.css";
import "./assets/css/app.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom.css";
import "./assets/css/icons.min.css";
import { ToastContainer } from "react-toastify";
import { AllRoutes } from "./routes/AllRoutes";
import AuthProvider from "./context/authContext";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <HashRouter>
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            theme='light'
          />
          <AllRoutes />
        </HashRouter>
        {/* <Course /> */}
      </AuthProvider>
    </div>
  );
}

export default App;
