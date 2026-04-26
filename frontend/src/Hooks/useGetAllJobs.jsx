// import axios from "../utils/axiosInstance";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { JOBS_API_POINT } from "../utils/constantUrl";
import { useDispatch, useSelector } from "react-redux";
import { setAllJob } from "../redux/jobSlice";
import {} from "react-redux";
import axios from "axios";

const useGetAllJobs = () => {
  const { searchQueryText, allJobs } = useSelector((store) => store.jobs);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOBS_API_POINT}/getAllPostJobs`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAllJob(res.data.jobs || res.data.allJobs));
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    };
    fetchAllJobs();
  }, [dispatch, searchQueryText]);
};

export default useGetAllJobs;
