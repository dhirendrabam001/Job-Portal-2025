import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { JOBS_API_POINT } from "../utils/constantUrl";
import { useDispatch } from "react-redux";

const useGetSingleJob = (jobId) => {
  const dispatch = useDispatch();
};

export default useGetSingleJob;
