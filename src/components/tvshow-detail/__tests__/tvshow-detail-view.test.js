import React from 'react';
import { renderInAppContext, validateSnapshot, clone } from '../../../test-utils';

import TvShowDetailView from '../tvshow-detail-view';
import tvShowServerData from './tvshow-detail-data-fixture.json';
import FavoriteIcon from '../../shared/favorite-icon/favorite-icon';

describe('TvShowDetailView', () => {

	it('Should render tv show detail data', () => {
		validateSnapshot(<TvShowDetailView data={tvShowServerData} />);
	});

	/*
		This test throws a warning that, in theory, it should not
		https://github.com/airbnb/enzyme#reacttestutilsact-wrap
		I added an embarrasing hack in setupTests.js file to ignore it
	*/
	it('Should save favorite when clicking the favorite icon in a non favorite tv show', () => {
		const mutationMock = jest.fn().mockImplementation(() => Promise.resolve({}));
		const view = renderInAppContext(
			<TvShowDetailView data={tvShowServerData} />,
			{
				apiClientMutationMock: mutationMock
			}
		);
		
		const favoriteIcon = view.find(FavoriteIcon);
		favoriteIcon.simulate('click');

		const { mutation, variables } = mutationMock.mock.calls[0][0];
		expect(mutation).toEqual(expect.stringContaining('save'));
		expect(variables.tvShowId).toEqual(tvShowServerData.getTvShowDetails.id);
	});

	it('Should delete favorite mark when clicking the favorite icon in a favorited tv show', () => {
		const serverData = clone(tvShowServerData);
		serverData.getTvShowDetails.isFavorite = true;
		const mutationMock = jest.fn().mockImplementation(() => Promise.resolve({}));
		const view = renderInAppContext(
			<TvShowDetailView data={serverData} />,
			{
				apiClientMutationMock: mutationMock
			}
		);
		
		const favoriteIcon = view.find(FavoriteIcon);
		favoriteIcon.simulate('click');

		const { mutation, variables } = mutationMock.mock.calls[0][0];
		expect(mutation).toEqual(expect.stringContaining('remove'));
		expect(variables.tvShowId).toEqual(tvShowServerData.getTvShowDetails.id);
	});

});
