import React from 'react';

import Layout from './components/layout/layout-app';
import HomeView from './components/home/home-view';

import './App.css';

function App() {
	return (
		<Layout>
			<HomeView />
		</Layout>
	);
}

export default App;
