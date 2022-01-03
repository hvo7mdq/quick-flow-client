import axios from "axios"

const baseURL = process.env.REACT_APP_API_URL_2
const api = 'api'
const axiosInstance = axios.create({
    baseURL : baseURL + api
})

export default axiosInstance