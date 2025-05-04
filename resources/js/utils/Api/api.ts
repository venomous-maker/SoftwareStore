// src/axios.js
import axios from 'axios';

// Create an axios instance
const api = axios.create({
    baseURL: '/api', // Replace with your API base URL
    timeout: 10000, // 10 seconds timeout
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// CSRF token request handler
api.get('/sanctum/csrf-cookie')
    .then((response) => {
        // Handle CSRF cookie set
        console.log('CSRF cookie set', response);
    })
    .catch((error) => {
        console.error('Failed to fetch CSRF cookie', error);
    });

// Add a request interceptor (optional)
// api.interceptors.request.use(
//     (config) => {
//         // Add authorization header if needed
//         const token = localStorage.getItem('token'); // Or your authentication method
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// Add a response interceptor (optional)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle Unauthorized, possibly redirect to login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    },
);

export default api;
