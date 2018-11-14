// base API URL
import { JSONdata } from '../data-structure'
const API_BASE_URL = process.env.NODE_ENV === 'production' ? 'http://wc-jobboard-backend.bridgeschoolapp.io' : '';
// const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://wc-jobboard-backend.bridgeschoolapp.io';


// example API method
export const checkApiServer = () =>
    fetch(`${API_BASE_URL}/jobs`)
        .then((res) => {
            console.log('fetched');
            return res.json()
        })
        .then((data) => {
<<<<<<< 51b99095893bcaadb47bdb927468596b9df57370
<<<<<<< 6acd440483ce5ba65847f8d915735e895a2b498b

            console.log(data);

=======
            console.log(response);
>>>>>>> syncing with upstream
=======
            console.log(data);
            return data;
>>>>>>> mapping job post card, setting up redux and actions
        })
        .catch((err) => {
            console.log('Error fetching jobs', err);
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





// SearchField functionality
export const search = (string) => {
    console.log(string)
	const dbSearch = new Promise((resolve, reject) =>  {
		resolve(JSONdata)
	})
	return dbSearch;
};
