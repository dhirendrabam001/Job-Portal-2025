import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { APPLICATION_API_POINT } from "../../utils/constantUrl";
const AdminApplicantTable = () => {
  const { allApplicant } = useSelector((store) => store.application);

  const statusHandle = async (id, status) => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_POINT}/status/${id}/updateStatusData`,
        { status },
        {
          withCredentials: true,
        },
      );

      if (res.data.success) {
        toast.success(res.data.message || "Status Updated Successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="applicant-table">
        <div className="table-responsive">
          <table className="table company-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Resume</th>
                <th>Date</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {allApplicant?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item?.applicant?.fullName}</td>
                    <td>{item?.applicant?.email}</td>
                    <td>{item?.applicant?.phoneNumber}</td>
                    <td>
                      {item.applicant?.profile?.resume ? (
                        <a
                          href={item?.applicant?.profile?.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item?.applicant?.profile?.resumeOriginalName}
                        </a>
                      ) : (
                        <span>NA</span>
                      )}
                    </td>
                    <td>{item?.applicant?.createdAt.split("T")[0]}</td>
                    <td className="text-center d-flex align-items-center gap-3 custom-btn justify-content-center">
                      <button
                        type="submit"
                        onClick={() => statusHandle(item._id, "accepted")}
                        className="btn btn-sm btn-success fw-bold mb-1"
                      >
                        Accepted
                      </button>
                      <button
                        type="submit"
                        onClick={() => statusHandle(item._id, "rejected")}
                        className="btn btn-sm btn-danger fw-bold mb-1"
                      >
                        Rejected
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminApplicantTable;
