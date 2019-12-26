import React, { Suspense } from 'react';
import { renderInAppContext } from '../../test-utils';

import buildLazyView from '../lazy-view-builder';

import Loader from '../../components/shared/loader/loader';
import SeasonDetailView from '../../components/season-detail/season-detail-view';

jest.mock('../../components/shared/use-data-fetching/use-data-fetching', () => {
	return () => ({
		isFetching: false,
		data: {
			getSeasonDetails: { name: '', airDate: '', episodes: [] },
			getTvShowDetails: { id: 10, name: '' }
		}
	})
});

describe('LazyViewBuilder', () => {

	it('Should return a LazyView component wrapping an APP component', (done) => {
		const queryMock = jest.fn().mockImplementation(() => Promise.resolve({}));
		
		const Component = buildLazyView(() => Promise.resolve({ 'default': SeasonDetailView }));
		
		const wrapper = renderInAppContext(
			<Suspense fallback={<Loader />}>
				<Component />
			</Suspense>, 
			{ apiClientQueryMock: queryMock }
		);
		expect(wrapper.exists(Loader)).toEqual(true);
		expect(wrapper.exists(SeasonDetailView)).toEqual(false);

		setTimeout(() => {
			expect(wrapper.update().exists(Loader)).toEqual(false);
			expect(wrapper.update().exists(SeasonDetailView)).toEqual(true);
			done();
		}, 10); // This is not very elegant. I can't figure out the way to wait for the inner promises
	});

});
