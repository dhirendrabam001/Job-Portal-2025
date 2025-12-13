import Header from "../Header";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Header />

      <div className="loginInfo py-4">
        <div className="containerInfo">
          <h2 className="fs-bold fs-3 mb-3">
            Log<span className="text-danger">in</span>
          </h2>
          <form action={"/login"} method="POST" className="">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
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
                placeholder="Enter Your Password..."
                className="form-control"
              />
            </div>
            <div className="radio-btn d-flex gap-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Student
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
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
