import axios, {
  type AxiosInstance
} from 'axios';


// =====================
// Helper: Get Auth Token
// =====================
// Consider enhancing with refresh logic or expiration checks if needed.
const getAuthToken = () => localStorage.getItem("token");

// ===================
// Axios Configuration
// ===================
const axiosClient: AxiosInstance = axios.create({
 baseURL: import.meta.env.VITE_APP_API_URI|| "https://api.example.com",
  timeout: import.meta.env.VITE_APP_API_TIMEOUT || 10000,
  withCredentials: true, // For sending cookies with requests (if needed)
});

// ================================
// Request Interceptor: Add Headers
// ================================
axiosClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Add any other custom headers if required here
    return config;
  },
  (error) => Promise.reject(error)
);

// ================================
// Response Interceptor: Error Handling
// ================================
// Avoid UI side-effects here (like alert/redirect). Instead, throw errors
// or dispatch events for React components to handle gracefully.
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Network Error: No response from server
    if (!error.response) {
      // You can optionally throw a custom error for global handling
      return Promise.reject({
        type: "NETWORK_ERROR",
        message: "Network error: Please check your connection.",
        original: error,
      });
    }

    const status = error.response.status;

    // Map server responses to custom error types/messages
    const customError = {
      type: "UNKNOWN",
      message: "An error occurred.",
      status,
      data: error.response.data,
      original: error,
    };

    if (status === 401) {
      // Unauthorized: Clear token, suggest redirect
      localStorage.removeItem("token");
      customError.type = "AUTH_ERROR";
      customError.message = "Authentication failed. Please login again.";
      // Let your React app handle navigation (e.g., with useNavigate)
    } else if (status === 403) {
      customError.type = "FORBIDDEN";
      customError.message = "You do not have permission to perform this action.";
    } else if (status >= 500) {
      customError.type = "SERVER_ERROR";
      customError.message = "Server error, please try again later.";
    } else if (error.response.data?.message) {
      customError.message = error.response.data.message;
    }

    // Throw the custom error object for React components to handle
    return Promise.reject(customError);
  }
);

// ================================
// Dev Mode: Log Requests & Responses
// ================================
if (import.meta.env.DEV) {
  axiosClient.interceptors.request.use((config) => {
    console.log("[Axios Request]", config);
    return config;
  });
  axiosClient.interceptors.response.use(
    (response) => {
      console.log("[Axios Response]", response);
      return response;
    },
    (error) => {
      console.log("[Axios Error]", error);
      // Pass along the error
      return Promise.reject(error);
    }
  );
}


export default axiosClient;
