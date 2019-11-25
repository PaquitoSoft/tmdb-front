import React from 'react';
import { Link } from 'react-router-dom';

import './tvshow-card.css';

export default function TvShowCard({ tvShow = {} }) {
	const {
		id,
		name,
		backdropImagePath,
		votesAverage,
		firstAirDate
	} = tvShow;

	return (
		<Link className="tvshow-card" to={`/tvshow/${id}`}>
			<div className="tvshow-card__poster">
				<img src={`https://image.tmdb.org/t/p/w500_and_h282_face${backdropImagePath}`} alt={name}/>
			</div>
			<div className="tvshow-card__footer">
				<span className="tvshow-card__rating">{votesAverage}</span>
				<div className="tvshow-card__info">
					<span className="tvshow-card__title">{name}</span>
					<span className="tvshow-card__date">{(new Date(firstAirDate).toDateString())}</span>
				</div>
			</div>
		</Link>
	);
}
