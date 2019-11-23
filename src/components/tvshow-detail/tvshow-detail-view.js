import React from 'react';
import { Link } from 'react-router-dom';
import MiniCard from '../shared/mini-card/mini-card';

import './tvshow-detail-view.css';

export default function TvShowDetailView({ tvShow = {} }) {
	console.log({ tvShow });
	const {
		id = 69625,
		name = 'Rick and Morty',
		posterPath = '/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg',
		firstAirDate = '2003-12-02',
		rating = 78,
		overview = "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school."
	} = tvShow;
	return (
		<section className="tvshow-detail">
			<div className="tvshow-detail__main-info">
				<section className="tvshow-detail__poster">
					<img 
						className="tvshow-detail__poster" 
						src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${posterPath}`} 
						alt={name}
					/>
				</section>
				<section className="tvshow-detail__info-container">
					<div className="tvshow-detail__title">
						<h1 className="tvshow-detail__name">{name}</h1>
						<span className="tvshow-detail__year">({firstAirDate})</span>
						<span className="tvshow-detail__rating">{rating}</span>
					</div>
					<h2 className="tvshow-detail__overview-title">Overview</h2>
					<p className="tvshow-detail__overview-description">{overview}</p>
				</section>
			</div>

			<hr className="tvshow-detail__separator"/>

			<section className="tvshow-detail__cast">
				<h2 className="tvshow-detail__cast-title">Tv Show Cast</h2>
				<div className="tvshow-detail__characters">
					<MiniCard
						mediaUrl="https://image.tmdb.org/t/p/w138_and_h175_face/xLZHw2muESIS7zuWFM5yci6rXer.jpg"
						title="Justin Roiland"
						subtitle="Rick Sánchez"
					/>
					<MiniCard
						mediaUrl="https://image.tmdb.org/t/p/w138_and_h175_face/xLZHw2muESIS7zuWFM5yci6rXer.jpg"
						title="Justin Roiland"
						subtitle="Rick Sánchez"
					/>
					<MiniCard
						mediaUrl="https://image.tmdb.org/t/p/w138_and_h175_face/xLZHw2muESIS7zuWFM5yci6rXer.jpg"
						title="Justin Roiland"
						subtitle="Rick Sánchez"
					/>
				</div>
			</section>

			<hr className="tvshow-detail__separator"/>

			<section className="tvshow-detail__seasons-container">
				<h2 className="tvshow-detail__seasons-title">Seasons</h2>
				<Link to={`/tvshow/${id}/season/4`}>
					<MiniCard 
						mediaUrl="https://image.tmdb.org/t/p/w130_and_h195_bestv2/ylL3eViYKBhtjaqVe4pLMslVBjR.jpg"
						title="Season 4"
						subtitle="2019 | 5 Episodes"
					/>
				</Link>
				<Link to={`/tvshow/${id}/season/3`}>
					<MiniCard 
						mediaUrl="https://image.tmdb.org/t/p/w130_and_h195_bestv2/ylL3eViYKBhtjaqVe4pLMslVBjR.jpg"
						title="Season 3"
						subtitle="2016 | 15 Episodes"
					/>
				</Link>
				<Link to={`/tvshow/${id}/season/2`}>
					<MiniCard 
						mediaUrl="https://image.tmdb.org/t/p/w130_and_h195_bestv2/ylL3eViYKBhtjaqVe4pLMslVBjR.jpg"
						title="Season 2"
						subtitle="2015 | 10 Episodes"
					/>
				</Link>
				<Link to={`/tvshow/${id}/season/1`}>
					<MiniCard 
						mediaUrl="https://image.tmdb.org/t/p/w130_and_h195_bestv2/ylL3eViYKBhtjaqVe4pLMslVBjR.jpg"
						title="Season 1"
						subtitle="2014 | 12 Episodes"
					/>
				</Link>
			</section>
		</section>
	)
}
