import { useState, useEffect } from 'react';
import { useAppContext } from '../../app-context/app-context';

export default function useDataFetching({
	query, params = {}
}) {
	const { apiClient } = useAppContext();
	const [isFetching, setIsFetching] = useState(true);
	const [data, setData] = useState();
	const [error, setError] = useState();
	const paramsHash = btoa(JSON.stringify(params));

	useEffect(() => {
		let ignore = false;
		setIsFetching(true);
		apiClient.query({ query, variables: params })
		.then(result => {
			if (ignore) return null;

			if (result.errors) {
				setError(result.errors);
			} else {
				setData(result.data);
			}
			
			setIsFetching(false);
		})
		.catch(error => {
			setError(error);
			setIsFetching(false);
		});

		return () => ignore = true;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [paramsHash]);

	return {
		isFetching,
		data,
		error
	};
}
