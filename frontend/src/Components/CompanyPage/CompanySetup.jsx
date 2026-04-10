import { useEffect, useState } from "react";
import Header from "../Auth/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_POINT } from "../../utils/constantUrl";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import { setLoading } from "../../redux/authSlice";

const CompanySetup = () => {
  const { loading } = useSelector((store) => store.auth);
  const { singleCompany } = useSelector((store) => store.company);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    companyName: "",
    location: "",
    website: "",
    file: null,
    description: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const params = useParams();
  const userId = params.id;

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    console.log("input Data", input);
    const formData = new FormData();
    formData.append("companyName", input.companyName);
    formData.append("location", input.location);
    formData.append("website", input.website);
    formData.append("description", input.description);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.put(
        `${COMPANY_API_POINT}/updateDataInfo/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        },
      );

      if (res.data.success) {
        toast.success(
          res.data.message || "Company Profile Updated Successfully",
        );
        navigate("/admin/company");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  // first call useeffect
  useEffect(() => {
    setInput({
      companyName: singleCompany.companyName || "",
      location: singleCompany.location || "",
      website: singleCompany.website || "",
      file: singleCompany.file || null,
      description: singleCompany.description || "",
    });
  }, [singleCompany]);

  return (
    <>
      <Header />
      <div className="homePage-main">
        <div className="company-setup-info">
          <div className="company-setup-btn-info d-flex align-items-center gap-5 justify-content-center mb-5">
            <div className="company-setup-btn">
              <button
                className="btn btn-outline-success text-white fw-bold"
                onClick={() => navigate("/admin/company")}
              >
                <IoMdArrowRoundBack />
                Back
              </button>
            </div>
            <div className="company-setup-heading">
              <h2>Company Setup</h2>
            </div>
          </div>
          <div className="company-form">
            {loading && <Loading />}
            <form onSubmit={submitHandler}>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="companyname" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="companyName"
                      value={input.companyName}
                      onChange={changeEventHandler}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={input.location}
                      onChange={changeEventHandler}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="website" className="form-label">
                      Website
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="website"
                      value={input.website}
                      onChange={changeEventHandler}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="logo" className="form-label">
                      Logo
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      onChange={changeFileHandler}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Example textarea
                    </label>
                    <textarea
                      className="form-control"
                      rows="6"
                      onChange={changeEventHandler}
                      value={input.description}
                      name="description"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-outline-success w-100 fw-bold text-white"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanySetup;
