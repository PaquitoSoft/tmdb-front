import React, { Fragment } from 'react';

import './layout-app.css';

export default function LayoutApp({ children }) {
	return (
		<Fragment>
			<header className="layout-app__header">
				<span>THE MOVIE DATABASE</span>
			</header>
			<main className="layout-app__main">{children}</main>
			<footer className="layout-app__footer"></footer>
		</Fragment>
	);
}
