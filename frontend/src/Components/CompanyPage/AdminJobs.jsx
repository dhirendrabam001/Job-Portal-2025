import { useNavigate } from "react-router-dom";
import Header from "../Auth/Header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AdminCompanyTable from "./AdminCompanyTable";
import useGetAllAdminJobs from "../../Hooks/useGetAllAdminJobs";
import { setSearchJobByText } from "../../redux/jobSlice";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);
  return (
    <>
      <Header />
      <div className="homePage-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="company-search">
                <input
                  type="text"
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Filter By Name"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="d-flex align-items-center justify-content-end company-search">
                <button
                  type="button"
                  onClick={() => navigate("/admin/jobs/create")}
                  className="btn btn-outline-primary text-white fw-bold"
                >
                  Post Job
                </button>
              </div>
            </div>
          </div>
          <div className="company-table-main">
            <AdminCompanyTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminJobs;
