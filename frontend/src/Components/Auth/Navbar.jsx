import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const linkRoutes = [
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs" },
    { name: "Browsers", url: "/browsers" },
    { name: "Upload Jobs", url: "/upload-jobs" },
    { name: "About Us", url: "/about-us" },
  ];

  const recruiterRoutes = [
    { name: "Companies", url: "/admin/company" },
    { name: "Jobs", url: "/admin/jobs" },
  ];

  const location = useLocation();
  const routes =
    user && user.role === "recruiter" ? recruiterRoutes : linkRoutes;

  return (
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-0 gap-md-4">
      {routes.map((items) => {
        const isActive = location.pathname === items.url;

        return (
          <li className="nav-item" key={items.url}>
            <Link
              to={items.url}
              className={`nav-link ${
                isActive ? "active fw-bold text-primary" : ""
              }`}
            >
              {items.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
