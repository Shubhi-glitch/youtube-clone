import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",  // Backend URL
  withCredentials: false,
});

export default axiosInstance;
