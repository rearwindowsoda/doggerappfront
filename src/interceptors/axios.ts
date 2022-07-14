import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';
axios.interceptors.response.use(resp => resp, async error => {
    if(error.response.data.message === 'User unauthenticated. Log in'){
         await axios.post('user/token', {}, {withCredentials: true});

    }
    return error
})
