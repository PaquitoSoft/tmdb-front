import React from 'react';
import { validateSnapshot } from '../../../../test-utils';

import TvShowCard from '../tvshow-card';

describe('TvShowCard', () => {

	const tvShowMockData = {
		"id": 68507,
		"name": "His Dark Materials",
		"backdropImagePath": "/9yKCJTOh9m3Lol2RY3kw99QPH6x.jpg",
		"posterPath": "/xOjRNnQw5hqR1EULJ2iHkGwJVA4.jpg",
		"votesAverage": 7.5,
		"isFavorite": false,
		"firstAirDate": "2019-11-03"
	};

	it('Should render TvShow Card', () => {
		validateSnapshot(<TvShowCard tvShow={tvShowMockData} />);
	});

});
