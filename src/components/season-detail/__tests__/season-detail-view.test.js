import React from 'react';
import { validateSnapshot } from '../../../test-utils';

import SeasonDetailView from '../season-detail-view';

import seasonDetailServerData from './season-detail-fixture.json';

describe('SeasonDetailView', () => {

	it('Should render season episodes', () => {
		validateSnapshot(<SeasonDetailView data={seasonDetailServerData} />);
	});

});
