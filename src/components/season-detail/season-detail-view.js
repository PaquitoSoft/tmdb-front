import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppContext } from '../app-context/app-context';
import EpisodeCard from './episode-card/episode-card';

import SEASON_DETAIL_MOCK from '../../fixtures/season-detail.json';
import TVSHOW_DETAIL_MOCK from '../../fixtures/tvshow-detail.json';

import './season-detail-view.css';

export default function SeasonDetailView() {
	const { tvShowId, seasonNumber } = useParams();
	const { apiClient } = useAppContext();
	const [{season, tvShow}, setViewData] = useState({});
	
	useEffect(() => {
		apiClient.query({
			query: `
				query {
					getSeasonDetails(tvShowId: ${tvShowId}, seasonNumber: ${seasonNumber}) {
						id
						name
						airDate
						episodes {
							id
							name
							episodeNumber
							imagePath
							airDate
							voteAverage
							overview
						}
					}
					getTvShowDetails(tvShowId: ${tvShowId}) {
						id
						name
					}
				}
			`
		})
		.then(result => {
			if (result.errors) {
				return console.error('Error getting data from server:', result.erros);
			}
			setViewData({
				season: result.data.getSeasonDetails,
				tvShow: result.data.getTvShowDetails
			});
		})
	});
	

	if (!season) return null;

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
