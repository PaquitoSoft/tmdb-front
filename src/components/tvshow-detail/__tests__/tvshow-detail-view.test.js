import React from 'react';
import { validateSnapshot, validateSnapshotInAppContext } from '../../../test-utils';

import TvShowDetailView from '../tvshow-detail-view';
import tvShowServerData from './tvshow-data-fixture.json';

describe('TvShowDetailView', () => {

	it('Should render tv show detail data', () => {
		validateSnapshot(<TvShowDetailView data={tvShowServerData} />);
	});

});
