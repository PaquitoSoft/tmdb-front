import React from 'react';

import MediaImage from '../../shared/media-image/media-image';
import MiniCard from '../../shared/mini-card/mini-card';

export default function CharacterMiniCard({ character }) {
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
