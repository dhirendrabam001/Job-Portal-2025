import Header from "../Components/Auth/Header";
import OneJob from "../Pages/OneJob";
import { useSelector } from "react-redux";
const Browsers = () => {
  const { allJobs = [], searchQueryText = {} } = useSelector(
    (store) => store.jobs,
  );
  const filteredJob = allJobs.filter((job) => {
    const searchTitle = searchQueryText?.title?.toLowerCase().trim();
    console.log("title", searchTitle);

    const searchLocation = searchQueryText?.location?.toLowerCase().trim();
    if (!searchTitle && !searchLocation) {
      return true;
    }
    const titleMatch = searchTitle
      ? job.title.toLowerCase().includes(searchTitle)
      : false;

    const locationMatch = searchLocation
      ? job.locations.toLowerCase().includes(searchLocation)
      : false;

    return titleMatch || locationMatch;
  });

  return (
    <div className="browser-jobs">
      <Header />
      <div className="container">
        <h1 className="fw-bold text-white fs-5">
          Search Result ({filteredJob.length})
        </h1>
        <div className="row align-items-center g-4 mt-4">
          {filteredJob.map((items, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <OneJob job={items} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browsers;
