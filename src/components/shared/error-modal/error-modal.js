import React from 'react';
import { useAppContext } from '../../app-context/app-context';

import './error-modal.css';

export default function ErrorModal({ error }) {
	const { setError } = useAppContext();
	console.error('Unexpected error:', error);

	return (
		<div className="error-modal">
			<div className="error-modal__veil"></div>
			<div className="error-modal__modal">
				<div className="error-modal__head"></div>
				<div className="error-modal__content">
					<p>Ouch! It has been a totally unexpected error. Please try again in a minute.</p>
				</div>
				<div className="error-modal__footer">
					<button 
						className="error-modal__close-button"
						onClick={() => setError(null)}
					>Close</button>
				</div>
			</div>
		</div>
	);
}