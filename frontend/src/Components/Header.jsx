import { MdOutlineNotificationsOff } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import NavBar from "./Navbar";

const Header = () => {
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
          <NavBar />
          <div className="d-flex text-white align-items-center gap-md-2 gap-0">
            <div className="d-flex align-items-center gap-md-2">
              <div>Dhirendra</div>
              <img
                src="/avtar.webp"
                alt="avtar"
                width="30"
                height="30"
                className="rounded-circle"
              />
            </div>
            <div className="setting-btn rounded-circle">
              <IoSettingsOutline />
            </div>
            <div className="setting-btn rounded-circle position-relative align-items-center justify-content-center">
              <MdOutlineNotificationsOff />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1+
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
