import React from 'react';
import { Link } from 'react-router-dom';
import { node } from 'prop-types';

import { useAppContext } from '../app-context/app-context';
import ThemeModeSwitch from './theme-mode-switch/theme-mode-switch';
import Searcher from './searcher/searcher';
import ErrorModal from '../shared/error-modal/error-modal';

import './layout-app.css';

function LayoutApp({ children }) {
	const { error, themeMode } = useAppContext();
	
	return (
		<div className="layout-app" data-thememode={themeMode}>
			<header className="layout-app__header">
				<section className="layout-app__title-container">
					<Link className="layout-app__title" to="/">THE MOVIE DATABASE</Link>
					<ThemeModeSwitch />
				</section>
				<section className="layout-app__search-container">
					<Searcher />
				</section>
			</header>
			<main className="layout-app__main">{children}</main>
			{error && <ErrorModal error={error} />}
		</div>
	);
}

LayoutApp.propTypes = {
	children: node
};

export default LayoutApp;
