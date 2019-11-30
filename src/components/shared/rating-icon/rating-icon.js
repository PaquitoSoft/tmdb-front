import React from 'react';

import './rating-icon.css';

function RatingIcon({ ratingValue, size = 'small', className = '' }) {
	return (
		<span 
			className={`rating-icon rating-icon--${size} ${className}`}
		>{ratingValue.toFixed(1)}</span>
	);
}

RatingIcon.sizes = {
	SMALL: 'small',
	BIG: 'big'
};

export default RatingIcon;
