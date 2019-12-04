import React from 'react';
import { Link } from 'react-router-dom';

import useQueryString from '../shared/use-query-string/use-query-string';
import useDataFetching from '../shared/use-data-fetching/use-data-fetching';

import Loader from '../shared/loader/loader';
import TvShowCard from './tvshow-card/tvshow-card';

import './home-view.css';

const FILTER_CODE_POPULAR = 'popular';

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

const VIEW_DATA_QUERY = `
	query TvShowsByType($type: String!) {
		getByType(type: $type) {
			id
			name
			backdropImagePath
			posterPath
			votesAverage
			isFavorite
			firstAirDate
		}
	}
`;

export default function HomeView() {
	const qs = useQueryString();
	const selectedFilter = qs.get('filter') || FILTER_CODE_POPULAR;
	
	const {
		isFetching,
		data,
		error
	} = useDataFetching({
		query: VIEW_DATA_QUERY,
		params: { 
			type: selectedFilter
		}
	});

	if (isFetching) return <Loader />;
	if (error) return null;

	const tvShows = data.getByType;
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
