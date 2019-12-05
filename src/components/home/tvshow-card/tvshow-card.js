import React from 'react';
import { Link } from 'react-router-dom';

import MediaImage from '../../shared/media-image/media-image';
import RatingIcon from '../../shared/rating-icon/rating-icon';
import FavoriteIcon from '../../shared/favorite-icon/favorite-icon';

import './tvshow-card.css';

export default function TvShowCard({ tvShow = {} }) {
	const {
		id,
		name,
		backdropImagePath,
		votesAverage,
		isFavorite,
		firstAirDate
	} = tvShow;

	return (
		<Link className="tvshow-card" to={`/tvshow/${id}`}>
			<div className="tvshow-card__poster">
				<MediaImage 
					className="tvshow-card__poster-image" 
					path={backdropImagePath} 
					type="backdrop" 
					alt={name}
				/>
			</div>
			<div className="tvshow-card__footer">
				<RatingIcon 
					className="tvshow-cart__rating" 
					ratingValue={votesAverage} 
					size={RatingIcon.sizes.BIG}
				/>
				<div className="tvshow-card__info">
					<span className="tvshow-card__title">{name}</span>
					<span className="tvshow-card__date">{(new Date(firstAirDate).toDateString())}</span>
				</div>
				<FavoriteIcon className="tvshow-card__favorite-icon" isActive={isFavorite} />
			</div>
		</Link>
	);
}
