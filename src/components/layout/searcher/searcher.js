import React, { useState, useEffect } from 'react';

import { useAppContext } from '../../app-context/app-context';

import SearchResult from './search-result/search-result';

import './searcher.css';

const SEARCH_QUERY = `
	query SearchTvShows($searchTerm: String!) {
		searchTvShows(searchTerm: $searchTerm) {
			id
			name
			backdropImagePath
		}
	}
`;

export default function Searcher() {
	const [hasFocus, setFocus] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const { apiClient } = useAppContext();

	const onSubmit = (event) => {
		event.preventDefault();

		if (searchTerm) {
			apiClient.sendQuery({ 
				query: SEARCH_QUERY,
				variables: { searchTerm } 
			})
			.then(({ data: { searchTvShows: results} }) => {
				setSearchResults(results);
			})
			.catch(error => {
				console.error(`Error searching for Tv Shows  with term '${searchTerm}'`, error);
			});
		}
	};

	useEffect(() => {
		document.addEventListener('click', event => {
			const $searcher = event.target.closest('.searcher');
			if (!$searcher) {
				setFocus(false);
			}
		});
	}, []);

	return (
		<div className="searcher">
			<form onSubmit={onSubmit}>
				<input 
					className="searcher__search-term" 
					type="text" 
					name="searchTerm" 
					placeholder="Type in your search term" 
					onFocus={() => setFocus(true)}
					value={searchTerm}
					onChange={event => setSearchTerm(event.target.value)}
				/>
			</form>
			{hasFocus && searchResults.length > 0 && 
				<div className="searcher__results">
					{searchResults.map(result => 
						<SearchResult 
							key={result.id} 
							tvShow={result} 
							onClick={() => setSearchResults([])}
						/>
					)}
				</div>
			}
		</div>
	);
}
