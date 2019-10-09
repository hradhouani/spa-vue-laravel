window.axios = require('axios');



window.axios.interceptors.request.use(
    config => {

        const token = "Bearer "+localStorage.getItem('token');
        config.headers.authorization = token;
        config.baseURL= process.env.MIX_APP_URL;
        return config;
    });
window.axios.interceptors.response.use(
    function(response) {
        if (response.data.message) window.toastr.success(response.data.message);
        return response.data;},
    function(error) {
        // handle error
        if (error.response) {
            window.toastr.error(error.response.data.message);
        }
        return Promise.reject(error);

    });
