import { useSelector } from "react-redux";
import Header from "../Components/Auth/Header";
import FilterJobs from "../Pages/FilterJobs";
import OneJob from "../Pages/OneJob";
import { useEffect, useState } from "react";
const Jobs = () => {
  const { allJobs, searchQueryText } = useSelector((store) => store.jobs);
  const [filterJob, setFilterJob] = useState([]);

  useEffect(() => {
    let updatedJobs = [...allJobs];

    const title = searchQueryText?.title?.toLowerCase() || "";
    const location = searchQueryText?.location?.toLowerCase() || "";

    // ✅ If no search → show all jobs
    if (!title && !location) {
      setFilterJob(allJobs);
      return;
    }

    // ✅ Filtering logic
    updatedJobs = updatedJobs.filter((job) => {
      return (
        job?.title?.toLowerCase().includes(title) &&
        job?.location?.toLowerCase().includes(location)
      );
    });

    setFilterJob(updatedJobs);
  }, [allJobs, searchQueryText]);

  return (
    <>
      <Header />
      <section className="jobs-container">
        <div className="container">
          <div className="jobs-section">
            <div className="row">
              <div className="col-12 col-lg-2 col-md-4">
                {/* FILTER JOBS START*/}
                <FilterJobs />
                {/* FILTER JOBS END */}
              </div>
              {/* JOBS CARD START */}
              <div className="col-12 col-lg-10 col-md-8">
                <div className="row align-items-center g-3">
                  {filterJob.length <= 0 ? (
                    <span>Jobs Does Not Found</span>
                  ) : (
                    filterJob.map((job, index) => (
                      <div className="col-12 col-md-12 col-lg-4" key={index}>
                        <OneJob key={job._id} job={job} />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* JOBS CARD START END */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
