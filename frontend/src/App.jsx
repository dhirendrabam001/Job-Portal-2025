import "./App.css";
import "./Responsive.css";
import "./styles/colors.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProtectedRoutes from "./Components/Auth/ProtectedRoutes";
import HomePages from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Jobs from "./LandingPage/Jobs";
import Browsers from "./LandingPage/Browsers";
import Profile from "./LandingPage/Profile";
import DetailsJob from "./LandingPage/DetailsJob";

// company routes
import Company from "./Components/CompanyPage/Company";
import CreateCompany from "./Components/CompanyPage/CreateCompany";
import CompanySetup from "./Components/CompanyPage/CompanySetup";
import AdminJobs from "./Components/CompanyPage/AdminJobs";
import CreateCompanyJobs from "./Components/CompanyPage/CreateCompanyJobs";
import AdminViewApplicant from "./Components/CompanyPage/AdminViewApplicant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>

        <Route
          path="/jobs"
          element={
            <ProtectedRoutes>
              <Jobs />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/browsers"
          element={
            <ProtectedRoutes>
              <Browsers />
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="/details/:id" element={<DetailsJob />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

        {/* company routes */}
        <Route path="admin/company" element={<Company />}></Route>
        <Route path="/admin/jobs" element={<AdminJobs />}></Route>
        <Route path="/admin/company/create" element={<CreateCompany />}></Route>
        <Route path="/admin/company/:id" element={<CompanySetup />}></Route>
        <Route
          path="/admin/jobs/create"
          element={<CreateCompanyJobs />}
        ></Route>
        <Route
          path="/admin/jobs/:id/applicant"
          element={<AdminViewApplicant />}
        ></Route>
      </Routes>
      {/* <Footer />
      <FooterLast /> */}
    </BrowserRouter>
  );
}

export default App;
