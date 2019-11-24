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
			<Suspense fallback={<div>Loading...</div>}>
				<Layout>
					<Switch>
							<Route path="/tvshow/:tvshowId/season/:seasonNumber">
								<SeasonDetailView />
							</Route>
							<Route path="/tvshow/:tvshowId">
								<TvShowDetailView />
							</Route>
							<Route path="/" exact>
								<HomeView />
							</Route>
					</Switch>
				</Layout>
			</Suspense>
		</Router>
	);
}

export default App;
