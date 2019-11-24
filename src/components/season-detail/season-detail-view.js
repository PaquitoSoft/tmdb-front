import React from 'react';

import SEASON_DETAIL_MOCK from '../../fixtures/season-detail.json';
import TVSHOW_DETAIL_MOCK from '../../fixtures/tvshow-detail.json';

function EpisodeCard({ episode }) {
	const {
		name,
		episodeNumber,
		imagePath,
		airDate,
		voteAverage,
		overview
	} = episode;

	return (
		<div className="episode-card">
			<img src={`https://image.tmdb.org/t/p/w454_and_h254_bestv2${imagePath}`} alt={name} className="episode-card__media"/>
			<div className="episode-card__info">
				<div className="episode-card__row">
					<span className="episode-card__number">{episodeNumber}</span>
					<span className="episode-card__title">{name}</span>
				</div>
				<div className="episode-card__row">
					<span className="episode-card__date">{airDate}</span>
					<span className="episode-card__rating">{voteAverage}</span>
				</div>
				<div className="episode-card__row">
					<p className="episode-card__overview">{overview}</p>
				</div>
			</div>
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
			<header>
				<h1 className="season-detail__season-name">{name}</h1>
				<h2 className="season-detail__season-date">({airDate})</h2>
				<h2 className="season-detail__tvshow-name">{tvShow.name}</h2>
			</header>
			<section className="season-detail__episodes">
				{episodes.map(episode => 
					<EpisodeCard key={episode.episodeNumber} episode={episode} />
				)}
			</section>
		</section>
	)
}
