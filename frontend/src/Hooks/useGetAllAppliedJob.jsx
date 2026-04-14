import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { APPLICATION_API_POINT } from "../utils/constantUrl";
import { useDispatch } from "react-redux";
import { setGetAppliedJob } from "../redux/jobSlice";

const useGetAllAppliedJob = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllAppliedJob = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_POINT}/getAppliedJobInfo`,
          {
            withCredentials: true,
          },
        );

        if (res.data.success) {
          dispatch(setGetAppliedJob(res.data.application));
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message);
      }
    };
    fetchAllAppliedJob();
  }, [dispatch]);
};

export default useGetAllAppliedJob;
