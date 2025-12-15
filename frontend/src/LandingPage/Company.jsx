import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib.default || MarqueeLib;
import { companyInfo } from "../DataStore/Data";

const CompanyDetails = () => {
  return (
    <div className="company-info py-4 mt-4 mt-md-0 py-md-2">
      <div className="container">
        <h2 className="fw-bold text-white fs-1 text-center">
          Trusted By <span>1500+</span> Companies
        </h2>
        <Marquee pauseOnHover={true}>
          <div className="marquee-info">
            {companyInfo.map((company, index) => (
              <img
                key={index}
                src={`/${company}.webp`}
                className="mx-5"
                alt={company}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default CompanyDetails;
