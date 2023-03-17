import axios from 'axios'

const axiosInstance = axios.create()
axiosInstance.defaults.baseURL =  import.meta.env.VITE_BASE_URL
// axiosInstance.defaults.timeout = 60000
axiosInstance.defaults.withCredentials = true

const http = {
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  get: axiosInstance.get,
}

export default http
