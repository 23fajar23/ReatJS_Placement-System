import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'http://localhost:8080/api'
    // baseURL:'http://localhost:5173//api'
})

export default axiosInstance;