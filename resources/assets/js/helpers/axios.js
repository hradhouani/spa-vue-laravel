window.axios = require('axios');





window.axios.interceptors.request.use(
    config => {
        const JWTtoken = "Bearer "+localStorage.getItem('token');
        config.headers.authorization = JWTtoken;
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
