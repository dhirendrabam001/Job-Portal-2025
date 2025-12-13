import Header from "../Components/Header";
import DreamJobs from "../LandingPage/DreamJobs";
import CompanyDetails from "../LandingPage/Company";

const HomePages = () => {
  return (
    <div className="homePage-main">
      <Header />
      <DreamJobs />
      <CompanyDetails />
      {/* <CompanyDetails /> */}
      {/* <DreamsJob /> */}
      {/* <Company /> */}
      {/* <JobCategory />
      <Work />
      <Testimonials />
      <Subscriber />
      <Footer />
      <FooterLast /> */}
    </div>
  );
};

export default HomePages;
