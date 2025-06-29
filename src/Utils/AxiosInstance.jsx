import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://final-backend-client.vercel.app/", // alamat json-server
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;