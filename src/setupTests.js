import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const localStorageMock = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	removeItem: jest.fn(),
	clear: jest.fn(),
};
global.localStorage = localStorageMock;
global.scroll = jest.fn();

// https://github.com/airbnb/enzyme/issues/2073#issuecomment-515817947
const mockConsoleMethod = (realConsoleMethod) => {
	const ignoredMessages = [
		'test was not wrapped in act(...)',
		'App unexpected error'
	]

	return (message, ...args) => {
		const containsIgnoredMessage = ignoredMessages.some(ignoredMessage => message.includes(ignoredMessage))
		if (!containsIgnoredMessage) {
			realConsoleMethod(message, ...args)
		}
	}
}
console.warn = jest.fn(mockConsoleMethod(console.warn))
console.error = jest.fn(mockConsoleMethod(console.error))
