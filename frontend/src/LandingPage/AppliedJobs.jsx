import { useSelector } from "react-redux";

const AppliedJobs = () => {
  const { getAppliedJob } = useSelector((store) => store.jobs);

  return (
    <>
      <div className="applied-job py-3">
        <div className="table-responsive">
          <table className="table custom-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Job Role</th>
                <th>Company</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {(getAppliedJob || []).length <= 0 ? (
                <tr>
                  <td colSpan="4">You do not have applied any jobs!</td>
                </tr>
              ) : (
                (getAppliedJob || []).map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {item?.createdAt ? item.createdAt.split("T")[0] : "N/A"}
                      </td>
                      <td>{item?.job?.title || "N/A"}</td>
                      <td>{item?.job?.company?.companyName || "N/A"}</td>
                      <td>
                        {item?.status === "accepted" ? (
                          <span className="status accepted">Accepted</span>
                        ) : item?.status === "rejected" ? (
                          <span className="status rejected">Rejected</span>
                        ) : (
                          <span className="status pending">Pending</span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
