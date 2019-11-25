import React from 'react';
import { Link } from 'react-router-dom';

import { useQueryString } from '../shared/use-query-string';
import TvShowCard from './tvshow-card/tvshow-card';

import POPULAR_TVSHOWS_MOCK from '../../fixtures/popular-tvshows.json';
import TOP_RATED_TVSHOWS_MOCK from '../../fixtures/top_rated-tvshows.json';

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
	const tvShows = (selectedFilter === FILTER_CODE_POPULAR) ? POPULAR_TVSHOWS_MOCK : TOP_RATED_TVSHOWS_MOCK;

	return (
		<section className="home-view">
			<div className="home-view__type-selector">
				<FilterLink filterCode="popular" selectedFilter={selectedFilter} />
				<FilterLink filterCode="top-rated" selectedFilter={selectedFilter} />
			</div>
			<div className="home-view__grid">
				{tvShows.map(tvShow => <TvShowCard key={tvShow.id} tvShow={tvShow} />)}
			</div>
		</section>
	);
}
