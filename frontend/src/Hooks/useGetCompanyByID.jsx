import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { COMPANY_API_POINT, JOBS_API_POINT } from "../utils/constantUrl";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../redux/companySlice";
// import { useParams } from "react-router-dom";

const useGetCompanyByID = (userId) => {
  //   const params = useParams();
  //   const userId = params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_POINT}/getAllCompanyById/${userId}`,
          {
            withCredentials: true,
          },
        );
        if (res.data.success) {
          dispatch(setSingleCompany(res.data.company));
          toast.success(res.data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message);
      }
    };
    fetchSingleCompany();
  }, [userId, dispatch]);
};

export default useGetCompanyByID;
