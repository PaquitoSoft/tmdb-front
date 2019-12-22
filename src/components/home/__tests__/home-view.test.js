import React from 'react';
import { validateSnapshot } from '../../../test-utils';

import HomeView from '../home-view';

import topRatedServerData from './top_rated-tv-shows-fixture.json';
import popularServerData from './popular-tv-shows-fixture.json';

describe('TvShowDetailView', () => {

	function validateHomeView(urlQueryString, serverData) {
		const _urlQueryString = new URLSearchParams(urlQueryString);
		validateSnapshot(
			<HomeView 
				data={serverData}
				urlQueryString={_urlQueryString}
			/>
		);
	}

	it('Should render Popular tv shows list when URL has no filter', () => {
		validateHomeView('', popularServerData);
	});

	it('Should render Popular tv shows list when URL has that filter', () => {
		validateHomeView('?filter=popular', popularServerData);
	});

	it('Should render Top Rated tv shows list when URL has that filter', () => {
		validateHomeView('?filter=top_rated', topRatedServerData);
	});

});
