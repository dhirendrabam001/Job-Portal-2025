const LatestJobs = ({ job }) => {
  return (
    <>
      <div className="container">
        <div className="job-card">
          <div className="card shadow py-4">
            <div className="card-img-content text-white">
              <h5>{job?.company?.companyName}</h5>
              <p>{job?.locations}</p>
            </div>

            <div className="main-card-content">
              <h4 className="text-white fw-bold fs-5">{job?.title}</h4>
              <p className="text-white">{job?.description}</p>
              <div className="badge-info d-flex align-items-center justify-content-between">
                <span className="badge bg-primary">{job?.position}</span>
                <span className="badge bg-secondary">{job?.jobType}</span>
                <span className="badge bg-success">{job?.salary}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestJobs;
