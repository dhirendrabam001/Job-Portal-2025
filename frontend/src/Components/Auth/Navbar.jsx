import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const linkRoutes = [
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs" },
    { name: "Browsers", url: "/browsers" },
  ];

  const recruiterRoutes = [
    { name: "Companies", url: "/admin/company" },
    { name: "Jobs", url: "/admin/jobs" },
  ];

  const location = useLocation();
  const routes =
    user && user.role === "recruiter" ? recruiterRoutes : linkRoutes;

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 gap-lg-4 mt-3 mt-lg-0">
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

const inputHandler = () => {
  console.log("hello");
};
