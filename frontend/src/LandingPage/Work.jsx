import { AiOutlineFileText } from "react-icons/ai";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { MdVerified } from "react-icons/md";
const Work = () => {
  return (
    <div className="work-info py-4 mt-5">
      <div className="container">
        <div className="text-center mb-2">
          <h2 className="text-white fs-1 fw-bold">How It Works</h2>
          <p>
            Effortlessly navigate through the process and land your dream job.
          </p>
        </div>
        <div className="row align-items-center g-5 justify-content-center">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="work-content position-relative">
              <img src="/Girl.webp" className="img-fluid" alt="girl" />
              <div className="work-content-info position-absolute text-center">
                <img src="/avatar1.webp" alt="avatar1" />
                <h4>Completed Your Profile</h4>
                <p>80% Completed</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="work-content-right d-flex align-items-center gap-3 my-3">
              <div className="work-content-icons">
                <AiOutlineFileText />
              </div>
              <div className="work-contents">
                <h2>Build Your Resume</h2>
                <p>Create a standout resume with your skills.</p>
              </div>
            </div>
            <div className="work-content-right d-flex align-items-center gap-3 my-3">
              <div className="work-content-icons">
                <MdOutlineAssignmentInd />
              </div>
              <div className="work-contents">
                <h2>Apply For Jobs</h2>
                <p>Find and apply for jobs that match your skills.</p>
              </div>
            </div>
            <div className="work-content-right d-flex align-items-center gap-3 my-3">
              <div className="work-content-icons">
                <MdVerified />
              </div>
              <div className="work-contents">
                <h2>Get Hired</h2>
                <p>Connect with employers and start your new job.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
