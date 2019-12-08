import React from 'react';
// import { act } from 'react-dom/test-utils';
import { renderInAppContext, validateSnapshot } from '../../../test-utils';

import TvShowDetailView from '../tvshow-detail-view';
import tvShowServerData from './tvshow-detail-data-fixture.json';
import FavoriteIcon from '../../shared/favorite-icon/favorite-icon';

describe('TvShowDetailView', () => {

	it('Should render tv show detail data', () => {
		validateSnapshot(<TvShowDetailView data={tvShowServerData} />);
	});

	it('Should save favorite when clicking the favorite icon in a non favorite tv show', () => {
		let view;
		const mutationMock = jest.fn().mockImplementation(() => Promise.resolve({}));
		// act(() => {
			view = renderInAppContext(
				<TvShowDetailView data={tvShowServerData} />,
				{
					apiClientQueryMock: mutationMock
				}
			);
		// });
		const favoriteIcon = view.find(FavoriteIcon);
		// act(() => {
			favoriteIcon.simulate('click');
		// });
		const { query, variables } = mutationMock.mock.calls[0][0];
		expect(query).toEqual(expect.stringContaining('save'));
		expect(variables.tvShowId).toEqual(tvShowServerData.getTvShowDetails.id);
	});

});
