import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3000', 
    baseURL: 'https://m3p-backend-squad1-zwwd.onrender.com/', 
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); 

        if (token) {
            config.headers.Authorization = `${token}`;
            config.headers['Content-Type'] = 'application/json';
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;