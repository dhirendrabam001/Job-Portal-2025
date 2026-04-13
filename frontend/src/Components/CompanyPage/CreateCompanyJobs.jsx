import { useNavigate } from "react-router-dom";
import Header from "../Auth/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { JOBS_API_POINT } from "../../utils/constantUrl";
import { setLoading } from "../../redux/authSlice";
import Loading from "../Loading";
import {} from "react-redux";

const CreateCompanyJobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    locations: "",
    requirements: "",
    salary: "",
    jobType: "",
    experience: "",
    position: "",
    companyId: "",
    description: "",
  });
  const { company } = useSelector((store) => store.company);
  const { loading } = useSelector((store) => store.auth);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectCompanyHandler = (value) => {
    const selectedCompany = company.find((item) => item._id === value);

    setInput({ ...input, companyId: selectedCompany?._id });
  };

  const submitEventHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${JOBS_API_POINT}/jobPosts`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("Admin Job Posted Successfully");
        navigate("/admin/jobs");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <Header />
      <div className="adminjobs-main">
        <div className="company-setup-btn-info d-flex align-items-center gap-5 justify-content-center mb-5">
          <div className="company-setup-btn">
            <button
              className="btn btn-outline-success text-white fw-bold"
              onClick={() => navigate("/admin/jobs")}
            >
              <IoMdArrowRoundBack />
              Back
            </button>
          </div>
          <div className="company-setup-heading">
            <h2>Back To Jobs</h2>
          </div>
        </div>
        {loading && <Loading />}
        <form onSubmit={submitEventHandler} className="company-form">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={input.title}
                  onChange={changeEventHandler}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="mb-3">
                <label htmlFor="locations" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="locations"
                  value={input.locations}
                  onChange={changeEventHandler}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="mb-3">
                <label htmlFor="requirement" className="form-label">
                  Requirement
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="requirements"
                  value={input.requirements}
                  onChange={changeEventHandler}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="mb-3">
                <label htmlFor="salary" className="form-label">
                  Salary
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="salary"
                  value={input.salary}
                  onChange={changeEventHandler}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="mb-3">
                <label htmlFor="jobType" className="form-label">
                  JobType
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="jobType"
                  value={input.jobType}
                  onChange={changeEventHandler}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="mb-3">
                <label htmlFor="experience" className="form-label">
                  Experience
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="experience"
                  value={input.experience}
                  onChange={changeEventHandler}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="mb-3">
                <label htmlFor="position" className="form-label">
                  Position
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="position"
                  value={input.position}
                  onChange={changeEventHandler}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              {company.length > 0 && (
                <select
                  defaultValue=""
                  className="form-select"
                  name="companyId"
                  value={input.companyId}
                  onChange={(e) => selectCompanyHandler(e.target.value)}
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Select Company
                  </option>
                  {company.map((item) => {
                    return (
                      <option key={item._id} value={item._id}>
                        {item.companyName}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  rows="6"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                ></textarea>
              </div>
            </div>

            <div className="col-12">
              <div className="job-btn">
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 fw-bold text-white"
                >
                  Submit
                </button>
              </div>
            </div>
            {company.length === 0 && (
              <span className="fw-bold text-danger my-2">
                Please register a company before posting a jobs!
              </span>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default CreateCompanyJobs;
