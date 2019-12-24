import useQueryString from '../use-query-string';

jest.mock('react-router-dom', () => ({
	useLocation: () => ({
		search: '?filter=popular'
	})
}));

describe('useQueryString', () => {

	it('Should return a URLSearchParams from the URL query string', () => {
		const queryString = useQueryString();
		expect(queryString.get('filter')).toEqual('popular');
	});

});
