import Header from "../Components/Auth/Header";
import OneJob from "../Pages/OneJob";
import { useSelector } from "react-redux";

const Browsers = () => {
  const { allJobs = [], searchQueryText = "" } = useSelector(
    (store) => store.jobs,
  );

  const filteredJob = allJobs.filter((job) => {
    if (!searchQueryText) return true;

    const query = searchQueryText.toLowerCase().trim();

    return (
      job.title?.toLowerCase().includes(query) ||
      job.location?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="browser-jobs">
      <Header />

      <div className="container">
        <h1 className="fw-bold text-white fs-5">
          Search Result ({filteredJob.length})
        </h1>

        <div className="row align-items-center g-4 mt-4">
          {filteredJob.length === 0 ? (
            <span>No Jobs Found</span>
          ) : (
            filteredJob.map((items) => (
              <div className="col-12 col-md-6 col-lg-4" key={items._id}>
                <OneJob job={items} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Browsers;
