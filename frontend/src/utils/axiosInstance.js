import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-job-portal-66jc.onrender.com",
});

// ✅ automatically attach token
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
