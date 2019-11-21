import React from 'react';

import TvShowCard from './tvshow-card/tvshow-card';

import './home-view.css';

export default function HomeView() {
	const cards = [1,2,3,4,5];

	return (
		<section className="home-view">
			<div className="home-view__type-selector">
				<a className="home-view__selector-link home-view__selector-link--selected" href="#popular">Popular</a>
				<a className="home-view__selector-link" href="#top-rated">Top rated</a>
			</div>
			<div className="home-view__grid">
				{cards.map(index => <TvShowCard key={index} />)}
			</div>
		</section>
	);
}
