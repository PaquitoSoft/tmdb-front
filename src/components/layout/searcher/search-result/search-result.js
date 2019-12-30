import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string, number, func } from 'prop-types';

import MediaImage from '../../../shared/media-image/media-image';
import MiniCard from '../../../shared/mini-card/mini-card';

function SearchResult({ tvShow, onClick }) {
	return (
		<Link 
			className="searcher__result" 
			to={`/tvshow/${tvShow.id}`} 
			onClick={onClick}
		>
			<MiniCard>
				<MiniCard.Media>
					<MediaImage 
						path={tvShow.backdropImagePath} 
						type="backdrop"
						sizes="14vw"
						ratio={1.71}
						alt={tvShow.name}
					/>
				</MiniCard.Media>
				<MiniCard.Title noMultiline>{tvShow.name}</MiniCard.Title>
			</MiniCard>
		</Link>
	);
}

SearchResult.propTypes = {
	tvShow: shape({
		id: number,
		name: string,
		backdropImagePath: string
	}),
	onClick: func
}

export default SearchResult;
