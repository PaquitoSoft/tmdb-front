import React from 'react';
import { useAppContext } from '../../app-context/app-context';

/*
// Home View
<img src={`https://image.tmdb.org/t/p/w500_and_h282_face${backdropImagePath}`} alt={name}/>

// TvShow detail - Poster
src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${posterPath}`} 

// TvShow detail - Character mini
`https://image.tmdb.org/t/p/w138_and_h175_face/${imagePath}` :

// TvShow detail - Season mini
`https://image.tmdb.org/t/p/w130_and_h195_bestv2${posterPath}` :

// Season episode
<img src={`https://image.tmdb.org/t/p/w454_and_h254_bestv2${imagePath}`} 
*/


export default function Image({ path, type = 'poster', size, ...rest }) {
	const { imagesConfig } = useAppContext();
	const sizes = imagesConfig[`${type}Sizes`];
	const imageSize = sizes[sizes.length - 1];
	// this.baseUrl = raw.secure_base_url; 
	// this.backdropSizes = raw.backdrop_sizes;
	// this.logoSizes = raw.logo_sizes;
	// this.posterSizes = raw.poster_sizes;
	// this.profileSizes = raw.profile_sizes;
	// this.stillSizes = raw.still_sizes;
	return (
		// eslint-disable-next-line jsx-a11y/alt-text
		<img 
			src={`${imagesConfig.baseUrl}${imageSize}${path}`} 
			style={{ width: '100%' }}
			{...rest} />
	);
}
