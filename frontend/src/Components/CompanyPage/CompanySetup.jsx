import Header from "../Auth/Header";
import { IoMdArrowRoundBack } from "react-icons/io";

const CompanySetup = () => {
  return (
    <>
      <Header />
      <div className="homePage-main">
        <div className="company-setup-info">
          <div className="company-setup-btn-info d-flex align-items-center gap-5 justify-content-center mb-5">
            <div className="company-setup-btn">
              <button className="btn btn-outline-success text-white fw-bold">
                <IoMdArrowRoundBack /> Back
              </button>
            </div>
            <div className="company-setup-heading">
              <h2>Company Setup</h2>
            </div>
          </div>
          <div className="company-form">
            <form>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="companyname" className="form-label">
                      Company Name
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="website" className="form-label">
                      Website
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="logo" className="form-label">
                      Logo
                    </label>
                    <input type="file" className="form-control" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Example textarea
                    </label>
                    <textarea className="form-control" rows="6" />
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-success w-100 fw-bold text-white">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanySetup;
