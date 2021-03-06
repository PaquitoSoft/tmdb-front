import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Searcher from './searcher/searcher';

import './layout-app.css';

export default function LayoutApp({ children }) {
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
		</Fragment>
	);
}
