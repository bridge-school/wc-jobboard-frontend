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


export const postFormObject = () => {
    fetch(`${API_BASE_URL}/test`, {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: 'TEST BODY'
      })
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
}

