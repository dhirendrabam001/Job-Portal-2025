import { FaMapMarkerAlt, FaClock, FaBriefcase } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
const LatestJobs = ({ job }) => {
  const dayAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  return (
    <div className="latestjob-card">
      <div className="d-flex align-items-center justify-content-between">
        <p>
          <FaClock className="me-1 mb-1" />
          {dayAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${dayAgoFunction(job?.createdAt)} days age`}
        </p>
        <BsBookmark />
      </div>

      <div className="d-flex align-items-center gap-2">
        <div className="logo-box">
          <img src={job?.company?.logo} alt="logo" />
        </div>
        <div>
          <h6 className="mb-0 fw-bold text-white">
            {job?.company?.companyName}
          </h6>
          <small>
            <FaMapMarkerAlt className="me-1" />
            {job?.locations}
          </small>
        </div>
      </div>

      <h5 className="fw-bold mb-2">{job?.title}</h5>

      <div className="d-flex gap-4 small mb-2 align-items-center justify-content-between">
        <div>
          <span>
            <FaBriefcase className="me-1 mb-1" />
            {job?.jobType}
          </span>
        </div>
        <div>
          <span>{job?.salary}</span>
        </div>
      </div>

      <p className="small">{job?.description}</p>
      <div className="mb-3">
        {Array.isArray(job?.requirements) &&
          job?.requirements.map((item, index) => {
            return (
              <span key={index} className="badge me-2">
                {item}
              </span>
            );
          })}
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="salary mb-0">{job?.salary}</h5>

        <button className="btn btn-outline-primary fw-bold text-white fs-6">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default LatestJobs;
