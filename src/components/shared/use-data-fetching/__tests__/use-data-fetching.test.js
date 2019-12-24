import React from 'react';
// import { act } from 'react-dom/test-utils';
import { renderInAppContext } from '../../../../test-utils';
import useDataFetching from '../use-data-fetching';

// Reference on how to test custom hooks
//  - https://www.youtube.com/watch?v=0e6WCQYg5tU
//  - https://dev.to/joepurnell1/how-i-m-testing-my-custom-react-hook-with-enzyme-and-jest-1deo
describe('useDataFetching', () => {
	
	const mockQuery = `
		query {
			getImagesConfiguration {
				baseUrl
			}
		}
	`;

	const Component = ({ children, ...rest }) => children(useDataFetching(rest));
	function renderCustomHook(hookProps, contextMockOptions) {
		const result = {};
		renderInAppContext(
			<Component {...hookProps}>
				{value => {
					Object.assign(result, value);
					return null;
				}}
			</Component>,
			contextMockOptions
		);
		return result;
	}

	it('Should call the API upon mounting', (done) => {
		const mockServerData = { 
			getImagesConfiguration: {
				baseUrl: 'https://image.tmdb.org/'
			}
		};
		const queryMock = jest.fn().mockImplementation(() => Promise.resolve({ data: mockServerData }));
		const contextMock = {
			apiClientQueryMock: queryMock
		}
		
		const hookData = renderCustomHook({ query: mockQuery }, contextMock);
		expect(hookData.isFetching).toEqual(true);
		expect(hookData.data).toEqual(undefined);
		
		setTimeout(() => {
			expect(hookData.isFetching).toEqual(false);
			expect(hookData.data).toEqual(mockServerData);
			done();
		}, 0);
	});

});
