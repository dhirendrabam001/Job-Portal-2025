import { useSelector } from "react-redux";
const AdminApplicantTable = () => {
  const { allApplicant } = useSelector((store) => store.applicant);

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
              {allApplicant?.map((item) => {
                return (
                  <tr>
                    <td>{item?.applicant?.fullName}</td>
                    <td>{item?.applicant?.email}</td>
                    <td>{item?.applicant?.phoneNumber}</td>
                    <td>
                      <a href={item?.applicant?.resume} target="_blank">
                        {item?.applicant?.profile?.resumeOriginalName}
                      </a>
                    </td>
                    <td>{item?.applicant?.createdAt.split("T")[0]}</td>
                    <td className="text-center d-flex align-items-center gap-3 custom-btn justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-sm btn-success fw-bold mb-1"
                      >
                        Accepted
                      </button>
                      <button
                        type="submit"
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
