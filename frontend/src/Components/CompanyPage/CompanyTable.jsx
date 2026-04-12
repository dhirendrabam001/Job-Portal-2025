import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setCompany, setSearchCompanyText } from "../../redux/companySlice";
import toast from "react-hot-toast";
import axios from "axios";
import { COMPANY_API_POINT } from "../../utils/constantUrl";
import {} from "react-redux";

const CompanyTable = () => {
  const dispatch = useDispatch();
  const { company, searchCompanyText } = useSelector((store) => store.company);
  const [filterCompany, setFilterCompany] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filterd = Array.isArray(company)
      ? company.filter((company) => {
          if (!searchCompanyText) {
            return true;
          }
          return company?.companyName
            ?.toLowerCase()
            .includes(searchCompanyText.toLowerCase());
        })
      : [];
    setFilterCompany(filterd);
  }, [company, searchCompanyText]);

  const deleteHandler = async (id) => {
    console.log(id);

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this company",
    );
    if (!confirmDelete) return;
    try {
      const res = await axios.delete(
        `${COMPANY_API_POINT}/deleteCompany/${id}`,
        {
          withCredentials: true,
        },
      );
      if (res.data.success) {
        toast.success(res.data.message || "Company Deleted Successfully");

        // delete from redux also
        const updatedCompany = company.filter((c) => c._id !== id);
        dispatch(setCompany(updatedCompany));
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.message);
    }
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table company-table">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Company Name</th>
              <th>Date</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filterCompany.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  Company Not Found
                </td>
              </tr>
            ) : (
              filterCompany.map((company) => {
                return (
                  <tr key={company?._id}>
                    <td>
                      <img
                        src={company.logo}
                        className="company-logo"
                        alt="logo"
                      />
                    </td>

                    <td>{company.companyName}</td>
                    <td>{company.createdAt.split("T")[0]}</td>
                    <td className="text-center d-flex align-items-center gap-3 custom-btn justify-content-center">
                      <button
                        className="btn btn-sm btn-primary fw-bold mb-1"
                        onClick={() =>
                          navigate(`/admin/company/${company?._id}`)
                        }
                      >
                        <MdEdit className="mb-1" /> Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger fw-bold mb-1"
                        onClick={() => deleteHandler(company?._id)}
                      >
                        <MdEdit className="mb-1" /> Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompanyTable;
