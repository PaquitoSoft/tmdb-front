import React from 'react';
import { Link } from 'react-router-dom';

import './tvshow-card.css';

export default function TvShowCard({ tvShow = {} }) {
	const {
		id = 69625,
		name = 'Rick and Morty',
		posterPath = '/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg',
		rating = 78,
		firstAirDate = 'December 2, 2013'
	} = tvShow;
	return (
		<Link className="tvshow-card" to={`/tvshow/${id}`}>
			<div className="tvshow-card__poster">
				<img src={`https://image.tmdb.org/t/p/w500_and_h282_face${posterPath}`} alt={name}/>
			</div>
			<div className="tvshow-card__footer">
				<span className="tvshow-card__rating">{rating}</span>
				<div className="tvshow-card__info">
					<span className="tvshow-card__title">{name}</span>
					<span className="tvshow-card__date">{firstAirDate}</span>
				</div>
			</div>
		</Link>
	);
}
