import { useSelector } from "react-redux";
import Header from "../Components/Auth/Header";
import FilterJobs from "../Pages/FilterJobs";
import OneJob from "../Pages/OneJob";
import { useEffect, useState } from "react";
const Jobs = () => {
  const { allJobs, searchQueryText } = useSelector((store) => store.jobs);
  const [filterJob, setFilterJob] = useState([]); // ✅ start empty
  useEffect(() => {
    let updatedJobs = allJobs;

    if (searchQueryText) {
      updatedJobs = updatedJobs.filter((job) => {
        return (
          job?.title?.toLowerCase().includes(searchQueryText.toLowerCase()) ||
          job?.locations
            ?.toLowerCase()
            .includes(searchQueryText.toLowerCase()) ||
          job?.salary
            ?.toString()
            .toLowerCase()
            .includes(searchQueryText.toLowerCase())
        );
      });
    }

    setFilterJob(updatedJobs);
  }, [allJobs, searchQueryText]);
  return (
    <>
      <Header />
      <section className="jobs-container">
        <div className="container">
          <div className="jobs-section">
            <div className="row">
              <div className="col-12 col-lg-2 col-md-2">
                {/* FILTER JOBS START*/}
                <FilterJobs />
                {/* FILTER JOBS END */}
              </div>
              {/* JOBS CARD START */}
              <div className="col-12 col-lg-10 col-md-10">
                <div className="row align-items-center g-3">
                  {filterJob.length <= 0 ? (
                    <span>Jobs Does Not Found</span>
                  ) : (
                    filterJob.map((job, index) => (
                      <div className="col-12 col-md-4 col-lg-4" key={index}>
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
