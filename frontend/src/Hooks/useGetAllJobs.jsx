import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { JOBS_API_POINT } from "../utils/constantUrl";
import { useDispatch, useSelector } from "react-redux";
import { setAllJob } from "../redux/jobSlice";
import {} from "react-redux";

const useGetAllJobs = () => {
  const { searchQueryText } = useSelector((store) => store.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(
          `${JOBS_API_POINT}/getAllPostJobs?keyword=${searchQueryText}`,
          {
            withCredentials: true,
          },
        );
        if (res.data.success) {
          dispatch(setAllJob(res.data.jobs));
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message);
      }
    };
    fetchAllJobs();
  }, [dispatch]);
};

export default useGetAllJobs;
