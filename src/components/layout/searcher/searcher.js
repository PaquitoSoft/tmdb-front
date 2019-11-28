import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MiniCard from '../../shared/mini-card/mini-card';

import POPULAR_TVSHOWS_MOCK from '../../../fixtures/popular-tvshows.json';

import './searcher.css';

function SearchResult({ tvShow, onClick }) {
	return (
		<Link to={`/tvshow/${tvShow.id}`} onClick={onClick}>
			<MiniCard
				className="searcher__result"
				mediaUrl={`https://image.tmdb.org/t/p/w130_and_h195_bestv2${tvShow.backdropImagePath}`} 
				title={tvShow.name} 
			/>
		</Link>
	);
}

export default function Searcher() {
	const [hasFocus, setFocus] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const onSubmit = (event) => {
		event.preventDefault();

		if (searchTerm) {
			setSearchResults(POPULAR_TVSHOWS_MOCK);
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
