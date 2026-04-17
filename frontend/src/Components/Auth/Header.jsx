import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/authSlice";
import Navbar from "./Navbar";
import { USER_API_END_POINT } from "../../utils/constantUrl";

const Header = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message || "Logout Successfully");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Logout Failed. Try again later.",
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-3">
        {/* LOGO */}
        <Link className="navbar-brand fw-bold" to="/">
          <img src="/output.webp" width="120" height="40" alt="logo" />
        </Link>

        {/* ✅ TOGGLE BUTTON (IMPORTANT) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ COLLAPSE AREA */}
        <div className="collapse navbar-collapse" id="navbarMain">
          <Navbar />

          {!user ? (
            <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-3 mt-3 mt-lg-0">
              <Link to="/login">
                <button className="btn btn-outline-light w-100">Login</button>
              </Link>

              <Link to="/signup">
                <button className="btn btn-outline-primary text-white w-100">
                  SignUp
                </button>
              </Link>
            </div>
          ) : (
            <div className="dropdown ms-lg-3 mt-3 mt-lg-0">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  src={user?.profile?.profilePhoto}
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <strong>{user?.fullName}</strong>
              </a>

              <ul className="dropdown-menu dropdown-menu-dark shadow">
                {user?.role === "student" && (
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      View Profile
                    </Link>
                  </li>
                )}

                <li>
                  <span className="dropdown-item">Settings</span>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <button className="dropdown-item" onClick={handleLogOut}>
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
