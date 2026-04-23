import axios from "../utils/axiosInstance";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { COMPANY_API_POINT } from "../utils/constantUrl";
import { useDispatch } from "react-redux";
import { setCompany } from "../redux/companySlice";

const useGetAllCompanyJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetAllCompanyJobs = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_POINT}/getCompanyData`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setCompany(res.data.company));
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message);
      }
    };
    fetAllCompanyJobs();
  }, []);
};

export default useGetAllCompanyJobs;
