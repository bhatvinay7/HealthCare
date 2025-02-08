import axios from 'axios';

const BASE_URL = 'http://localhost:3006';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
  withCredentials: true,
});

export default axiosInstance;
export { axiosPrivate };


