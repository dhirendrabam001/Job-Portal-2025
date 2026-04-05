import { useSelector } from "react-redux";
import Header from "../Components/Auth/Header";
import FilterJobs from "../Pages/FilterJobs";
import OneJob from "../Pages/OneJob";
const allJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const Jobs = () => {
  // const { allJobs } = useSelector((store) => store.job);

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
                  {allJobs.length <= 0 ? (
                    <span>Jobs Does Not Found</span>
                  ) : (
                    allJobs.map((job, index) => (
                      <div className="col-12 col-md-4 col-lg-4" key={index}>
                        <OneJob />
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
