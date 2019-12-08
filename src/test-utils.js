import React from 'react';
import { MemoryRouter } from 'react-router-dom';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { AppProvider } from './components/app-context/app-context';

const userIdMock = 'hskfjahshjdjskla';
const apiClientMock = {
	query: jest.fn()
};
const imagesConfigMock = {
	"baseUrl":"https://image.tmdb.org/t/p/",
	"backdropSizes":["w300","w780","w1280","original"],
	"logoSizes":["w45","w92","w154","w185","w300","w500","original"],
	"posterSizes":["w92","w154","w185","w342","w500","w780","original"],
	"profileSizes":["w45","w185","h632","original"],
	"stillSizes":["w92","w185","w300","original"]
};

jest.mock('react-router-dom', () => ({
	MemoryRouter: ({ children }) => (<div>{children}</div>),
	useParams: () => ({})
}));

function AppContextMock({ children }) {
	return (
		<AppProvider 
			apiClient={apiClientMock} 
			userId={userIdMock} 
			imagesConfig={imagesConfigMock}
		>
			<MemoryRouter>
				{children}
			</MemoryRouter>
		</AppProvider>
	);
}

export const getAppContextMock = () => AppContextMock;

export function validateSnapshot(
	component, 
	options = { renderType: 'shallow' }
) {
	const wrapper = shallow(component);
	expect(wrapper).toMatchSnapshot();
	// const tree = renderer.create(component).toJSON();
	// expect(tree).toMatchSnapshot();
}

export function validateSnapshotInAppContext(
	Component,
	props = {}, 
	options = { renderType: 'shallow' }
) {
	// jest.spyOn(ReactRouter, 'useParams')
	// 	.mockImplementation(() => {
	// 		console.log('------------ mock useParams -------------');
	// 		return {};
	// 	});
	
	const appWrapper = shallow(
		<AppContextMock>
			<Component {...props} />
		</AppContextMock>
	);
	// console.log(appWrapper.debug());
	const componentWrapper = appWrapper.find(Component);
	// console.log(componentWrapper.debug());
	console.log(componentWrapper.dive().debug());
}

export const renderComponentInContext = (
	component, 
	options = { renderType: 'shallow' }
) => shallow(<AppContextMock>{component}</AppContextMock>);
	
