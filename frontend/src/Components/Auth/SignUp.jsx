import { Link } from "react-router-dom";
import Header from "../Header";
import { useState } from "react";
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
    setInput({ ...input, [e.target.value]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  return (
    <>
      <Header />

      <div className="loginInfo py-4">
        <div className="containerInfo">
          <h2 className="fs-bold fs-3 mb-3">
            Sign<span className="text-danger">Up</span>
          </h2>
          <form action={"/register"} method="POST" className="">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                value={input.fullName}
                name="fullname"
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
                name="phonenumber"
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
                    value={input.role}
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    type="radio"
                    name="student"
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
                    value={input.role}
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    type="radio"
                    name="recruiter"
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
