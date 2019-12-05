import React from 'react';

import './mini-card.css';

export default function MiniCard({ media, title, subtitle, className = '' }) {
	return (
		<div className={`mini-card ${className}`}>
			{media}
			<span className="mini-card__title">{title}</span>
			<span className="mini-card__subtitle">{subtitle}</span>
		</div>
	);
	
}
