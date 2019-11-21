import React from 'react';
import { Link } from 'react-router-dom';

import { useQueryString } from '../shared/use-query-string';
import TvShowCard from './tvshow-card/tvshow-card';

import './home-view.css';

function FilterLink({ filterCode = 'popular', selectedFilter }) {
	const filterName = (filterCode === 'popular') ? 'Popular' : 'Top Rated';
	const isSelected = (filterCode === selectedFilter);
	return (
		<Link 
			className={`home-view__selector-link ${isSelected ? 'home-view__selector-link--selected' : ''}`} 
			to={`/?filter=${filterCode}`}
		>{filterName}</Link>
	)
}

export default function HomeView() {
	const cards = [1,2,3,4,5];
	const qs = useQueryString();
	const filter = qs.get('filter');
	
	return (
		<section className="home-view">
			<div className="home-view__type-selector">
				<FilterLink filterCode="popular" selectedFilter={filter} />
				<FilterLink filterCode="top-rated" selectedFilter={filter} />
			</div>
			<div className="home-view__grid">
				{cards.map(index => <TvShowCard key={index} />)}
			</div>
		</section>
	);
}
