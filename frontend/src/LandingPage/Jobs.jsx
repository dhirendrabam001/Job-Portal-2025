import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header from "../Components/Auth/Header";
import FilterJobs from "../Pages/FilterJobs";
import OneJob from "../Pages/OneJob";

const Jobs = () => {
  const { allJobs, searchQueryText } = useSelector((store) => store.jobs);
  const [filterJob, setFilterJob] = useState([]);

  // ✅ Sync jobs when data comes
  useEffect(() => {
    setFilterJob(allJobs);
  }, [allJobs]);

  // ✅ Filter logic
  useEffect(() => {
    if (!searchQueryText) {
      setFilterJob(allJobs);
      return;
    }

    const query = searchQueryText.toLowerCase().trim();

    const filtered = allJobs.filter((job) => {
      return (
        job.title?.toLowerCase().includes(query) ||
        job.location?.toLowerCase().includes(query)
      );
    });

    setFilterJob(filtered);
  }, [searchQueryText, allJobs]);

  return (
    <>
      <Header />

      <section className="jobs-container">
        <div className="container">
          <div className="row">
            {/* FILTER */}
            <div className="col-12 col-lg-2 col-md-4">
              <FilterJobs />
            </div>

            {/* JOB LIST */}
            <div className="col-12 col-lg-10 col-md-8">
              <div className="row g-3">
                {/* ✅ Loading state */}
                {allJobs.length === 0 ? (
                  <span>Loading jobs...</span>
                ) : filterJob.length === 0 ? (
                  <span>Jobs Not Found</span>
                ) : (
                  filterJob.map((job) => (
                    <div className="col-12 col-lg-4" key={job._id}>
                      <OneJob job={job} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
