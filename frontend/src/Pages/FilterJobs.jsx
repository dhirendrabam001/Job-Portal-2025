import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQueryText } from "../redux/jobSlice";

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
const FilterJobs = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
    dispatch(setSearchQueryText(value)); // ✅ only one filter system
  };

  return (
    <div className="filter-jobs">
      <h2 className="fw-bold mb-2 text-white fs-5">Filter Jobs</h2>

      {filterArray.map((items, index) => (
        <div key={index} className="mb-3">
          <h6 className="fw-semibold text-white">{items.filterType}</h6>

          {items.array.map((item, i) => (
            <div className="form-check" key={i}>
              <input
                onChange={() => changeHandler(item)}
                value={item}
                className="form-check-input"
                checked={selectedValue === item}
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
