import React from 'react';
import { string, node, bool } from 'prop-types';

import './mini-card.css';

const Media = ({ children, className = '' }) => 
	(<span className={`mini-card__media ${className}`}>{children}</span>);
const Title = ({ children, noMultiline = false, className = '' }) => 
	(<span className={`mini-card__title ${noMultiline ? 'mini-card__title--no-multiline' : ''} ${className}`}>{children}</span>);
const Subtitle = ({ children, className = '' }) => 
	(<span className={`mini-card__subtitle ${className}`}>{children}</span>);

function MiniCard({ children, className = '' }) {
	return (
		<div className={`mini-card ${className}`}>
			{children}
		</div>
	);
	
}

Media.propTypes = {
	className: string,
	children: node.isRequired
};
Title.propTypes = {
	className: string,
	noMultiline: bool,
	children: node.isRequired
}
Subtitle.propTypes = {
	className: string,
	children: node.isRequired
};

MiniCard.propTypes = {
	className: string,
	children: node.isRequired
};

MiniCard.Media = Media;
MiniCard.Title = Title;
MiniCard.Subtitle = Subtitle;

export default MiniCard;
