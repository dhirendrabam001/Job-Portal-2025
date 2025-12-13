import "./App.css";
import "./styles/colors.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import HomePage from "./HomePages/HomePage";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="homePage-main">
        <Header />
        {/* <HomePage /> */}
        {/* <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/find-jobs" element={<FindJobs />}></Route>
          <Route path="/find-talent" element={<FindTalent />}></Route>
          <Route path="/upload-jobs" element={<UploadJobs />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>
        <Footer />
        <FooterLast /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
