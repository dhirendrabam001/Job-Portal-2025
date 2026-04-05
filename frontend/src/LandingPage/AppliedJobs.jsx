const AppliedJobs = () => {
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
              <tr>
                <td>04/11/2025</td>
                <td>Frontend Developer</td>
                <td>Google</td>
                <td className="status selected">Selected</td>
              </tr>

              <tr>
                <td>12/12/2025</td>
                <td>Backend Developer</td>
                <td>Microsoft</td>
                <td className="status selected">Selected</td>
              </tr>

              <tr>
                <td>22/12/2025</td>
                <td>Full Stack Developer</td>
                <td>Apple</td>
                <td className="status selected">Selected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
