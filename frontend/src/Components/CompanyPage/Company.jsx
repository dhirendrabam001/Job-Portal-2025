import Header from "../Auth/Header";

const Company = () => {
  return (
    <>
      <Header />
      <div className="homePage-main">
        <div className="container">
          <div className="admin-company">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="company-search">
                  <input type="text" placeholder="Filter By Name" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="d-flex align-items-center justify-content-end company-search">
                  <button
                    type="button"
                    class="btn btn-outline-primary text-white fw-bold"
                  >
                    New Company
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
