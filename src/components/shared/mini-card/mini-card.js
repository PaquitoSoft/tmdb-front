import React from 'react';

import './mini-card.css';

export default function MiniCard({ mediaUrl, title, subtitle }) {
	return (
		<div className="mini-card">
			<img className="mini-cart__media" src={mediaUrl} alt={title}/>
			<span className="mini-card__title">{title}</span>
			<span className="mini-card__subtitle">{subtitle}</span>
		</div>
	);
	
}
