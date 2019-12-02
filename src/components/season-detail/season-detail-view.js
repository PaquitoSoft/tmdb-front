import React from 'react';
import { useParams } from 'react-router-dom';

import useApiClient from '../shared/use-api-client/use-api-client';
import EpisodeCard from './episode-card/episode-card';

import './season-detail-view.css';

const viewDataQuery = `
	query SeasonDetails($tvShowId: Int!, $seasonNumber: Int!) {
		getSeasonDetails(tvShowId: $tvShowId, seasonNumber: $seasonNumber) {
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
		getTvShowDetails(tvShowId: $tvShowId) {
			id
			name
		}
	}
`;

export default function SeasonDetailView() {
	const { tvShowId, seasonNumber } = useParams();
	const {
		isFetching,
		data,
		error
	} = useApiClient({
		query: viewDataQuery,
		params: { 
			tvShowId: parseInt(tvShowId, 0), 
			seasonNumber: parseInt(seasonNumber, 0)
		}
	});
	
	if (isFetching || error) return null;
	
	const {
		name,
		airDate,
		episodes = []
	} = data.getSeasonDetails;
	const tvShow = data.getTvShowDetails;

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
