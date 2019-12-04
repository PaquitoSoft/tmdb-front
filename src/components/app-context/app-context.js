import React, { useContext } from 'react';

const AppContext = React.createContext({
	apiClient: undefined,
	userId: undefined,
	imagesConfig: {}
});

export function AppProvider({ apiClient, userId, imagesConfig, children } ) {
	return (
		<AppContext.Provider value={{ apiClient, userId, imagesConfig }}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within an AppContext.Provider')
	}
	return context;
}
