import React, { useContext } from 'react';

const AppContext = React.createContext({
	apiClient: undefined,
	userId: undefined
});

export function AppProvider({ apiClient, userId, children } ) {
	return (
		<AppContext.Provider value={{ apiClient, userId }}>
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
