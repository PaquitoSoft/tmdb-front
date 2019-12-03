import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useAppContext } from '../app-context/app-context';
import useApiClient from '../shared/use-api-client/use-api-client';

import MiniCard from '../shared/mini-card/mini-card';
import RatingIcon from '../shared/rating-icon/rating-icon';
import FavoriteIcon from '../shared/favorite-icon/favorite-icon';

import './tvshow-detail-view.css';

function CharacterMiniCard({ character }) {
	const {
		imagePath,
		name,
		actorName
	} = character;

	return (
		<MiniCard
			mediaUrl={`https://image.tmdb.org/t/p/w138_and_h175_face/${imagePath}`}
			title={actorName}
			subtitle={name}
		/>
	);
}

function SeasonMiniCard({ season, tvShowId }) {
	const {
		posterPath,
		seasonNumber,
		airDate,
		episodesCount
	} = season;

	return (
		<Link to={`/tvshow/${tvShowId}/season/${seasonNumber}`}>
			<MiniCard 
				mediaUrl={`https://image.tmdb.org/t/p/w130_and_h195_bestv2${posterPath}`}
				title={`Season ${seasonNumber}`}
				subtitle={<span>({airDate})<br/>{episodesCount} Episodes</span>}
			/>
		</Link>
	);
}

const VIEW_DATA_QUERY = `
	query TvShowDetails($tvShowId: Int!) {
		getTvShowDetails(tvShowId: $tvShowId) {
			id
			name
			posterPath
			firstAirDate
			overview
			votesAverage
			isFavorite
			seasons {
				seasonNumber
				posterPath
				airDate
				episodesCount
			}
			cast {
				id
				imagePath
				name
				actorName
			}
		}
	}
`;

const SET_FAVORITE_TVSHOW_MUTATION = `
	mutation SaveFavoriteTvShow($tvShowId: Int!) {
		saveFavoriteTvShow(tvShowId: $tvShowId)
	}
`;

const UNSET_FAVORITE_TVSHOW_MUTATION = `
	mutation RemoveFavoriteTvShow($tvShowId: Int!) {
		removeFavoriteTvShow(tvShowId: $tvShowId)
	}
`;


export default function TvShowDetailView() {
	const { tvShowId } = useParams();
	const { apiClient } = useAppContext();
	const [tvShow, setTvShow] = useState();
	const {
		isFetching,
		data,
		error
	} = useApiClient({
		query: VIEW_DATA_QUERY,
		params: { 
			tvShowId: parseInt(tvShowId, 0)
		}
	});

	const saveFavorite = ({ tvShow, isFavorite }) => {
		apiClient.query({ 
			query: isFavorite ? UNSET_FAVORITE_TVSHOW_MUTATION : SET_FAVORITE_TVSHOW_MUTATION, 
			variables: { tvShowId: tvShow.id} 
		})
		.then(() => {
			setTvShow({
				...tvShow,
				isFavorite: !isFavorite
			})
		})
		.catch(error => {
			console.error(`Error setting favorite value for TvShow ${tvShowId}`);
		});
	}
	
	if (isFetching || error) return null;
	
	const _tvShow = tvShow || data.getTvShowDetails;
	const {
		id,
		name,
		posterPath,
		firstAirDate,
		overview,
		votesAverage,
		isFavorite,
		seasons = [],
		cast = []
	} = _tvShow;

	return (
		<section className="tvshow-detail">
			<div className="tvshow-detail__main-info">
				<section className="tvshow-detail__poster">
					<img 
						className="tvshow-detail__poster" 
						src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${posterPath}`} 
						alt={name}
					/>
				</section>
				<section className="tvshow-detail__info-container">
					<div className="tvshow-detail__title">
						<h1 className="tvshow-detail__name">{name}</h1>
						<span className="tvshow-detail__year">({(new Date(firstAirDate).toDateString())})</span>
						<RatingIcon 
							className="tvshow-detail__rating"
							ratingValue={votesAverage}
							size={RatingIcon.sizes.BIG}
						/>
					</div>
					<div className="tvshow-detail__overview-title">
						<h2 className="tvshow-detail__overview-label">Overview</h2>
						<FavoriteIcon 
							isActive={isFavorite} 
							onClick={() => {
								saveFavorite({ isFavorite, tvShow: _tvShow });
							}}
						/>
					</div>
					<p className="tvshow-detail__overview-description">{overview}</p>
				</section>
			</div>

			<hr className="tvshow-detail__separator"/>

			<section className="tvshow-detail__cast">
				<h2 className="tvshow-detail__cast-title">Tv Show Cast</h2>
				<div className="tvshow-detail__characters">
					{cast.map(character => (
						<CharacterMiniCard key={character.id} character={character} />
					))}
				</div>
			</section>

			<hr className="tvshow-detail__separator"/>

			<section className="tvshow-detail__seasons-container">
				<h2 className="tvshow-detail__seasons-title">Seasons</h2>
				<div className="tvshow-detail__seasons-list">
					{seasons.map(season => (
						<SeasonMiniCard key={season.seasonNumber} season={season} tvShowId={id} />
					))}
				</div>
			</section>
		</section>
	)
}
