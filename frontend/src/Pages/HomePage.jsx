import Header from "../Components/Auth/Header";
import DreamJobs from "../LandingPage/DreamJobs";
import CompanyDetails from "../LandingPage/Company";
import JobCategory from "../LandingPage/JobCategory";
import Work from "../LandingPage/Work";
import Testimonials from "../LandingPage/Testimonials";
import Subscriber from "../LandingPage/Subscriber";
import Footer from "../LandingPage/Footer";
import FooterLast from "../LandingPage/FooterLast";
import useGetAllJobs from "../Hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePages = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/company");
    }
  }, []);
  return (
    <div className="homePage-main">
      <Header />
      <DreamJobs />
      <CompanyDetails />

      <JobCategory />
      <Work />
      <Testimonials />
      <Subscriber />
      <Footer />
      <FooterLast />
    </div>
  );
};

export default HomePages;
