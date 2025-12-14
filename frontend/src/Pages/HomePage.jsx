import Header from "../Components/Header";
import DreamJobs from "../LandingPage/DreamJobs";
import CompanyDetails from "../LandingPage/Company";
import JobCategory from "../LandingPage/JobCategory";
import Work from "../LandingPage/Work";
import Testimonials from "../LandingPage/Testimonials";
import Subscriber from "../LandingPage/Subscriber";
import Footer from "../LandingPage/Footer";
import FooterLast from "../LandingPage/FooterLast";

const HomePages = () => {
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
