import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/authSlice";
import Navbar from "./Navbar";

const Header = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // LOGOUT HANDLER
  const handleLogOut = async () => {
    try {
      const res = await axios.get(
        "https://backend-job-portal-66jc.onrender.com/api/user/logout",

        { withCredentials: true },
      );
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message || "Profile Logout Successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          "Logout Failed Please Try Again Later..",
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-info">
      <div className="container-fluid mx-3">
        <Link className="navbar-brand" to="/">
          <img src="/output.webp" width="150" height="50" />
        </Link>
        <div className="collapse navbar-collapse">
          <Navbar />
          {!user ? (
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
          ) : (
            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user?.profile?.profilePhoto}
                  alt=""
                  style={{ width: "32px", height: "32px" }}
                  className="rounded-circle me-2"
                />
                <strong>{user?.fullName}</strong>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark text-small shadow"
                aria-labelledby="dropdownUser1"
              >
                {user && user.role === "student" && (
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      View Profile
                    </Link>
                  </li>
                )}

                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={handleLogOut}>
                    Sign out
                  </a>
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
