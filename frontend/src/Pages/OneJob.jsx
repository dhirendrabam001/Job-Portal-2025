import { BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const OneJob = () => {
  const navigate = useNavigate();
  const jobId = "dhirendra";
  return (
    <>
      <div className="container">
        <div className="job-card">
          <div className="card shadow">
            <div className="card-body d-flex align-items-center justify-content-between text-white">
              <p>2 days ago</p>
              <BsBookmark />
            </div>
            <div className="card-img d-flex gap-3">
              <div className="card-imges">
                <img src="/Google.webp" alt="" />
              </div>

              <div className="card-img-content text-white">
                <h5>Company Name</h5>
                <p>India</p>
              </div>
            </div>
            <div className="main-card-content">
              <h4 className="text-white fw-bold fs-5">Title</h4>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                amet nihil vel.
              </p>
              <div className="badge-info d-flex align-items-center justify-content-between">
                <span className="badge bg-primary">12 Position</span>
                <span className="badge bg-secondary">Full-Time</span>
                <span className="badge bg-success">50LPA</span>
              </div>
              <div className="jobs-btn d-flex justify-content-between mt-3">
                <div className="details-btn">
                  <button
                    onClick={() => navigate(`/details/${jobId}`)}
                    type="button"
                    className="btn btn-outline-success text-white fw-bold"
                  >
                    Details
                  </button>
                </div>
                <div className="later-btn">
                  <button
                    type="button"
                    className="btn btn-outline-primary text-white fw-bold"
                  >
                    Save Later
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

export default OneJob;
