import { useParams } from "react-router-dom";
import { APPLICATION_API_POINT, JOBS_API_POINT } from "../utils/constantUrl";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getSingleJob } from "../redux/jobSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";

const DetailsJob = () => {
  const { singleJob } = useSelector((store) => store.jobs);
  const { user } = useSelector((store) => store.auth);

  // check user apply or not particular job

  const isFirstApplied = singleJob?.application?.some(
    (application) => application.applicant === user?._id || false,
  );
  const [isApplied, setIsApplied] = useState(isFirstApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(
          `${JOBS_API_POINT}/getJobByIdStudent/${jobId}`,
          {
            withCredentials: true,
          },
        );
        if (res.data.success) {
          dispatch(getSingleJob(res.data.jobs));
          setIsApplied(
            res.data.jobs.application.some(
              (application) => application.applicant === user?._id,
            ),
          ); // ensure the state in fetch data
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message || "Job Can Not Found");
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  //APPLY JOB HALDLEER

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_POINT}/applyJobs/${jobId}`,
        {
          withCredentials: true,
        },
      );
      if (res.data.success) {
        setIsApplied(true);
        const updateSingleJob = {
          ...singleJob,
          application: [...singleJob.application, { applicant: user?._id }],
        };
        dispatch(getSingleJob(updateSingleJob)); // helps us to real time to ui
        toast.success("Job Applied Successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Job Can Not Applied");
    }
  };

  return (
    <>
      <div className="details-job py-4">
        <div className="container">
          <div className="fw-bold">
            <h4 className="mb-4">{singleJob?.title}</h4>
          </div>
          <div className="row">
            <div className="col-12 col-lg-10 col-md-10">
              <div className="d-flex gap-3">
                <span className="badge bg-primary">{singleJob?.position}</span>
                <span className="badge bg-secondary">{singleJob?.jobType}</span>
                <span className="badge bg-success">{singleJob?.salary}</span>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-2">
              <button
                disabled={isApplied}
                onClick={applyJobHandler}
                className="btn btn-outline-primary text-white fw-bold"
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
              <span className="fs-6 fw-normal ms-3">{singleJob?.title}</span>
            </h2>
            <h2 className="fw-bold fs-5">
              Location:
              <span className="fs-6 fw-normal ms-3">
                {singleJob?.locations}
              </span>
            </h2>
            <h2 className="fw-bold fs-5">
              Description:
              <span className="fs-6 fw-normal ms-3">
                {singleJob?.description}
              </span>
            </h2>
            <h2 className="fw-bold fs-5">
              Salary:
              <span className="fs-6 fw-normal ms-3">{singleJob?.salary}</span>
            </h2>
            <h2 className="fw-bold fs-5">
              Total Applicants:
              <span className="fs-6 fw-normal ms-3">
                {singleJob?.application.length ?? 0}
              </span>
            </h2>
            <h2 className="fw-bold fs-5">
              Posted Jobs:
              <span className="fs-6 fw-normal ms-3">
                {singleJob?.createdAt
                  ? singleJob.createdAt.split("T")[0]
                  : "N/A"}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsJob;
