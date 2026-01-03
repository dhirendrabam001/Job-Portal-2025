import Header from "../Components/Auth/Header";
import OneJob from "../Pages/OneJob";
const randomJobs = [1, 2, 3, 4, 5, 6, 7];
const Browsers = () => {
  return (
    <div className="browser-jobs">
      <Header />
      <div className="container">
        <h1 className="fw-bold text-white fs-5">
          Search Result ({randomJobs.length})
        </h1>
        <div className="row align-items-center g-3 my-4">
          {randomJobs.map((items, index) => (
            <div className="col-12 col-md-4 col-lg-4" key={index}>
              <OneJob items={items} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browsers;
