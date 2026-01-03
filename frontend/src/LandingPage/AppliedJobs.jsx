const AppliedJobs = () => {
  return (
    <>
      <div className="applied-jobs my-3">
        <table className="table caption-top">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Job Role</th>
              <th scope="col">Company</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">04/11/2025</th>
              <td>Frontend Developer</td>
              <td>Google</td>
              <td className="table-select">Selected</td>
            </tr>
            <tr>
              <th scope="row">12/12/2025</th>
              <td>Backend Developer</td>
              <td>Microsoft</td>
              <td className="table-select">Selected</td>
            </tr>
            <tr>
              <th scope="row">22/12/2025</th>
              <td>Full Stack Developer</td>
              <td>Apple</td>
              <td className="table-select">Selected</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppliedJobs;
