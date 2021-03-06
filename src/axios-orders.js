/**
 * This function sets a base URL to the instance of axios to be used for requesting from and posting
 * data to Firebase.
 * Axios is imported in the Burger Builder component
 */

import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://burgerreact-rbettn-default-rtdb.firebaseio.com/'
});

export default instance;