import Marquee from "react-fast-marquee";
import { companyInfo } from "../DataStore/Data";
const Company = () => {
  return (
    <div className="company-info py-4 mt-4">
      <div className="container">
        <h2 className="fw-bold text-white fs-1 text-center">
          Trusted By <span>1500+</span> Companies
        </h2>
        <Marquee pauseOnHover={true}>
          <div className="marquee-info">
            {companyInfo.map((items, key) => {
              return (
                <img
                  key={key}
                  src={`${items}.webp`}
                  className="mx-5"
                  alt={companyInfo}
                />
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Company;
