import { useNavigate } from "react-router-dom";
import Header from "../Auth/Header";
import CompanyTable from "./CompanyTable";
import useGetAllCompanyJobs from "../../Hooks/useGetAllCompanyJobs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchCompanyText } from "../../redux/companySlice";

const Company = () => {
  useGetAllCompanyJobs();
  const navigate = useNavigate();
  const [input, setInput] = useState("false");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyText(input));
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
                  onClick={() => navigate("/admin/company/create")}
                  className="btn btn-outline-primary text-white fw-bold"
                >
                  New Company
                </button>
              </div>
            </div>
          </div>
          <div className="company-table-main">
            <CompanyTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
