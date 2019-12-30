import React, { useContext, useState } from 'react';
import { object, string, node } from 'prop-types';

export const THEME_MODES = {
	LIGHT: 'light',
	DARK: 'dark'
}

const STORAGE_THEME_MODE_KEY = 'tmk';

const AppContext = React.createContext({
	apiClient: undefined,
	userId: undefined,
	imagesConfig: {},
	error: null,
	setError: () => false,
	themeMode: undefined,
	toggleThemeMode: () => false
});

export function AppProvider({ apiClient, userId, imagesConfig, children } ) {
	const [error, setError] = useState(null);
	const initialThemeMode = localStorage.getItem(STORAGE_THEME_MODE_KEY) || THEME_MODES.LIGHT;
	const [themeMode, setThemeMode] = useState(initialThemeMode);
	const providerInitialValue = {
		apiClient, 
		userId, 
		imagesConfig, 
		error, 
		setError,
		themeMode: initialThemeMode,
		toggleThemeMode: () => {
			const newThemeMode = themeMode !== THEME_MODES.LIGHT ? THEME_MODES.LIGHT : THEME_MODES.DARK;
			setThemeMode(newThemeMode);
			localStorage.setItem(STORAGE_THEME_MODE_KEY, newThemeMode);
		}
	};

	return (
		<AppContext.Provider value={providerInitialValue}>
			{children}
		</AppContext.Provider>
	);
}

AppProvider.propTypes = {
	apiClient: object.isRequired,
	userId: string.isRequired,
	imagesConfig: object.isRequired,
	children: node.isRequired
};

export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within an AppContext.Provider')
	}
	return context;
}
