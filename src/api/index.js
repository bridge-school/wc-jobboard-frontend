// base API URL
// const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://wc-jobboard-backend.bridgeschoolapp.io';
const API_BASE_URL = 'http://localhost:8081'

// example API method
export const checkApiServer = () =>
    fetch(`${API_BASE_URL}/jobs`)
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });