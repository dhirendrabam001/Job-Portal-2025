import axios from "axios";
import { useReducer, useState } from "react";
import toast from "react-hot-toast";
import { USER_API_END_POINT } from "../utils/constantUrl";

const UpdateProfile = ({ open, setOpen }) => {
  // 👇 if modal is closed, render nothing
  if (!open) return null;

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [input, setInput] = useState({
    fullName: user.fullName || "",
    email: user.email || "",
    phoneNumber: user.phoneNumber || "",
    bio: user.profile?.bio || "",
    skills: user.profile?.skills?.join(",") || "",
    file: null,
  });

  const [loading, setLoading] = useState(false);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.put(
        `${USER_API_END_POINT}/updateProfile`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("res data", res);

      // Update localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success(res.data.message || "Profile Updated Successfully");
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* HEADER */}
            <div className="modal-header">
              <h5 className="modal-title">Update Profile</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setOpen(false)} // 👈 close modal
              ></button>
            </div>

            {/* BODY */}
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={input.fullName}
                    onChange={changeEventHandler}
                    id="name"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={input.email}
                    onChange={changeEventHandler}
                    id="email"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    value={input.phoneNumber}
                    onChange={changeEventHandler}
                    id="number"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Bio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="bio"
                    value={input.bio}
                    onChange={changeEventHandler}
                    id="bio"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Skills
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="skills"
                    value={input.skills}
                    onChange={changeEventHandler}
                    id="skills"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Resume
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="file"
                    id="file"
                    accept="application/pdf"
                    onChange={fileChangeHandler}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark w-100 my-3 fw-bold"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
    </>
  );
};

export default UpdateProfile;
