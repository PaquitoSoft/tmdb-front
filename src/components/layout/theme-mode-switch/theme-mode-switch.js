import React from 'react';

import { useAppContext } from '../../app-context/app-context';

import { ReactComponent as LightModeIcon} from './light-mode-icon-24px.svg';
import { ReactComponent as DarkModeIcon} from './dark-mode-icon-24px.svg';
import './theme-mode-switch.css';

export default function ThemModeSwitch() {
	const { toggleThemeMode } = useAppContext();
	
	return (
		<div className="theme-mode-switch">
			<LightModeIcon className="theme-mode-switch__icon" />
			<div className="theme-mode-switch__control">
				<div 
					className="theme-mode-switch__button"
					onClick={toggleThemeMode}
					onKeyDown={toggleThemeMode}
					role="button"
					tabIndex="0"
				/>
			</div>
			<DarkModeIcon className="theme-mode-switch__icon" />
		</div>
	)
}
