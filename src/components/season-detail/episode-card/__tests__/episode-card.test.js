import React from 'react';
import { validateSnapshot, render } from '../../../../test-utils';

import EpisodeCard from '../episode-card';

describe('EpisodeCard', () => {

	const episodeMockData = {
		"id": 1974881,
		"name": "Betrayal",
		"episodeNumber": 8,
		"imagePath": "/qtvvzZz2ACzg971VifhmqY4vONb.jpg",
		"airDate": "2019-12-22",
		"voteAverage": 0,
		"overview": "As the Magisterium closes in, Lyra learns more about Asriel’s rebellion. But her assistance to him comes at great personal cost."
	};

	it('Should render episode card', () => {
		validateSnapshot(<EpisodeCard episode={episodeMockData} />);
	});

	it('Should show episode overview when clicking the overview link', () => {
		const wrapper = render(<EpisodeCard episode={episodeMockData} />);
		
		expect(wrapper.exists('.episode-card__overview-panel')).toBe(false);
		wrapper.find('.episode-card__overview-link').simulate('click');
		expect(wrapper.exists('.episode-card__overview-panel')).toBe(true);
	});
});
