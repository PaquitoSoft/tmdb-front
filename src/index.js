import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ApiClient from './plugins/api-client';

let API_URL = 'http://localhost:4000';
if (process.env.NODE_ENV === 'production') {
	API_URL = 'https://tmdb-graphql-api.herokuapp.com';
}

function getUserId() {
	let userId = localStorage.getItem('ut');

	if (!userId) {
		userId = btoa(Date.now());
		localStorage.setItem('ut', userId);
	}
	
	return userId;
}

const userId = getUserId();

const apiClient = new ApiClient({ apiUrl: API_URL, userId });

apiClient.sendQuery({ 
	query: `
		query {
			getImagesConfiguration {
				baseUrl
				backdropSizes
				logoSizes
				posterSizes
				profileSizes
				stillSizes
			}
		}
	`
})
.then(({ data: { getImagesConfiguration: imagesConfig } }) => {
	ReactDOM.render(
		<App 
			apiClient={apiClient} 
			userId={userId}
			imagesConfig={imagesConfig}
		/>,
		document.getElementById('root')
	);
})
.catch(error => {
	console.error('Error loading images configuration.', error);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
