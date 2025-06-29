import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://backend-client-beta.vercel.app/", // alamat json-server
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;