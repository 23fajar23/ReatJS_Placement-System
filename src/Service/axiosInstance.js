import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'http://10.10.102.254:8080/api'
})

export default axiosInstance;