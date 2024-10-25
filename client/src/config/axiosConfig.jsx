// Function to get a specific cookie by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

// Axios instance configuration
import axios from 'axios';

const BackendLiveUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const instance = axios.create({
  baseURL: `${BackendLiveUrl}`,
  headers: {
    'Accept': 'application/json',
  },
  withCredentials: true,
  timeout: 10000, // Optional: 10 seconds timeout
});

// Interceptor to attach token from cookies to headers
instance.interceptors.request.use(
  (config) => {
    // Get the token from cookies
    const token = getCookie('jwt'); // 'jwt' is the cookie name set in the backend
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling (Optional)
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default instance;
