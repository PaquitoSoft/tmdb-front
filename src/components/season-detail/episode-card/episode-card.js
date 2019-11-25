import React, { useState } from 'react';

import './episode-card.css';

export default function EpisodeCard({ episode }) {
	const {
		name,
		episodeNumber,
		imagePath,
		airDate,
		voteAverage,
		overview
	} = episode;
	const [isOverviewVisible, toggleOverviewVisibility] = useState(false);

	return (
		<div className="episode-card">
			<img src={`https://image.tmdb.org/t/p/w454_and_h254_bestv2${imagePath}`} alt={name} className="episode-card__media"/>
			<div className="episode-card__info">
				<div className="episode-card__row">
					<div className="episode-card__title">
						<span className="episode-card__number">{episodeNumber}.&nbsp;</span>
						<span className="episode-card__name">{name}</span>
					</div>
					<span className="episode-card__rating">{voteAverage.toFixed(1)}</span>
				</div>
				<div className="episode-card__row">
					<span className="episode-card__date">({(new Date(airDate).toDateString())})</span>
					<span 
						className="episode-card__overview-link"
						onClick={() => toggleOverviewVisibility(true)}
					>See overview</span>
				</div>
			</div>
			{isOverviewVisible && 
				<div 
					className="episode-card__overview-panel"
					onClick={() => toggleOverviewVisibility(false)}
				>
					<div className="episode-card__overview-content">
						{overview}
					</div>
				</div>
			}
		</div>
	);
}
