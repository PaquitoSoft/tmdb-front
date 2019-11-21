import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/layout/layout-app';

import './App.css';

const HomeView = lazy(() => import('./components/home/home-view'));
const TvShowDetailView = lazy(() => import('./components/tvshow-detail/tvshow-detail-view'));
const SeasonDetailView = lazy(() => import('./components/season-detail/season-detail-view'));

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Suspense fallback={<div>Loading...</div>}>
						<Route path="/tvshow/:tvshowId/season/:seasonNumber">
							<SeasonDetailView />
						</Route>
						<Route path="/tvshow/:tvshowId">
							<TvShowDetailView />
						</Route>
						<Route path="/">
							<HomeView />
						</Route>
					</Suspense>
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
