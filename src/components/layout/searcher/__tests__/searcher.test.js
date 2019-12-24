import React from 'react';
import { act } from 'react-dom/test-utils';
import { validateSnapshot, renderInAppContext } from '../../../../test-utils';

import Searcher from '../searcher';

import searchResultMock from './search-results-fixture.json';

describe('Searcher', () => {

	function submitSearch(wrapper, searchTerm) {
		return new Promise(resolve => {
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
						preventDefault: () => true
					});
			});
			
			setTimeout(resolve, 0);
		});
	}

	it('Should render Searcher component', () => {
		validateSnapshot(<Searcher />);
	});

	it('Should call server and show results when submitting a search term', () => {
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

		return submitSearch(wrapper, searchTerm).then(() => {
			const { query, variables } = queryMock.mock.calls[0][0];
			expect(query).toEqual(expect.stringContaining('searchTvShows'));
			expect(variables.searchTerm).toEqual(searchTerm);
			expect(wrapper.update().exists('.searcher__results')).toEqual(true);
		});
	});

	it('Should hide results panel when clicking outside Searcher component', () => {
		document.closest = () => false;
		const searchTerm = 'Rick and Morty';
		const queryMock = jest.fn().mockImplementation(
			() => Promise.resolve({ data: searchResultMock })
		);
		const wrapper = renderInAppContext(
			<div className="container"><Searcher /></div>,
			{
				apiClientQueryMock: queryMock
			}
		);
		
		expect(wrapper.exists('.searcher__results')).toEqual(false);

		return submitSearch(wrapper, searchTerm).then(() => {
			const fakeEvent = new MouseEvent('click', {});
			expect(wrapper.update().exists('.searcher__results')).toEqual(true);
			document.dispatchEvent(fakeEvent);
			expect(wrapper.update().exists('.searcher__results')).toEqual(false);
		});
	});

});
