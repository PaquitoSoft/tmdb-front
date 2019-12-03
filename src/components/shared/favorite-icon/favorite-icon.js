import React from 'react';

import './favorite-icon.css';

const noop = () => false;

export default function FavoriteIcon({ isActive, className = '', onClick = noop }) {
	return (
		<img 
			className={`favorite-icon ${className}`} 
			src={`/favorite${isActive ? '' : '_border'}-24px.svg`}
			alt="favorite icon"
			onClick={onClick}
		/>
	);
}
