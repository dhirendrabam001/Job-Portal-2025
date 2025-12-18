import Header from "../Components/Auth/Header";
import FilterJobs from "../Pages/FilterJobs";
import OneJob from "../Pages/OneJob";
const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
const Jobs = () => {
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
                  {jobsArray.length <= 0 ? (
                    <span>Jobs Does Not Found</span>
                  ) : (
                    jobsArray.map((items, index) => (
                      <div className="col-12 col-md-4 col-lg-4" key={items}>
                        <OneJob items={items} />
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
