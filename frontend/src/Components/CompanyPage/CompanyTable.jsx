import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";

const CompanyTable = () => {
  const [showpPopover, setShowPopover] = useState(false);
  const { allCompanyJob = [] } = useSelector((store) => store.company || {});

  return (
    <>
      <div className="table-responsive">
        <table className="table company-table">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Company Name</th>
              <th>Date</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {allCompanyJob.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  Company Not Found
                </td>
              </tr>
            ) : (
              allCompanyJob.map((company) => {
                return (
                  <tr key={company?._id}>
                    <td>
                      <img
                        src={company.logo}
                        className="company-logo"
                        alt="logo"
                      />
                    </td>

                    <td>{company.companyName}</td>
                    <td>{company.createdAt.split("T")[0]}</td>

                    <td className="text-center position-relative">
                      <FaEllipsisH
                        onClick={() => setShowPopover(!showpPopover)}
                      />
                      {showpPopover && (
                        <div className="custom-popover">
                          <button className="btn btn-sm btn-primary w-100 mb-1">
                            <MdEdit className="mb-1" /> Edit
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompanyTable;
