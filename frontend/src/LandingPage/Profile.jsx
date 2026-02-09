import Header from "../Components/Auth/Header";
import { SlPencil } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import AppliedJobs from "./AppliedJobs";
import { useState, useEffect } from "react";
import UpdateProfile from "./UpdateProfile";

// const skillsInfo = ["NodeJs", "Express", "MongoDB", "ReactJs"];
// const isResume = true;
const Profile = () => {
  const [open, setOpen] = useState(false);

  // USER IN STATE
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || {};
  });

  // keep in sync with localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <>
      <div className="profile-main">
        <Header />
        <div className="container">
          <div className="profile-info text-white">
            <div className="row justify-content-center g-5">
              <div className="col-12 col-md-10 col-lg-10">
                <div className="profile-section">
                  <img src={user?.profile?.profilePhoto} alt="profile" />
                  {/* <div className="profile-content-left d-flex justify-content-between"> */}
                  <div className="profile-content">
                    <h4 className="fs-5 fw-bold">{user?.fullName}</h4>
                    <p>{user?.profile?.bio}</p>
                  </div>
                  {/* </div> */}
                </div>
              </div>
              <div className="col-12 col-md-2 col-lg-2">
                <div className="right-icons d-flex justify-content-end">
                  <button onClick={() => setOpen(true)} className="border-0">
                    <SlPencil />
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="profile-section">
              <img src="avatar.webp" alt="profile" />
              <div className="profile-content-left d-flex justify-content-between">
                <div className="profile-content">
                  <h4 className="fs-5 fw-bold">{user?.fullName}</h4>
                  <p>{user?.profile?.bio}</p>
                </div>
                <div className="right-icons">
                  <button onClick={() => setOpen(true)} className="border-0">
                    <SlPencil />
                  </button>
                </div>
              </div>
            </div> */}

            {/* Content Info */}
            <div className="profile-content d-flex align-items-center gap-2 mt-3">
              <p>
                <MdEmail />
              </p>
              <p>{user?.email}</p>
            </div>
            {/* Contact Nu */}
            <div className="profile-content d-flex align-items-center gap-2">
              <p>
                <IoCall />
              </p>
              <p>{user?.phoneNumber}</p>
            </div>

            {/* Skills */}
            <div className="skills-info my-2">
              <h4 className="fs-5">Skills</h4>
              {user?.profile?.skills?.map((items, index) => {
                return (
                  <span key={index} className="badge bg-primary me-2">
                    {items}
                  </span>
                );
              })}
            </div>
            {/* Resume */}
            <div className="resume my-2">
              <label>Resume</label>
              <div className="resume-info">
                {user?.profile?.resume ? (
                  <a
                    href={user.profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fw-bold text-info"
                  >
                    {user.profile.resumeOriginalName}
                  </a>
                ) : (
                  <span className="text-muted text-white fw-medium">
                    No resume uploaded
                  </span>
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
          <UpdateProfile
            open={open}
            setOpen={setOpen}
            setUser={setUser}
            user={user}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
