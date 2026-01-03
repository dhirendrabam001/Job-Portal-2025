const DetailsJob = () => {
  const isApplied = false;
  return (
    <>
      <div className="details-job py-4">
        <div className="container">
          <div className="fw-bold">
            <h4 className="mb-4">Frontend Developer</h4>
          </div>
          <div className="row">
            <div className="col-12 col-lg-10 col-md-10">
              <div className="d-flex gap-3">
                <span className="badge bg-primary">14 Postion</span>
                <span className="badge bg-secondary">Full-Time</span>
                <span className="badge bg-success">30LPA</span>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-2">
              <button
                disabled={isApplied}
                className="btn btn-outline-dark fw-bold"
              >
                {isApplied ? "Already Applied" : "Apply Now"}
              </button>
            </div>
          </div>
          {/* Jobs description */}

          <div className="mb-0">
            <h2 className="fw-bold fs-5">Job Description</h2>
          </div>
          <hr />
          <div className="job-details my-4">
            <h2 className="fw-bold fs-5">
              Role:
              <span className="fs-6 fw-normal ms-3">Frontend Developer</span>
            </h2>
            <h2 className="fw-bold fs-5">
              Location:
              <span className="fs-6 fw-normal ms-3">Chandigarh</span>
            </h2>
            <h2 className="fw-bold fs-5">
              Description:
              <span className="fs-6 fw-normal ms-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </h2>
            <h2 className="fw-bold fs-5">
              Salary:
              <span className="fs-6 fw-normal ms-3">20LPA</span>
            </h2>
            <h2 className="fw-bold fs-5">
              Total Applicants:
              <span className="fs-6 fw-normal ms-3">5</span>
            </h2>
            <h2 className="fw-bold fs-5">
              Posted Jobs:
              <span className="fs-6 fw-normal ms-3">20/12/2025</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsJob;
