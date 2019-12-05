import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useDataFetching from '../shared/use-data-fetching/use-data-fetching';
import Loader from '../shared/loader/loader';

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
	} = useDataFetching({
		query: viewDataQuery,
		params: { 
			tvShowId: parseInt(tvShowId, 0), 
			seasonNumber: parseInt(seasonNumber, 0)
		}
	});
	
	if (isFetching) return <Loader />;
	if (error) return null;
	
	const {
		name,
		airDate,
		episodes = []
	} = data.getSeasonDetails;
	const tvShow = data.getTvShowDetails;

	return (
		<section className="season-detail">
			<header className="season-detail__header">
				<div>
					<h1 className="season-detail__season-name">{name}</h1>
					<span className="season-detail__season-date">({(new Date(airDate).toDateString())})</span>
				</div>
				<Link 
					className="season-detail__tvshow-name"
					to={`/tvshow/${tvShow.id}`}
				><i>{tvShow.name}</i></Link>
			</header>
			<section className="season-detail__episodes">
				{episodes.map(episode => 
					<EpisodeCard key={episode.episodeNumber} episode={episode} />
				)}
			</section>
		</section>
	)
}
