import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useAppContext } from '../app-context/app-context';
import useDataFetching from '../shared/use-data-fetching/use-data-fetching';

import Loader from '../shared/loader/loader';
import MediaImage from '../shared/media-image/media-image';
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
		<MiniCard className="tvshow-detail__character-card">
			<MiniCard.Media>
				<MediaImage 
					path={imagePath} 
					type="profile"
					sizes="14vw"
					ratio={0.62}
					alt={actorName}
				/>
			</MiniCard.Media>
			<MiniCard.Title>{actorName}</MiniCard.Title>
			<MiniCard.Subtitle>{name}</MiniCard.Subtitle>
		</MiniCard>
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
		<Link 
			className="tvshow-detail__season-card"
			to={`/tvshow/${tvShowId}/season/${seasonNumber}`}
		>
			<MiniCard>
				<MiniCard.Media>
					<MediaImage 
						path={posterPath} 
						type="poster"
						sizes="14vw"
						ratio={0.59}
						alt={`Season ${seasonNumber}`}
					/>
				</MiniCard.Media>
				<MiniCard.Title>{`Season ${seasonNumber}`}</MiniCard.Title>
				<MiniCard.Subtitle>{`(${airDate})`}</MiniCard.Subtitle>
				<MiniCard.Subtitle>{`${episodesCount} Episodes`}</MiniCard.Subtitle>
			</MiniCard>
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
		data
	} = useDataFetching({
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
	
	if (isFetching) return <Loader />;
	if (!data) return null;
	
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
					<MediaImage 
						className="tvshow-detail__poster" 
						path={posterPath} 
						type="poster" 
						sizes="41vw"
						ratio={0.68}
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
