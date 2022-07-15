import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';
/*axios.interceptors.response.use(resp => resp, async error => {
    if(error.response.data.message === 'User unauthenticated. Log in'){
         await axios.post('user/token', {}, {withCredentials: true});

    }else{
        return error
    }

})*/

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
}, async function (error) {
    if(error.response.status === 401){
        await axios.post('user/token', {}, {withCredentials: true});
    }
    return Promise.reject(error);
});