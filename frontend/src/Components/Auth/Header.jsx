import { IoSettingsOutline } from "react-icons/io5";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Header = () => {
  // LOGOUT HANDLER
  const handleLogOut = async () => {
    try {
      const res = await axios.get(
        "https://job-portal-backend-xnmw.onrender.com/api/user/logout",

        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success(res.data.message || "Profile Logout Successfully");
        localStorage.removeItem("user");
        setTimeout(() => {
          window.location.href = "/";
        }, 800);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          "Logout Failed Please Try Again Later.."
      );
    }
  };
  const [users, setUsers] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUsers(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-info">
      <div className="container-fluid mx-3">
        <Link className="navbar-brand" to="/">
          <img src="/output.webp" width="150" height="50" />
        </Link>

        <div className="collapse navbar-collapse">
          <Navbar />

          {!users && (
            <div className="d-flex gap-3">
              <Link to="/login">
                <button className="btn btn-outline-light">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-outline-primary text-white">
                  SignUp
                </button>
              </Link>
            </div>
          )}

          {users && (
            <div className="position-relative d-flex align-items-center gap-2 profile-img">
              <span className="text-white">{users.fullName}</span>

              <img
                src={users?.profile?.profilePhoto}
                alt="avatar"
                className="rounded-circle"
              />

              <button
                className="setting-btn border-0 bg-transparent text-white"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <IoSettingsOutline className="fs-3 fw-bold" />
              </button>

              {/* Dropdown */}
              {openMenu && (
                <div className="position-absolute bg-white p-3 rounded end-0 top-100 mt-2">
                  <Link
                    to="/profile"
                    className="text-black fw-bold text-decoration-none"
                    onClick={() => setOpenMenu(false)}
                  >
                    👤 View Profile
                  </Link>
                  <hr />
                  <button className="fw-bold logout-btn" onClick={handleLogOut}>
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
