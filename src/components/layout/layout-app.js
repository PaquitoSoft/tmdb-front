import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useAppContext } from '../app-context/app-context';
import Searcher from './searcher/searcher';
import ErrorModal from '../shared/error-modal/error-modal';

import './layout-app.css';

export default function LayoutApp({ children }) {
	const { error } = useAppContext();
	
	return (
		<Fragment>
			<header className="layout-app__header">
				<section className="layout-app__title-container">
					<Link className="layout-app__title" to="/">THE MOVIE DATABASE</Link>
				</section>
				<section className="layout-app__search-container">
					<Searcher />
				</section>
			</header>
			<main className="layout-app__main">{children}</main>
			<footer className="layout-app__footer"></footer>
			{error && <ErrorModal error={error} />}
		</Fragment>
	);
}
