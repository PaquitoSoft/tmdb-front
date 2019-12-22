import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppContext } from '../app-context/app-context';

import MediaImage from '../shared/media-image/media-image';
import RatingIcon from '../shared/rating-icon/rating-icon';
import FavoriteIcon from '../shared/favorite-icon/favorite-icon';
import CharacterMiniCard from './character-mini-card/character-mini-card';
import SeasonMiniCard from './season-mini-card/season-mini-card';

import './tvshow-detail-view.css';

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
	($tvShowId: Int!) {
		saveFavoriteTvShow(tvShowId: $tvShowId)
	}
`;

const UNSET_FAVORITE_TVSHOW_MUTATION = `
	($tvShowId: Int!) {
		removeFavoriteTvShow(tvShowId: $tvShowId)
	}
`;


export default function TvShowDetailView({ data }) {
	const { tvShowId } = useParams();
	const { apiClient } = useAppContext();
	const [tvShow, setTvShow] = useState(data.getTvShowDetails);
	
	const saveFavorite = ({ tvShow, isFavorite }) => {
		apiClient.sendMutation({ 
			mutation: isFavorite ? UNSET_FAVORITE_TVSHOW_MUTATION : SET_FAVORITE_TVSHOW_MUTATION, 
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
	} = tvShow;

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
								saveFavorite({ isFavorite, tvShow });
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

TvShowDetailView.buildDataFetchRequestData = ({ 
	urlParams: { tvShowId } 
}) => ({
	query: VIEW_DATA_QUERY,
	params: { 
		tvShowId: parseInt(tvShowId, 0)
	}
});
