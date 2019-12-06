import React from 'react';

import { ReactComponent as FavoriteEnabledIcon } from './favorite-enabled-icon.svg';
import { ReactComponent as FavoriteDisabledIcon } from './favorite-disabled-icon.svg';

import './favorite-icon.css';

const noop = () => false;

export default function FavoriteIcon({ isActive, className = '', onClick = noop }) {
	const Icon = isActive ? FavoriteEnabledIcon : FavoriteDisabledIcon;
	return (
		<Icon 
			className={`favorite-icon ${className}`} 
			title="Favorite button"
			onClick={onClick}
		/>		
	);
}
