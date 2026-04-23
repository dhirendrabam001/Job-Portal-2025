import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-job-portal-66jc.onrender.com",
});

export default instance;
