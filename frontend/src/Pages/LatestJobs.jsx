import { FaMapMarkerAlt, FaClock, FaBriefcase } from "react-icons/fa";
const LatestJobs = ({ job }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="latestjob-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <div className="logo-box">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="logo"
                  />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold text-white">
                    Dhirendra private Company
                  </h6>
                  <small>
                    <FaMapMarkerAlt className="me-1" />
                    New York, US
                  </small>
                </div>
              </div>
              <span className="text-success fw-bold">⚡</span>
            </div>

            <h5 className="fw-bold mb-2">UI / UX Designer fulltime</h5>

            <div className="d-flex gap-4 small mb-2 align-items-center justify-content-between">
              <div>
                <span>
                  <FaBriefcase className="me-1 mb-1" />
                  Fulltime
                </span>
              </div>
              <div>
                <span>
                  <FaClock className="me-1 mb-1" />4 minutes ago
                </span>
              </div>
            </div>

            <p className="small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet.
            </p>
            <div className="mb-3">
              <span className="badge me-2">Adobe XD</span>
              <span className="badge me-2">Figma</span>
              <span className="badge">Photoshop</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="salary mb-0">
                $500 <small>/Hour</small>
              </h5>

              <button className="btn btn-outline-primary fw-bold text-white fs-6">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
