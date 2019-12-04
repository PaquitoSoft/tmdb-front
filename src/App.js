import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider } from './components/app-context/app-context';
import Layout from './components/layout/layout-app';
import Loader from './components/shared/loader/loader';
import ScrollToTop from './components/shared/scroll-to-top/scroll-to-top';

import './App.css';

const HomeView = lazy(() => import('./components/home/home-view'));
const TvShowDetailView = lazy(() => import('./components/tvshow-detail/tvshow-detail-view'));
const SeasonDetailView = lazy(() => import('./components/season-detail/season-detail-view'));

let basename = '/';
if (process.env.NODE_ENV === 'production') {
	basename = '/tmdb-front';
}

function App({ apiClient, userId, imagesConfig }) {
	return (
		<AppProvider apiClient={apiClient} userId={userId} imagesConfig={imagesConfig}>
			<Router basename={basename}>
				<Suspense fallback={<Loader />}>
					<Layout>
						<ScrollToTop />
						<Switch>
								<Route path="/tvshow/:tvShowId/season/:seasonNumber">
									<SeasonDetailView />
								</Route>
								<Route path="/tvshow/:tvShowId">
									<TvShowDetailView />
								</Route>
								<Route path="/" exact>
									<HomeView />
								</Route>
						</Switch>
					</Layout>
				</Suspense>
			</Router>
		</AppProvider>
	);
}

export default App;
