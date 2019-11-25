import React from 'react';

import EpisodeCard from './episode-card/episode-card';

import SEASON_DETAIL_MOCK from '../../fixtures/season-detail.json';
import TVSHOW_DETAIL_MOCK from '../../fixtures/tvshow-detail.json';

import './season-detail-view.css';

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
				<span className="season-detail__season-date">({(new Date(airDate).toDateString())})</span>
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
