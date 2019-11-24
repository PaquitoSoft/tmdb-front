import React, { useState } from 'react';

import SEASON_DETAIL_MOCK from '../../fixtures/season-detail.json';
import TVSHOW_DETAIL_MOCK from '../../fixtures/tvshow-detail.json';

import './season-detail-view.css';

function EpisodeCard({ episode }) {
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
					<span className="episode-card__date">({airDate})</span>
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

export default function SeasonDetailView({ season = SEASON_DETAIL_MOCK, tvShow = TVSHOW_DETAIL_MOCK }) {
	const {
		name,
		airDate,
		episodes = []
	} = season;

	return (
		<section className="season-detail">
			<header className="season-detail__header">
				<h1 className="season-detail__season-name">{name}</h1>
				<span className="season-detail__season-date">({airDate})</span>
				<span className="season-detail__tvshow-name"><i>{tvShow.name}</i></span>
			</header>
			<section className="season-detail__episodes">
				{episodes.map(episode => 
					<EpisodeCard key={episode.episodeNumber} episode={episode} />
				)}
			</section>
		</section>
	)
}
