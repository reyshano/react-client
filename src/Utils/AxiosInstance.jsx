import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://react-client-five.vercel.app/", // alamat json-server
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;