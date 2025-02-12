import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;
console.log(API_BASE_URL)
const apiClient = axios.create({
    baseURL:"http://localhost:8080",
});

export default apiClient;