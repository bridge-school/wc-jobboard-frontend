// base API URL
const API_BASE_URL = process.env.NODE_ENV === 'production' ? 'http://wc-jobboard-backend.bridgeschoolapp.io' : '';

// example API method
export const checkApiServer = () =>
    console.log('fetch data')
    fetch(`${API_BASE_URL}/jobs`)
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });

export const postFormObject = ( values) => {
    console.log('post:' , values)
    fetch(`${API_BASE_URL}/jobs`, {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(values) 
        })
        .then(function (data) {
        console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
        console.log('Request failed', error);
        });
}

