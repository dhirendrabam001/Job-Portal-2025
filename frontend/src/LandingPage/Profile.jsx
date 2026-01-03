import Header from "../Components/Auth/Header";
import { SlPencil } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import AppliedJobs from "./AppliedJobs";
import { useState } from "react";
import UpdateProfile from "./UpdateProfile";

const skillsInfo = ["NodeJs", "Express", "MongoDB", "ReactJs"];
const isResume = true;
const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="profile-main">
        <Header />
        <div className="container">
          <div className="profile-info text-white">
            <div className="profile-section">
              <img src="avatar.webp" alt="profile" />
              <div className="profile-content">
                <h4 className="fs-5 fw-bold">Full Name</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  perspiciatis illo fuga, magni quo culpa natus magnam modi
                  praesentium sit quam enim iure explicabo nulla aliquam sequi
                  animi quos eum.
                </p>
              </div>
              <div className="right-icons">
                <button onClick={() => setOpen(true)} className="border-0">
                  <SlPencil />
                </button>
              </div>
            </div>

            {/* Content Info */}
            <div className="profile-content d-flex align-items-center gap-2 mt-3">
              <p>
                <MdEmail />
              </p>
              <p>dhirendrabam12345@gmail.com</p>
            </div>
            {/* Contact Nu */}
            <div className="profile-content d-flex align-items-center gap-2">
              <p>
                <IoCall />
              </p>
              <p>+916284844323</p>
            </div>

            {/* Skills */}
            <div className="skills-info my-2">
              <h4>Skills</h4>
              {skillsInfo.map((items, index) => {
                return (
                  <span key={items} className="badge bg-primary me-2">
                    {items}
                  </span>
                );
              })}
            </div>
            {/* Resume */}
            <div className="resume my-2">
              <label htmlFor="text">Resume</label>
              <div className="resume-info">
                {isResume ? (
                  <a target="blank" href="https://youtube.com">
                    Resume
                  </a>
                ) : (
                  <span>NA</span>
                )}
              </div>
            </div>
          </div>

          {/* Application table */}
          <div className="application-table mt-2">
            <h2 className="text-white mb-2 fw-bold fs-4">Applied Jobs</h2>
            <AppliedJobs />
          </div>

          {/* UpdateProfile */}
          <UpdateProfile open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
};

export default Profile;
