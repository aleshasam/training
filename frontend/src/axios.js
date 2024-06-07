import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL_API+import.meta.env.VITE_API_PATH;


axios.interceptors.request.use(async function (config) {
    if (config.method === 'post'){
        await axios.get(import.meta.env.VITE_BASE_URL_API+'/sanctum/csrf-cookie')
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
