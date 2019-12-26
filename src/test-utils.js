import React from 'react';
import { shallow, mount } from 'enzyme';
import { AppProvider } from './components/app-context/app-context';

const userIdMock = 'hskfjahshjdjskla';

const imagesConfigMock = {
	"baseUrl":"https://image.tmdb.org/t/p/",
	"backdropSizes":["w300","w780","w1280","original"],
	"logoSizes":["w45","w92","w154","w185","w300","w500","original"],
	"posterSizes":["w92","w154","w185","w342","w500","w780","original"],
	"profileSizes":["w45","w185","h632","original"],
	"stillSizes":["w92","w185","w300","original"]
};

const renderers = {
	'shallow': shallow,
	'mount': mount
};

function AppContextMock({ children, apiClientMock }) {
	return (
		<AppProvider 
			apiClient={apiClientMock} 
			userId={userIdMock} 
			imagesConfig={imagesConfigMock}
		>
			{children}
		</AppProvider>
	);
}

export function render(
	component, 
	options = { renderType: 'shallow' }
) {
	return renderers[options.renderType](component);
}

export function validateSnapshot(
	component, 
	options = { renderType: 'shallow' }
) {
	const wrapper = render(component, options);
	expect(wrapper).toMatchSnapshot();
	return wrapper;
}

export function renderInAppContext(
	component, 
	options = {}
) {
	const _options = {
		renderType: 'mount',
		apiClientQueryMock: jest.fn().mockImplementation(() => Promise.resolve({})),
		apiClientMutationMock: jest.fn().mockImplementation(() => Promise.resolve({})),
		...options
	};

	const apiClientMock = {
		sendQuery: _options.apiClientQueryMock,
		sendMutation: _options.apiClientMutationMock
	};
	
	const wrapper = render(
		(
			<AppContextMock apiClientMock={apiClientMock}>
				{component}
			</AppContextMock>
		),
		_options
	);

	return wrapper.find(AppProvider).childAt(0);
}

export const clone = object => JSON.parse(JSON.stringify(object));
