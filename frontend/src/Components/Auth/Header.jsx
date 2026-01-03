import { MdOutlineNotificationsOff } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUsers(JSON.parse(storedUser));
    }
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-info">
      <div className="container-fluid mx-3">
        <a className="navbar-brand" href="#">
          <img src="/output.webp" width="150" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Navbar />

          {!users && (
            <div className="d-flex gap-3 btn-info mt-2 fw-bold">
              <Link to={"/login"}>
                <button className="btn btn-outline-light">Login</button>
              </Link>
              <Link to={"/signup"}>
                <button className="btn btn-outline-primary text-white">
                  SignUp
                </button>
              </Link>
            </div>
          )}
          {users && (
            <div className="d-flex text-white align-items-center gap-md-2 gap-0">
              <div className="d-flex align-items-center profile-avtag">
                <span className="">{users.fullName}</span>

                <img src="/avtar.webp" alt="avtar" width="40" />

                <div
                  className="setting-btn rounded-circle"
                  data-bs-toggle="modal"
                  data-bs-target="#profileModal"
                  style={{ cursor: "pointer" }}
                >
                  <IoSettingsOutline />
                </div>
              </div>

              {/* {* modal */}

              <div
                className="modal fade"
                id="profileModal"
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-sm modal-dialog-end">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <img
                          src="/avtar.webp"
                          alt="profile"
                          width="45"
                          height="45"
                          className="rounded-circle"
                        />
                        <div>
                          <h6 className="mb-0">Dhirendra Bam</h6>
                          <small className="text-muted">
                            Full Stack Developer
                          </small>
                        </div>
                      </div>

                      <hr />

                      <Link to={"/profile"}>
                        <button className="mb-2">👤 View Profile</button>
                      </Link>

                      <p
                        className="mb-0 text-danger cursor-pointer"
                        onClick={() => {
                          localStorage.removeItem("user");
                          setUsers(null);
                          window.location.href = "/login";
                        }}
                      >
                        🚪 Logout
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* End */}

              {/* <div className="setting-btn rounded-circle position-relative align-items-center justify-content-center">
                <MdOutlineNotificationsOff />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  1+
                </span>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
