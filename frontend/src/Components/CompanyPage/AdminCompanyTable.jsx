import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { COMPANY_API_POINT } from "../../utils/constantUrl";
import {} from "react-redux";
import { setAdminJobs } from "../../redux/jobSlice";

const AdminCompanyTable = () => {
  const dispatch = useDispatch();
  //   const { company, searchCompanyText } = useSelector((store) => store.company);
  const { adminJobs, searchJobByText } = useSelector((store) => store.jobs);
  const [filterJobs, setFilterJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filterd = Array.isArray(adminJobs)
      ? adminJobs.filter((job) => {
          if (!searchJobByText) {
            return true;
          }
          return job?.company?.companyName
            ?.toLowerCase()
            .includes(searchJobByText.toLowerCase());
        })
      : [];
    setFilterJobs(filterd);
  }, [adminJobs, searchJobByText]);

  const deleteHandler = async (id) => {
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
        const updatedCompany = filterJobs.filter((c) => c._id !== id);
        dispatch(setAdminJobs(updatedCompany));
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
              <th>Company Name</th>
              <th>Role</th>
              <th>Date</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filterJobs.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  Company Not Found
                </td>
              </tr>
            ) : (
              filterJobs.map((job) => {
                return (
                  <tr key={job?._id}>
                    <td>{job?.company?.companyName}</td>
                    <td>{job?.title}</td>
                    <td>{job?.createdAt.split("T")[0]}</td>
                    <td className="text-center d-flex align-items-center gap-3 custom-btn justify-content-center">
                      <button
                        className="btn btn-sm btn-primary fw-bold mb-1"
                        onClick={() => navigate(`/admin/company/${job?._id}`)}
                      >
                        <MdEdit className="mb-1" /> Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger fw-bold mb-1"
                        onClick={() => deleteHandler(job?._id)}
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

export default AdminCompanyTable;
