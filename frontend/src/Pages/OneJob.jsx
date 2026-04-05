// import { BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import Jobs from "../LandingPage/Jobs";

const OneJob = () => {
  // const navigate = useNavigate();
  // const jobId = "dhirendra";
  // const dayAgoFunction = (mongodbTime) => {
  //   const createdAt = new Date(mongodbTime);
  //   const currentTime = new Date();
  //   const timeDifference = currentTime - createdAt;
  //   return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  // };
  return (
    <>
      <div className="container">
        <div className="job-card">
          <div className="card shadow py-4">
            <div className="card-img-content text-white">
              <h5>Company Name</h5>
              <p>Company Location</p>
            </div>

            <div className="main-card-content">
              <h4 className="text-white fw-bold fs-5">Company Title</h4>
              <p className="text-white">Company Description</p>
              <div className="badge-info d-flex align-items-center justify-content-between">
                <span className="badge bg-primary">Position</span>
                <span className="badge bg-secondary">Job Type</span>
                <span className="badge bg-success">Job Salary</span>
              </div>
            </div>
          </div>
          {/* <div className="card shadow">
            <div className="card-body d-flex align-items-center justify-content-between text-white">
              <p>
                {dayAgoFunction(job?.createdAt) === 0
                  ? "Today"
                  : `${dayAgoFunction(job?.createdAt)} days age`}
              </p>
              <BsBookmark />
            </div>
            <div className="card-img d-flex gap-3">
              <div className="card-imges">
                <img src="/Google.webp" alt="" />
              </div>

              <div className="card-img-content text-white">
                <h5>{job?.company?.companyName}</h5>
                <p>India</p>
              </div>
            </div>
            <div className="main-card-content">
              <h4 className="text-white fw-bold fs-5">{job?.title}</h4>
              <p className="text-white">{job?.description}</p>
              <div className="badge-info d-flex align-items-center justify-content-between">
                <span className="badge bg-primary">{job?.position}</span>
                <span className="badge bg-secondary">{job?.locations}</span>
                <span className="badge bg-success">{job?.salary}</span>
              </div>
              <div className="jobs-btn d-flex justify-content-between mt-3">
                <div className="details-btn">
                  <button
                    onClick={() => navigate(`/details/${job?._id}`)}
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OneJob;
