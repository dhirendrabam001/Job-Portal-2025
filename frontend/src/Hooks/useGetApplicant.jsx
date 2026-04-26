// import axios from "../utils/axiosInstance";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { APPLICATION_API_POINT } from "../utils/constantUrl";
import { setAllApplicant } from "../redux/applicationSlice";
import axios from "axios";

const useGetApplicant = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchApplicant = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_POINT}/getApplicantAdmin/${id}`,
          {
            withCredentials: true,
          },
        );
        if (res.data.success) {
          dispatch(setAllApplicant(res.data.application));
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message);
        console.error("backend error", error);
      }
    };
    fetchApplicant();
  }, [id, dispatch]);
};

export default useGetApplicant;
