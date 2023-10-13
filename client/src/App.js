import { BrowserRouter } from "react-router-dom";
import "./assets/css/app-calendar.css";
import "./assets/css/app-email.css";
import "./assets/css/app.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom.css";
import "./assets/css/icons.min.css";
import "./assets/js/pages/app-calendar-events";

import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
      {/* <Course /> */}
    </div>
  );
}

export default App;
