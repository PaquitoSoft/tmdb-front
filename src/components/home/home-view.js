import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useQueryString } from '../shared/use-query-string';
import { useAppContext } from '../app-context/app-context';
import TvShowCard from './tvshow-card/tvshow-card';

import './home-view.css';

const FILTER_CODE_POPULAR = 'popular';
// const FILTER_CODE_TOP_RATED = 'top_rated';

function FilterLink({ filterCode, selectedFilter }) {
	const filterName = (filterCode === FILTER_CODE_POPULAR) ? 'Popular' : 'Top Rated';
	const isSelected = (filterCode === selectedFilter);
	return (
		<Link 
			className={`home-view__selector-link ${isSelected ? 'home-view__selector-link--selected' : ''}`} 
			to={`/?filter=${filterCode}`}
		>{filterName}</Link>
	)
}

export default function HomeView() {
	const qs = useQueryString();
	const selectedFilter = qs.get('filter') || FILTER_CODE_POPULAR;
	const [tvShows, setTvShows] = useState([]);
	const { apiClient } = useAppContext();

	useEffect(() => {
		console.log('API Client:', apiClient);
		apiClient.query({
			query: `
				query {
					getByType(type:"${selectedFilter}") {
						id
						name
						backdropImagePath
						posterPath
						votesAverage
						firstAirDate
					}
				}
			`
		})
		.then(result => {
			if (result.errors) {
				return console.error('Error getting data from server:', result.erros);
			}
			setTvShows(result.data.getByType);
		})
	}, [selectedFilter]);

	return (
		<section className="home-view">
			<div className="home-view__type-selector">
				<FilterLink filterCode="popular" selectedFilter={selectedFilter} />
				<FilterLink filterCode="top_rated" selectedFilter={selectedFilter} />
			</div>
			<div className="home-view__grid">
				{tvShows.map(tvShow => <TvShowCard key={tvShow.id} tvShow={tvShow} />)}
			</div>
		</section>
	);
}
