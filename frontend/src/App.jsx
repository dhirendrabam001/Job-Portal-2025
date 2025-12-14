import "./App.css";
import "./styles/colors.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import HomePages from "./Pages/HomePage";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        {/* <Route path="Browser" element={<Browsers />}></Route>
        <Route path="/find-talent" element={<FindTalent />}></Route>
        <Route path="/upload-jobs" element={<UploadJobs />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      {/* <Footer />
      <FooterLast /> */}
    </BrowserRouter>
  );
}

export default App;
