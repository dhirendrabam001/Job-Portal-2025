import { useState } from "react";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { USER_API_END_POINT } from "../../utils/constantUrl";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const submitEvent = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      console.log("Login response:", res.data);
      toast.success(res.data.message || "User Login Successfully");
      navigate("/");
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
            Log<span className="text-danger">in</span>
          </h2>
          <form onSubmit={submitEvent} className="">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="text"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                className="form-control"
                placeholder="Enter Your Email Address..."
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                placeholder="Enter Your Password..."
                className="form-control"
              />
            </div>
            <div className="radio-btn d-flex gap-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  type="radio"
                  name="role"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
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
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Recruiter
                </label>
              </div>
            </div>
            <div className="login-btn text-center py-3 mt-2">
              <button type="submit" className="btn btn-danger fw-bold w-100">
                Login
              </button>
            </div>
            <span className="text-muted mb-2 fs-6">
              Don't Have An Account? <Link to={"/signup"}> SignUp</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
