import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'http://localhost:5173/api',
    timeout:1000
})

export default axiosInstance;