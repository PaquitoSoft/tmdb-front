import React from 'react';
import { bool, string, func } from 'prop-types';

import { ReactComponent as FavoriteEnabledIcon } from './favorite-enabled-icon.svg';
import { ReactComponent as FavoriteDisabledIcon } from './favorite-disabled-icon.svg';

import './favorite-icon.css';

const noop = () => false;

function FavoriteIcon({ isActive, className = '', onClick = noop }) {
	const Icon = isActive ? FavoriteEnabledIcon : FavoriteDisabledIcon;
	return (
		<Icon 
			className={`favorite-icon ${className}`} 
			title="Favorite button"
			onClick={onClick}
		/>		
	);
}

FavoriteIcon.propTypes = {
	isActive: bool,
	className: string,
	onClick: func
};

export default FavoriteIcon;
