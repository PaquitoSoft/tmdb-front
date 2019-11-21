import React from 'react';

import './tvshow-card.css';

export default function TvShowCard({ tvshow }) {
	return (
		<div className="tvshow-card">
			<div className="tvshow-card__poster">
				<img src="https://image.tmdb.org/t/p/w500_and_h282_face/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg " alt="Rick and Morty"/>
			</div>
			<div className="tvshow-card__footer">
				<span className="tvshow-card__rating">78</span>
				<div className="tvshow-card__info">
					<span className="tvshow-card__title">Rick and Morty</span>
					<span className="tvshow-card__date">December 2, 2013</span>
				</div>
			</div>
		</div>
	);
}
