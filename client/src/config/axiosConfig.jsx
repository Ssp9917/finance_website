// Axios instance configuration
import axios from 'axios';

// Extract user token from local storage
const getUserToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? user.token : null; // Return token if user exists
};

const BackendLiveUrl = import.meta.env.VITE_BACKEND_BASE_URL;

// Create Axios instance
const instance = axios.create({
  baseURL: BackendLiveUrl,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${getUserToken() || ''}`
  },
  withCredentials: true,
  timeout: 10000, // Optional: 10 seconds timeout
});

// Interceptor to attach token from local storage to headers
instance.interceptors.request.use(
  (config) => {
    const token = getUserToken(); // Get the token from local storage
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
