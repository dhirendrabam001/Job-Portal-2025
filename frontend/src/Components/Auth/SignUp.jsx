import { Link, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";
import Header from "./Header";
import { useState } from "react";
import { USER_API_END_POINT } from "../../utils/constantUrl";
const SignUp = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  //   GET TARGET VALUE
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      toast.success(res.data.message || "User Register Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <>
      <Header />

      <div className="loginInfo py-4">
        <div className="containerInfo">
          <h2 className="fs-bold fs-3 mb-3">
            Sign<span className="text-danger">Up</span>
          </h2>
          <form onSubmit={submitHandler} className="">
            <div className="mb-3">
              <label htmlFor="exampleInputFullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                value={input.fullName}
                name="fullName"
                onChange={changeEventHandler}
                className="form-control"
                placeholder="Enter Your Full Name..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                className="form-control"
                placeholder="Enter Your Email Address..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                className="form-control"
                placeholder="Enter Your Phone Number..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Enter Your Password..."
                className="form-control"
              />
            </div>
            <div className="main-select d-flex align-items-center">
              <div className="radio-btn d-flex gap-3 align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    type="radio"
                    name="role"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Student
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    type="radio"
                    name="role"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Recruiter
                  </label>
                </div>
              </div>
              <div className="main-left d-flex gap-2 align-items-center">
                <label htmlFor="text">Profile</label>
                <input
                  type="file"
                  onChange={changeFileHandler}
                  accept="image/*"
                />
              </div>
            </div>
            <div className="login-btn text-center py-3 mt-2">
              <button type="submit" className="btn btn-danger fw-bold w-100">
                Register
              </button>
            </div>
            <span className="text-muted mb-2 fs-6">
              ALready Have An Account? <Link to={"/login"}> Login</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
