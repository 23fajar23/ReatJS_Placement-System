import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'10.10.102.254:8080/api',
    timeout:1000
})

export default axiosInstance;