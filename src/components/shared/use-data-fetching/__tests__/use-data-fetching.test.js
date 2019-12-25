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

	const mockServerData = { 
		getImagesConfiguration: {
			baseUrl: 'https://image.tmdb.org/'
		}
	};

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

	it('Should call the API upon mounting and update hook result when having the result', (done) => {
		
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

	it('Should call AppContext setError if there is an error in the API response', (done) => {
		const errorMock = {
			stack: { 
				json: () => {
					// What a hack!!!
					setTimeout(done, 0);
					return Promise.resolve({ errors: [new Error('Booom!')] }) 
				}
			}
		}
		const queryMock = jest.fn(() => Promise.reject([errorMock]));
		const contextMock = {
			apiClientQueryMock: queryMock
		}
		
		renderCustomHook({ query: mockQuery }, contextMock);
	});

});
