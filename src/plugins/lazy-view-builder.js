import React, { lazy } from 'react';
import { useParams } from 'react-router-dom';

import useQueryString from '../components/shared/use-query-string/use-query-string';
import useDataFetching from '../components/shared/use-data-fetching/use-data-fetching';

import Loader from '../components/shared/loader/loader';

export default function buildLazyView(viewComponentLoader) {
	return lazy(() => {
		return new Promise((resolve, reject) => {
			viewComponentLoader()
			.then(({ default: Component}) => {
				function LazyView() {
					const urlParams = useParams();
					const urlQueryString = useQueryString();
					const {
						isFetching,
						data
					} = useDataFetching(
						Component.buildDataFetchRequestData({
							urlParams,
							urlQueryString
						})
					);
					
					if (isFetching) return <Loader />;
					if (!data) return null;
	
					return (
						<Component 
							data={data} 
							urlParams={urlParams}
							urlQueryString={urlQueryString}
						/>
					);
				}
				resolve({ 'default': LazyView });
			})
			.catch(reject);
		});
	});
}
