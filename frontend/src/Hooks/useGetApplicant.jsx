import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { APPLICATION_API_POINT } from "../utils/constantUrl";
import { setAllApplicant } from "../redux/applicationSlice";

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
          console.log("res data", res.data.application);

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
