import axios from "../utils/axiosInstance";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { JOBS_API_POINT } from "../utils/constantUrl";
import { useDispatch } from "react-redux";
import { setAdminJobs } from "../redux/jobSlice";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        const res = await axios.get(`${JOBS_API_POINT}/getAdminJobs`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAdminJobs(res.data.jobs));
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message);
      }
    };
    fetchAllAdminJobs();
  }, [dispatch]);
};

export default useGetAllAdminJobs;
