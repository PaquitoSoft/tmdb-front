import React from 'react';
import { act } from 'react-dom/test-utils';
import { validateSnapshot, renderInAppContext } from '../../../../test-utils';

import Searcher from '../searcher';

import searchResultMock from './search-results-fixture.json';

describe('Searcher', () => {

	it('Should render Searcher component', () => {
		validateSnapshot(<Searcher />);
	});

	it('Should call server when submitting a search term', () => {
		const searchTerm = 'Heroes';
		const queryMock = jest.fn().mockImplementation(
			() => Promise.resolve({ data: searchResultMock })
		);
		const wrapper = renderInAppContext(
			<Searcher />,
			{
				apiClientQueryMock: queryMock
			}
		);
		
		expect(wrapper.exists('.searcher__results')).toEqual(false);

		wrapper
			.find('.searcher__search-term')
			.simulate('focus')
			.simulate('change', {
				target: { value: searchTerm }
			});
		
		act(() => {
			wrapper
				.find('form')
				.simulate('submit', {
					preventDefault: () => false
				});
		});
		
		const { query, variables } = queryMock.mock.calls[0][0];
		expect(query).toEqual(expect.stringContaining('searchTvShows'));
		expect(variables.searchTerm).toEqual(searchTerm);
		expect(wrapper.exists('.searcher__results')).toEqual(true);

	});

	it('Should show results panel when server returns results', () => {
		throw new Error('Not yet implemented');
	});

	it('Should hide results panel when clicking outside Searcher component', () => {
		throw new Error('Not yet implemented');
	});

});
