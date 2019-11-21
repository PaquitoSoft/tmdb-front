import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './layout-app.css';

export default function LayoutApp({ children }) {
	return (
		<Fragment>
			<header className="layout-app__header">
				<Link className="layout-app__title" to="/">THE MOVIE DATABASE</Link>
			</header>
			<main className="layout-app__main">{children}</main>
			<footer className="layout-app__footer"></footer>
		</Fragment>
	);
}
