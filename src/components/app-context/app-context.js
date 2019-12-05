import React, { useContext, useState } from 'react';

const AppContext = React.createContext({
	apiClient: undefined,
	userId: undefined,
	imagesConfig: {},
	error: null,
	setError: () => false
});

export function AppProvider({ apiClient, userId, imagesConfig, children } ) {
	const [error, setError] = useState(null);
	const providerInitialValue = {
		apiClient, 
		userId, 
		imagesConfig, 
		error, 
		setError
	};

	return (
		<AppContext.Provider value={providerInitialValue}>
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
