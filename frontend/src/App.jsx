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
import ProtectedAdminPage from "./Components/CompanyPage/ProtectedAdminPage";

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
        <Route
          path="admin/company"
          element={
            <ProtectedAdminPage>
              <Company />
            </ProtectedAdminPage>
          }
        ></Route>
        <Route
          path="/admin/jobs"
          element={
            <ProtectedAdminPage>
              <AdminJobs />
            </ProtectedAdminPage>
          }
        ></Route>
        <Route
          path="/admin/company/create"
          element={
            <ProtectedAdminPage>
              <CreateCompany />
            </ProtectedAdminPage>
          }
        ></Route>
        <Route
          path="/admin/company/:id"
          element={
            <ProtectedAdminPage>
              <CompanySetup />
            </ProtectedAdminPage>
          }
        ></Route>
        <Route
          path="/admin/jobs/create"
          element={
            <ProtectedAdminPage>
              <CreateCompanyJobs />
            </ProtectedAdminPage>
          }
        ></Route>
        <Route
          path="/admin/jobs/:id/applicant"
          element={
            <ProtectedAdminPage>
              <AdminViewApplicant />
            </ProtectedAdminPage>
          }
        ></Route>
      </Routes>
      {/* <Footer />
      <FooterLast /> */}
    </BrowserRouter>
  );
}

export default App;
