import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string, number } from 'prop-types';

import MediaImage from '../../shared/media-image/media-image';
import MiniCard from '../../shared/mini-card/mini-card';

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

SeasonMiniCard.propTypes = {
	season: shape({
		posterPath: string,
		seasonNumber: number,
		airDate: string,
		episodesCount: number
	}),
	tvShowId: number
};

export default SeasonMiniCard;
