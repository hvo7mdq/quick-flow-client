import axios from "axios"
import { useHistory } from "react-router-dom"

const baseURL = process.env.REACT_APP_API_URL_2
const api = '/api'
const axiosInstance = axios.create({
    baseURL : baseURL + api
})

export const axiosInstanceNoHead = axios.create({
  baseURL : baseURL + api
})

axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response.status === 401){
      localStorage.removeItem('token')
      localStorage.removeItem('refresh')
      window.location='/login'
    }
    return Promise.reject(error);
  });
export default axiosInstance