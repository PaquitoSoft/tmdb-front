import React, { useState } from 'react';
import { shape, string, number } from 'prop-types';

import RatingIcon from '../../shared/rating-icon/rating-icon';
import MediaImage from '../../shared/media-image/media-image';

import './episode-card.css';

const NOW = Date.now();

function EpisodeCard({ episode }) {
	const {
		name,
		episodeNumber,
		imagePath,
		airDate,
		voteAverage,
		overview
	} = episode;
	const isOverviewAvailable = overview.trim().length > 0;
	const isYetToBeAired = (new Date(airDate)).getTime() > NOW;
	const [isOverviewVisible, toggleOverviewVisibility] = useState(false);
	
	return (
		<div className="episode-card">
			<MediaImage 
				path={imagePath}
				type="still"
				sizes="30vw"
				ratio={1.77}
				className="episode-card__media"
				alt={name}
			/>
			<div className="episode-card__info">
				<div className="episode-card__row">
					<div className="episode-card__title">
						<span className="episode-card__number">{episodeNumber}.&nbsp;</span>
						<span className={`episode-card__name ${isYetToBeAired ? 'episode-card__name--not-released' : ''}`}>
							{isYetToBeAired ? 'Yet to be released' : name}
						</span>
					</div>
					{voteAverage > 0 && 
						<RatingIcon className="episode-card__rating" ratingValue={voteAverage} />
					}
				</div>
				<div className="episode-card__row">
					<span className="episode-card__date">({(new Date(airDate).toDateString())})</span>
					{isOverviewAvailable &&
						<span 
							className="episode-card__overview-link"
							onClick={() => toggleOverviewVisibility(true)}
							onKeyDown={() => toggleOverviewVisibility(true)}
							role="button"
							tabIndex="0"
						>See overview</span>
					}
				</div>
			</div>
			{isOverviewVisible && 
				<div 
					className="episode-card__overview-panel"
					onClick={() => toggleOverviewVisibility(false)}
					onKeyDown={() => toggleOverviewVisibility(false)}
					role="button"
					tabIndex="0"
				>
					<div className="episode-card__overview-content">
						<h4 className="episode-card__overview-title">{name}</h4>
						{overview}
					</div>
				</div>
			}
		</div>
	);
}

EpisodeCard.propTypes = {
	episode: shape({
		name: string,
		episodeNumber: number,
		imagePath: string,
		airDate: string,
		voteAverage: number,
		overview: string
	})
};

export default EpisodeCard;
