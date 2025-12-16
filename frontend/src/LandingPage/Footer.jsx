import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-main py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center g-4">
          <div className="col-12 col-md-3 col-lg-3 text-white footer-content">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img src="/output.webp" className="footer-img" alt="output" />
            </a>
            <p>
              Job portal with user profiles, skill updates, certifications, work
              experience and admin job postings.
            </p>
            <div className="social-media d-flex gap-2 align-items-center">
              <a href="https://www.facebook.com/dhirendrabam001/">
                <FaFacebook />
              </a>
              <a href="https://github.com/dhirendrabam001">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/dhirendrabam001/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/ig_dhirendra01/">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 footer-info">
            <h5>Products</h5>
            <ul className="nav flex-column text-center">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Find Jobs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Find Company
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Find Employee
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 col-lg-3 footer-info">
            <h5 className="mt-md-4">Company</h5>
            <ul className="nav flex-column text-center">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Contact Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 col-lg-3 footer-info">
            <h5>Support</h5>
            <ul className="nav flex-column text-center">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Help & Support
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Feedback
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
