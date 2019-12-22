import React from 'react';
import { validateSnapshot, render } from '../../../../test-utils';
import * as AppContext from '../../../app-context/app-context';

import ErrorModal from '../error-modal';

describe('ErrorModal', () => {

	it('Should render error modal', () => {
		validateSnapshot(<ErrorModal error={new Error('Booom!')} />);
	});

	it('Should reset the error when clicking the Close button', () => {
		const setErrorMock = jest.fn();
		jest.spyOn(AppContext, 'useAppContext')
			.mockImplementation(() => ({	setError: setErrorMock }));
		
		const wrapper = render(<ErrorModal error={new Error('Booom!')} />);
		
		wrapper.find('.error-modal__close-button').simulate('click');
		expect(setErrorMock.mock.calls.length).toBe(1);
	});

});
