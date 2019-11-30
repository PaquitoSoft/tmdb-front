import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import FetchQL from 'fetchql';

// TODO Read from configuration
//const API_URL = 'https://tmdb-graphql-api.herokuapp.com';
const API_URL = 'http://localhost:4000';

function buildApiClient({ apiUrl }) {
	return new FetchQL({
		url: apiUrl, // GraphQL server address
		interceptors: [],
		headers: {}, // customized headers of all requests,
		onStart: function (requestQueueLength) {}, // callback of a new request queue
		onEnd: function (requestQueueLength) {}, // callback of a request queue finished
		omitEmptyVariables: false // remove null props(null or '') from the variables
	});
}

ReactDOM.render(
	<App apiClient={buildApiClient({ apiUrl: API_URL })} />, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
