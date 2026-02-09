import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { JOBS_API_POINT } from "../utils/constantUrl";
import { useDispatch } from "react-redux";
import { setAllJobs } from "../Components/redux/jobSlice";
const useGetAllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOBS_API_POINT}/getAllPostJobs`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
          toast.success("All Jobs Are Fetched");
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message || "Job Can Not Found");
      }
    };
    fetchAllJobs();
  }, [dispatch]);
};

export default useGetAllJobs;
