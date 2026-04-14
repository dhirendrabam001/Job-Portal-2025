import { useParams } from "react-router-dom";
import useGetApplicant from "../../Hooks/useGetApplicant";
import Header from "../Auth/Header";
import AdminApplicantTable from "./AdminApplicantTable";
import { useSelector } from "react-redux";

const AdminViewApplicant = () => {
  const { allApplicant } = useSelector((store) => store.application);

  const { id } = useParams();
  useGetApplicant(id);
  return (
    <>
      <Header />
      <div className="applicant-main">
        <div className="container">
          <h2 className="fw-bold fs-3 text-white my-3">
            {`Total Applicant [ ${allApplicant.length} ]`}
          </h2>
          <AdminApplicantTable />
        </div>
      </div>
    </>
  );
};

export default AdminViewApplicant;
