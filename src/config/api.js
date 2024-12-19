import axios from "axios";
import { getCookie, setCookies } from "../utils/Cookies";
import { getNewTokens } from "../services/token";
// console.log(import.meta.env.VITE_BASE_URL);

const api = axios.create({
  baseURL: "http://localhost:3400/",
  // baseURL: import.meta.env.VITE_BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use((request) => {
  const accessToken = getCookie("accessToken")
  if (accessToken) {
    request.headers["Authorization"] = `Bearer ${accessToken}`
  }
  return request
}, (error) => {
  Promise.reject(error)
})

api.interceptors.response.use((response) => {
  return response
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const res = await getNewTokens();
    if (!res?.response) return
    setCookies(res.response.data)

    return api(originalRequest)
  }
})


export default api;
