import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://burgerreact-rbettn-default-rtdb.firebaseio.com/'
});

export default instance;