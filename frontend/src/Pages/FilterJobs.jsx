const FilterJobs = () => {
  const filterArray = [
    {
      filterType: "Location",
      array: ["Delhi", "Noida", "Chandigarh", "Mumbai", "Punjab"],
    },
    {
      filterType: "Industry",
      array: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Graphics Designer",
      ],
    },
    {
      filterType: "Salary",
      array: ["0-50K", "50K-150K", "150K-250K", "250K-350K", "500K+"],
    },
  ];

  return (
    <div className="filter-jobs">
      <h2 className="fw-bold mb-2 text-white fs-5">Filter Jobs</h2>

      {filterArray.map((items, index) => (
        <div key={index} className="mb-3">
          <h6 className="fw-semibold text-white">{items.filterType}</h6>

          {items.array.map((item, i) => (
            <div className="form-check" key={i}>
              <input
                className="form-check-input"
                type="radio"
                name={items.filterType}
                id={`${items.filterType}-${i}`}
              />
              <label
                className="form-check-label text-light"
                htmlFor={`${items.filterType}-${i}`}
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FilterJobs;
