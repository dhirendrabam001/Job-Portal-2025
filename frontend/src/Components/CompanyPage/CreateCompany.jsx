import toast from "react-hot-toast";
import Header from "../Auth/Header";
import axios from "axios";
import { COMPANY_API_POINT } from "../../utils/constantUrl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../../redux/companySlice";

const CreateCompany = () => {
  //   const {} = useSelector((store) => store.company); // store redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState(); // get user input

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_POINT}/companyInfo`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      if (res.data.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success("Company Register Successfully");
        const companyId = res?.data?.company?._id;
        navigate(`/admin/company/${companyId}`);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <>
      <Header />
      <div className="homePage-main">
        <div className="create-company-info">
          <div className="create-heading">
            <h5>Your Company Name</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              esse cum obcaecati maiores maxime hic odio dolor ad quaerat
              consequatur sapiente quas laudantium tempore quibusdam reiciendis
              unde, atque impedit asperiores!
            </p>
          </div>
          <div className="mb-3 input-field">
            <label htmlFor="companyname" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="create-button d-flex align-items-center gap-3">
            <div className="cancel-btn">
              <button type="button" className="btn btn-outline-warning">
                Cancel
              </button>
            </div>
            <div className="continue-btn">
              <button
                type="button"
                onClick={registerNewCompany}
                className="btn btn-outline-success"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateCompany;
