import { IoSearchOutline } from "react-icons/io5";
const DreamJobs = () => {
  return (
    <section className="dreamjob-main">
      <div className="container">
        <div className="row align-items-center justify-content-center text-white">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="mb-2 content-left">
              <h5>5000+ Jobs Listed</h5>
              <h1 className="fw-bold">
                Find Your <span className="fw-bold">Dreams Jobs</span> With Us
              </h1>
              <p>
                Your career journey starts here. Explore verified job listings,
                connect with trusted employers, and find the role that matches
                your ambitions.
              </p>
              <div className="search-box mt-5">
                <div className="search-box-one">
                  <label htmlFor="text">Job Title</label>
                  <input
                    type="text"
                    className="forminfo"
                    placeholder="Software Engineer"
                  />
                </div>
                <div className="search-box-one">
                  <label htmlFor="text">Job Type</label>
                  <input
                    type="text"
                    className="forminfo"
                    placeholder="Fulltime"
                  />
                </div>
                <div>
                  <button className="search-btn">
                    <IoSearchOutline className="search-icons" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="content-right position-relative img-section">
              <img src="/Boy.webp" className="img-fluid" alt="images" />
              <div className="content-card position-absolute">
                <div className="d-flex align-items-center gap-2">
                  <img src="/Google.webp" alt="Google" />
                  <div className="content-card-info">
                    <h5>Software Engineer</h5>
                    <p>Nepal</p>
                  </div>
                </div>
                <div className="content-card-2 d-flex align-items-center gap-2 mt-2 ms-2">
                  <p>1 days ago</p>
                  <p>150 application</p>
                </div>
              </div>
              <div className="avtar-content position-absolute">
                <p>100k+ got jobs</p>
                <div className="avtar-group d-flex align-items-center">
                  <img
                    src="/avtar-1.webp"
                    className="rounded-circle avatar"
                    alt="User 1"
                  />
                  <img
                    src="/avtar-2.webp"
                    className="rounded-circle avatar"
                    alt="User 2"
                  />
                  <img
                    src="/avtar-3.webp"
                    className="rounded-circle avatar"
                    alt="User 3"
                  />
                  <span className="rounded-circle avatar avatar-more">+5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamJobs;
